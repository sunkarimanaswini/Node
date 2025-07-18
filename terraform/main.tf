terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.36.0"
    }
  }
}

provider "azurerm" {
  features{}
  subscription_id = "a78f3464-4f79-4e85-a9df-6b287fe724f4"
}