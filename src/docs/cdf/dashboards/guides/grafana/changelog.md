---
pagination_next: null
pagination_prev: null
---

# Releases

This article documents the ongoing improvements we're making to the **Cognite Data Source for Grafana**.

## 2.5.0 - June 1, 2022

**Relationships support**

The connector now supports [the CDF relationships resource type](../../../../dev/concepts/resource_types/relationships.md). You can fetch time series based on relationships in the **Time series from asset** tab. Use data sets, labels, and active relationships to filter the relationships based on the time filter selected in Grafana.
On the new Relationships tab, use Grafana's Node Graph visualization plugin, or the new (alpha) custom visualization plugin available from the [cognite-grafana-relationships-visualization](https://github.com/cognitedata/cognite-grafana-relationships-visualization) GitHub repository.

**Templates support (preview)**

The new Templates tab lets you use the CDF templates feature (preview). You need to enable templates in the data source settings.

Using templates with Grafana lets you dynamically scale your dashboards as you add equipment. Learn more about [templates](../../../../dev/concepts/resource_types/templates.md).

## 2.4.0 - August 20, 2021

**Features**

- OAuth 2.0 client credentials grant flow to authenticate and authorize against CDF.

## 2.3.0 - June 1, 2021

**Features**

- Added the ability link variables and use the value of one variable as input to another.
  [Read more](variables.md#nested-chained-variables).

## 2.2.0 - April 6, 2021

**Features**

- View **event data in a table**. [Read more](./annotations#display-events-in-a-tabular-view).
- View both **fulfilled and unfinished** events on a chart. Previously, only fulfilled events were displayed.
- Use the new option to fetch **only the latest data point** for time series.
- **Authenticate using OAuth** with CDF. Open the data source settings and click `Forward OAuth Identity` to activate this.

## 2.1.1 - November 23, 2020

**Bug fixes:**

- Fixed support for variables in the `time series by asset` query. In version 2.1.0, `$variable` used as an `Asset tag` worked for existing dashboards, but you could not create a new panel with the same capability.

## 2.1.0 - November 18, 2020

:::info NOTE
This version of data source requires Grafana version `7.0.6` or later.
:::

**Features**

- Time series are now saved to dashboards by their `externalId` where possible.
  This allows you to switch between CDF projects that contain time series with matching `externalIds`.
- Support for [synthetic time series alignment](/dev/concepts/resource_types/synthetic_timeseries#alignment).

**Other updates:**

- Rewrote data source GUI to React.
- Updated CDF logo to match light/dark theme.
- Plugin source code is digitally signed and verified by `Grafana Labs`.

## 2.0.1 - August 25, 2020

**Bug fixes:**

- **\[Custom query\]** Option to display the legend label as a plain text instead of as expression.

  Example for query: `ts{id=1} + ts{id=2} + 1`:

  - User label `custom name` results in `custom name` label. (No specific timeseries referenced in the label.)
  - User label `{{name}}` results in `timeseries_name_1 + timeseries_name_2 + 1` label. (This works the same way as before.)

- **\[Custom query\]** Improved error handling
  - HTTP 500 errors messages are visible from the GUI.
- **\[Custom query\]** Default granularity falls back to 1 second if a shorter value is provided.
  - Previously, selecting a time span less than 10 minutes resulted in a HTTP 400 error.

## 2.0.0 - June 29, 2020

**General improvements**

- A new query language inspired by PromQL and compatible with synthetic time series in CDF. [Read more](/cdf/dashboards/guides/grafana/timeseries.md#custom-queries).
- Support for all filtering capabilities available in [CDF API v1](/api/v1/) for the respective resource types (assets, events, times series).
- Any future **filtering** capabilities added to CDF API v1 will be **automatically supported** by the data source (filters are passed directly to CDF).
- Query expressions resulting in errors now **displays error messages** in the UI.
- Regular expressions filtering can be used as part of the **Query** expression. The **Filter** field has been removed.
- Supports CDF [API v1](/dev/API_versioning.md#current-api-versions), with no dependency to older API versions.
- [New documentation section](getting_started.md) for the connector, covering installation and administration, upgrades, feature documentation and getting started information.
- Compatibility with Grafana 7.0. Learn more about [the new capabilities](https://grafana.com/blog/2020/05/18/grafana-v7.0-released-new-plugin-architecture-visualizations-transformations-native-trace-support-and-more/?isource=hp).

**Time series and custom queries**

- You can now access time series that don't have the `legacyName` attribute populated with the data source.
- Setting `Root Asset` in the **Custom query** tab is no longer required. This filter has been removed from the UI and is now available as part of a custom query expression. For example: `ts{rootAssetIds=[12335453, 3455566]}`.
- Custom query aggregation requests are less likely to trigger rate limiting in CDF API.
- Functions:
  - Support for **string time series** through the new `map` function allows you to convert string values to numeric values which can then be plotted by Grafana. For example: `map(ts{externalId='pump_29'}, ['OPEN', 'CLOSED'], [1, 0], -1)`.
  - Use the `on_error` function to gain control over query calculations resolving with errors, such as division by 0. The function allows you to set a default value for individual data points that resolved with errors. Without the `on_error` function, the chart shows empty space in those places. Example: `on_error(1/ts{externalId='canBeZero'}, 0)`.
  - Variable length functions: `max(x1, x2, ...)`, `min(...)`, `avg(...)`.
  - The `power` function has been renamed to `pow`.
  - These functions are no longer supported: `acos`, `asin`, `atan`, `ceil`, `celing`, `cot`, `degrees`, `floor`, `log`, `log2`, `log10`, `radians`, `sign`, `tan`, `atan2`, `mod`, `truncate`, `rand`, `crc32`, `conv`, `div`.
- These aggregates are no longer supported by custom queries: `max`, `min`, `count`, `sum`, `continuousVariance`, `discreteVariance`, `totalVariation`.
- Short names for aggregation functions are no longer supported. Use full names instead: `average`, `interpolation`, `stepInterpolation`.
- The `timeseries{options}` function has been renamed to `ts{options}`.
- Filtering:
  - New options:`isString=false`, `externalId='my_id'`, `id=123`, `externalIdPrefix='my_'`
  - Relate to asset tree with: `assetSubtreeIds=[{id=754173880412890},{externalId="23-TE-96148"}]`, `assetIds=[123, 234]`, `assetExternalIds=['pump_1', 'pump_2']`, `rootAssetIds=[123, 234]`
  - New range filters for create and updated time: `createdTime={min=0, max= 1593018651}`, `lastUpdatedTime={min=1493018651, max= 1593018651}`
  - Select time series based on dataSet membership: `dataSetIds=[{externalId='Prediction Model A'},{id=123}]`
  - `path` is no longer supported
  - See the full list of [supported filters](/api/v1/#operation/listTimeSeries) for the `ts{}` expression.

**Annotations**

- New filters: `assetExternalIds`, `rootAssetIds`, `dataSetIds`, `externalIdPrefix`, `source`.
- Find active events in range with the `activeAtTime` filter. If `endTime` is null, the event is active from `startTime` onwards. The `activeAtTime` filter will match all events that are active at some point from `min` to `max`. Example: `activeAtTime={min=1591018651, max= 1593018651}`.
- `description` supports only regular expression operators `=~`, `!~`, and `!=`.
- `minStartTime`/`maxStartTime` has been replaced by the `startTime={min=0, max= 1593018651}` filter.
- `minEndTime`/`maxEndTime` has been replaced by the `endTime={min=0, max= 1593018651}` filter, enabling you to also filter for events without the `endTime` set: `endTime={isNull=true}`.
- `minCreatedTime`/`maxCreatedTime` has been replaced by the `createdTime={min=0, max= 1593018651}` filter.
- `minLastUpdatedTime`/`maxLastUpdatedTime` has been replaced by the `lastUpdatedTime={min=0, max= 1593018651}` filter.
- `assetSubtrees` has been replaced by the `assetSubtreeIds=[{id=754173880412890},{externalId="23-TE-96148"}]` filter which introduces support for `Id`/`ExternalId` input.
- These filters are no longer supported: `sort`, `dir`, `limit`, `offset`, `sourceId`.
- See the full list of [supported filters](/api/v1/#operation/advancedListEvents) for the `events{}` expression.

**Templating**

- New filters: `parentIds`, `parentExternalIds`, `rootIds`, `dataSetIds`, `externalIdPrefix`, `root`.
- The `description` field supports only regular expression operators `=~`, `!~`, and `!=`.
- Select assets based on **label**: `labels={contains={externalId="pump"}}`, `labels={containsAny=[{externalId="pump_type_A"},{externalId="pump_type_B"}]}`, `labels={containsAll=[{externalId="pump"},{externalId="rust_detected"}]}`
- `assetSubtrees` replaced by the `assetSubtreeIds=[{id=754173880412890},{externalId="23-TE-96148"}]` filter which introduces support for `Id`/`ExternalId` inputs.
- `minCreatedTime`/`maxCreatedTime` has been replaced by the `createdTime={min=0, max= 1593018651}` filter.
- `minLastUpdatedTime`/`maxLastUpdatedTime` has been replaced by the `lastUpdatedTime={min=1592222651, max= 1593018651}` filters.
- These options are no longer supported: `query`, `sort`, `dir`, `offset`, `boostname`, `path`, `depth`, `sourceId`.
- See the full list of [supported filters](/api/v1/#operation/listAssets) for the `assets{}` expression.

:::info TIP
The **Cognite Data Source for Grafana 2.0.0** is compatible with CDF [API v1](/dev/API_versioning.md#current-api-versions).
:::

:::caution NOTE
Cognite Data Source for Grafana 2.0.0 is not backward compatible with dashboards created using older versions of the connector.
:::

## 1.0.1 - May 27, 2019

- Rename Cognite Data Platform to Cognite Data Fusion.
- Allowing for templating variables to be used anywhere in custom queries.
- Allowing for the base url to be modified when adding a new data source.

:::info TIP
The **Cognite Data Source for Grafana 1.0.1** is compatible with CDF [API 0.5](/dev/API_versioning.md#current-api-versions).
:::

## 1.0.0 - March 26, 2019

- Fixing templating so that repeated panels/rows work properly.
- Changing checkboxes to Grafana checkboxes and adding **Select All** option.
- Fixing data source configuration to verify the project name.
- **Breaking change**: `function=` inside of `timeseries{ ... }` no longer works for custom queries. Instead, functions are now applied outside of `timeseries{}[]` such as:
  - `(timeseries{description=~".*TEMP.*"}[avg] - 32) * 5/9`
  - `sum(timeseries{name=~".*VALUE"}[count,1d])`
  - `max(timeseries{metadata.on="True"}[count,5m]) - min(timeseries{metadata.on="True"}[count,5m])`

:::info TIP
The **Cognite Data Source for Grafana 1.0.0** is compatible with CDF [API 0.5](/dev/API_versioning.md#current-api-versions)
:::

<!-- build-->
