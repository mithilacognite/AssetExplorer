---
pagination_next: null
pagination_prev: null
---

# Migration guide

The steps below outline the **generic** steps for migrating your Cognite Data Fusion (CDF) project from using API authentication to using token authentication with your identity provider (IdP). You may need to **adjust** the steps to match your current implementation and needs.

:::info NOTE
The examples below use **Azure Active Directory (Azure AD)** as the identify provider (IdP). If you want to use another IdP than Azure AD to manage access to CDF, check [the minimum IdP requirements](../concepts/minimum_idp_requirements.md) and contact your Cognite representative or one of our partners.
:::

:::tip
We have created sample scripts to help you with the migration. The scripts are available as-is and serve as starting points for you to customize to your needs:

- [Generic migration scripts](https://github.com/cognitedata/cdf-oidc-migration). Collect data from CDF and Azure AD, create/update groups and app registrations in Azure AD, add members to Azure AD groups, and create/update CDF groups with Azure AD group ID.

:::

<!-- - [Grafana and generic apps scripts](https://github.com/cognitedata/cognite-inso-powershell-functions). Create a Grafana app registration, a generic app registration, and an enterprise application registration.-->

## Step 1: Collect information about your CDF project

1. Collect key information about your existing CDF project:

   - **CDF groups**. Instead of assigning capabilities to individual users and applications, you use groups in Cognite Data Fusion (CDF) to define what **capabilities** members (users or applications) have to work with different CDF resources. You **link** and synchronize the CDF groups to user groups in your identity provider (IdP).
   - **Active Cognite or custom extractors/scripts** running code that use API keys, and their group memberships in CDF. You need to register applications in Azure AD for these.
   - **Users with non-standard access**, for example, administrators and developers, and their group memberships.
   - **Third party applications** such as Grafana, Power BI, Azure Data Factory, etc. used in your CDF project.

## Step 2: Configure groups in Azure AD and CDF

1. Define the relationships you want to set up between the IdP groups and the CDF groups, for example in a spreadsheet. If necessary, we recommend that you use this opportunity to simplify and declutter your CDF group structure. Remember:

   - Each IdP group can be linked to **multiple** CDF groups.
   - Each CDF group can be linked to **only one** IdP group.

2. When you have defined the group relationships, follow steps 1 and 2 in [Set up Azure AD and CDF groups to control access](create_groups_oidc.md) to **create**, **configure**, and **link** the groups in Azure AD and CDF.

We recommend that you create a separate CDF administrator group in Azure AD and link it to an administrator group in CDF. At a minimum, the CDF administrator group **must** have these capabilities:

- Groups: `list`, `read`, `create`, `update`, `delete`
- Projects: `list`, `read`, `update`

To clean up legacy authentication the group also needs these capabilities:

- Apikeys: `list`, `read`, `create`, `update`, `delete`
- Users: `list`, `read`, `create`, `update`, `delete`

:::caution
Before you continue, verify that the CDF administrator is a member of the CDF administrator group in Azure AD, and that the Azure AD and CDF administrator groups are linked. Otherwise, you risk being locked out of the CDF project at a later stage.
:::

## Step 3: Enable OIDC and the new authentication in CDF

1. Sign in to CDF as an administrator.
2. Navigate to **Manage & Configure** > **Manage access**.
3. On the **OpenID Connect** tab, make sure that the OpenID Connect is **Enabled**, and fill in the remaining fields with information specific for your Azure AD tenant and the cluster your CDF project is running on:

   - JWKS URL: `https://login.microsoftonline.com/AAD_TENANT_ID/discovery/v2.0/keys`
   - Token URL: `https://login.microsoftonline.com/AAD_TENANT_ID/oauth2/v2.0/token`
   - Issuer: `https://sts.windows.net/AAD_TENANT_ID/`
   - Audience: `https://CLUSTER_NAME.cognitedata.com`
   - Access claims: `groups`, `roles`
   - Scope claims: `scp`
   - Log claims: `appid`
   - Permitted time skew (ms): `0`

   Where:

   - _AAD_TENANT_ID_ is the ID of your Azure AD tenant. To find your tenant ID, see [this article.](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant)
   - _CLUSTER_NAME_ is the name of the CDF cluster where your CDF project is running, for example `westeurope-1`. If you are unsure about what your cluster name is, contact [Cognite support](mailto:support@cognite.com).

4. Select **Save configuration**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/enable_oidc.png" alt="Enable OIDC" width="100%"/>

## Step 4: Register CDF and core Cognite applications in Azure AD

To allow users to sign in to CDF and Cognite apps with their existing organizational ID, you first need to register the Cognite API and permit it to access user profiles in your Azure AD tenant. You then register the applications you want to allow users to access.

As an Azure Active Directory (AD) administrator, you can consent for your entire organization to use Cognite Data Fusion (CDF) and other Cognite applications. Users can sign in to CDF and Cognite applications with their organizational identity without having to consent themselves.

1. Follow the steps to [permit the Cognite API to access user profiles in Azure AD](configure_cdf_azure_oidc.md#step-1-1-permit-the-cognite-api-to-access-user-profiles-in-azure-ad).
1. Follow these steps to [register Cognite applications in Azure AD](configure_cdf_azure_oidc.md#step-1-2-register-a-cognite-application-in-azure-ad).
1. When you have completed the above steps, sign out of CDF and sign in again selecting **Sign in with Microsoft**.
1. You are now logged in using Azure AD and OIDC. You can confirm this by navigating to **Manage & Configure** > **Manage access** and checking that the **Deprecate Legacy Login** button on the **Service accounts** tab is now available (not grayed out).

   **CAUTION:** Do not click the button yet.

## Step 5: Register and configure other applications in Azure AD

Follow the steps below to register and configure other applications in Azure AD.

1.  Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1.  If you have access to multiple tenants, use the Directory + subscription filter ![Directory + subscription filter](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png) in the top menu to select the tenant in which you want to register an application.

1.  Search for and select **Azure Active Directory**.

1.  Under **Manage**, select **App registrations** > **New registration**.

1.  In the **Register an application** window, enter the app name, and then select **Register**.

1.  To register an application that does **not** require interactive sign-in, for example an extractor, continue with [Step 5.1: Register app without interactive sign-in](#step-51-register-app-without-interactive-sign-in).

    To register an application that **requires** interactive sign-in, for example by developers or end-users, continue with [Step 5.2: Register app for interactive sign-in](#step-52-register-app-for-interactive-sign-in).

### Step 5.1: Register app without interactive sign-in

1. Select **Certificates & secrets** in the left-hand menu.

1. Select **New client secret** to create an application secret. Next, enter a description and select **Add**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_add_secret.png" alt=" " width="100%"/>

   Make a note the **application (client) ID**, the **application secret**, and the **Azure AD tenant ID**. You will need these values when you follow the steps in [Step 7: Update applications and components to authenticate using OIDC](#step-7-update-applications-and-components-to-authenticate-using-oidc).

### Step 5.2: Register app for interactive sign-in

1.  After registering the application, select **Authentication** in the main menu,set **Allow public client flows** to **Yes**. Then select **Add a platform** > **Mobile and desktop applications**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_allow_public_flows.png" alt=" " width="100%"/>

1.  In **Configure Desktop + devices**, enter [http://localhost](#) in the **Custom redirect URIs** field and select **Configure**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_desktop_devices.png" alt=" " width="60%"/>

1.  Select **Save**.

1.  Select **API permissions** in the left-hand menu, and then **Add a permission**.

1.  Select the **APIs my organization uses** tab, and the enterprise application that is automatically registered in Azure AD when you register the CDF API in [Step 4: Register CDF and core Cognite applications in Azure AD](#step-4-register-cdf-and-core-cognite-applications-in-azure-ad).

    **NOTE:** For most customers, the application is named `Cognitedata: API` or `Cognitedata: <cluster_name>`.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_add_api_permission.png" alt=" " width="100%"/>

1.  Select **Delegated permissions**, and make sure that **user_impersonation** is checked. Then select **Add permissions**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_request_permissions.png" alt=" " width="60%"/>

1.  Select **Grant admin consent for organization** to allow the application to be be used for interactive sign-in programmatically using only the client ID and tenant ID.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_grant_admin_consent_migrate.png" alt=" " width="100%"/>

## Step 6: Add users and applications to groups

:::caution IMPORTANT
Make sure that you assign the users and applications to an Azure AD group linked to a CDF group that has the necessary capabilities.
:::

To add users and applications to groups, follow these steps:

1.  Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1.  If you have access to multiple tenants, use the Directory + subscription filter ![Directory + subscription filter](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png) in the top menu to select the tenant in which you want to register an application.

1.  Search for and select **Azure Active Directory**.

1.  Under **Manage** in the left hand menu, select **Groups** and then select the group you want to add users/apps to.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_select_group.png" alt=" " width="100%"/>

1.  Select **Members**.

1.  Select **Add members** to add users/applications, and then choose **Select**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_select_members.png" alt=" " width="100%"/>

## Step 7: Update applications and components to authenticate using OIDC

When you have registered and configured your applications in Azure AD, the next step is to migrate all code that authenticates using API keys to using OpenID Connect (OIDC) and token authentication instead. Individual developers that use the SDKs/API for development and testing, should use the interactive login method instead of service principals.

To authenticate using OIDC, refer to these articles:

- [Using the Python SDK](../../../dev/guides/sdk/python/python_auth_oidc.md)
- [Using the JavaScript SDK](https://github.com/cognitedata/cognite-sdk-js/blob/master/guides/authentication.md)
- [Retrieving a bearer token from Microsoft using a client secret](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#get-a-token)
- [Authenticating towards the Cognite API with a bearer token](../../../api/v1/#section/Authentication/oidc-token)

## Step 8: Disable legacy authentication

When you have verified that users and applications can authenticate with OIDC without any issues, you can deprecate legacy authentication:

1. We recommend that you first delete all legacy service accounts in CDF, and verify that this doesn’t cause any problems.
2. Sign in to CDF as an administrator and using OIDC, and navigate **Manage & Configure** > **Manage access**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/deprecate_legacy_auth.png" alt="Disable legacy auth" width="80%"/>

3. Select **Deprecate Legacy Login**. In the dialog box, confirm that you want to **deprecate** legacy login.
