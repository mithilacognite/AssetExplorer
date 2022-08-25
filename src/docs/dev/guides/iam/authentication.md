---
pagination_next: null
pagination_prev: null
---

# Authentication

:::caution note
We are [deprecating](../../changelog.md#_2021-04-06) authentication via CDF service accounts and API keys, and user sign-in via `/login`, in favor of registering applications and services with your IdP (identity provider) and [using OpenID Connect](../../../cdf/access/index.md) and the IdP framework to manage CDF access securely. We strongly encourage customers to adopt [the new authentication flows](../../../cdf/access/index.md) as soon as possible.
:::

Authentication is the process of validating claims of identity, and is the first half of establishing whether a user is indeed a user, and what they should have access to in Cognite Data Fusion.

Requests to Cognite Data Fusion are authenticated as submitted by a user with one of two mechanisms:

- [API keys](#api-keys)
- [Tokens](#tokens)

Once an API key or token is validated and the associated Cognite Data Fusion user is determined, then [Authorization](authorization.md) takes place. You can not exchange one authentication type for another (use an API key to obtain a token, for example). Tokens are the preferred authentication mechanism.

## API keys

An API key is a secret that can be attached to a request sent to Cognite Data Fusion to authorize access on behalf of a Cognite Data Fusion service account. This key is not stored directly in a Cognite Data Fusion database, and cannot be displayed once created with the [create API Keys](/api/v1/#operation/createApiKeys) call.

Adding a header with the API-key as follows will allow an request to be authenticated:

```sh
$ curl -X GET \
  'https://api.cognitedata.com/login/status' \
  -H 'Accept: application/json' \
  -H 'api-key: VF34gvwsxGT4w32gfdvsvrwwvMInyr58ZV43HNsaef34Ofdd'
```

## Tokens

When a user logs in through a web browser, they are sent to the Identity Provider (IdP) configured for the project (an OAuth2 provider, almost always Azure AD or Google) using an authorization code grant flow
(see [external application integration](external-application.md).)

The tokens can be used in a similarly to the API key:

```sh
$ curl -X GET \
  curl -X GET \
  'https://api.cognitedata.com/login/status' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer ewogICJhbGciOiAiUlMyNTYiLAogICJ0eXAiOiAiSldUIgp9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM'
```

## Logging in

The concept of a user logging in is only relevant for cookie based authentication. The process of obtaining a token and cookie is logging in, but the state held in the back-end based on the cookie for the user is minimal.

## Logging out

To invalidate a cookie session, a request to the [`/logout`](/api/v1/#operation/logout) endpoint can be made.
