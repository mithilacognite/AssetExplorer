---
pagination_next: null
pagination_prev: null
title: Register core Cognite apps
---

# Register the Cognite API and applications in Azure AD

To allow users to sign in to CDF and Cognite apps with their existing organizational ID, you first need to **register the Cognite API** and permit it to access user profiles in your Azure AD tenant. You then **register the applications** you want to allow users to access.

As an Azure Active Directory (AD) administrator, you can consent for your entire organization to use Cognite Data Fusion (CDF) and other Cognite applications. Users can sign in to CDF and Cognite applications with their organizational identity without having to consent themselves.

## Register CDF and Cognite apps in Azure AD

:::info
To perform the steps below, you need to be an Azure AD administrator. It's important that the Azure AD administrator sets up Postman and follows the [authorization process](../../../dev/guides/postman/postman.md) to register the Cognite API.
:::

### Step 1.1: Permit the Cognite API to access user profiles in Azure AD

1.  In your browser, make sure that you've signed in to Azure AD as the tenant administrator, and then navigate to:

    `https://login.microsoftonline.com/YOUR_AAD_TENANT_ID/adminconsent?client_id=YOUR_CDF_CLUSTER`

    Where:

    - `YOUR_AAD_TENANT_ID` is the ID of your Azure AD tenant. To find your tenant ID, see [this article.](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant)
    - `YOUR_CDF_CLUSTER` is the cluster where your CDF instance is installed. It is usually named `https://<clustername>.cognitedata.com`. If you don't know the cluster name, contact Cognite support.

2.  If prompted, confirm the account you want to use to consent to the request.

3.  Review and accept the permission request information, and select **Accept**.

    For more information, see [Understanding Azure AD application consent experiences](https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience).

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_api_consent.png" alt="Accept permission request" width="40%"/>

    :::info NOTE
    You can safely ignore any HTTP 400 errors you receive.
    :::

You have now permitted the Cognite API to access user profiles in your Azure AD, and can register applications you wish to authorize to access the API.

:::tip TIP
If you try to sign in to CDF without these permissions, you'll get an error message. The message states which cluster you're in and provides links to install and consent.
:::

### Step 1.2: Register a Cognite application in Azure AD

1. In your browser, make sure that you've signed in to Azure AD as the tenant administrator, and then navigate to the URL for the application you want to register:

   - Cognite Data Fusion: [https://fusion.cognite.com.](https://fusion.cognite.com) _(used in the steps below)_
   - Cognite BestDay: [https://bestday[.cluster].cogniteapp.com.](https://bestday.cogniteapp.com)
   - Cognite Discover: [https://discover[.cluster].cogniteapp.com.](https://infield.cogniteapp.com)
   - Cognite InField: [https://infield[.cluster].cogniteapp.com.](https://infield.cogniteapp.com)
   - Cognite Maintain: [https://mp[.cluster].cogniteapp.com.](https://mp.cogniteapp.com)
   - Cognite Solutions Portal: [https://[cluster].cogniteapp.com.](https://cogniteapp.com)

   If your application instance is installed in a separate cluster, you need to specify the `[.cluster]`. If you don't know the cluster name, contact Cognite support.

2. If prompted, confirm the account you want to use to consent to the request.
3. Specify your **Environment**, (cluster) and then select **Sign in with Microsoft Azure**.

   If you don't know the environment (cluster) name, contact Cognite support.

      <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_cdf_login.png" alt="CDF sign-in with Azure " width="40%"/>

4. Review and accept the permission request on behalf of your organization, and then select **Accept**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure_cdf_consent.png" alt="Accept permission request" width="40%"/>

5. If the registration is successful, you are signed in to the Cognite application.
6. **Verify** that the configuration is successful: Sign in with a non-admin identity to confirm that regular users in your Azure AD can access the application.

You have now registered the Cognite application in your Azure AD, and users can sign in to the application with their Azure AD username and password without having to consent themselves.
