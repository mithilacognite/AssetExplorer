---
title: Setup and administration
pagination_next: null
pagination_prev: null
---

# Setup and administration for CDF Transformations

You can use OpenID Connect and your existing identity provider (IdP) framework to manage access to CDF data securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

This article explains how an Azure Active Directory (AD) administrator can control access to **CDF Transformations** using the organization's IdP.

When you have registered **CDF Transformations**, users can sign in with their organizational ID to transform data in a CDF project.

:::caution important
CDF projects running in Google Cloud Platform need to be allowlisted to support scheduling of transformations using OpenID Connect. Contact your Cognite representative to be added to the allowlist.
:::

## Before you start

Make sure you have [registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md) and [set up Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md) to control access to CDF data.

:::info note
To perform the steps below, you need to be an administrator of Azure AD.
:::

## Step 1: Register an app in Azure AD to use with CDF Transformations

1. Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1. If you have access to multiple tenants, use the Directory + subscription filter ![Directory + subscription filter](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png) in the top menu to select the tenant in which you want to register an application.

1. Search for and select **Azure Active Directory**.

1. Under **Manage**, select **App registrations** > **New registrations**.

1. In the **Register an application** window, enter the app name, and then select **Register**.

1. Copy and make a note of the **Application (client) ID**. This value is required for authentication when reading and writing data in CDF Transformations.

1. Under **Manage**, select **Certificates & secrets** > **New client secret**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/oidc_client_secret.png" alt="OIDC client secret" width="80%"/>

1. Enter a client secret description and an expiry time, and then select **Add**.

1. Copy and make a note of the client secret in the **Value** field.

   :::caution important
   Make sure you copy this value now. This value will be hidden after you leave this page.
   :::

## Step 2: Create a group in Azure AD and add the registered app as its member

1. Open the overview window in Azure AD and select **Manage** > **Groups**.

1. Create a [group](../../../access/guides/create_groups_oidc.md).

1. Open the group. Under Manage, select **Members** > **Add members**.

1. Find the app you created above and click **Select**.

1. Add all **users** you want to have access to CDF Transformations as members.

1. Return to the overview, and then copy and make a note of the **Object Id**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/app_group.png" alt="OIDC Add app to group" width="80%"/>

## Step 3: Create a group in CDF and link to the Azure AD group

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com/) as an admin.

1. In the top menu, select **Manage & Configure** > **Manage access** to open the **Access management** window.

1. On the **Groups** tab, select **Create new group** and enter a **unique** name for the group.

1. Add `read` and `write` capabilities accordingly for the CDF resources you want to read and write using transformations. For instance, if you are transforming the data in RAW and writing the data to assets, you must add `raw:read` and `asset:write` capabilities.

   :::info Minimum required capabilities

   The **minimum** requirement is to add `project:list`, `groups:list`, `transformations:read`, `transformations:write`, and `session:create`.

   :::

1. Click **Create**.

1. Open the **OpenID connect** tab and insert your `token_url`. The `token_url` contains the ID of your Azure AD tenant. To find your tenant ID, see [this article](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant).

   :::info Running scheduled transformations

   To schedule transformations, you must add the capability `session:create` and set the `token_url` to maintain access to CDF Transformations for an extended time period.

   :::

1. Link the Transformations group to an Azure AD group:

   1. In the **Source ID** field, enter the **Object Id** for the AAD group exactly as it exists in AAD. You can use the same group Id for multiple transformations.

   1. In the **Source name** field, enter the name of the group in Azure AD.

## Step 4: Run transformations

1. Verify that the configuration is successful by following the steps in [this article](../transformation/transformations.md).

   :::info note
   Transformations with the same Client ID run as the same user with the same access. This ID and the Client secret must be given before a user can schedule and run transformations.
   :::
