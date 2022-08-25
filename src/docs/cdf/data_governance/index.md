---
pagination_next: null
pagination_prev: null
---

# About data governance

Data governance is a set of principles and practices that ensure high quality through the complete lifecycle of your data, and is a must for scalable digitalization in all industries.

Cognite Data Fusion (CDF) provides tools and features to ensure that your data conforms to user and organizational expectations:

- **Secure access management** to control access for users, apps and services to the various types of resources (data sets, assets, files, events, time series, etc.) in CDF.

  **Learn more**: [About access management](../access/index.md)

- **Data sets** let you document and track data lineage, ensure data integrity, and allow 3<sup>rd</sup> parties to write their insights securely back to your CDF project.

  Data sets group and track data by **its source**. For example, a data set can contain all work orders originating from SAP. Typically, an organization will have one data set for each of its data ingestion pipelines in Cognite Data Fusion (CDF). Each data object in CDF can belong to only one data set.

  **Learn more**: [Getting started with data sets](./concepts/datasets/index.md)

- **Quality monitoring** lets you track time series data quality for apps and models running on data from CDF.

  A monitor can contain all the time series data that is being used in a data science model to monitor the health of an oil well. Use rule sets to specify data quality requirements for the data in the monitor, and continuously ensure that the data meet the requirements. Each data object in CDF can belong to multiple monitors.

  **Learn more**: [Monitor data quality](./concepts/data_quality_monitoring/index.md)
