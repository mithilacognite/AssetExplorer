---
pagination_next: null
pagination_prev: null
---

# Legacy vs new authentication

:::caution IMPORTANT
We have **deprecated** legacy authentication and strongly encourage customers to [**migrate**](../guides/migrate_apikeys_oidc) to the new authentication flow as soon as possible.

Follow the steps in the [**migration guide**](../guides/migrate_apikeys_oidc) to move from using API authentication to using token authentication with your identity provider (IdP).
:::

## Legacy authentication

The **legacy authentication** involves [managing access for applications and services](../guides/give_access_services.md) using **service accounts** and **API keys**, and user sign-in via the **`/login`** API endpoint.

## New authentication

The **new authentication** flow allows you to manage CDF access securely through [your own identity provider (IdP) and OpenID Connect to register applications and services](../index.md).

**OpenID Connect** lets users authenticate with a single account to multiple applications. It is an industry-standard protocol supported by many popular **identity providers** (IdP), such as Azure Active Directory (**Azure AD**), Microsoft's cloud-based identity and access management service.

Instead of assigning capabilities to individual users and applications, you create groups in CDF to define what capabilities members (users or applications) have to work with different CDF resources. Then you link and synchronize the CDF groups to user groups in the IdP and continue to manage users and applications in your IdP.

:::tip
Visit the [Manage access to CDF](../../learn/cdf_auth/cdf_auth_intro.md) getting started course for an introduction to the technology behind CDF authentication and authorization.
:::

### Benefits of the new authentication flow

- **Increased security** - OIDC uses short-lived tokens (pointing to your permissions in a single registry) over hard-coded shared passwords and duplicated permissions.
- **Simplified administration** - All credentials and permission orchestration happens in a single place, with the tools your IT department knows already.
- **Enhanced user experience** - OIDC makes it effortless for your employees to use applications or services built on top of Cognite Data Fusion.
- **Improved communication** - OIDC standard introduces a vocabulary all IT and Security people are aware of. The use of that vocabulary streamlines and makes our communication with customers professional.
- **Build for the future** - OIDC is a foundational component of a comprehensive and long-term Identity Access Management (IAM) vision.
