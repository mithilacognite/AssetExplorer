---
pagination_next: null
pagination_prev: null
---

# Plot time series

This article explains how to create dashboards and to select the time series you want to plot. You will also learn how to use [custom queries](#custom-queries) and advanced features like filtering, aggregation, granularity, arithmetic operations, and functions to work with time series.

## Create a dashboard

Follow these steps to create a dashboard with time series data from Cognite Data Fusion (CDF):

1. Log in to your Grafana instance.
1. Select **Create > Dashboard** in the left sidebar and then click **Add new panel**.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/create-dashboard.png" alt="Create dashboard" width="80%"/>

1. Use the query constructor tabs below the main chart to choose how you want to select time series for the dashboard:

   - **Select Timeseries** - fetch data from a specific time series. Start typing the name or description of the time series and select it from the dropdown list.

     You can also specify the [**aggregation**](../../../../dev/concepts/aggregation/index.md) and [**granularity**](../../../../dev/concepts/aggregation/index.md#granularity) for the query. By default, the aggregation is _average_ and the granularity is calculated based on the time interval selected for the chart.

     :::info TIP
     Optionally, set a custom **label** and use the format `{{property}}` to pull data from the time series. You can use all the available [time series properties](https://docs.cognite.com/api/v1/#operation/getTimeSeries) to define a label, for example, `{{name}} - {{description}}` or `{{metadata.key1}}`.
     :::

   - **Select Timeseries from Asset** - fetch data from time series related to a specific asset. Start typing the name or description of the asset and select it from the dropdown list. Optionally, select whether you also want to include time series from **subassets**.

     Specify **aggregation**, **granularity**, and **labels** as described for the **Select Timeseries** tab above.

   - [**Custom Query**](#custom-queries) - fetch time series that matches a query.

   This example shows how to use **Select timeseries from asset** tab to select time series related to an asset name.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/search-asset.png" alt="Search asset" width="80%"/>

1. The time series matching your selection are rendered in the chart area. If necessary, adjust the time frame in the top right corner of the chart area to show the relevant data.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/adjust-timeframe.png" alt="Adjust timeframe" width="80%"/>

## Custom queries

Use the **Custom Query** tab if you want more fine-grained control of which time series you are fetching. You can use a combination of arithmetic operations and functions to define your query, and use a special syntax to fetch synthetic time series (STS).

### Define a query

To request time series, specify a query with the parameters inside, for example: `ts{id=123}`.

The query above requests a time series where the `id` equals `123`. You can request time series by using `id`, `externalId` or [time series filters](../../../../api/v1/#operation/listTimeSeries).

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/custom_ts.png" alt="Custom query" width="80%"/>

For **synthetic time series** you can specify several property types:

- `bool`: `ts{isString=true}` or `ts{isStep=false}`
- `string` or `number`: `ts{id=123}` or `ts{externalId='external_123'}`
- `array`: `ts{assetIds=[123, 456]}`
- `object`: `ts{metadata={key1="value1", key2="value2"}}`

To create complex synthetic time series you can combine the types in a single query:

```
ts{name="test", assetSubtreeIds=[{id=123}, {externalId="external_123"}]}
```

### Filtering

Queries also support filtering based on time series properties which apply as logical `AND`. For instance, this query:

```
ts{assetIds=[123], name=~"Begin.*", name!~".*end", name!="Begin query"}
```

Finds time series:

- that belong to asset with `id` equals `123`
- where `name` starts with `"Begin"`
- where `name` doesn't end with `"end"`
- where `name` doesn't equal `"Begin query"`

The query above contains 4 types of equality:

- `=` - strict equality. Specifies parameters for time series request to CDF. Used with fitering attibutes.
- `=!` - strict inequality. Filters fetched time series by properties that are not equal to the string. Supports string, numeric and bool values.
- `=~` – regex equality. Filters the fetched time series by properties that match the regular expression. Supports string values.
- `!~` - regex inequality. Filters the fetched time series by properties that don't match the regular expression. Supports string values.

You can also filter on metadata:

```
ts{externalIdPrefix="test", metadata={key1="value1", key2=~"value2.*"}}
```

The query above requests for time series where:

- `externalIdPrefix` equals `"test"`
- `metadata.key1` equals `"value1"`
- `metadata.key2` starts with `"value2"`

We recommend that you **limit the use of regexp filters** since they can negatively impact the performance of your dashboard.

This query for instance requests all available time series for your project and then filters by names that equals the string “some-name”:

```
ts{name=~”some-name”}
```

Instead, you could replace the regexp with a parameter in the CDF request:

```
ts{name=”some-name”}
```

### Aggregation, granularity, and alignment

You can specify aggregation and granularity for each time series using the dropdowns in the user interface.

If, for example, the aggregation is set to `average` and the granularity equals `1h`, **all** queries request datapoints with the selected aggregation and granularity. By default, aggregation with synthetic time series is aligned to Thursday 00:00:00 UTC, 1 January 1970. With the synthetic time series query syntax you can define aggregation, granularity, and aligment for **each time series separately**:

```
ts{externalId='houston.ro.REMOTE_AI[34]', alignment=1599609600000, aggregate='average', granularity='24h'}
```

The query above overrides the aggregation and granularity values that are set in the UI. See the API documentation for a list of [supported aggregates](/dev/concepts/resource_types/synthetic_timeseries.md#aggregation).

### Arithmetic operations

You can apply arithmetic operations to combine time series. For example:

```
ts{id=123} + ts{externalId="test"}
```

The result of the above query is a single plot where datapoints are summed values of each time series.

In this example, the query `ts{name~="test1.*"}` can return more than 1 time series, but let's assume that it returns 3 time series with ids `111`, `222` and `333`.:

```
ts{name~="test1.*"} + ts{id=123}
```

The result of the query is 3 plots, which are a combination of summed time series values returned by the first and second expression in the query. The resulting plots actually represent these queries:

- `ts{id=111} + ts{id=123}`
- `ts{id=222} + ts{id=123}`
- `ts{id=333} + ts{id=123}`

You can see an example of this behavior (each `ts{}` expression returns 2 time series) in the screenshot below (notice the labels below the chart).

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/custom_query_math.png" alt="Custom query math" width="80%"/>

<br/>

### Functions

We support a wide range of functions that can be applied to synthetic time series:

- **Trigonometric:** `sin(ts{})`, `cos(ts{})`, `pi()`.
- **Variable-length functions:** `max(ts{}, ...)`, `min(ts{}, ...)`, `avg(ts{}, ...)`.
- **Algebraic:** `ln(ts{})`, `pow(ts{}, exponent)`, `sqrt(ts{})`, `exp(ts{})`, `abs(ts{})`.
- **Error handling**: `on_error(ts{}, default_value)`. See [Error handling for calculations](#error-handlings-for-calculations).
- **String time series:** `map(expression, [list of strings to map from], [list of values to map to], default_value)`. See [String time series](#string-time-series).

See the API documentation for a list of [available functions](../../../../api/playground/#section/Functions).

### Error handling for calculations

The `on_error(ts{...})` function allows chart rendering even if some exception appears. It handles errors like:

- `BAD_DOMAIN` - If bad input ranges are provided. For example division by zero, or sqrt of a negative number.
- `OVERFLOW` - If the result is more than 10^100 in absolute value.

If any of these are encountered, instead of returning a value for the timestamp, CDF returns an error field with an error message. To avoid these, you can wrap the (sub)expression in the `on_error()` function:

```
on_error(1/ts{externalId='canBeZero'}, 0)
```

### String time series

The `map()` function can handle time series with string values to convert strings to doubles. if, for example, a time series for a valve can have the values `"OPEN"` or `"CLOSED"`, you can convert it to a number with:

```
map(TS{externalId='stringstate'}, ['OPEN', 'CLOSED'], [1, 0], -1)
```

`"OPEN"` is mapped to 1, `"CLOSED"` to 0, and everything else to -1.

Aggregates on string time series is currently not supported. All string time series are considered to be stepped time series.
