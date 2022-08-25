---
pagination_next: null
pagination_prev: null
---

# Setup and administration for Power BI

You can use OpenID Connect and your existing identity provider (IdP) framework to manage access to CDF data securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

This article explains how an Azure Active Directory (AD) administrator can register and consent for an organization to use the **Microsoft Power Query for Excel** application and allow the **Cognite Power BI Connector** to impersonate and act on behalf of a user to retrieve data from a CDF project.

When you have registered the **Microsoft Power Query for Excel** application, users can sign in with their organizational ID and use the Cognite Power BI Connector to [retrieve data from a CDF project](retrieve_data_from_cdf.md).

:::info NOTE
The **Cognite Power BI Connector** and **Excel** both use the Microsoft Power Query for Excel enterprise application to retrieve data from CDF. If your organization is using both the Cognite Power BI Connector app and Excel to retrieve data from CDF, you only need to register Microsoft Power Query for Excel for one of them.  
:::

## Register the **Microsoft Power Query for Excel** application

Follow the steps below to register the **Microsoft Power Query for Excel** application and allow the **Cognite Power BI Connector** to use it to impersonate and act on behalf of a user to retrieve data from a CDF project:

1.  First, make sure that you have:

    - [Registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md).
    - [Set up Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md) to control access to CDF data.
    - Installed the **March 2020 version** (or later) of Power BI Desktop. To automatically stay updated with the latest version, download Power BI Desktop from [the Microsoft Store](https://go.microsoft.com/fwlink/?linkid=2101122).

1.  Open **Power BI Desktop**.

1.  On the **Home** tab in the ribbon, select **Get Data** and then **More**. Then, in the Get Data dialog box, select **Other** and the **Cognite Data Fusion** connector.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/get_data.png" alt="Get data" width="80%"/>

1.  Enter the CDF project that you want to connect to, for example, **publicdata**.
    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/project.png" alt="Project" width="60%"/>

    **Optional**: If the CDF project is on a custom cluster, set the CDF Environment to the URL of the API server for the cluster. If you're not sure, leave the field blank.

    :::info NOTE

    If you need to sign in to Azure AD as a **guest user**, specify your Azure AD tenant:
    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/sign_in_guest.png" alt="Sign in guest" width="60%"/>

    :::

1.  In the Authentication dialog, select **Organizational account**, and then **Sign in**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/sign_in.png" alt="Sign in " width="60%"/>

1.  Sign in with an **Azure AD admin** account, then review and consent to the permission request on behalf of your organization, and select **Accept**.
    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/admin_consent.png" alt="Admin consent" width="40%"/>

1.  The **Microsoft Power Query for Excel** application has now been registered in Azure AD. To test that the connection is working, select **Connect**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/connect.png" alt="Connect" width="60%"/>

1.  In the Navigator, you should see the tables and data you have access to in CDF.
    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/navigator_verify.png" alt="Navigator" width="60%"/>

1.  **Verify** that the configuration is successful: Sign in to Power BI Desktop with a non-admin identity to confirm that regular users in your Azure AD can sign in and [retrieve data from the CDF project](retrieve_data_from_cdf.md).
