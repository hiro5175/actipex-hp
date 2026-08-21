"""
Lambda: /contact フォームからの送信を受け取り、Amazon SES経由でメール通知する。

想定トリガー: Lambda Function URL (payload format 2.0, AuthType=NONE)
CORSはFunction URL側の設定で許可オリジンを絞る想定。ここでのヘッダー付与はフォールバック。

環境変数:
  SES_SOURCE_EMAIL  送信元アドレス（SESで検証済みであること。未設定ならSES_DEST_EMAILを使用）
  SES_DEST_EMAIL    通知先アドレス（未設定なら info@a-nabors.jp）

CORSはLambda Function URL側の設定（terraform/contact_lambda.tf）で完結させる。
ここでCORSヘッダーを付与すると、AWSが自動付与する分と重複して
ブラウザ側でCORSエラー（fetch失敗）になるため、絶対に付与しないこと。
"""

import json
import os
import re

import boto3
from botocore.exceptions import ClientError

ses = boto3.client("ses")

DEST_EMAIL = os.environ.get("SES_DEST_EMAIL", "info@a-nabors.jp")
SOURCE_EMAIL = os.environ.get("SES_SOURCE_EMAIL", DEST_EMAIL)

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body, ensure_ascii=False),
    }


def handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method", "")

    if method == "OPTIONS":
        return _response(200, {"message": "ok"})

    if method != "POST":
        return _response(405, {"message": "Method Not Allowed"})

    try:
        payload = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"message": "リクエストの形式が不正です。"})

    name = str(payload.get("name", "")).strip()
    company = str(payload.get("company", "")).strip()
    email = str(payload.get("email", "")).strip()
    message = str(payload.get("message", "")).strip()

    if not name or not email or not message:
        return _response(400, {"message": "お名前・メールアドレス・お問い合わせ内容は必須です。"})

    if not EMAIL_RE.match(email):
        return _response(400, {"message": "メールアドレスの形式が正しくありません。"})

    body_text = (
        f"ACTIPEX 公式サイトのお問い合わせフォームから送信がありました。\n\n"
        f"お名前: {name}\n"
        f"貴社名: {company or '(未入力)'}\n"
        f"メールアドレス: {email}\n"
        f"お問い合わせ内容:\n{message}\n"
    )

    try:
        ses.send_email(
            Source=SOURCE_EMAIL,
            Destination={"ToAddresses": [DEST_EMAIL]},
            Message={
                "Subject": {"Data": f"【ACTIPEX】お問い合わせ: {name}", "Charset": "UTF-8"},
                "Body": {"Text": {"Data": body_text, "Charset": "UTF-8"}},
            },
            ReplyToAddresses=[email],
        )
    except ClientError as e:
        print(f"SES send_email failed: {e.response['Error']}")
        return _response(500, {"message": "メール送信に失敗しました。時間をおいて再度お試しください。"})

    return _response(200, {"message": "お問い合わせを受け付けました。"})
