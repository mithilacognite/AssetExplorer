---
pagination_next: null
pagination_prev: null
---

# Authenticate with Azure AD

You can authenticate the Python SDK with Azure AD by **using a token** retrieved when a [**user authenticates**](#authenticate-with-user-credentials) or with a static [**client secret**](#authenticate-with-client-secret) for long-running jobs like extractors.

## Prerequisites

- Make sure the CDF project is configured for authentication with Azure AD:

  - [Register the Cognite API and the CDF portal application](../../../../cdf/access/guides/configure_cdf_azure_oidc.md) in Azure AD.
  - [Set up Azure AD and CDF groups](../../../../cdf/access/guides/create_groups_oidc.md) to control access to CDF data.
  - [Register and configure the relevant applications and components](../../../../cdf/access/guides/configure_apps_oidc.md) in Azure AD.

- Install the [Microsoft Authentication Library (MSAL) for Python](https://github.com/AzureAD/microsoft-authentication-library-for-python).

- In all code samples below, you need to specify:

  - `<Tenant ID>` - the ID of the Azure AD tenant where the user is registered.
  - `<Client ID>` - the ID of the application in Azure AD.
  - `<Cluster>` - the cluster where your CDF project is installed. For example, `api` and `westeurope-1`.
  - `<CDF project>` - the name of the CDF project.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/guides/sdk/tenant-and-client-id.png" alt="Client and tenant id" width="750px"/>

If you don't know which values to use for these variables, contact your CDF administrator or [Cognite Support](mailto:support@cognite.com).

## Authenticate with user credentials

You can authenticate the Python SDK with Azure AD by **using a token** retrieved with user credentials.

- You can get the token by letting the user sign in interactively via **a browser** and use the [authenticate with interactive login and token refresh](#authenticate-with-interactive-login-and-token-refresh) flow to access CDF when you're running short-term scripts or using Jupyter.

- If a browser is not available, for example, if you are logged into a terminal, you can use the [authenticate with user credentials and device code](#authenticate-with-user-credentials-and-device-code) flow.

### Authenticate with interactive login and token refresh

Use this flow to authenticate with user credentials using the Microsoft Authentication Library (MSAL) and a token refresh.

You need to reuse the `PublicClientApplication`, and give a `Callable` to the `CogniteClient` to make the SDK ask for a new token on each request. The token is served from a memory cache but refreshed if needed (without requiring a user login or device code for the refresh).

:::info NOTE
To use this flow with the code sample below, make sure the app is registered in Azure AD as the type **Mobile and desktop applications** with [http://localhost:53000](http://localhost:53000) as the **Redirect URI**.
:::

**Code sample:** [sample_interactive_login_token_refresh.py](https://github.com/cognitedata/python-oidc-authentication/blob/main/sample_interactive_login_token_refresh.py)

### Authenticate with user credentials and device code

If a browser is not available, for example, if you are logged into a terminal, use this flow to authenticate with user credentials and use a device code to refresh the token.

:::info NOTE
To use this flow, you need to select **Allow public client flows** under **Authentication** when registering the app in Azure AD.
:::

**Code sample:** [sample_device_code_token_refresh.py](https://github.com/cognitedata/python-oidc-authentication/blob/main/sample_device_code_token_refresh.py)

## Authenticate with client secret

The SDK supports using client secrets directly by providing the client directly to the `CogniteClient` with the `token_client_secret`, `token_client_id`, `token_url`, and `token_scopes`. Use this flow for long-running jobs like extractors.

:::info NOTE
Make sure that you have not set the `COGNITE_API_KEY` environment variable. It will override the token setup.
:::

**Code sample:** [sample_client_secret.py](https://github.com/cognitedata/python-oidc-authentication/blob/main/sample_client_secret.py)

:::tip Important
The `token_url` should follow the pattern `https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token` for Azure Active Directory, where _$tenantId_ is the ID of the Azure AD tenant where the user is registered.
:::
