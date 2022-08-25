---
title: Architecture and implementation (3 mins)
---

# Architecture and implementation steps

In this unit, you will get a high-level view of Cognite Data Fusion (CDF) and the CDF architecture. You will also be introduced to the key **steps** to implement CDF.

CDF is a platform for **contextualization** and **data operations**:

<img className=" media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/contextualize_symbol.png" alt=" " width="20%"/>

- **Contextualization** is a process that combines machine learning, a powerful rules engine, and domain knowledge to map resources from different source systems to each other in the CDF data model.

  Start by contextualizing your data with machine learning and rules engines. Then let domain experts validate and fine-tune the results. The resulting refined data and inferred insights are **the foundation for scaling** your CDF implementation and solutions across your organization as you develop a deeper understanding of your data.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/data_queue_symbol.png" alt=" " width="20%"/>

- **Data operations** is a set of tools and practices to manage your data's lifecycle through **collaboration** and **automation**.

  Tools like extractors, transformers, data sets, quality monitoring, and machine learning models allow data engineers, data scientists, data analysts, and other disciplines across your organization to work together to establish, automate, and **continuously optimize** your data management and decision making practices.

You will learn more about contextualization and data operations later in this course, but let's first look at the basic CDF **architecture**.

CDF runs in the cloud and has a modular design as illustrated here:

<!-- ![CDF Architechture](/images/cdf/learn/architecture.svg) -->
<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/architecture.svg" alt="CDF architecture " width="100%"/>

The sections below introduce the main steps to **implementing CDF** and how they relate to the different CDF modules. In later units, you'll learn more details about each of the steps.

## Step 1: Set up data governance

When you rely on data to make operational decisions, it is critical that you know when the data is reliable and that end-users know when they can depend on the data to make decisions.

Before you start integrating and enhancing data in CDF, you need to define and implement your **data governance** policies. We recommend that you appoint a **CDF admin** who can work with the IT department to ensure that CDF follows your organization’s security practices. Also, connect CDF to your IdP (Identity Provider), and **use the existing IdP user identities** to manage access to CDF and the data stored in CDF.

CDF has tools and features to orchestrate and monitor data governance, establish secure **data access**, track **data lineage**, and ensure **data integrity**.

## Step 2: Integrate data

With data governance in place, system integrators can begin the work to integrate data into CDF from your **IT** (Information Technology) and **OT** (Operational Technology) **data sources**. These systems can range from industrial control systems supplying sensor data, through ERP systems to massive 3D CAD models in engineering systems.

### Extract data

With read access to the data sources, you can set up the system integration to stream data into the CDF **staging area** where the data can be normalized and enriched. We support standard protocols and interfaces like PostgreSQL and OPC-UA to facilitate data integration with your existing ETL tools and data warehouse solutions.

We also have extractors that are custom-built for industry-specific systems and standard off-the-shelf ETL tools for more traditional tabular data in SQL-compatible databases. This approach allows us to minimize logic in the extractors, and to run and re-run transformation on data in the cloud.

### Transform data

In the CDF staging area, the data is stored in its original format. This approach allows you to run and re-run **transformations** on the data in the cloud and reshape it to fit the **CDF data model**. We'll come back to the data model in a later unit.

Decoupling the extraction and transformation steps makes it easier to maintain the integration pipelines and reduce the load on the source systems. We recommend using your existing ETL tools to transform the data, but we also offer the **CDF Transformation** tool as an alternative for lightweight transformation jobs.

<!-- <div class="media-right" style="max-width: 45%;"> -->

<!-- ![Architecture](/images/cdf/learn/transformation.png) -->

<!-- This could be an animation instead -->
<!-- </div> -->

### Enhance data

The automatic and interactive **contextualization** tools in CDF let you combine machine learning, a powerful rules engine, and domain expertise to map resources from different source systems to each other in the CDF data model. Start by contextualizing your data with machine learning and rules engines. Then let domain experts validate and fine-tune the results.

## Step 3: Build solutions

With complete and contextualized data, you can build applications where you, for example, can click a component in a 3D model to see all the corresponding time series data or ask for all the pressure readings along a flow line.

<!-- ![3D](/images/cdf/learn/3d.png) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/3d.png" alt="3D " width="100%"/>

All the information stored in CDF is available through a modern **REST-based API**. In addition to a well-documented API, Cognite provides **connectors** and **SDKs** for many common programming languages and analytics tools, such as Python, JavaScript, Spark, OData (Excel, Power BI), and Grafana. We also offer community SDKs for Scala and .Net.

<!-- CDF works with familiar tools such as SharePoint, PowerApps, and MS Forms, and you can also accelerate your web and mobile application development with **low-code** platforms such as OutSystems. -->

To build applications on top of the data in CDF, you depend on a well-defined data model to make assumptions about the structure of the data. And that's what we'll address in the next unit when we have a closer look at [**the CDF data model**](cdf_basics_datamodel.md) and its resource types.

## More information

- [Data governance](../../../cdf/data_governance/index.md)
- [Data integration](../../../cdf/integration/index.md)
- [Developer documentation](../../../dev/)
