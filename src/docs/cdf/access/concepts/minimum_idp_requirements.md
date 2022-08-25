---
pagination_next: null
pagination_prev: null
title: Minimum IdP requirements
---

# Minimum identity provider (IdP) requirements

At a minimum, your identity provider (IdP) must meet the requirements below to manage access to CDF data securely.

:::info
We currently only support Microsoft's **Azure Active Directory (Azure AD)**. 
:::

The IdP must issue access tokens that the CDF API can validate. The access tokens must be a valid [**JWT**](https://datatracker.ietf.org/doc/html/rfc7519), signed using RS256, with a public key at the location specified by the JWKS URL. Also, the IdP must have a JWKS URL that is reachable by the CDF API, and respond to requests for the JWKS end or the token endpoint within 1 second, as measured from the CDF API. Contact Cognite to have the JWKS URL added to the list of allowed JWKS URLs.

The IdP must support the following OAuth 2.0 flows:

- [Client credentials](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)
- [Implicit w/ PKCE](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow)
- [Auth code grant](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)

## Tokens and claims

Within a token, there are multiple **claims** used to assert pieces of information about a subject. Tokens issued to authenticate and authorize a subject to access CDF should contain the following claims, some of which are reserved, and the others are custom configured. See [this article](https://auth0.com/docs/tokens/json-web-tokens/json-web-token-claims) for more information about tokens and claims.

The table below shows the minimum required claims in a token for CDF to authenticate and authorize the subject.

| Claim    | Required?                     | Description                                                                                 | Expected value                                           |
| -------- | ----------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `aud`    | Must                          | Audience of the JWT (intended recipient).                                                   | URI of the service requiring authentication.             |
| `exp`    | Must                          | Expiration time of the JWT.                                                                 | Datetime stamp.                                          |
| `iat`    | Must                          | Issued at Time of the JWT.                                                                  | Datetime stamp.                                          |
| `iss`    | Must                          | Issuer of the JWT.                                                                          | URI and path from the IdP from which the JWT was issued. |
| `sub`    | Must                          | Subject of the JWT (the user).                                                              | User name from IdP.                                      |
| `kid`    | Should                        | Key identifier.                                                                             | RS256                                                    |
| `nbf`    | Should                        | Not Before Time of the JWT (before which the token should not be accepted).                 | Datetime stamp.                                          |
| `scp`    | Should (strongly recommended) | Scope of the JWT (attribute inherited from the scopes defined for the subject in the IdP).  | Text field.                                              |
| `groups` | Should (strongly recommended) | Groups of the JWT (attribute inherited from the groups defined for the subject in the IdP). | Object ID of a security group.                           |
