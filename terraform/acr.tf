resource "azurerm_resource_group" "example"{
    name = var.resource_name
    location = var.resource_location
}

resource "azurerm_container_registry" "acr"{
    name = var.container_name
    resource_group_name = azurerm_resource_group.example.name
    location = azurerm_resource_group.example.location
    sku = "Basic"
    admin_enabled = true
}