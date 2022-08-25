---
pagination_next: null
pagination_prev: null
title: Create a client secret and add service principal to CDF group
---

# Create a client secret and add the service principal to CDF group

Follow the steps below to create a client secret in Azure AD and add the service principal to a CDF group.

## Create a client secret in Azure AD

1.  Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1.  If you have access to multiple tenants, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png" alt="Directory + subscription filter " /> in the top menu to select the tenant in which you want to register an application.

1.  Search for and select **Azure Active Directory**.

1.  Under **Manage**, select **App registrations** > **New registrations**.

1.  In the **Register an application** window, enter the app name, and then select **Register**.

1.  Specify the **name** and select the supported **account types**.

1.  Copy and make a note of the **Application (client) ID**. This value is required for authentication.

1.  Under **Manage**, select **Certificates & secrets** > **New client secret**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/oidc_client_secret.png" alt="OIDC Client secret " width="80%"/>

1.  Enter a client secret description and an expiry time, and then select **Add**.

1.  Copy and make a note of the client secret in the **Value** field.

    :::caution IMPORTANT
    Make sure you copy this value now. This value will be hidden after you leave this page.
    :::


## Add the service principal to a CDF group

<!--Service principal for the new app to the cdf group-->

:::caution IMPORTANT
You need to link your newly created app in Azure AD to a group in CDF. For more information, see [Create a group in CDF and link it to Azure AD group](../../access/guides/create_groups_oidc#step-2-create-a-group-in-cdf-and-link-it-to-the-azure-ad-group).
:::

1. To add the service principal, navigate to your Azure AD group. 

1. Under **Manage**, select **Members** > **Add members**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integration/transformations/add-members-to-azure-group.png" alt="Add members to group" width="800px"/>

1. Search for your service principal in the search box and **Select**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integration/transformations/add-service-principal.png" alt="Add service principal" width="400px"/>

1. Verify that the service principal is added to your Azure AD group. 

:::tip 
For more information on service principals, see [How to create a service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).
:::

The service principal, as a member of the Azure AD group, is automatically a member of the linked CDF group with the associated capabilities.
