---
pagination_next: null
pagination_prev: null
---

# Authenticate an external application

:::caution note
We are [deprecating](../../changelog.md#_2021-04-06) authentication via CDF service accounts and API keys, and user sign-in via `/login`, in favor of registering applications and services with your IdP (identity provider) and [using OpenID Connect](../../../cdf/access/index.md) and the IdP framework to manage CDF access securely. We strongly encourage customers to adopt [the new authentication flows](../../../cdf/access/index.md) as soon as possible.
:::

This guide will assist in integrating an application with Cognite Data Fusion with respect to authentication. If you are developing a application that utilizes access to Cognite Data Fusion, there are two recommended
options for obtaining access to data:

- API keys/service account: if embedding a secret in the application is viable, and there won't be more than one instance of the application, then an API key may be appropriate.
- Tokens/users: if multiple users may be using the application, there will be multiple instances of the application, or if a secret cannot be distributed with the application, then a user sign-in process is appropriate.

Tokens are generally preferred, and expanded support for token authentication in standalone applications is planned.

## Service account

Associating a service account with an application allows the use of a single API key by that application for Cognite Data Fusion access. This key is not easily replaced, and should be carefully used. It may be the only appropriate alternative, if no user input is available. Cognite Data Fusion is not able to automatically distinguish between different physical deployments or instances of the application if multiple instances use the same API key & service account, so setting the key in a configuration file or (protected) environment variable is strongly recommended.

In order to use a service account to authorize requests to Cognite Data Fusion, obtain a service account accorded the correct privileges, and issues an API key for that account. On requests to the API (if manually constructed), simply specify the following header with the API value:

```json
api-key: $APIKEYVALUE
```

If you are using an SDK, documentation will specify how to set the API key as a means of authorization.

An API key should never be used for web applications with multiple users, or embedded in a desktop application/plugin shared with multiple users.

## Tokens

Obtaining access to Cognite Data Fusion with a token implies that an application is accessing Cognite Data Fusion on behalf of a specific user. In order to obtain such a token, the user must sign in to an authorized identity provider for the project.

When a user logs in though a web browser, they are sent to the Identity Provider (IdP) configured for the project (an OAuth2 provider, almost always Azure AD or Google) using an authorization code grant flow (see [IAM](index.md#projects)).

Following authentication with the IdP and Cognite Data Fusion, the browser will redirect back to the specified target with an `id_token` and an `access_token`. These are valid only against the Cognite Data Fusion API, and can be validated by making a request to [`/login/token`](https://doc.cognitedata.com/api/v1/#operation/getTokenStatus).

The access token should be treated as an opaque token (subject to format change and/or encrypted at any time), and user information can be obtained via claims in the associated id token.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/guides/3d/iam/authn-1.png" alt="CDP OAuth Login" width="x%"/>

Steps taken:

1. Obtain the login url, passing in the (url name of the) project the user should sign in to, and the destinations if the sign-in succeeds or fails.

2. A login url is returned, specific to the project and the specific flow. If no IdP is configured for the project, no url will be returned.

3. GET the return url. This will direct the browser to the IdP configured for the project.

4. The user logs in to, and established an identity with the IdP, under whichever requirements are set by the IdP.

5. The IdP redirects the browser to Cognite Data Fusion with an authorization grant and state.

6. The browser is directed to Cognite Data Fusion with the IdP authorization grant and state.

7. Cognite Data Fusion validates the existing flow and authorization grant, possibly retrieving group membership or other user details from the IdP, as configured. Lack of cookie support may cause this step to fail, as session details established when retrieving the login url are checked to prevent interception.

8. The browser is redirected to the target specified in step 1 with id and access tokens in the parameter, and a session is established.
