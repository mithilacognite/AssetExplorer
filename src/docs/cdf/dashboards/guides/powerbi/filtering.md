---
pagination_next: null
pagination_prev: null
---

# Filtering

Cognite Data Fusions projects can contain hundreds of millions of rows of data, and downloading them all into Power BI is not efficient or even feasible.

**Filtering** is vital to create workable data set in Power BI. Optimally, you want to get from CDF only the data you want to visualize.

When you add filters in Power BI, the Cognite Power BI Connector pushes the filters to CDF via the Cognite OData Service. CDF performs the actual filtering and returns only the rows matching the filters to Power BI. Filtering large data sets in CDF takes **milliseconds** instead of minutes or hours in Power Query.

## Adding filters in the Power Query Editor

Follow these steps to add filters on columns in the Power Query Editor:

1. [Connect Power BI to CDF](retrieve_data_from_cdf.md).
1. Click the drop-down button at the right of the column header you want to add the filter to.
1. Select **Text Filters** and then the type of filter you want, for example **Begins with**.
1. In the **Filter Rows** dialog box, specify conditions to filter the rows in the column.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/add_filter.png" alt="Add Power BI filter" width="80%"/>

1. Select **Advanced** to define multiple filters at once, or define and add them one by one.

   :::info TIP
   Always specify the condition that filters the most rows **first**.
   :::

1. The Cognite Power BI Connector sends the query to CDF for filtering, and Power Query displays the results that are returned from CDF.

   Note that Power Query displays only a preview of the result set, usually 1000 rows. The final filtering will happen when you click **Close and apply**.

## Supported filtering for CDF resources

The Cognite Power BI Connector can fold or push the filters to CDF via the Cognite OData Service. This makes filtering very effective since not all the data rows are downloaded to Power BI. The filtering can happen in three different places:

- **CDF** - this is the most effective filtering. CDF does the filtering and no unnecessary data is transmitted between CDF and Power BI.

- **OData Service** - the OData service can do local filtering to support functionality not provided by CDF, for example, functions like `contains` and `endswith`. For this to work, you need to first reduce the dataset as much as possible using CDF filtering.

- **Power Query** - for Power Query to do filtering, it needs to retrieve all the data. For large tables this may involve significant amounts of data, so you want to reduce the dataset as much as possible first.

The tables below outline what filtering is supported for each resource type in CDF, what filters will be pushed down to CDF and what filters will be done locally by the OData Service.

**Definitions**

- **Pushdown** - filter functions that are pushed down to the OData service and CDF.

- **Local** - local filtering done by the OData service before returning the result to Power BI.

- **FilterFunctions** - `Contains`, `StartsWith`, and `EndsWith`.

- **Comparison** - (<, <=, >, >=, and =)

- **Search** = does pushdown but uses the search API. This requires local filtering in addition.

  :::info NOTE
  Search is not pageable so a limited number of rows will be returned. Thus you might not get all the matching data in CDF.
  :::

### Assets

| Property                    | Pushdown      | Local              |
| --------------------------- | ------------- | ------------------ |
| Id                          | =             | =                  |
| ExternalId                  | =, StartsWith | =, FilterFunctions |
| Name                        | =, Search     | =, FilterFunctions |
| Description                 | Search        | =, FilterFunctions |
| ParentId                    | =             | =                  |
| ParentExternalId            | =             | =                  |
| DataSetId                   | =             | =                  |
| Source                      | =             | =                  |
| [MetaData](#custom-queries) | =             |                    |
| RootId                      | =             | =                  |
| CreatedTime                 | Comparison    | Comparison         |
| LastUpdatedTime             | Comparison    | Comparison         |

### Time series

| Property                    | Pushdown      | Local              |
| --------------------------- | ------------- | ------------------ |
| Id                          | =             | =                  |
| ExternalId                  | =, StartsWith | =, FilterFunctions |
| Name                        | =, Search     | =, FilterFunctions |
| Description                 | Search        | =, FilterFunctions |
| IsString                    | =             | =                  |
| [MetaData](#custom-queries) | =             |                    |
| Unit                        | =             | =                  |
| IsStep                      | =             | =                  |
| AssetId                     | =             | =                  |
| SecurityCategories          |               |                    |
| DataSetId                   | =             | =                  |
| CreatedTime                 | Comparison    | Comparison         |
| LastUpdatedTime             | Comparison    | Comparison         |

### Data point

| Property  | Pushdown   | Local      |
| --------- | ---------- | ---------- |
| Id        | =          | =          |
| TimeStamp | Comparison | Comparison |

### Events

| Property                    | Pushdown      | Local              |
| --------------------------- | ------------- | ------------------ |
| Id                          | =             | =                  |
| ExternalId                  | =, StartsWith | FilterFunctions    |
| Description                 | Search        | =, FilterFunctions |
| Source                      | =             | =                  |
| Type                        | =             | =                  |
| SubType                     | =             | =                  |
| [MetaData](#custom-queries) | =             |                    |
| DataSetId                   | =             | =                  |
| StartTime                   | Comparison    | Comparison         |
| EndTime                     | Comparison    | Comparison         |
| CreatedTime                 | Comparison    | Comparison         |
| LastUpdatedTime             | Comparison    | Comparison         |
| AssetIds                    | Contains      | Contains           |

### Files

| Property           | Pushdown      | Local              |
| ------------------ | ------------- | ------------------ |
| Id                 | =             | =                  |
| ExternalId         | =, StartsWith | =, FilterFunctions |
| Name               | =, Search     | =, FilterFunctions |
| Source             | =             | =                  |
| MimeType           | =             | =                  |
| MetaData           |               |                    |
| DataSetId          | =             | =                  |
| SourceCreatedTime  | Comparison    | Comparison         |
| SourceModifiedTime | Comparison    | Comparison         |
| CreatedTime        | Comparison    | Comparison         |
| LastUpdatedTime    | Comparison    | Comparison         |
| UploadedTime       | Comparison    | Comparison         |
| Uploaded           | =             | =                  |
| AssetIds           | Contains      | Contains           |

### Sequences

| Property        | Pushdown      | Local              |
| --------------- | ------------- | ------------------ |
| Id              | =             | =                  |
| ExternalId      | =, StartsWith | =, StartsWith      |
| Name            | =, Search     | =, FilterFunctions |
| Description     | =, Search     | =, FilterFunctions |
| MetaData        |               |                    |
| AssetId         | =             | =                  |
| DataSetId       | =             | =                  |
| CreatedTime     | Comparison    | Comparison         |
| LastUpdatedTime | Comparison    | Comparison         |
| Columns         |               |                    |

### RAW databases

| Property | Pushdown | Local |
| -------- | -------- | ----- |
| Name     | =        | =     |

### RAW tables

| Property | Pushdown | Local |
| -------- | -------- | ----- |
| Name     | =        | =     |

### RAW rows

| Property        | Pushdown   | Local             |
| --------------- | ---------- | ----------------- |
| Key             | =          | =, FilterFunction |
| LastUpdatedTime | Comparison | Comparison        |

## Custom queries

This example shows how you can use the Cognite Power BI connector to create a custom query to filter on Asset `Metadata` properties:

1. Open Power BI, click **Get Data** in the Power BI main window, and select the **Cognite Data Fusion (Beta)** connector.

1. In the project name field, type in the project name, the resource and the filter in this format:
   `<project-name>/<resource-type>/?$filter=<Filter>`
1. Click **OK**, and then **Transform Data** to open a preview of the query.

Filtering is done according to the OData specification. You can create multi-attribute filters by chaining filters with and/or terms. For example, an equality filter is on the form "AttributeName eq 'AttributeValue'", for example:

`Name eq '23-TE-96116-04'`

For metadata, filtering is performed on properties nested inside the metadata object. To filter on a metadata property you need to create a filter in the form of "MetaData/NestedAttributeName eq 'NestedAttributeValue'", for example:

`MetaData/RES_ID eq '525283'`

- This example is a custom query to the _publicdata_ project, filtering on Metadata/RES_ID:

  `publicdata/Assets/?$filter=MetaData/RES_ID eq '525283'`

- This is an example of an AND filter on Metadata/RES_ID and Name:

  `publicdata/Assets/?$filter=MetaData/RES_ID eq '525283' and Name eq '23-TE-96116-04'`

## Debugging

To debug filtering, it's very helpful to use tools that allow you to see what filters is pushed down to the OData service, for example [Fiddler](https://www.telerik.com/fiddler).
