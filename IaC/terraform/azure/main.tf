
variable "cloudflare_zoneid" {}
variable "cloudflare_api" {}

# Configure the Azure provider
terraform {
  backend "azurerm" {
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.7.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  required_version = ">= 1.1.0"
}
provider "azurerm" {
  features {}
  
  client_id       = "4785bdc7-671d-4140-b6fd-589bf8ee38e4"
  tenant_id       = "b490748b-6369-41b5-8b27-eaf6200aa287"
  subscription_id = "472e404e-7704-43a8-96a1-072607c075e1"
  use_oidc        = true
}

provider "cloudflare" {
  api_token = var.cloudflare_api
}

resource "azurerm_resource_group" "rg" {
  name     = "tfCloudResume"
  location = "australiaeast"
}
