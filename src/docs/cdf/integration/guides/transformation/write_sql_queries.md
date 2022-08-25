# Write SQL queries

Transform data from Cognite RAW into the CDF data model using built-in and customer Spark SQL queries. This article describes the queries and explains how you can [load data incrementally](#load-data-incrementally).

## Read data from CDF

**From a RAW table**

To select data from a RAW table, use the syntax `mydb.mytable`.

```sql
select * from mydb.mytable
```

If your database or table name contains special characters, enclose the name in backticks, for example `` `my-db`.`my table` ``.

**From other CDF resource types**

To select other CDF resource types, use the syntax `_cdf.resource_type`.

```sql
select * from _cdf.events
```

The supported resource types are:

- `_cdf.events`
- `_cdf.assets`
- `_cdf.files`
- `_cdf.timeseries`
- `_cdf.sequences`
- `_cdf_sequences.<sequence_externalId>`
- `_cdf.datapoints`
- `_cdf.stringdatapoints`
- `_cdf.labels`
- `_cdf.relationships`

## Load data incrementally

When reading from [RAW](/api/v1/#tag/RAW) tables, you probably want to transform only the data that has changed since the last transformation job ran. To achieve this, you can filter on the `lastUpdatedTime` column to query for the rows that have changed after a specific timestamp.
When filtering on `lastUpdatedTime`, the filter is pushed down to the RAW service itself, so this query can be performed efficiently.
For example: `select * from mydb.mytable where lastUpdatedTime > to_timestamp(123456)`.

Instead of encoding the timestamp directly in the query and manually keeping it up to date every time new data has been processed, you can use the [`is_new`](#is-new) function. This function returns `true` when a row has changed since the last time the transformation was run and `false` otherwise.

The **first** time you run a transformation using the query below, all the rows of `mytable` will be processed:

```sql
select * from mydb.mytable where is_new("mydb_mytable", lastUpdatedTime)
```

If the transformation completes successfully, the **second** run will only process rows that have changed since the first run.

If the transformation fails, `is_new` filters the same rows the next time the transformation is run. This ensures that there is no data loss in the transformation from source to destination.

:::info note
Incremental load is disabled when previewing query results. That is, `is_new` will always return `true` for all rows.
:::

Each `is_new` filter is identified by a name (for example,`"mydb_mytable"`) and can be set to any constant string. This allows you to differentiate between multiple calls to `is_new` in the same query and use `is_new` to filter on multiple tables. To easily identify the different filters, we recommend that you use the name of the table as the name of the `is_new` filter.

## Backfill

To process all the data even if it hasn't changed since the last transformation, change the name of the `is_new` filter, for example, by adding a postfix with an incrementing number (e.g. `"mydb_mytable_1"`).

This is especially useful when the logic of the query changes and data that has already been imported needs to be updated accordingly.

## Custom SQL functions

In addition to the built-in [Spark SQL functions](https://spark.apache.org/docs/2.4.0/api/sql), we also provide a set of custom SQL functions to help you write efficient transformations.

:::info note
When a function expects `var_args`, it allows a variable number of arguments of any type, including star `*`.
:::

### `get_names`

`get_names(var_args): Array[String]`

Returns an array of the field names of a struct or row.

**Example**

```sql
select get_names(*) from mydb.mytable
-- Returns the column names of 'mydb.mytable'
```

```sql
select get_names(some_struct.*) from mydb.mytable
-- Returns the field names of 'some_struct'
```

### `cast_to_strings`

`cast_to_strings(var_args): Array[String]`

Casts the arguments to an array of strings. It handles array, struct and map types by casting it to JSON strings.

**Example**

```sql
select cast_to_strings(*) from mydb.mytable
-- Returns the values of all columns in 'mydb.mytable' as strings
```

### `to_metadata`

`to_metadata(var_args): Map[String, String]`

Creates metadata compatible type from the arguments. In practice it does `map_from_arrays(get_names(var_args), cast_to_strings(var_args))`. Use this function when you want to transform your columns or structures into a format that fits the metadata field in CDF.

**Example**

```sql
select to_metadata(*) from mydb.mytable
-- Creates a metadata structure from all the columns found in 'mydb.mytable'
```

### `to_metadata_except`

`to_metadata_except(excludeFilter: Array[String], var_args)`

Returns a metadata structure (`Map[String, String]`) where strings found in `excludeFilter` will exclude keys from `var_args`.

Use this function when you want to put most, but not all, columns into metadata, for example `to_metadata_except(array("someColumnToExclude"), *)`

**Example**

```sql
select to_metadata_except(array("myCol"), myCol, testCol) from mydb.mytable
-- Creates a map where myCol is filtered out.
-- The result in this case will be Map("testCol" -> testCol.value.toString)
```

### `asset_ids`

`asset_ids(assetNames: Array[String], rootAssetName: String): Array[BigInt]`

Attempts to find Asset names in the asset hierarchy which have `rootAssetName` as their root Asset. The function returns the IDs of the assets matched.

See [Assets](/dev/concepts/resource_types/assets) for more information about assets in CDF.

:::caution important
The entire job will be aborted if `asset_ids()` did not find any matching assets.
:::

**Example**

```sql
select asset_ids(array("PV10"), "MyBoat")
```

### `is_new`

`is_new(name: String, version: Timestamp)`

Returns `true` if the version provided is higher than the version found with the specified name, based on the last time the transformation was run. 

- If the transformation completes successfully, the next transformation job only processes rows that have changed since the start of the last successfully completed transformation job.

- If the transformation fails, `is_new` processes all rows that have changed since the start of the last successful run. This ensures no data loss in the transformation from source to destination. See also [Load data incrementally](#load-data-incrementally).

:::tip Tip

If you're using more than one occurrence of `is_new()` in one transformation, we recommend that you use different variable names. This guarantees that subqueries within one transformation don't override the `lastUpdatedTime` record before the transformation is completed.
:::

**Example**

```sql
select * from mydb.mytable where is_new("mydb_mytable_version", lastUpdatedTime)
-- Returns only rows that have changed since the last successful run
```

### `dataset_id`

`dataset_id(externalId: String): BigInt`

Attempts to find the `id` of the given data set by `externalId` and returns the `id` if the `externalId` exists.

**Example**

```sql
select dataset_id("EXAMPLE_DATASET") as dataSetId
```