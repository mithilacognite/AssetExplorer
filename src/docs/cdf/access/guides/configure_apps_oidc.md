---
pagination_next: null
pagination_prev: null
title: Register and configure apps
---

# Register and configure applications and components

The table below lists applications and components with links to configuration steps and details about the authentication flows they use.

| Application configuration steps                                                                                                                                                 | Authentication flow                                                                                                                                                                                                                                                                               | Client secret required? | Azure AD multi-tenant | Comments                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [The CDF portal application, Best Day, InField, Maintenance Planner, Solutions Portal](../guides/configure_cdf_azure_oidc.md#step-2-register-a-cognite-application-in-azure-ad) | [Authorization code grant](../concepts/authentication_flows_oidc.md#authorization-code-grant)                                                                                                                                                                                                     | N                       | Y                     | The registration is automatically created when signing in. Needs administrator consent.                                                                                                                                                                                                                                                                                                                                      |
| [Cognite extractors/ scheduled custom scripts](../../integration/guides/extraction/admin_oidc.md)                                                                               | [Client credentials](../concepts/authentication_flows_oidc.md#client-credentials-grant)                                                                                                                                                                                                           | Y                       | N                     | One app registration per extractor/script and environment (for example, _dev_, _test_, _prod_).                                                                                                                                                                                                                                                                                                                              |
| [CDF Transformations](../../integration/guides/transformation/admin_oidc.md)                                                                                                    | <ul><li>[Client credentials](../concepts/authentication_flows_oidc.md#client-credentials-grant)</li><li>[On behalf of](../concepts/authentication_flows_oidc.md#on-behalf-of-flow)<sup>\*</sup></li></ul>                                                                                         | Y\*                     | N                     | Needs multiple app registrations. Transformations that logically belong together (access rights are managed together) can share the app registration, but may be subject to rate-limiting. <p></p>\* Time-limited jobs can run on behalf of a user.                                                                                                                                                                          |
| [Cognite Data Source for Grafana](../../dashboards/guides/grafana/admin_oidc.md)                                                                                                | <ul><li>[Authorization code grant](../concepts/authentication_flows_oidc.md#authorization-code-grant)</li><li>[Client credentials](../concepts/authentication_flows_oidc.md#client-credentials-grant)</li></ul>                                                                                   | Y                       | N                     | The Cognite Data Source for Grafana uses Grafana credentials to connect to CDF. Therefore, you need to set up the Grafana instance to authenticate the user towards the same identity provider (IdP) as your CDF project. <p></p>Alternatively, you can provide client credentials for each instance of the Cognite Data Source.                                                                                             |
| [Cognite Power BI connector](../../dashboards/guides/powerbi/admin.md)                                                                                                          | [Authorization code grant](../concepts/authentication_flows_oidc.md#authorization-code-grant)                                                                                                                                                                                                     | N                       | Y                     | The registration is automatically created when signing in. Needs administrator consent. <p></p>The Cognite Power BI Connector and Excel both use the Microsoft Power Query for Excel enterprise application to retrieve data from CDF. If your organization is using both the Cognite Power BI Connector app and Excel to retrieve data from CDF, you only need to register Microsoft Power Query for Excel for one of them. |
| [Excel](../../dashboards/guides/excel/admin.md)                                                                                                                                 | [Implicit grant](../concepts/authentication_flows_oidc.md#implicit-grant)                                                                                                                                                                                                                         | N                       | Y                     | The registration is automatically created when signing in. Needs administrator consent.                                                                                                                                                                                                                                                                                                                                      |
| [Custom web applications](register_custom_webapp.md)                                                                                                                            |                                                                                                                                                                                                                                                                                                   | N                       | N                     | Redirect URI of type _Web_.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Desktop apps/ Postman/Python SDK/Jupyter/ One-off/short-term scripts](../../../dev/guides/sdk/python/register_app_jupyter_sdk.md)                                              | <ul><li>[Implicit grant](../concepts/authentication_flows_oidc.md#implicit-grant)</li><li>[Client credentials](../concepts/authentication_flows_oidc.md#client-credentials-grant)</li><li>[Authorization code grant](../concepts/authentication_flows_oidc.md#authorization-code-grant)</li></ul> | N                       | N                     | Redirect URI of type InstalledClient (Mobile / Desktop application). Users can sign in using their browser and use the acquired token in for example Jupyter.                                                                                                                                                                                                                                                                |

<!-- | Cognite Functions                                                                                                                                                     | <ul><li>[Client credentials](../concepts/authentication_flows_oidc.md#client-credentials-grant)</li><li>[On behalf of](../concepts/authentication_flows_oidc.md#on-behalf-of-flow)<sup>\*</sup></li></ul>                                                                                         | Y\*                     | N                     | Needs multiple app registrations. Functions that logically belong together (access rights are managed together) can share the app registration, as long as the jobs are not exceeding rate limit thresholds enforced per service principal in the CDF API.<p></p>\* Time-limited jobs can run on behalf of a user.        | -->

:::caution IMPORTANT
When you register applications using the **client credentials** flow, you should **NOT** share client IDs and secrets across multiple applications, even if the applications have common authentication requirements in CDF. Sharing client IDs and secrets across multiple applications can cause issues with audit logs, with events from multiple entities being identified under a common client ID. The applications may also be subject to rate-limiting.
:::