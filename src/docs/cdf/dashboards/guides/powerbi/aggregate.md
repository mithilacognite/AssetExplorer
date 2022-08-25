---
pagination_next: null
pagination_prev: null
---

# Get aggregate time series data from CDF

Time series typically store large quantities of time-bound measurements (pressure, rpm, power generation measures, temperature, wind, etc.) as data points at millisecond-level precision. To extract insights from the data points, you typically compute aggregates from the raw data, such as averages over time intervals, variance, etc.

Cognite Data Fusion (CDF) pre-calculates the most common [**aggregates**](./../../../../dev/concepts/aggregation/index.md) for numerical data points in time series. These aggregates are available with short response time even when you are querying across very large data sets.

Instead of downloading and manually aggregating data in Power BI, you can query CDF for the aggregates. Specify the **time range** and the **granularity** (the unit of time to compute the aggregates on) and let CDF do the computational work for you.

<!-- Timeseries aggregate parameters
StartTime: DateTime(Offset)

EndTime: DateTime(Offset)

Granularity: Time granularity size and unit to aggregate over. Valid entries are “d”, “h”, “m”, “s”. Also supports number as prefix, for example “5m”, “12h” etc.

The following aggregates are currently supported:

"average" "max" "min" "count" "sum" "interpolation" "stepInterpolation" "totalVariation" "continuousVariance" "discreteVariance" -->

<!-- How much data will I get?
When you specify a time-range and granularity, the maximum number of aggregate points you will retrieve is equal to the span divided by your granularity, per timeseries. So if you select a 30-day span with 12-hour granularity, you should expect up to 60 aggregate data points as a result. -->

## Get aggregates for a single time series

Follow these steps to retrieve aggregates for **a single time series** from CDF in the Power Query Editor:

1. [Connect Power BI to CDF](retrieve_data_from_cdf.md).
2. In the Power Query Editor, get the time series table using the Cognite Power BI connector.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/get_time_series_table.png" alt="Time series table" width="80%"/>

3. Use [filtering](filtering.md) to find the time series you want aggregates from, and then in the **Aggregate** column select **Function**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/aggregate_function.png" alt="Aggregate function" width="80%"/>

4. Specify the time range and granularity, and then select **OK**.
5. The Power Query Editor displays a table with the aggregates for the specified time range. Remove the columns you don’t need, then select **Close and apply**.

## Get aggregates for multiple time series

To retrieve aggregates from **multiple time series** in the same time range, use the Cognite Power BI connector and the **TimeseriesAggregate** function. Instead of calling the function on a singles time series, you first create a time series table with all time series you want to retrieve aggregates from:

1. Import your **Time series** data and the **TimeseriesAggregate** function using the Cognite Power BI connector.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/get_time_series_table_aggregate_function.png" alt="Time series table and function" width="80%"/>

1. Use [filtering](filtering.md) to find the time series you want aggregates from.
1. In the Queries panel, select the **TimeseriesAggregate** function, set the **granularity**, **start** time, and **end** time. Then select **Choose column**.
1. In the Select Column window, select your **Timeseries** table, and the **Id** column from the table to specifiy which time series to fetch aggregates from in CDF. Then select **OK**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/choose_column.png" alt="Time series table" width="80%"/>

1. Select **Invoke** to start retrieving the aggregates.
1. The Power Query Editor displays a new table named **Invoked Function** in the Query panel with the aggregates for the specified time range. Remove the columns you don’t need, then select **Close and apply**.

:::info TimeseriesAggregate tips

If the **TimeseriesAggregate** function takes a long time to finish, or fails after a long time:

- Make sure you have filtered the time series table so that it contains only the time series you need.

- Consider if you are using the right granularity. The granularity greatly affects the query performance.

- Make sure that you are requesting a realistic number of data points. Aggregating large numbers of time series with short granularities is likely to return huge amounts of data points, and Power BI does not handle multiple gigabytes of data in a single query.
  :::
