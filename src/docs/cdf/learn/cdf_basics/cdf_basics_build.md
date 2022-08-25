---
title: Build solutions (2 mins)
prev: cdf_basics_integrate
next: cdf_basics_summary
---

# Build solutions

All the information stored in CDF is available through a modern **REST-based API**. In addition to a well-documented API, Cognite provides **connectors** and **SDKs** for many common programming languages and analytics tools, such as Python, JavaScript, Spark, OData (Excel, Power BI), and Grafana. We also offer community SDKs for Scala and .Net.

<!-- CDF works with familiar tools such as SharePoint, PowerApps, and MS Forms, and you can also accelerate your web and mobile application development with **low-code** platforms such as OutSystems. -->

To visualize large, interactive 3D models on the web, our **Reveal** JavaScript library supports both complex CAD models and large point clouds hosted by CDF.

<!-- ![3D](/images/cdf/learn/3d-ship.png) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/3d-ship.png" alt="3D " width="100%"/>

## Software Development Kits (SDKs), libraries, and connectors

The **Cognite Python SDK** requires Python 3.5+ and provides access to the CDF API from applications written in the Python language. We supply a separate extension to the SDK if you're looking to develop CDF data extractors. Our Python SDK is typically used by AI/ML engineers in machine learning development and by data scientists to analyze and compute numeric and scientific data.

The **JavaScript SDK** provides access to the CDF API from applications written in client- or server-side JavaScript. The library supports authentication through API keys (for server-side applications) and bearer tokens (for web applications). It is typically used to develop complex applications on top of the data in CDF.

If you prefer to use **Spark** to work with your data, the Cognite Spark Data Source lets you read and write data from and to CDF.

### Visualization and dashboarding

The **Cognite Power BI connector** lets you use a CDF project as a data source in Power BI Desktop to query, transform and visualize data, share insights across your organization, or embed dashboards in your app or website.

With the **Cognite Data Source for Grafana**, you can use a CDF project as a data source in Grafana to query, visualize, alert on, and explore your **time series** data.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/adjust-timeframe.png" alt="Grafana" width="80%"/>

## Customer solutions

Here's one example of how customers use our development tools to build solutions in the manufacturing industry.

<p><iframe width="740" height="416" src="https://www.youtube.com/embed/Hp373WD-mCU?list=PLrRAbrQ_glsXGzl5OIen3eSS8bz-YFjTV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Visit our [**use case library**](https://www.cognite.com/customers) for more examples and inspiration. Happy building!

### More information

- [Development quickstart](../../../dev/quickstart/)
- [Data model resource types](../../../dev/concepts/resource_types/index.md)
- [The Cognite API reference](../../../api/v1/)
