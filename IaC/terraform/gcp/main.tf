terraform {
  backend "gcs" {
    
  }
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}  

locals {
  project = "cloud-resume-436412"
  region  = "us-east1"
}


provider "cloudflare" {
  api_token = var.cloudflare_api
}

provider "google" {
  project = local.project
  region  =  local.region
}
