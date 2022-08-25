---
pagination_next: null
pagination_prev: null
---

# Retrieve data from Cognite Data Fusion (CDF) in Power BI

Power BI is a business analytics solution that lets you visualize your data and share insights across your organization, or embed them in your app or website.

This article explains how you can use the **Cognite Power BI connector** to connect a Cognite Data Fusion (CDF) project as a data source in [**Power BI Desktop**](https://powerbi.microsoft.com/en-us/desktop/) to query, transform and visualize data that is stored in CDF.

:::info NOTE
The steps below assume that an administrator has followed the instructions in [**Setup and administration for Power BI**](admin.md) to register and consent for an organization to use the **Microsoft Power Query for Excel** application and allow the **Cognite Power BI Connector** to use it to impersonate and act on behalf of a user to retrieve data from a CDF project.
:::

## Use a CDF project as a data source in Power BI Desktop

To connect to a CDF project and use it as a data source in Power BI Desktop:

1. First, make sure that you have installed the **March 2020 version** (or later) of Power BI Desktop. To automatically stay updated with the latest version, download Power BI Desktop from [the Microsoft Store](https://go.microsoft.com/fwlink/?linkid=2101122).

2. In **Power BI Desktop**, make sure that you **sign in** with your organizational account.

3. On the **Home** tab in the ribbon, select **Get Data** and then **More**. Then, in the Get Data dialog box, select **Other** and the **Cognite Data Fusion** connector.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/get_data.png" alt="Get data" width="80%"/>

4. Enter the CDF project that you want to connect to, for example, **publicdata**.

   **Optional**: If the CDF project is on a custom cluster, set the CDF Environment to the URL of the API server for the cluster. If you're not sure, leave the field blank.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/project.png" alt="Project" width="60%"/>

5. In the Authentication dialog, select **Organizational account** and then **Sign in** with your organizational ID
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/sign_in.png" alt="Authentication" width="60%"/>

   **Optional:** If your organization is using API keys to control access to the CDF project, select **API key** and specify the API key to connect to the CDF project.

   :::info Note
   We are deprecating authentication via CDF service accounts and API keys.
   :::

6. Select **Connect**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/connect.png" alt="Authentication" width="60%"/>

7. Select a table, for instance **Timeseries**, and then select **Transform Data**.

   :::info NOTE
   You probably don't want to load the full table as it could contain hundreds of thousands of entries.
   :::
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/navigator.png" alt="Navigator" width="60%"/>

8. You can now transform the data with the Power Query Editor.

   If you want to limit the data set, you can, for example, select **Keep Rows** > **Keep Top Rows** and set a value, for instance **1000**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/powerquery.png" alt="Navigator" width="80%"/>

   To load the resulting values into Power BI, select **Close and Apply**.

**Learn more** about Power BI:

- [Microsoft Docs](https://docs.microsoft.com/en-us/power-bi/)
- [Microsoft Learn](https://docs.microsoft.com/en-us/learn/powerplatform/)

<!-- -->
