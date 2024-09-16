variable "cloudflare_zoneid" {}
variable "cloudflare_api" {}

resource "cloudflare_record" "rec_www" {
  zone_id = var.cloudflare_zoneid
  name    = "aws"
  content = aws_cloudfront_distribution.cdn.domain_name
  type    = "CNAME"
  proxied = true
}


resource "cloudflare_record" "cert_validation" {
  zone_id = var.cloudflare_zoneid
  name    = tolist(aws_acm_certificate.tfCert.domain_validation_options)[0].resource_record_name
  content   = tolist(aws_acm_certificate.tfCert.domain_validation_options)[0].resource_record_value
  type    = tolist(aws_acm_certificate.tfCert.domain_validation_options)[0].resource_record_type
  ttl     = 120
}