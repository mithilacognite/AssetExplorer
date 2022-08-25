---
pagination_next: null
pagination_prev: null
---

# Getting started with DirectQuery

:::info Early adopter

The features described in this section are currently in Beta and are only available to customers via our **Early Adopter** program. For more information and to sign up, visit the [Early Adopter Group](https://hub.cognite.com/groups) on the [Cognite Hub](https://hub.cognite.com).
:::

This article explains how you can use DirectQuery in Power BI to query CDF for data every time you interact with a dashboard instead of importing or copying data into Power BI Desktop.

## Import time series

To query aggregated data points in DirectQuery mode, you first need to **import time series** using the [Power BI PostgreSQL connector](https://docs.microsoft.com/en-us/power-query/connectors/postgresql).

1.  In Power BI desktop, select **Get data** > **Database** > **PostgreSQL database**.

2.  Specify the PostgreSQL database:

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/connect_1.png" alt="Connect import mode" width="80%"/>

    - **Server**: bi.&#123;cluster&#125;.cogniteapp.com (For example, `bi.europe-west1-1.cogniteapp.com`)
    - **Database**: the CDF project name in the cluster.
    - **Data Connectivity mode**: Import.

3.  Enter your credentials to authenticate.

      <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/connect_credentials.png" alt="Connect credentials" width="80%"/>

    - **Username**: email address, i.e user@cognitedata.com
    - **Password**: <dashboard token\>

      To enable dashboard sessions for the project:

      1. Make sure sessions are allowed for your account (capabilities: `sessions:list`, `sessions:create`).
      2. In CDF, navigate to **Manage** > **Manage access** > **Open ID connect** and make sure the token URL is correct.

         The token URL should have this format: https://login.microsoftonline.com/&#123;tenant-id&#125;/oauth2/v2.0/token

      To generate a new dashboard token:

      1. Navigate to **Manage** > **Dashboard sessions** > **New session**
      2. Copy the session token and use it as a password when authenticating with the Power BI PostgreSQL data source.

    <details>

    <summary>Legacy API key authentication</summary>

    - Username: email address, i.e user@cognitedata.com
    - Password: API key

    </details>

4.  Select the time series table you want to import.

      <img class="screenshot" src="/images/cdf/dashboards/powerbi/dq/connect_2.png" alt="Import tables" width="80%"/>

5.  Use a filter to select a subset of the time series to limit the load.

      <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/filter_import.png" alt="Filter time series table" width="80%"/>

## Connect to DirectQuery

1. Select **Get data** > **Database** > **PostgreSQL database** to add a DirectQuery data points table.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/add_dq_datasource.png" alt="Add DQ postgres data source" width="80%"/>

   - **Data Connectivity mode:** DirectQuery
   - **Credentials:** see step 3 above.

   Data points aggregates return an empty result by default.

2. To populate the table with data, you need to apply at least an `external_id` filter to it.

   This example uses DirectQuery, which doesn't require predefined filters. Instead, we apply filters using Power BI relationships and DirectQuery.

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/empty_table.png" width="80%"/>

3. Select **Close & Apply** to close the query editor and start building visualizations.

## Build visualizations

1. Use the data modeler to connect the imported tables with DirectQuery.

   1. Create a **one-to-many** relationship between `timeseries.external_id` (imported) and `datapoint_aggregates.timeseries_external_id` (DirectQuery).
   2. Select **Cross filter direction:** Single

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/relationships.png" width="80%"/>

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/relationships_2.png" width="80%"/>

2. Use slicers to filter what to visualize and the time frame you want to see.

   Select **Slicer** from **Visualizations**, and add a timestamp column from the DirectQuery table.

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/ts_slicer.png" width="80%"/>

3. Add another slicer and add the time series **name** column to it.

4. Add a line chart:

   - **Values:** datapoint_aggregates.average (DirectQuery)
   - **Legend:** timeseries.name (imported)
   - **Axis:** datapoint_aggregates.timestamp (DirectQuery)

    <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/result_dash.png" width="80%"/>

5. The default time slicer in Power BI can only slice down to days, not hours. Combining the default time slicer with the **Microsoft Time Brush Slicer** enables a more fine-grained time slicing.

   Navigate to the Power BI visual marketplace:

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/get_visuals.png" width="80%"/>

6. Search for **Time Brush Slicer**, and **Add** it.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/get_visuals_time_brush2.png" width="80%"/>

7. Add the time brush slicer to your dashboard. To enable slicing, you must populate the slicer with **Timestamp** and **Count** from datapoint aggregates.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/query/time_brush_slicer.png" width="80%"/>
