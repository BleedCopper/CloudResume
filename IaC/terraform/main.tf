# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.2"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  required_version = ">= 1.1.0"
}
variable "cloudflare_zoneid" {}
variable "cloudflare_api" {}

provider "azurerm" {
  features {}
}

provider "cloudflare" {
  api_token = var.cloudflare_api
}

resource "azurerm_resource_group" "rg" {
  name     = "tfCloudResume"
  location = "australiaeast"
}

resource "azurerm_storage_account" "store" {
  name                     = "tfcloudresumestore"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  static_website {
    index_document = "index.html"
  }
  custom_domain {
    name = "rissaquindoza.com"
    use_subdomain = true
  }
  network_rules {
    default_action = "Allow"
  }
}
resource "azurerm_cosmosdb_account" "cosmos" {
  name                  = "tf-cloudresume-db"
  location              = azurerm_resource_group.rg.location
  resource_group_name   = azurerm_resource_group.rg.name
  offer_type            = "Standard"

  consistency_policy {
    consistency_level = "Strong"
  }

  geo_location {
    location          = azurerm_resource_group.rg.location
    failover_priority = 0
  }
}


resource "azurerm_service_plan" "sp" {
  name                = "tf-cloudresume-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Windows"
  sku_name            = "Y1"
}

resource "azurerm_windows_function_app" "rq" {
  name                = "tf-cloudresume-fnc"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  storage_account_name       = azurerm_storage_account.store.name
  storage_account_access_key = azurerm_storage_account.store.primary_access_key
  service_plan_id            = azurerm_service_plan.sp.id

  https_only = true

  site_config {
    cors {
      allowed_origins = ["https://rissaquindoza.com", azurerm_storage_account.store.primary_web_endpoint]
    }
  }
}


resource "cloudflare_record" "verify_root" {
  zone_id = var.cloudflare_zoneid
  name    = "asverify"
  content = "asverify.${azurerm_storage_account.store.primary_web_host}"
  type    = "CNAME"
  proxied = false
}

resource "cloudflare_record" "verify_www" {
  zone_id = var.cloudflare_zoneid
  name    = "asverify.www"
  content = "asverify.${azurerm_storage_account.store.primary_web_host}"
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