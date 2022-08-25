---
pagination_next: null
pagination_prev: null
---

# Postman

We recommend downloading, installing and using **[Postman](https://www.getpostman.com/)** to test API requests and verify responses.

## Set up Postman using OpenID Connect

### Prerequisites

To use the **Implicit** grant type with your requests in Postman, you need to grant access to a multi-tenant app in Azure AD to use CDF with Postman. To grant access, you need to be an Azure AD tenant administrator.

Follow the steps in [How to register Cognite API](../../../cdf/access/guides/configure_cdf_azure_oidc#step-11-permit-the-cognite-api-to-access-user-profiles-in-azure-ad) to register the app.

When you have registered the app, you will be able to sign in with your Azure AD credentials.

### Step 1: Import your Postman collection

1. In Postman, select **Import** > **Link** and enter the URL to import your latest API V1 Postman collection:
`https://storage.googleapis.com/cognite-postman-collections/v1.json`

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/import-collection-link.png" alt="Import collection"/>

1. Select **Continue** > **Import** to import the collection.

### Step 2: Set up environment variables

1. To create a new environment, navigate to **Environments** on the left sidebar. Click **+ Create new Environment** and give it a name.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/create-environment.png" alt="Create environment" width="350px"/>

2. Add the variables:

   - **tenant-id**: This is your Directory (tenant) ID. To find the tenant ID, go to your Azure Active Directory. You can find your Tenant ID on the Overview page.

     <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/aad-tenant-id.png" alt="Tenant ID" width="500px"/>

    :::info NOTE
    We recommended that you work with the current value of a variable to prevent sharing sensitive and confidential information with your team.
    :::

   - **token**: Using OAuth 2.0, we will generate a new token. It will populate automatically, so you will leave it blank as an environment variable.

   - **baseURL**: You can find your baseURL from the CDF project. Navigate to your CDF project. Under **Manage & Configure** > **Manage access**, select **Open ID connect** tab. The URL in the audience field is the baseURL.

     <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/baseurl-cdf.png" alt="Base URL" width="450px"/>

   - **project**: This is your CDF project name.

     <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/project-name-cdf.png" alt="Project name" width="350px"/>

### Step 3: Update authorization

1. To update the authorization, navigate to the **Authorization** tab in the collection overview.

2. Select **OAuth 2.0** as Type and **Request Headers** as Add auth data to.

3. Select **Configure New Token** and specify these configuration options:

   - Enter a **Token Name**.
   - Select the **Grant Type** as **Implicit**.
   - Input the **Callback URL** as `https://postman.cogniteapp.com/loggedin`.

     :::info NOTE
     If you do not select the checkbox **Authorise using browser**, you can input the Callback URL. Otherwise, the Callback URL gets auto-populated on selection. You will be redirected to the **Callback URL**, once your application is authorized.
     :::

   - Enter the **Auth URL** as `https://login.microsoftonline.com/$tenant-id/oauth2/v2.0/authorize`. Replace the **tenant-id** obtained from the previous step.
   - Input the **Client ID** as `https://postman.cogniteapp.com`.
   - The **Scope** is `$baseUrl/$scope`, where **$baseUrl** is as above in 2.2, and **$scope** is `user_impersonation`, `DATA.VIEW`, `IDENTITY` etc.

    `user_impersonation` grants all permissions to the user assigned to access the API. The `DATA.VIEW` scope grants read-only access to data in CDF, for example, to view files, time series, RAW, and other CDF resources. To know more about CDF's scopes, see the different [Access token scopes](../../../cdf/access/concepts/access_token_scopes.md).

    :::tip tip
     While using a scope for the first time, the admin has to define the scope explicitly. The admin must then consent to use this scope for the authorization process.
    :::

   - Select **Client Authentication** as **Send as Basic Auth header**.

      <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/implicit-grant-oidc.png" alt="OAuth 2.0 implicit"/>

4. Select **Get New Access Token** > **Proceed** > **Use Token**.

You are now ready to use Postman with OIDC as the authentication method.

## Set up Postman using API keys

### Step 1: Import your Postman collection

In Postman, select **Import** > **Import From Link** and enter a URL to import one of our Postman collections:

| API version | API Status | Postman collection link                                                                                                   |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| API v1      | Stable     | **Recommended for production environments.** <p></p> `https://storage.googleapis.com/cognite-postman-collections/v1.json` |
| Playground  | Unstable   | `https://storage.googleapis.com/cognite-postman-collections/playground.json`                                              |

Click **Continue** > **Import**. You have successfully imported the collection.

### Step 2: Set up API keys and environment variables

Set the `api-key` and `project` environment variables. The `api-key` is injected as the header to authenticate your requests, and the `project` routes all your requests to the correct project in Cognite Data Fusion. To set the environment variables:

1.  Click **Environment quick look** (eye) icon in the top-right corner. Click **Add** and enter an **Environment Name**, for example `cognite-publicdata`.
1.  Under **VARIABLE**, enter `api-key`, and in the **CURRENT_VALUE** field enter your API key.
1.  Add another **VARIABLE**, name it `project`, and in the **CURRENT_VALUE** field enter the name of your project.

    If you got your API key from the [Open Industrial Data Project](https://www.youtube.com/watch?v=g4DAAo55IS8), enter `publicdata` as the name of the project.

1.  Click **Save** to save the environment variables you have added.
1.  If necessary, select your newly created environment in the dropdown menu in the top right corner.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/select-environment.png" alt="Select environment" width="300px"/>

### Step 3: Send your API request

Make a test API request to check that your integration is working correctly:

1.  Click the **Cognite API** collection in the left-hand menu, and select **Assets** > **List assets**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/quickstart/cogniteapi-collection.png" alt="List assets" width="350px"/>

1.  Click **Send**.

Cognite Data Fusion returns a list of all [asset objects](/api/v1/#tag/Assets) in response to your API request. Once you have successfully made an API request, you’re ready to begin interacting with the Cognite Data Fusion API through our Software Development Kits (SDKs).

You are now ready to use Postman with API keys as authentication method.
