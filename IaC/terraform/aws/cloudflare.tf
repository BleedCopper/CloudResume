variable "cloudflare_zoneid" {}
variable "cloudflare_api" {}

resource "cloudflare_record" "rec_www" {
  zone_id = var.cloudflare_zoneid
  name    = "aws"
  content = aws_s3_bucket_website_configuration.tfWebsite.website_endpoint
  type    = "CNAME"
  proxied = true
}