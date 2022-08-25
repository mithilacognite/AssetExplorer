---
title: Setup and administration
pagination_next: null
pagination_prev: null
---

# Setup and administration for Cognite extractors

You can use OpenID Connect and your existing identity provider (IdP) framework to manage access to CDF data securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

This article explains how to register and configure apps in Azure AD (AAD) to use with extractors or scheduled custom scripts.

:::info note
To perform the steps below, you must be an administrator of Azure AD.
:::

## Before you start
Make sure you have [registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md) and [set up Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md) to control access to CDF data.

## Step 1: Register an app in Azure AD to use with an extractor

:::tip Info
Cognite recommends that you register **one app per extractor and per environment**. For example, we recommend 3 app registrations to run one extractor in _dev_, _test_, and _prod_ environments.
:::

1. Sign in to the [Azure portal](https://portal.azure.com/) as an admin.
1. If you have access to multiple tenants, use the Directory + subscription filter (<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png" alt="Directory + subscription filter " />) in the top menu to select the tenant in which you want to register an application.
1. Search for and select **Azure Active Directory**.
1. Under **Manage**, select **App registrations** > **New registrations**.
1. In the **Register an application** window, enter the app name and then select **Register**.
1. Copy and make a note of the **Application (client) ID**. This value is required for authentication when reading and writing data with the extractor.
1. Under **Manage**, select **Certificates & secrets** > **New client secret**.

  <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/oidc_client_secret.png" alt="OIDC client secret" width="100%"/>

1. Enter a client secret description and an expiry time, and then select **Add**.
1. Copy and make a note of the client secret in the **Value** field.

   :::caution Important
   Make sure you copy this value now. This value will be hidden after you leave this page.
   :::

## Step 2: Create a group in Azure AD and add the registered app as its member

1. Open the overview window in Azure AD and select **Manage** > **Groups**.
1. Create a group. Read more [here](../../../access/guides/create_groups_oidc.md).
1. Open the group. Under **Manage**, select **Members** > **Add members**.
1. Find the app you created above and click **Select**.
1. Add all **users** you want to have access to extractors as members.
1. Return to the overview, and then copy and make a note of the **Object Id**.
 
 <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/app_group.png" alt="OIDC Add app to group" width="66%"/>

## Step 3: Create a group in CDF and link to the Azure AD group

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com/) as an admin.
1. In the top menu, select **Manage & Configure** > **Manage access**.
1. In the **Access management** window, select **Groups** > **Create new group**.
1. In the **Create a new group** window, enter the **group name** (case sensitive).
1. Add the necessary capabilities for your extractor. See [Extractor capabilities](../../../access/guides/capabilities#extractors) for details.
1. Link the group to an Azure AD group:
   1. In the **Source ID** field, enter the **Object Id** for the AAD group exactly as it exists in AAD. You can use the same group Id for multiple extractors.
   1. In the **Source name** field, enter the name of the group in Azure AD.

## Step 4: Run extractors
Configure and run the extractor according to the [extractor documentation](../../concepts/extraction/index.md#download-installation-files-and-documentation).
