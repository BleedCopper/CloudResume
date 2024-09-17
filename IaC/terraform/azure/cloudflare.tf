
resource "cloudflare_record" "verify_root" {
  zone_id = var.cloudflare_zoneid
  name    = "asverify"
  content = "asverify.${local.storageName}.blob.core.windows.net"
  type    = "CNAME"
  proxied = false
}

resource "cloudflare_record" "verify_www" {
  zone_id = var.cloudflare_zoneid
  name    = "asverify.www"
  content = "asverify.${local.storageName}.blob.core.windows.net"
  type    = "CNAME"
  proxied = false
}

resource "cloudflare_record" "rec_root" {
  zone_id = var.cloudflare_zoneid
  name    = "rissaquindoza.com"
  content = azurerm_storage_account.store.primary_web_host
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "rec_www" {
  zone_id = var.cloudflare_zoneid
  name    = "www"
  content = azurerm_storage_account.store.primary_web_host
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_ruleset" "redirect" {
  zone_id     = var.cloudflare_zoneid
  name        = "Redirect WWW"
  kind        = "zone"
  phase       = "http_request_dynamic_redirect"

  rules {
    description = "Redirect WWW"
    action = "redirect"
    action_parameters {
      from_value {
        status_code = 301
        target_url {
          value = "https://rissaquindoza.com"
        }
        preserve_query_string = true
      }
    }
    expression  = "(http.request.full_uri wildcard \"www.rissaquindoza.com*\") or (http.request.full_uri wildcard \"https://www.rissaquindoza.com*\")"
    enabled     = true
  }
}
