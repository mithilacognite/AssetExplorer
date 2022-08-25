---
pagination_next: null
pagination_prev: null
---

# About data integration

To analyze and contextualize your data in Cognite Data Fusion (CDF), you need to establish efficient **data integration pipelines** between your existing data infrastructure and CDF.

A data integration pipeline is typically composed of an **extract** component, a **transform** component, and a **contextualization** component.

- The [extract](./concepts/extraction/index.md) component connects to the source system and pushes data to the [staging area](../integration/guides/extraction/raw_explorer.md).

- The [transform](./concepts/transformation/index.md) component shapes and moves the data from the staging area into the CDF data model. This is the component that typically hosts most of the data processing logic.

- The [contextualization](./concepts/contextualization/index.md) component lets you combine machine learning, a powerful rules engine, and domain expertise to map resources from different source systems to each other in the CDF data model.

<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/integration_architecture.png" alt="Integration architecture " width="80%"/>

To integrate data into the CDF data model, you can:

- Use Cognite’s extractor and transformation components.
- Use 3<sup>rd</sup> party extractor and transformation components.
- Develop custom solutions.

Regardless of the tools you use, we recommend that you use a **modular** design for your data integration pipelines to make them as maintainable as possible. Also, to reduce the load on your source systems, make sure that you lift the data out of the source system(s) and into the staging area before you start transforming it.
