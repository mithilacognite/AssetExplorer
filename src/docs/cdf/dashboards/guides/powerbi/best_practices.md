---
pagination_next: null
pagination_prev: null
---

# Tips and best practices

Read this article learn best practices and get tips on getting the most out of the Cognite Power BI connector.

## Performance best practices

The performance of the Cognite Power BI connector depends on the Cognite Data Fusion (CDF) resource types you access. For example, reading 1M data points takes around 2:30 - 3:00 minutes (6K data points per second). Each full request takes an average of 120 ms, and the connector adds an average of 20 ms to each request to CDF.

Follow these general best practices to make sure you get the best and most reliable performance:

- Don't use OR expressions or expanding tables.
- Use multiple queries when possible.
- Use incremental refresh.
- Partition data sets if possible.
- Keep only the data you need. Remove unnecessary columns and data.
- Keep historical data in a separate report if you don’t need the data on a daily basis. Refresh the historical data report when you need the data.
- Reduce the number of calculations/operations in the front end, and try to do as much as possible in the data modelling.

## Write performant queries

The OData service accepts multiple concurrent requests and processes the requests in parallel. Power BI also dispatches multiple queries concurrently when possible.

Therefore, it's better to compose and use **multiple queries** instead of a single complex query with, for example, OR expressions or expands. A single complex query needs to be iterated sequentially with the added round-trip latency for each request.

Instead, try to download the data using multiple queries:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/multiple_queries.png" alt="Multiple queries" width="60%"/>

Next, join the resulting tables in the Power BI data model. This lets you to work with the tables as if they were a single table:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/join_tables.png" alt="Join tables" width="80%"/>

## Use incremental refresh

Incremental refresh enables very large datasets in Power BI with the following benefits:

- **Refreshes are faster** - Only data that has changed needs to be refreshed. For example, refresh only the last five days of a ten-year dataset.

- **Refreshes are more reliable** - It's no longer necessary to maintain long-running connections to volatile source systems.

- **Resource consumption is reduced** - Less data to refresh reduces overall consumption of memory and other resources.

[Learn more](https://docs.microsoft.com/en-us/power-bi/admin/service-premium-incremental-refresh) about incremental refresh.

## Partition large datasets

If you need to download very large datasets, try to partition the dataset and have a separate query to reading each partition. Power BI processes multiple queries concurrently, and by partitioning the dataset you can improve the performance significantly.

For example, if you are reading data points from the last 2 years, try splitting the query into 2 queries, each reading one year of data each. Then merge (concat) the tables in Power BI.

## Clear the cache

Power BI caches the service manifest that describes the schema of the OData service. When the connector or OData service is upgraded, you may need to clear the Power BI cache to force Power BI to re-read the service manifest.

To clear the cache:

1. In Power BI Desktop, select **File** > **Options & Settings** > **Options** > **Data Load**.

2. Under **Data Cache Management Options**, select **Clear Cache**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/clear_cache.png" alt="Clear cache" width="60%"/>

## Queries taking too long time

A CDF project can contains hundreds of millions of rows of data, and loading them all into Power BI is not feasible. If your query takes hours to execute, you are most likely trying to load too much data. Best practice is to use [filtering](filtering.md) to limit the amount of data loaded into Power BI.

## Not getting all results

CDF is limited when it comes to filtering, and some OData functions will result in a CDF search operation which is not pageable. If you get less results than expected, you may be using a filter function that is not supported by CDF, for example **startswith** on the **Name** column for **TimeSeries**.

For more information, see [Supported filtering for CDF resources](filtering.md#supported-filtering-for-cdf-resources).

## Property naming in metadata and Raw

Property keys for metadata and Raw must be valid identifiers and can only contain letters, numbers or underscores. The OData service rewrites any other character to an underscore. For the best and most predictable results, make sure that ingested data follow this naming convention for property keys: `^[a-zA-Z][_a-za-z0-9]\*[a-zA-Z0-9]\$`.

## Unable to retrieve very small values from RAW

If you're using data from RAW in Power BI, you can experience issues when retrieving small numbers in exponential notation.

RAW does not have a schema, but the OData libraries in Power BI attempt to select the correct format for the data. Currently, Power BI chooses the wrong decoder for small numbers in exponential notation, and you may see the following error:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/small_numbers.png" alt="Error message" width="80%"/>

To resolve this issue, ingest the values into RAW as **strings** instead of **numbers**, and convert the strings back to numbers in Power BI, for example, using the [`Decimal.From`](https://docs.microsoft.com/powerquery-m/decimal-from) Power Query M-function. You will not lose precision, and because most JSON decoders accept strings for numbers, clients that expect numbers will still work.
