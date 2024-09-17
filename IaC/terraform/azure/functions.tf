
resource "azurerm_service_plan" "sp" {
  name                = "tf-cloudresume-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Windows"
  sku_name            = "Y1"
}


resource "azurerm_application_insights" "insight" {
  name                = "tf-appInsights"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type    = "web"
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
    application_insights_connection_string = azurerm_application_insights.insight.connection_string
    application_insights_key = azurerm_application_insights.insight.instrumentation_key
  }

  app_settings = {
    FUNCTIONS_WORKER_RUNTIME = "dotnet-isolated"
    WEBSITE_USE_PLACEHOLDER_DOTNETISOLATED = 1
    AzureWebJobsSecretStorageType = "files"
    CosmosDbConnectionSetting = "AccountEndpoint=${azurerm_cosmosdb_account.cosmos.endpoint};AccountKey=${azurerm_cosmosdb_account.cosmos.primary_key};"
  }
}

