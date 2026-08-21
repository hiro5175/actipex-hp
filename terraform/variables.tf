variable "region" {
  default = "ap-northeast-1"
}

variable "domain_name" {
  default = "actipex.com"
}

variable "hosted_zone_id" {
  default = "Z09260852LGJZ4RN31E90"
}

variable "contact_dest_email" {
  description = "Address the contact form notifies (also used as SES sender)"
  default     = "info@a-nabors.jp"
}