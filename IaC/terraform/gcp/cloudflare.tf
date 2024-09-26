variable "cloudflare_zoneid" {}
variable "cloudflare_api" {}

resource "cloudflare_record" "custom_domain" {
  zone_id = var.cloudflare_zoneid
  name    = "gcp"  
  type    = "CNAME"
  content   = "ghs.googlehosted.com"  
  proxied = false 
}