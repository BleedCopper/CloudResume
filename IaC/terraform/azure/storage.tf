
locals {
  storageName = "tfcloudresumestore"
}

resource "azurerm_storage_account" "store" {
  name                     = local.storageName
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

  depends_on = [ cloudflare_record.verify_root ]
}
