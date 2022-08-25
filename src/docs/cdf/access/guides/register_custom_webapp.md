---
pagination_next: null
pagination_prev: null
---

# Register a custom web app in Azure AD

Follow the steps below to register a custom web app in Azure AD. Users can sign in to the web app using their browser and the acquired token.

## Register a custom web app in Azure AD

1.  Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1.  If you have access to multiple tenants, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png" alt="Directory + subscription filter " /> in the top menu to select the tenant in which you want to register an application.

1.  Search for and select **Azure Active Directory**.

1.  Under **Manage**, select **App registrations** > **New registrations**.

1.  In the **Register an application** window, enter the app name, and then select **Register**.

1.  Specify the **name** and select the supported **account types**.
1.  Under **Redirect URI (optional)**, select **Web** and specify the **redirect URI**. Typically, this is the URL for your web app, or [localhost](#) for development.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_reg_app_custom_web.png" alt="Register an application " width="80%"/>

1.  Select **Register**.

1.  Select **Authentication** to add more **redirect URIs**.

1.  Copy and make a note of the **Application (client) ID**. This value is required for authentication.

1.  Under **Manage**, select **Certificates & secrets** > **New client secret**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/oidc_client_secret.png" alt="OIDC Client secret " width="80%"/>

1.  Enter a client secret description and an expiry time, and then select **Add**.

1.  Copy and make a note of the client secret in the **Value** field.

    :::info NOTE
    Make sure you copy this value now. This value will be hidden after you leave this page.
    :::

1.  Configure API permissions:

    1. Select **API permissions**. The Microsoft Graph `User.Read` permissions should already be selected.
    1. Select **Add a permission** and in the next screen, under **APIs my organization uses**, select the CDF API, for example `westeurope-1`.
    1. For **Delegated permissions**, select the required permissions for your application, for example `user_impersonation`. The delegated permissions filter the permissions a user has based on group memberships, but do not add any permissions.

       To use the [token inspection endpoint](../../../../api/v1/#operation/inspectToken), select `IDENTITY`.

       Learn more about the available permissions [here](../concepts/access_token_scopes.md).

    1. Select **Add permissions**.
    1. The API permissions should look similar to this:

       <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_api_perms_user_impersionation.png" alt="API permissions " width="80%"/>

    1. Select **Grant admin consent for...** and confirm that you want to make the new list of permissions active.

       <!-- ![Grant admin consent](/images/cdf/access/azure_grant_admin_consent.png 'Grant admin consent') -->

<!-- 1. If you're using client secrets/certificates, select these permissions for **Application permissions**:
       - Group.Read.All -->
