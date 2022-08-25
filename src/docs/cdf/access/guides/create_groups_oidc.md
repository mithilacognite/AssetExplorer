---
pagination_next: null
pagination_prev: null
title: Set up groups to control access
---

# Set up Azure AD and CDF groups to control access

Instead of assigning capabilities to individual users and applications, you use **groups** in Cognite Data Fusion (CDF) to define what **capabilities** members (users or applications) have to work with different CDF resources. You **link** and synchronize the CDF groups to user groups in your identity provider (IdP), for instance Azure Active Directory (AAD).

For example, if you want users or applications to _read_, but not _write_, time series data in CDF, you first create a group in your IdP to add the relevant users and applications. Next, you create a CDF group with the neccessary capabilities, and then link the CDF group and the IdP group.

This flexibility allows you to manage and update your data governance policies quickly and securely. You can continue to manage users and applications in your organization's IdP service outside of CDF.

## Step 1: Create a group in Azure AD

1. Make sure that you have already [registered the Cognite API and applications in Azure AD](./configure_cdf_azure_oidc.md).
2. Sign in to the [Azure portal](https://portal.azure.com) as an admin.
3. If you have access to multiple tenants, in the top menu, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png" alt="Directory + subscription filter"/> to select the tenant in which you want to register an application.
4. Search for and select **Azure Active Directory**.
5. Under **Manage**, select **Groups** > **New group**.
6. In the New Group window, select **Security** as the **Group type**, enter a **Group name**, and then select **Create**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/create_aad_group.png" alt="Create group" width="60%"/>

7. Select the group to open it, and then copy and make a note of the **Object Id**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/copy_aad_objectId_oidc.png" alt="Copy Object Id" width="60%"/>

## Step 2: Create a group in CDF and link it to the Azure AD group

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com) as an admin.
2. In the top menu, select **Manage & Configure** > **Manage access**.
3. In the Access management window, select **Groups** > **Create new group**.
4. In the Create new group window, enter a **Unique name** for the group and **Add capabilities**.
5. Link the CDF group to an Azure AD group:

   1. In the **Source ID** field, enter the **Object Id** for the AAD group exactly as it exists in AAD.
   2. In the **Source name** field, enter the name of the group in Azure AD.

     <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/create_CDF_group_objectId_oidc.png" alt="Create new group with link to AAD group object ID" width="60%"/>

6. Select **Create**.

## Step 3: Add members to the Azure AD group

1. In Azure AD, add members (users or applications) to the group.

The members of the Azure AD group automatically become members of the linked CDF group with the associated capabilities.
