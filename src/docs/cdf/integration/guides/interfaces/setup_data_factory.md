---
title: Setup Azure Data Factory
pagination_next: null
pagination_prev: null
---

# Use Azure Data Factory with PostgreSQL gateway

<!-- trigger build -->

Ingest data with your existing ETL tool into the CDF staging area, [Cognite RAW](././ingest_into_raw.md), or into the [CDF data model](../../../learn/cdf_basics/cdf_basics_datamodel.md) with the PostgreSQL gateway.

:::info info
CDF supports ingestion using Microsoft's Azure Data Factory (ADF).
:::

<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_data_flow.png" alt="ETL data flow" width="80%"/>

This article shows how to create a **simple** data pipeline in ADF to copy data from a file in Azure blob storage and ingest it to CDF. Based on your data source and your data processing requirements you may need to create more advanced data pipelines in [Azure Data Factory](https://docs.microsoft.com/en-in/azure/data-factory/data-factory-tutorials).

## Before you start

1. Make sure you have an Azure subscription and have created [Azure resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

1. Make sure you have created an [Azure storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create).

1. Make sure you have the file containing the data to be ingested to CDF in Azure blob storage.

## Step 1: Create a data factory

1. Sign in to the [Azure portal](https://portal.azure.com) as an admin.

1. If you have access to multiple tenants, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png"/> in the top menu to select the tenant in which you want to register a data factory.

1. Search for and select **Data Factory**.

1. Click **Create** to open the **Data Factory** page.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_create.png" alt="Create Azure Data Factory" width="60%"/>

1. On the **Basics** tab:

   - **Subscription:** Select the Azure subscription in which you want to create the data factory.
   - **Resource group:** Create or select the Azure resource group you want to use.
   - **Region:** Select a location where your ADF metadata will be stored. This list only shows locations that ADF supports.
   - **Name:** Enter a globally unique name for the data factory.
   - **Version:** Select V2.

1. Click **Next: Git configuration** and fill in the required fields or select **Configure Git later**.

1. Click **Review + Create** > **Create**.

1. After the creation is complete, open the data factory and select the **Author & Monitor** tile to start the Azure Data Factory application in a separate tab.

## Step 2: Create an ADF pipeline and set the source system

Use the **Copy data** tool to create a pipeline that reads data from a file in your data storage and writes to CDF.

1. On the **Let's get started** page, select the **Create pipeline** tile.

1. Open **Activities** > **Move and transform**.

1. Drag and drop the **Copy data** onto the canvas and enter a unique name in the **Name** field.

1. Open the **Source** tab > **New**.

1. Select the **datastore** that references the source system you're extracting from. In this example, we'll extract data from a .csv file in Azure Blob Storage.

1. Click **Continue**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_copy_data.png" alt="Azure Copy data" width="60%"/>

1. Create a **new linked service** that links your data store to the data factory.

      1. Enter a unique **name** for the service.
      1. Select your **Azure subscription** and **storage account**.
      1. Click **Test connection** to make sure you are connected to the selected storage account.
      1. Click **Create**.

      <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_set_source.png" alt="Azure Set source" width="60%"/>

1. Under **Set properties**, set the file you want to read data from.

   1. Enter a unique **name** for the source data set.
   1. Browse to the file you want to use.
   1. Select **First row as header** to reuse the source file's header columns.
   1. Click **OK**.

## Step 3: Set PostgreSQL gateway as sink

In this step, add the PostgreSQL gateway as the destination using a **sink** in ADF.

1. Open **Copy data** > **Sink** tab.

1. In the **Sink dataset** field, select **New**.

1. Select or search for **Azure Database for PostgreSQL**.

1. Click **Continue**.

1. Click **Open** to open the sink data set.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/open_sink.png" alt="Open linked service for sink" width="60%"/>

1. On the **Connection** tab, add a linked service for the sink data set.

   1. Click **New** to add a linked service.

   2. Under **Account selection method** > **Enter manually**.

   3. In the **Fully qualified domain name** field, enter `skywarp.[cluster].cognite.ai` where _[cluster]_ is where your CDF instance is installed. If you don't know the cluster name, contact Cognite support.

   4. In the **Port** field, enter 5432, which is the default port for the PostgreSQL gateway.

   5. For **Database name** and **User name**, enter the [username returned from the PostgreSQL gateway](./postgres_gateway.md).

   6. In the **Password** field, enter the password returned from the PostgreSQL gateway.

   7. In the **Encryption method** field, select **SSL**.

   8. Optionally, select **Validate server certificate**.

   9. Click **Test connection** to make sure you are connected to the Azure database for PostgreSQL.

1. Click **Create**.

## Step 4: Set the destination database table

Back on the **Connection** tab, you need to select the destination table from the tables available in your PostgreSQL gateway database. You can choose between several [resource types](https://docs.cognite.com/cdf/learn/cdf_basics/cdf_basics_datamodel.html#resource-types-to-store-data) like assets, events, and data points.

1. In the **Table** field, select the table matching the destination [RAW table](./ingest_into_raw.md) or the CDF resource type `public.<cdf_resource_type>`, for instance, _public.assets_ or _public.timeseries_.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_public_tables.png" alt="ADF public tables" width="60%"/>

2.  Navigate back to the **Sink** tab on your pipeline.
    :::info note
    Ensure **Write method** is selected as **Bulk insert**.
    :::

       <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_bulk_insert.png" alt="ADF Bulk insert" width="60%"/>

## Step 5: Map the source and destination tables

1. Open the **Mapping** tab on your pipeline.

1. Click **Import schemas** to import the table columns and remove the lines you won't use.

1. Map the columns according to your requirements.

1. Click **Debug** in the top bar to run the PostgreSQL gateway.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_mapping.png" alt="ADF mapping tables" width="60%"/>

## Step 6: Report run status for data extractions

Monitor the data integration into CDF to quickly catch failed runs to start troubleshooting and notify data set owners and stakeholders. You can see an overview of all extraction pipelines' status on the [Extraction pipelines](../interfaces/about_integrations.md) page. To set up status reporting:

1.  Open Azure Data Factory.

1.  Navigate to the **Copy data** activity created for the extraction pipeline, click the plus (+) sign, and select **Success**.

      <img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_report_status_success.png" alt="ADF setup of successfull status reporting" width="33%"/>

1.  Drag and drop an additional **Copy data** activity onto the canvas and link it to the **Success** activity.

1.  On the **Source** tab:

    - Enter a source data set, but note that no data is read from this data set. You can, for instance, enter the data set already used in the previous pipeline.

    - Create two additional columns named `integration_status` with content `success` and `integration_external_id` with the [extraction pipeline's](../interfaces/about_integrations.md) external ID as content.

       <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_additional_columns.png" alt="ADF additional columns" width="60%"/>

1.  On the **Sink** tab:

    1. In the **Sink dataset** field, click **New** and reuse the sink and linked service from the previous pipeline.

    1. In the **Table** field, browse and select the foreign table `public.extraction_pipeline_runs`.

      <img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_run_status_table.png" alt="ADF extractionpipeline.run table" width="60%"/>

    :::info note
    Ensure **Write method** is selected as **Bulk insert**.
    :::

1.  On the **Mapping** tab, create two mapping rows:

    - Row 1: Enter `integration_external_ID` as **source** and the `externalId` as **destination**.
    - Row 2: Enter `integration_status` as **source** and `status` as **destination**.

1.  Navigate back to the **Copy data** activity created for the pipeline, click the plus (+) sign, and select **Failure**.

1.  Drag and drop an additional **Copy data** activity onto the canvas and link to the **Failure** activity.

1.  Follow the steps above, but on the **Source** tab, enter `failure` as content for the `integration_status`column.

      <img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_report_status.png" alt="ADF setup for status reporting" width="60%"/>

## Troubleshooting

**Invalid token**

If you have a valid token but still get `invalid token` when you create a user in the PostgreSQL gateway, try these solutions:

- The groups in Azure AD and CDF are correctly linked in **Manage & Configure** > **Access management** in CDF. See step 3 above.

- The CDF group is set up with the `Project:list` and `Group:list` capabilities in **Manage & Configure** > **Access management** in CDF.
