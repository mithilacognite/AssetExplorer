---
pagination_next: null
pagination_prev: null
---

# Getting started with the Cognite Power BI connector

Power BI is a business analytics solution that lets you visualize your data and share insights across your organization, or embed them in your app or website.

A common flow of work in Power BI begins by connecting to data sources and building a report in **Power BI Desktop**. You then publish that report from Power BI Desktop to the **Power BI service**, and share it so end users in the Power BI service and mobile devices can view and interact with the report.

<img className=" " src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/powerbi/PowerBI_flow.png" alt="Power BI flow" width="80%"/>

## Use Cognite Data Fusion (CDF) as a data source in Power BI

- To query, transform and visualize data from a **Cognite Data Fusion (CDF) project** in Power BI Desktop, follow the steps in [**Connect to Cognite Data Fusion (CDF)**](retrieve_data_from_cdf.md).

- CDF projects can contain hundreds of millions of rows of data, and downloading them all into Power BI is not efficient or even feasible. See [**Filtering**](filtering.md) to learn how to define an optimal data set in Power BI.

- To extract insights from time series data, you typically compute aggregates. See [**Aggregate data**](aggregate.md) to learn how you can let CDF do the computational work for you.

Learn more about Power BI at: [https://powerbi.microsoft.com/](https://powerbi.microsoft.com/).
