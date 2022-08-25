---
pagination_next: null
pagination_prev: null
title: Design principles and best practices
---

# Design principles and best practices for authentication and authorization

By connecting Cognite Data Fusion (CDF) to your identity provider (IdP), you can use the IdP framework to manage access to CDF data securely. We currently support Microsoft's **Azure Active Directory (Azure AD)**.

:::info TIP
Visit the **[Manage access to CDF](../../learn/cdf_auth/cdf_auth_intro.md) getting started** course for an introduction to the the technology behind CDF authentication and authorization.
:::

This article explains the [design principles](#design-principles-openid-connect-and-cdf) and [best practices](#best-practices-register-applications-and-set-up-groups) for configuring Azure AD with to manage access to CDF.

## Design principles: OpenID Connect and CDF

This section outlines the design principles for using Azure AD's OpenID Connect implementation to manage access to CDF.

### Authentication and applications

**Authentication** is about determining the identity of a person or application trying to access a resource. It establishes if they are who they say they are.

Applications and users need to get a **token** from the IdP to authenticate and get access to CDF. The token is a very targeted key that grants access for an identity (a **user identity** for people, a **service principal** for applications.)

To learn how to allow **users** to sign in to CDF and Cognite apps with their existing organizational ID, visit [Register the Cognite API and applications in Azure AD](../guides/configure_cdf_azure_oidc.md).

### Authorization and groups

**Authorization** is about determining what level of access an authenticated person or application has. It specifies what data they're allowed to access and what they can do with it.

Access to CDF data and capabilities in CDF projects are governed by policies defined in the customer’s IdP and by resolving the policies into one or more CDF groups where the access scope is defined. The policies are specified in the claims in the tokens that the IdP issues.

You can configure CDF groups to use any OAUTH v2.0 claim to determine access. The most commonly used claim type is `groups`, which is also the claim type recommended by Cognite.

You need to create AD groups to govern access rights to CDF for applications (service principals). For each security group a service service principal is a member of, a groups claim is created and entered into an access token for the service principal.

:::caution Group membership limits
In larger organizations the number of groups a principal is a member of may exceed the limit of 200 groups that AAD will add to a token. For the implicit flow, the maximum number of group memberships is 5.

To resolve the issue, you need to configure your CDF project to call the MS Graph groups endpoint to obtain group information for the principal:

1.  Sign in to the [CDF portal application](https://fusion.cognite.com/) as an admin and navigate to **Manage access** > **OpenID Connect**.
1.  In the **Token URL** field, enter `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/token`.

    Where `$TENANT_ID` is the ID of your Azure AD tenant.

1.  Select **Save configuration**.

:::

#### CDF group mappings for service applications

The configuration tasks to provide the appropriate claims and claim values for **service applications** can vary between IdPs, but the relationships between the entities illustrated above describe the principle that you should apply.

<!-- ![CDF Group Mappings](/images/cdf/access/group_mappings_service_applications.png) -->
<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/group_mappings_service_applications.png" alt="CDF group mappings for service applications" width="100%"/>

To use the most appropriate object (security groups) attributes to populate a groups claim’s value, the service application must be associated to the security group. The configuration method to achieve this varies between Azure Active Directory and on-premises AD/ADFS, however the principle outlined above remains the same.

#### CDF group mappings for users

In large organisations, **users** are likely to be members of multiple security groups.

<img  src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/group_mappings_users.png" alt=" CDF group mappings for users" width="80%"/>

CDF has a limit of 50 groups claims in a single access token. You may need to define rules on the IdP to limit the number of claims that are entered into the token. You should create rules that filter the CDF specific security groups such that only claims values relevant to CDF are included in the access token.

## Best practices: Register applications and set up groups

This section outlines the best practices for registering and configuring applications to **authenticate** with CDF. You'll also find information about setting up groups to **authorize** what data users and applications can access and what they can do with the data.

### Register and configure applications for authentication

The general rules for applications are:

- **Service applications** (applications that have no human interaction, for example extractors) use the [client credentials](authentication_flows_oidc.md#client-credentials-grant) authentication flow. Service applications are sometimes referred to as _daemon applications_. You need to register each service application separately to provide specific access for different service applications and distinguish between security contexts.

- **User applications** (applications that require human interaction, for example the CDF portal application, connectors, and web applications) uses either the **[authorization code grant](authentication_flows_oidc.md#authorization-code-grant)** flow, or the **[implicit grant](authentication_flows_oidc.md#implicit-grant)** flow, depending on the implementation choices of the client application. Where supported, you should use **PKCE**.

Visit [Register and configure components and applications](../guides/configure_apps_oidc.md) to find the detailed configuration and registration steps for Cognite apps and components.

:::caution IMPORTANT
When you register applications using the **client credentials** flow, you should **NOT** share client IDs and secrets across multiple applications, even if the applications have common authentication requirements in CDF. Sharing client IDs and secrets across multiple applications can cause issues with audit logs, with events from multiple entities being identified under a common client ID. The applications may also be subject to rate-limiting.
:::

### Set up groups for authorization

| I want to set up                                                                                                                                                                                                                                                                      | Do this                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>Generic read/write access to assets, time series, events, sequences, files and RAW</li><li>Scoped access to through data sets, one group per dataset or related datasets.</li><li>Scoped access to RAW databases and tables (access to certain databases or tables)</li></ul> | Create an AD group per distinct set of capabilities, and assign group memberships to the service principal in AD.             |
| <ul><li>Extractor type and data source</li><li>Scheduled scripts</li><li>Transformations, split into multiple for different transformation categories / use cases</li><li>Cognite Functions - long running scheduled functions (split per needed access)</li></ul>                    | Create one AD group per service principal and assign the CDF linked group the capabilities required by the service principal. |
