---
pagination_next: null
pagination_prev: null
---

# Cognite RAW

As a system integrator, you can stream or batch extract data into the Cognite Data Fusion (CDF) staging area, called **Cognite RAW**.

To spot anomalies or data that need cleanup before [transforming](../transformation/transformations.md) into the CDF data model, navigate to **Manage staged data** in CDF. You can view the ingested **tabular** data in a table or as a standard data profiling report in the **RAW explorer**.

Alternatively, you can transform the data in your cloud and bypass Cognite RAW to integrate the data directly into the [CDF data model](../../../learn/cdf_basics/cdf_basics_datamodel.md).

<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/extraction/raw_ingestion.png" alt="Cognite RAW ingestion" width="100%"/>

## Before you start

To stage data in Cognite RAW, you need the capabilities listed [here](../../../access/guides/capabilities#manage-staged-data).

Contact your CDF project administrator if you don't have the necessary capabilities.

## Set up databases and tables in Cognite RAW

Use the **RAW explorer** to set up databases and tables before you ingeste data in its **original form**. Keeping the original form of the data reduces the load on the source systems, allows you to minimize logic in the extractors, and makes it easy to re-run transformations on data in the cloud.

The example below shows how you can also upload CSV files directly to Cognite RAW.

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Integrate** > **Browse staged data**.

1. Select **Create database**, enter a unique **name**, and select **Create**. Note that you cannot rename a database.

1. Select **Create table**, enter a unique **name**, and select **Create**. Note that you cannot rename a table.

1. Select **Upload CSV** and drag or upload your CSV file.

1. Select the **primary key** column. This column can only contain unique values and cannot be changed once set. Alternatively, you can select **Generate a new key column** which generates a new unique key per row in your table. Note: If a non-unique column is used as the primary key, you might risk losing some data.

   :::tip tip
   If you're unsure of which primary key to use and want to simulate different scenarios, upload the same CSV file to different tables by using separate tabs in your browser.
   :::

## Data profiling and data viewing

To get in-depth knowledge about the data quality, discover patterns, outliers, and see other statistics on the **Profile** tab. For additional details, you can also view the actual data, and sort and filter each columns on the **Table** tab.

Report your findings to the data owners to find the best fit for the primary key column and contextualization and to provide the best support for the end-users of the data. Keep iterating on the data integrations to improve the data quality and prepare the data transformation into the CDF data model. Profiling has a maximum limit of 1 million rows per table. Rows exceeding the limit will not be profiled.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/extraction/data_profiling.png" alt="Data profiling tab" width="100%"/>
