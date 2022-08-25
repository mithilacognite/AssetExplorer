---
pagination_next: null
pagination_prev: null
---

# Retrieve data from Cognite Data Fusion (CDF) in Excel

This article explains how you can connect a Cognite Data Fusion (CDF) project as a data source in **Excel** to query, transform and visualize data that is stored in CDF.

:::info NOTE
The steps below assume that an administrator has followed the instructions in [**Setup and administration for Excel**](admin.md) to register and consent for an organization to use the **Microsoft Power Query for Excel** application and allow **Excel** to use it to impersonate and act on behalf of a user to retrieve data from a CDF project.
:::

## Use a CDF project as a data source in Excel

To connect to a CDF project and use it as a data source in Excel:

1. In **Excel**, select **Data** > **Get data** > **From Other Sources** > **From OData Feed**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_menu.png" alt="Get data " width="80%"/>

2. Enter the **URL** for the CDF project you want to connect to:

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_url.png" alt="Project " width="60%"/>

   - Where _<cluster\>_ is the name of the CDF cluster, for example `westeurope-1`.
   - Where _<project\>_ is the name of the CDF project, for example `cogtosoorg`.

3. In the Authentication dialog, select **Organizational account** and then **Sign in** with your organizational ID.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_sign_in.png" alt="Authentication " width="60%"/>

4. Select **Connect**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/excel/odata_connect.png" alt="Authentication " width="60%"/>

5. In the Navigator, select a table, for instance **Timeseries**, and then select **Transform Data**.

   :::info TIP
   You probably don't want to load the full table as it could contain hundreds of thousands of entries.
   :::

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/navigator.png" alt="Navigator " width="60%"/>

6. You can now transform the data with the Power Query Editor.

   If you want to limit the data set, you can, for example, select **Keep Rows** > **Keep Top Rows** and set a value, for instance **1000**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/powerquery.png" alt="Navigator " width="60%"/>

   To load the resulting values into Excel, select **Close and Apply**.

<!-- 5. In the Authentication dialog, select **Organizational account** and then **Sign in** with your organizational ID

   ![Authentication](/images/cdf/dashboards/powerbi/sign_in.png)

   **Optional:** If your organization is using API keys to control access to the CDF project, select **API key** and specify the API key to connect to the CDF project.

   **Note:** We are deprecating authentication via CDF service accounts and API keys.

6. Select **Connect**.

   ![Authentication](/images/cdf/dashboards/powerbi/connect.png) -->
