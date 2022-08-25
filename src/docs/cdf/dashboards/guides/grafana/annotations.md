---
pagination_next: null
pagination_prev: null
---

# Visualize events

This article explains how to set up and filter queries on CDF [**events**](../../../learn/cdf_basics/cdf_basics_datamodel.md#events) and annotate the events to graphs on your Grafana dashboard. You can customize the time range, the events to display, and the columns according to your needs.

## Work with events in a table

Open the **Event** tab in Grafana to work with the events in a table.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/event-table.png" alt="Events in table " width="60%"/>
<p></p>

## Define a query

The `events` query uses the [events/list](../../../../api/v1/#operation/advancedListEvents) endpoint to retrieve data.

**Format:** `events{someFilter=number, otherFilter="string"}`

**Example:**

```
events{externalIdPrefix='WORKORDER', assetSubtreeIds=[{id=12}, {externalId='ext_id'}]}
```

You can filter on these properties:
`externalIdPrefix`, `metadata`, `assetIds`, `assetExternalIds`, `rootAssetIds`, `assetSubtreeIds`, `dataSetIds`, `source`, `type`, `subtype`.

By default, the query returns events that are active in the time range, but you can customize a query with the additional time filters `startTime`, `endTime`, `activeAtTime`, `createdTime`, `lastUpdatedTime`.

Here's an example of how to get all finished events that started in the current time range:

```
events{startTime={min=$__from}, endTime={isNull=false}}
```

This example returns only finished events:

```
events{endTime={isNull=false}}
```

Specify additional client-side filtering with the `=~`, `!~` and `!=` operators. A comma between multiple filters acts as a logical `AND`.

**Format:**

- `=~`, regex equality, returns results satisfying the regular expression.

- `!~`, regex inequality, excludes results satisfying the regular expression.

- `!=`, strict inequality, returns items where a property doesn't equal a given value.

**Example:**

```
events{type='WORKORDER', subtype=~'SUB.*'}
```

:::info NOTE
Do not use the client-side filters as the primary filtering method.
These filters are applied after items are returned from CDF, and you might not see all data if CDF returns the maximum number of items (1000).
:::

You can create templates by using the `$variable_name` syntax.

**Example:**

```
events{type='WORKORDER', subtype=$variable}
```

## Rename and organize fields

Select the **Transform** tab to rename and organize fields.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/rename_columns.png" alt="Rename columns " width="60%"/>

## Annotate graphs with events

Use annotations to overlay rich event information from CDF on graphs in Grafana.

This is how to set up CDF events as annotations to a graph in Grafana:

1. Navigate to your dashboard's settings, and select **Annotations** from the left side.
1. Select your CDF project in the **Data Source** field.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/add_annotation.png" alt="Annotation query" width="80%"/>

1. Specify the query to fetch and filter events from CDF. For example:

   ```
   events{type="some", subtype=~"sub.*"}
   ```

   The query above requests events with parameter `type="some"` and filters the results by `subtype` that matches `sub.*`.

   You can filter on these properties:
   `externalIdPrefix`, `metadata`, `assetIds`, `assetExternalIds`, `rootAssetIds`, `assetSubtreeIds`, `dataSetIds`, `source`, `type`, `subtype`.

   :::info Note
   By default the query returns events that are active in the **time range**, but you can customize a query with the additional time filters `startTime`, `endTime`, `activeAtTime`, `createdTime`, `lastUpdatedTime`.
   :::

   This example returns all finished events that started in the current time range:

   ```
   events{startTime={min=$__from}, endTime={isNull=false}}
   ```

   This example returns only finished events:

   ```
   events{endTime={isNull=false}}
   ```

   - For a complete list of **valid parameters**, see [the API documentation](../../../../api/v1/#operation/listEvents).

   - [**Learn more**](timeseries.md#filtering) about how to **filter** the results, for example, by using regular expressions.

1. Click **Update**.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/use_annotation.png" alt="Use annotation" width="80%"/>
