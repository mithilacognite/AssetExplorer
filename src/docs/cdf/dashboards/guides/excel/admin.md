---
pagination_next: null
pagination_prev: null
---

# Setup and administration for Excel

You can use OpenID Connect and your existing identity provider (IdP) framework to manage access to CDF data securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

This article explains how an Azure Active Directory (AD) administrator can register and consent for an organization to use the **Microsoft Power Query for Excel** application and allow **Excel** to impersonate and act on behalf of a user to retrieve data from a CDF project.

When you have registered the **Microsoft Power Query for Excel** application, users can sign in with their organizational ID to [retrieve data from a CDF project](retrieve_data_from_cdf.md).

:::info NOTE

The **Cognite Power BI Connector** and **Excel** both use the Microsoft Power Query for Excel enterprise application to retrieve data from CDF. If your organization is using both the Cognite Power BI Connector app and Excel to retrieve data from CDF, you only need to register Microsoft Power Query for Excel for one of them.

:::

<!-- Users sign in with their organizational identity. -->

## Register the Microsoft Power Query for Excel application

Follow the steps below to register the **Microsoft Power Query for Excel** application and allow **Excel** to use it to impersonate and act on behalf of a user to retrieve data from a CDF project:

1.  First, make sure that you have:

    - [Registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md).
    - [Set up Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md) to control access to CDF data.

1.  Open **Excel**.

1.  Select **Data** > **Get data** > **From Other Sources** > **From OData Feed**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_menu.png" alt="Get data " width="80%"/>

4.  Enter the **URL** for the CDF project you want to connect to:

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_url.png" alt="Project " width="60%"/>

    - Where <cluster\> is the name of the CDF cluster, for example `westeurope-1`.
    - Where <project\> is the name of the CDF project, for example `cogtosoorg`.

    :::info TIP

    If you need to sign in to Azure AD as a guest user, select **Advanced** and specify your Azure AD tenant:

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_sign_in_guest.png" alt="Authentication " width="60%"/>

    :::

5.  In the Authentication dialog, select **Organizational account**, and then **Sign in**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_sign_in.png" alt="Guest sign in " width="60%"/>

6.  Sign in with an **Azure AD admin** account, then review and consent to the permission request on behalf of your organization, and select **Accept**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/admin_consent.png" alt="Admin consent" width="40%"/>

7.  The **Microsoft Power Query for Excel** application has now been registered in Azure AD. To test that the connection is working, select **Connect**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_connect.png" alt="Authentication " width="60%"/>

8.  In the Navigator, you should see the tables and data you have access to in CDF.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/navigator.png" alt="Navigator " width="60%"/>

9.  **Verify** that the configuration is successful: Sign in to Excel with a non-admin identity to confirm that regular users in your Azure AD can sign in and [retrieve data from the CDF project](retrieve_data_from_cdf.md).
