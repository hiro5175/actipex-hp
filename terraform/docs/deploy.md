# デプロイ手順

## インフラ構築

```bash
cd terraform

terraform init
terraform apply
```

### Outputs

```
bucket_name = "actipex.com"
cloudfront_domain = "d2yxkkjfz8rfpb.cloudfront.net"
```

## インフラ停止

```bash
terraform destroy
```

## デプロイ

```bash
cd src

npm run build

aws s3 sync out/ s3://actipex.com --delete

aws cloudfront create-invalidation \
  --distribution-id EK2RJ0VBWF9MM \
  --paths "/*"
```
