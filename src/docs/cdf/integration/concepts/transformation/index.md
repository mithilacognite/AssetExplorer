---
pagination_next: null
pagination_prev: null
---

# About data transformation

Data transformation is the process of changing your data set from one state into another, and is a core part of a [data integration](../../index.md) workflow.

CDF ships with a built-it data transformation tool, [CDF Transformations](../../guides/transformation/transformations.md), and provides integrations to multiple other data transformation technologies. Which tool to use depends on your transformation requirements and your technology preferences.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/transformation_architecture.png" alt=" " width="100%"/>

Data transformation is typically used to:

- Re-shape the data to fit a target data model. For example, read a data object from Raw and shape it into an event.
- Enrich the data with more information. For example, by adding data from other sources or running an feature generation algorithm over it.
- Contextualize the data by trying to match it or compare it with other data objects in your collection.
- Analyze the quality of the data. For example by checking if all the required information is present in the data object.

The primary function is to transform the data from CDF's RAW storage, or an equivalent staging system, into the Cognite data model where the data can be further enriched with more relationships for in-depth analytics and real-time insight.

## Transformation tools

Data transformation is a potentially resource intensive job. The transformation logic may be complex, the data volumes may be large and the transformation job may need to complete its task within a small time window. This requires the data transformation tool to be performant, scalable and robust. We recommend the you use tools that offer high capacity and are fault tolerant.

| Transformation tool                                                   | Description                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CDF Transformations](../../guides/transformation/transformations.md) | With CDF Transformations, you can use Spark SQL queries to transform data from the CDF staging area, RAW, into the CDF data model and continuously monitor the transformations to solve any issues before they reach the data consumer. <br/><br/>CDF Transformations is an integrated part of CDF, and you can run it in your browser. |
| [Databricks](../../guides/transformation/databricks.md)               | Databricks is a collaborative, Jupyter-style notebook application that lets you analyze and transform data in CDF using distributed cloud computing, Spark, and the Cognite Spark Data Source.                                                                                                                                          |
