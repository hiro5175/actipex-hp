# GitHub Actions OIDC federation, scoped to deploying this site from main.

resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = ["sts.amazonaws.com"]

  # GitHub's OIDC endpoint is backed by well-known public CAs; AWS validates
  # the token against its own trusted root store, not this value, but the
  # API still requires a thumbprint to be supplied.
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

data "aws_iam_policy_document" "github_actions_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      # GitHub now embeds immutable owner/repo IDs in the sub claim
      # (repo:OWNER@OWNER_ID/REPO@REPO_ID:ref:...) instead of plain
      # owner/repo names, so the condition must match that format.
      values = ["repo:hiro5175@44860196/actipex-hp@1341247165:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "github_actions_deploy" {
  name               = "actipex-hp-github-actions-deploy"
  assume_role_policy = data.aws_iam_policy_document.github_actions_assume_role.json
}

data "aws_iam_policy_document" "github_actions_deploy" {
  statement {
    effect = "Allow"

    actions = ["s3:ListBucket"]

    resources = [aws_s3_bucket.site.arn]
  }

  statement {
    effect = "Allow"

    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:DeleteObject",
    ]

    resources = ["${aws_s3_bucket.site.arn}/*"]
  }

  statement {
    effect = "Allow"

    actions = ["cloudfront:CreateInvalidation"]

    resources = [aws_cloudfront_distribution.site.arn]
  }
}

resource "aws_iam_role_policy" "github_actions_deploy" {
  name   = "site-deploy"
  role   = aws_iam_role.github_actions_deploy.id
  policy = data.aws_iam_policy_document.github_actions_deploy.json
}
