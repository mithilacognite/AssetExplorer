---
pagination_next: null
pagination_prev: null
---

# Identity and access management

It can be challenging to build secure applications while minimizing complexity for users. How do you give users secure access to an application to help them do their jobs without requiring them to remember a new username, password, or other credentials?

**OpenID Connect** lets users authenticate with a single account to multiple applications. It is an industry-standard protocol supported by many popular **identity providers** (IdP). 

:::info note
We currently only support Microsoft's **Azure Active Directory (Azure AD)**. If you want to use another IdP than Azure AD to manage access to CDF, it must meet [these minimum requirements](../access/concepts/minimum_idp_requirements.md).
:::

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/idp.png" alt="IdP" width="100%"/>

By registering the CDF portal application and other Cognite components and applications in your IdP, you can use OpenID Connect and your existing IdP framework to **manage access** to CDF applications and data **securely**. We currently support Azure AD.

:::info TIP
Visit the [Manage access to CDF](../learn/cdf_auth/cdf_auth_intro.md) getting started course for an introduction to the technology behind CDF authentication and authorization.
:::

## Step 1: Get set up

### Register core Cognite applications

As an Azure Active Directory (AD) administrator, you can consent for your entire organization to use the CDF portal application and other Cognite applications. Users can sign in with their organizational identity without having to consent themselves.

**Next steps**: [Register core Cognite applications in Azure AD](guides/configure_cdf_azure_oidc.md)

### Set up groups to control access

Instead of assigning capabilities to individual users and applications, you create **groups** in CDF to define what **capabilities** members (users or applications) have to work with different CDF resources. Then you link and synchronize the CDF groups to user groups in the IdP and continue to manage users and applications in your IdP.

**Next steps**: [Create and link groups](guides/create_groups_oidc.md)

## Step 2: Register and configure local apps

When you have set up the core applications and groups and verified that users can sign in with their organizational IDs, it's time to register and configure the apps and components you need for your data integration pipelines, contextualization flows, and data dashboards and to start developing solutions.

**Next steps**: [Register and configure components and applications](guides/configure_apps_oidc.md)

## Step 3: Dive deeper

Get in-depth knowledge that will help you implement an entire project.

### Design principles

Learn about the design principles for using Azure AD's OpenID Connect implementation to manage access to CDF.

**Next steps**: [Design principles: OpenID Connect and CDF](concepts/best_practices_oidc.md#design-principles-openid-connect-and-cdf)

### Best practices

See the best practices for registering and configuring applications to **authenticate** with CDF. You'll also find information about setting up groups to **authorize** what data users and applications can access and what they can do with the data.

**Next steps**: [Best practices: Register applications and set up groups](concepts/best_practices_oidc.md#best-practices-register-applications-and-set-up-groups)

### Authentication flows

Users, services, and applications are responsible for obtaining the appropriate token from the IdP to access the Cognite API.

The way these tokens are granted may vary, depending on the software vendor's implementation. Learn more about the most relevant grants for CDF.

**Next steps:** [Authentication flows](concepts/authentication_flows_oidc.md)

### Access token scopes

**Next steps:** [Access token scopes](concepts/access_token_scopes.md)

## Step 4: Fix issues

If you are receiving errors or seeing unexpected behavior, our troubleshooting tips can help you resolve the issues.

**Next steps:** [Troubleshoot access management](troubleshooting/troubleshoot_oidc.md)