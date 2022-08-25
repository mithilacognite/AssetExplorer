---
pagination_next: null
pagination_prev: null
---

# About DirectQuery

:::info Early adopter

The features described in this section are currently in Beta and are only available to customers via our **Early Adopter** program. For more information and to sign up, visit the [Early Adopter Group](https://hub.cognite.com/groups) on the [Cognite Hub](https://hub.cognite.com).
:::

In Power BI, you can use **DirectQuery** to fetch data on demand. DirectQuery doesn't import or copy data into Power BI Desktop. Instead, it queries for data every time you interact with the dashboard.

Cognite Data Fusion (CDF) supports DirectQuery by using the **Power BI PostgreSQL connector** to retrieve CDF data using SQL queries. The connector presents CDF as a PostgreSQL database to Power BI and transforms the CDF resources into SQL tables.

If you need to update and browse a lot of data points, use DirectQuery to get the data on demand from the source instead of importing data with the [Cognite Power BI connector](/cdf/dashboards/guides/powerbi/getting_started)

## Limitations

DirectQuery has the following limitations:

- You can not apply transformations to your data, such as creating or expanding columns in the data set, splitting the data by delimiters, or replacing values.

- DirectQuery components don't support time and date DAX functionality. For example, you can not convert from one time zone to another.

- DirectQuery doesn't support DAX functionality such as WEEKNUM or TIME. Also, you can not create a relationship between an external DATE column and a timestamp column from a DirectQuery table.

- DirectQuery doesn't support timestamp hierarchies, so you cannot see data based on years, months, and days with drill-down functionality.
