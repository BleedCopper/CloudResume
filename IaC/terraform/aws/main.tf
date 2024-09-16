terraform {
  backend "s3" {
    
  }

  required_providers {
    
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
    required_version = ">= 1.1.0"


}  

provider "aws" {
  region = "ap-southeast-2"
}

provider "aws" {
  region = "us-east-1"
  alias = "us-east-1"
}

provider "cloudflare" {
  api_token = var.cloudflare_api
}
