---
pagination_next: null
pagination_prev: null
---

# Capabilities and limitations

:::info Early adopter

The features described in this section are currently in Beta and are only available to customers via our **Early Adopter** program. For more information and to sign up, visit the [Early Adopter Group](https://hub.cognite.com/groups) on the [Cognite Hub](https://hub.cognite.com).
:::

<!-- Notes about contents on this page

1. Reiterate purpose of the connector (DQ/datapoint aggregates)
2. "primary goal is to support aggregates"

3. Assumptions that need to be fulfilled to use aggregates

4. Resources (columns exposed by each resource)

5. Filtering capabilities by resource (and why some things don't work?)

6. Pushdown filter support as table

7. Join queries - We don't support them. Use data modeling to link data instead -->

The Power BI PostgreSQL connector lets you load datapoint aggregates on demand using DirectQuery, drastically reducing the amount of data loaded into Power BI.

When configuring a dashboard to use data point aggregates in DirectQuery mode, the connector only retrieves aggregates related to the currently selected time range. With automatic granularity, updating a chart takes a relatively short time whenever the filtering changes.

In DirectQuery mode, Power BI queries the data source when it populates visuals in a dashboard. DirectQuery combines the filters defined in the data source in the **Power Query Editor** with any additional **filters** included in the dashboard itself, such as **time slicers**, **external_id selectors**, **unit**, etc.

## Prerequisites

<!-- 3. Assumptions that need to be fulfilled to use aggregates -->

<!--
In order for timeseries to provide value in DirectQuery, the "valuable" information must be easily available through the aggregate endpoint itself -->

Time series must be compatible with DirectQuery and have a value as-is when requesting aggregated data points.

Examples of **compatible** time series:

- The time series is the current value of some equipment that needs to be visualized.
- The time series is a cumulative sum of some output or derivative, i.e., flow rate.
- The time series is the result of some computation.
- The amount of data requested at once is likely to load on demand without reducing the user experience. We recommend letting the connector determine the granularity automatically.

Examples of **in-compatible** time series:

- A time series where the data points aren't immediately valuable when visualized and the result requires computation on multiple time series together.
- The value of the time series comes from combining it with data from a different source that requires alignment on, for example, a timestamp, and where the timestamp is not immediately available in the other source.

## Capabilities: Resources

### Assets

**Recommended connection mode:** _Import_

| Column             | Type                             |
| ------------------ | -------------------------------- |
| external_id        | text NOT NULL                    |
| name               | text                             |
| description        | text                             |
| parent_external_id | text                             |
| source             | text                             |
| metadata           | json (interpreted as text)       |
| created_time       | timestamp_with_timezone NOT NULL |
| last_updated_time  | timestamp_with_timezone NOT NULL |

### Time series

**Recommended connection mode:** _Import_

| Column            | Type                             |
| ----------------- | -------------------------------- |
| external_id       | text NOT NULL                    |
| name              | text                             |
| description       | text                             |
| unit              | text                             |
| is_step           | boolean NOT NULL                 |
| metadata          | json (interpreted as text)       |
| asset_external_id | text                             |
| created_time      | timestamp_with_timezone NOT NULL |
| last_updated_time | timestamp_with_timezone NOT NULL |

### Datapoint aggregates

**Recommended connection mode:** _DirectQuery_

Requires one or more `timeseries_external_id`s to display any data. You can retrieve this in the dashboard by declaring a many-to-one relationship between `datapoint_aggregates.timeseries_external_id` and `timeseries.external_id`

| Column                 | Type                             |
| ---------------------- | -------------------------------- |
| timeseries_external_id | text NOT NULL                    |
| timestamp              | timestamp_with_timezone NOT NULL |
| granularity            | text NOT NULL                    |
| average                | double precision                 |
| count                  | integer                          |
| max                    | double precision                 |
| min                    | double precision                 |
| sum                    | double precision                 |
| continuous_variance    | double precision                 |
| discrete_variance      | double precision                 |
| total_variation        | double precision                 |
| interpolation          | double precision                 |

## Capabilities: Filtering

<!--
### Example
- timestamp: (ge/gt/le/lt), IN(start_time, end_time)
- timeseries_external_id:
  - StartsWith: strpos("pattern", 1)
  - IN("a", "b", "c")
  - Union: WHERE tseid = "a" OR tseid = "b" OR tseid = "c"
- granularity
  - single equals expression, we do not support multiple granularities in a single query: WHERE granularity = "1d" -->

SQL queries made by Power BI are converted to CDF queries. CDF resources may have multiple different endpoints for querying, and the filtering support for each endpoint may vary. A query made to the Power BI connector will only be sent to a single endpoint per query. Therefore, some filter combinations cannot be processed even if each component in a filter is supported individually. For example, a query with an external_id **StartsWith** filter cannot also use an external_id **Union** filter. That would require sending the request to both the **list** and **get by id** endpoints and then filtering the results.

### Terms

- **RangeFilter**: Satisfies if the value is between min and max, i.e., `WHERE X >= min AND X <= max` in SQL
- **StartsWith**: String starts with pattern
- **Union**: List of values to match on a column, including variants.
  For example `"value in ('a', 'b', 'c')"` or `"value = 'a' or value = 'b' or value = 'c'"`

The following tables describe the filtering capabilities of each table.

### Assets table

| Column             | Filter endpoint           | ByExternalIDs endpoint | No filter support |
| ------------------ | ------------------------- | ---------------------- | ----------------- |
| external_id        | StartsWith                | Union                  |                   |
| name               |                           |                        | X                 |
| description        |                           |                        | X                 |
| parent_external_id | Union                     |                        |                   |
| source             | =                         |                        |                   |
| metadata           |                           |                        | X                 |
| created_time       | >=, >, <=, <, RangeFilter |                        |                   |
| last_updated_time  | >=, >, <=, <, RangeFilter |                        |                   |

### Time series table

| Column            | Filter endpoint           | ByExternalIDs endpoint | No filter support |
| ----------------- | ------------------------- | ---------------------- | ----------------- |
| external_id       | StartsWith                | Union                  |                   |
| name              |                           |                        | X                 |
| description       |                           |                        | X                 |
| unit              | =                         |                        |                   |
| is_step           | = (true/false)            |                        |                   |
| is_string         | = (true/false)            |                        |                   |
| metadata          |                           |                        | X                 |
| asset_external_id | =                         |                        |                   |
| created_time      | >=, >, <=, <, RangeFilter |                        |                   |
| last_updated_time | >=, >, <=, <, RangeFilter |                        |                   |

### Datapoint aggregates table

| Column                 | CDF endpoint              | No filter support |
| ---------------------- | ------------------------- | ----------------- |
| timeseries_external_id | Union                     |                   |
| timestamp              | >=, >, <=, <, RangeFilter |                   |
| granularity            | =                         |                   |
| continuous_variance    |                           | X                 |
| discrete_variance      |                           | X                 |
| total_variation        |                           | X                 |
| interpolation          |                           | X                 |
| average                |                           | X                 |
| count                  |                           | X                 |
| min                    |                           | X                 |
| max                    |                           | X                 |
| sum                    |                           | X                 |
