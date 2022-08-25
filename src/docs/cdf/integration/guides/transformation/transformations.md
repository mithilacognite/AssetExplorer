---
pagination_next: null
pagination_prev: null
---

# Transform data

With **CDF Transformations**, you can use [Spark SQL queries](write_sql_queries.md) to transform data from the CDF staging area, RAW, into [the CDF data model](../../../learn/cdf_basics/cdf_basics_datamodel.md). You can continuously monitor the transformations to solve any issues before they reach the data consumer.

:::tip
You can also transform data using [Databricks](./databricks.md), the [Cognite API](../../../../api/v1/#tag/Transformations), the [Cognite Python SDK](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#transformations), and the [Transformations CLI](transformations_cli.md).
:::

## Before you start

Make sure you have completed the steps in [this article](./admin_oidc.md) to register an app for the transformation in your identity provider (IdP) and to set up the necessary folders and capabilities to run or schedule transformations.

## Create a transformation

<!--<img class="media-right" src="../../../../images/cdf/integrations/transformations/create_transformation.png" alt="Create transformation with data set" width="30%"/> -->

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Integrate** > **Transform data**.

1. Select **Create transformation**, enter a unique **name** and a unique **external ID**.

1. Optionally, associate the transformation to an existing **data set**.

   :::tip
   To **make a copy** of an existing transformation, select **...** > **Duplicate** when you've created the transformation.
   :::

1. Under **Destination**, select the CDF resource type you want to ingest data into. The **Destination schema** section lists the required and optional properties for the destination you select. Required columns are marked with an exclamation point.

   :::info Note

   - If you're ingesting data into the **Assets** resource type, make sure a parent asset already exists in CDF.
   - If you're ingesting data into **RAW rows**, specify the RAW database and table you want to write to.

   :::

1. Under **Action**, select how you want to handle data already at the destination.
1. Under **For incoming NULL values on updates**, specify how the transformation should set null values when you **update** existing data at the destination.

   - Select **Keep existing values** to not update existing data. This is the default setting.

   - Select **Clear existing values** to set existing values to null, for example, when a piece of equipment is removed for maintenance. Use this option to disassociate the asset from its parent in the asset hierarchy.

1. In the SQL editor, [specify a Spark SQL query](./write_sql_queries.md) to select and transform RAW data.

   To preview the RAW tables, select **RAW explorer** ( <img class="" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/raw_explorer_icon.png" alt="RAW explorer" /> ) in the sidebar.

1. Select **Preview** to verify that the transformation produces the expected output. To change the maximum number of rows to read from the data sources, select a **source limit**.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/transformations_ui.png" alt="Transformations user interface" width="100%"/>

   The table headings in the **Query results preview** window show the required data types for the selected destination resource type.

1. The first time you run a transformation, you must specify the **credentials** the transformation should use to authenticate with CDF.

   Select **...** > **Set credentials** to specify the **Client ID** and the **Client secret** for the app you [registered for the transformation](./admin_oidc.md) in Azure AD. CDF automatically refills the remaining fields.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/set_credentials_dialog.png" alt="Set credentials menu option" width="60%"/>

   If you don't know what values to enter in these fields, contact your internal help desk or the CDF admin for help.

   Optionally, you can specify separate credentials for reading and writing data, for example, to transform data between different projects.

1. Select **Run now** to manually start a transformation, or follow the steps in [schedule transformations](#schedule-transformations) to run your transformation at regular intervals.
 

## Schedule transformations

1. Select **Schedule** to specify when and how often you want the transformation should run.

  <!-- **Client ID**: Enter the object ID for the AAD group exactly as it exists in AAD. 
    
   **Client secret**: Enter the client secret for the AAD group exactly as it exists in AAD. 

  **Token URI**: Enter a valid token from your Idp. To edit, use this format: \<https://login.microsoftonline.com/<YOUR_AAD_TENANT_ID>/oauth2/v2.0/token>.
    
   **Scope**: This is the base URL + .default from your CDF project. To edit, use this format:\<BASE URL/.default>
     
  **CDF project name**: This is the CDF project you have signed in to. To edit, use this format: <your_CDF_project_name> -->

3. Select a predefined schedule or specify a [cron expression](https://en.wikipedia.org/wiki/Cron).

   For example, `45 23 * * *` will run the transformation at 23:45 (11:45 PM) every day.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/set_schedule.png" alt="Set transformation schedule" width="50%"/>

1. Select **Set schedule** to activate the schedule. When you schedule a transformation, CDF sets it to read-only to prevent unintentional changes to future scheduled jobs.

   :::tip TIP

   To edit credentials, schedules, and notifications for the selected transformation, navigate to the **Home** ( <img class="" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/home_icon.png" alt="Home" /> ) section in the sidebar.

   :::

## Monitor transformations

To **monitor the transformation process** and solve any issues before they reach the data consumer, you can subscribe to email notifications if a transformation fails.

1. Navigate to the **Home** ( <img class="" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/home_icon.png" alt="Home" /> ) section in the sidebar and select **Notifications > Edit**.

   <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/monitor_transformations.png" alt="Monitor transformations" width="80%"/>


