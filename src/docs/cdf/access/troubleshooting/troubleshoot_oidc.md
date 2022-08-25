---
title: Troubleshooting
pagination_next: null
pagination_prev: null
---

# Troubleshoot access management

This article has troubleshooting tips to help you resolve the issues if you are receiving errors or seeing unexpected behavior related to access management.

## Token and claims

If there are any issues with a user's authentication, you can retrieve and read issued JWTs from a web browser using the **Network** section of the **Developer tools**. By default, the content of the claims in the token is encoded in a non-human readable format. To read the token content, you need to paste it into a JWT decoding tool such as [jwt.ms](https://jwt.ms).

Check that the token contains the claims listed in [this article](../concepts/best_practices_oidc.md#tokens-and-claims) and that the values within the token match the expected values defined in CDF (as it relates to group SIDs specifically).

Below is an example of an OAuth 2.0/OIDC token issued from Azure AD, containing all mandatory information to authenticate the user using the CDF portal application.

```json
{
  "aud": "https://openfield.cognitedata.com",
  "iss": "https://sts.windows.net/~~~~~~~~-~~~~-~~~~-~~~~-~~~~~~~~~~~~5/",
  "iat": 1615211873,
  "nbf": 1615211873,
  "exp": 1615215773,
  "acr": "1",
  "aio": "AZQAa/8TAAAAyJhgrQQDIeLdV6L8ihHRav6lQANXu27jnkK5Y9x+tskrnZgw1mBcZJ8xVcPDWJso/WOop60PruNM4XA14b0H1wrwDX4+q5YX9tC6O6Dx7axTg7Yx3kRfScjO3WBPFRqRp0yPsQ+l8KdcO59FODEaTcLQeBqR9gSZrK/VylSkJ62Cp+47MUnZWmeSC5pX4nR4",
  "amr": ["rsa", "mfa"],
  "appid": "9f039f43-cd64-4d32-abc1-333ca411e5f9",
  "appidacr": "0",
  "email": "glen.sykes@example.com",
  "family_name": "Sykes",
  "given_name": "Glen",
  "groups": [
    "73d09ef9-1295-4193-af7b-da134dfaca70",
    "f5620625-57b9-47fc-82d9-df3df8b2950e"
  ],
  "idp": "https://sts.windows.net/a9ae5b54-3600-4917-a9dc-3020723360b3/",
  "ipaddr": "~~.~~.~~~.~~",
  "name": "Glen Sykes",
  "oid": "b45a1671-9ee5-4810-a4a4-1fdc7c20d8a1",
  "rh": "0.AAAAH7vyMKEox0aobgCZRWEZZUOfA59kzTJNq8EzPKQR5fl6AHw.",
  "scp": "IDENTITY user_impersonation",
  "sub": "mp9krYK2S_QjiFWwTcr-kONiQX4R2Yfb_ww6wCw_Yx8",
  "tid": "30f2bb1f-28a1-46c7-a86e-009945611965",
  "unique_name": "glen.sykes@example.com",
  "uti": "MjCUJzWVzE2AMQkcHtw6AA",
  "ver": "1.0"
}
```

### Missing groups claim

If the `groups` claim is missing from your token, try these solutions.

#### Check the Azure AD token configuration

1. Sign in to the [Azure portal](https://portal.azure.com/) as an admin and navigate to **Azure Active Directory** > **App registration** > _Your app_ > **Token configuration**.

2. Make sure that you have configured Azure AD to emit the `groups` claim in tokens.

#### Check the group membership limit

In larger organizations the number of groups a principal is a member of may exceed the limit of 200 groups that AAD will add to a token.

:::info NOTE
For the implicit flow, the maximum number of group memberships is 5.
:::

To resolve the issue, you need to configure your CDF project to call the MS Graph groups endpoint to obtain group information for the principal. See [Best practices: Authorization and groups](../concepts/best_practices_oidc.md#authorization-and-groups) for details.

### Remove cached permissions

If you have created/updated a CDF group and linked it to a group in Azure AD but don't have access to the CDF project with the new permissions, sign out and delete your browser cache, or wait for the token to expire.

## Issues after migrating from legacy authentication

Try these solutions if you have migrated from legacy authentication to OpenID Connect and are having issues.

### Access CDF projects with new permissions

If you have created/updated a CDF group and linked it to a group in Azure AD but don't have access to the CDF project with the new permissions, sign out and delete your browser cache, or wait for the token to expire.

### Disabled legacy authentication preventing you from signing in

If you have disabled legacy authentication and are locked out:

- If you have set up OIDC authentication correctly, sign in with an account that is a member of an Azure AD group that is mapped in CDF.

- If you still have an issue or have not set up the authentication to OIDC, contact [Cognite Support](mailto:support@cognite.com).

### No default group with OpenID Connect authentication

With OpenID Connect authentication, default groups are deprecated. Instead of assigning capabilities to individual users and applications, you use Cognite Data Fusion (CDF) **groups** to define what capabilities members (users or applications) have to work with different CDF resources. You then link and synchronize the CDF groups to user groups in your identity provider (IdP), for instance, Azure Active Directory (AAD).

Learn more: [Set up Azure AD and CDF groups to control access](../guides/create_groups_oidc.md).

### Use one Azure AD tenant for multiple CDF projects

CDF supports using a single AAD tenant to authenticate in multiple CDF projects. Note that the groups are also shared as the CDF projects share the same Azure AD tenant. If you need to control different access for different projects, you should do it at the group level.

## Using other IdPs than Azure AD

We currently support Microsoft's Azure Active Directory (Azure AD) as the identity provider for CDF. If you want to use another IdP than Azure AD to manage CDF access, such as Google Cloud Platform, Auth0, and Keycloak, see the [Minimum identity provider (IdP) requirements](../concepts/minimum_idp_requirements.md) and contact your Cognite representative or one of our partners.
