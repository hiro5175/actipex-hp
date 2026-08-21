# S3
resource "aws_s3_bucket" "site" {
  bucket = var.domain_name
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}

#ACM
resource "aws_acm_certificate" "site" {
  provider = aws.virginia

  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]

  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# Route53 Validation
resource "aws_route53_record" "validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options :
    dvo.domain_name => dvo
  }

  zone_id = var.hosted_zone_id

  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  ttl     = 60
  records = [each.value.resource_record_value]
}

resource "aws_acm_certificate_validation" "site" {
  provider = aws.virginia

  certificate_arn = aws_acm_certificate.site.arn

  validation_record_fqdns = [
    for r in aws_route53_record.validation :
    r.fqdn
  ]
}

# OAC
resource "aws_cloudfront_origin_access_control" "site" {

  name = "site-oac"

  origin_access_control_origin_type = "s3"

  signing_behavior = "always"

  signing_protocol = "sigv4"
}

# CloudFront Function: rewrite extensionless URIs to their static-export .html file
resource "aws_cloudfront_function" "rewrite_html" {
  name    = "rewrite-html"
  runtime = "cloudfront-js-2.0"
  comment = "Append .html / index.html for Next static export routes"
  publish = true

  code = <<-EOT
    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      if (uri.endsWith('/')) {
        request.uri += 'index.html';
      } else if (!uri.includes('.')) {
        request.uri += '.html';
      }

      return request;
    }
  EOT
}

# Cloud Front
resource "aws_cloudfront_distribution" "site" {

  enabled = true

  default_root_object = "index.html"

  origin {

    domain_name = aws_s3_bucket.site.bucket_regional_domain_name

    origin_id = "s3"

    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {

    target_origin_id = "s3"

    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]

    cached_methods = ["GET", "HEAD"]

    compress = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_html.arn
    }
  }

  aliases = [
    var.domain_name,
    "www.${var.domain_name}"
  ]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {

    acm_certificate_arn = aws_acm_certificate_validation.site.certificate_arn

    ssl_support_method = "sni-only"

    minimum_protocol_version = "TLSv1.2_2021"
  }

  price_class = "PriceClass_200"
}

# S3 Policy
data "aws_iam_policy_document" "site" {

  statement {

    principals {
      type = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.site.arn}/*"
    ]

    condition {

      test = "StringEquals"

      variable = "AWS:SourceArn"

      values = [
        aws_cloudfront_distribution.site.arn
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {

  bucket = aws_s3_bucket.site.id

  policy = data.aws_iam_policy_document.site.json
}

# Route 53
resource "aws_route53_record" "root" {

  zone_id = var.hosted_zone_id

  name = var.domain_name

  type = "A"

  alias {

    name = aws_cloudfront_distribution.site.domain_name

    zone_id = aws_cloudfront_distribution.site.hosted_zone_id

    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {

  zone_id = var.hosted_zone_id

  name = "www"

  type = "A"

  alias {

    name = aws_cloudfront_distribution.site.domain_name

    zone_id = aws_cloudfront_distribution.site.hosted_zone_id

    evaluate_target_health = false
  }
}