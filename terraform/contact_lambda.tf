# Contact form: Lambda (Python) behind a Function URL, notifying via SES.
# JS caller: src/src/app/contact/page.tsx (NEXT_PUBLIC_CONTACT_API_URL)
# Handler source: ../lambda/contact-form/handler.py

data "archive_file" "contact_form" {
  type        = "zip"
  source_file = "${path.module}/../lambda/contact-form/handler.py"
  output_path = "${path.module}/build/contact-form.zip"
}

# SES identity for the notification address. AWS emails a verification link
# to this address on apply; the identity stays "pending" until it's clicked.
resource "aws_ses_email_identity" "contact" {
  email = var.contact_dest_email
}

data "aws_iam_policy_document" "contact_lambda_assume" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "contact_lambda" {
  name               = "actipex-hp-contact-lambda"
  assume_role_policy = data.aws_iam_policy_document.contact_lambda_assume.json
}

resource "aws_iam_role_policy_attachment" "contact_lambda_basic" {
  role       = aws_iam_role.contact_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "aws_caller_identity" "current" {}

data "aws_region" "current" {}

data "aws_iam_policy_document" "contact_lambda_ses" {
  statement {
    effect  = "Allow"
    actions = ["ses:SendEmail", "ses:SendRawEmail"]
    resources = [
      aws_ses_email_identity.contact.arn,
      # k.suzuki@actipex.com has a "my-first-configuration-set" Configuration Set
      # attached (set up outside terraform, before this resource existed).
      # SES requires ses:SendEmail authorization on that resource too whenever
      # the sending identity has a configuration set attached.
      "arn:aws:ses:${data.aws_region.current.region}:${data.aws_caller_identity.current.account_id}:configuration-set/my-first-configuration-set",
    ]
  }
}

resource "aws_iam_role_policy" "contact_lambda_ses" {
  name   = "send-contact-notification"
  role   = aws_iam_role.contact_lambda.id
  policy = data.aws_iam_policy_document.contact_lambda_ses.json
}

resource "aws_lambda_function" "contact" {
  function_name = "actipex-hp-contact"
  role          = aws_iam_role.contact_lambda.arn

  handler = "handler.handler"
  runtime = "python3.13"
  timeout = 10

  filename         = data.archive_file.contact_form.output_path
  source_code_hash = data.archive_file.contact_form.output_base64sha256

  environment {
    variables = {
      SES_SOURCE_EMAIL = var.contact_dest_email
      SES_DEST_EMAIL   = var.contact_dest_email
      ALLOWED_ORIGIN   = "https://${var.domain_name}"
    }
  }

  depends_on = [aws_iam_role_policy_attachment.contact_lambda_basic]
}

resource "aws_lambda_function_url" "contact" {
  function_name      = aws_lambda_function.contact.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = ["https://${var.domain_name}", "https://www.${var.domain_name}"]
    allow_methods = ["POST"]
    allow_headers = ["content-type"]
  }
}
