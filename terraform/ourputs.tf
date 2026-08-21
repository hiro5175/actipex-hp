output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}

output "github_actions_role_arn" {
  value = aws_iam_role.github_actions_deploy.arn
}

output "contact_lambda_function_url" {
  value = aws_lambda_function_url.contact.function_url
}