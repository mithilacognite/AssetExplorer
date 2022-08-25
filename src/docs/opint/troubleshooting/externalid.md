---
pagination_next: null
pagination_prev: null
---

# External IDs

To support resources from external systems, you can reference the resources using externally-controllable IDs in the `externalId` field in Cognite Data Fusion.
To learn more, see [Define unique IDs with externalId](../../dev/concepts/external_id.md).

## Asset Data Insight

To support changes to hierarchies, Asset Data Insight requires that you use the `externalId` field when possible, for example, for time series.

If you don't use the `externalId` field, different areas of Asset Data Insight may not work as expected.
For example, a time series without an `externalId` can not be plotted on a chart.

:::info note
If the `externalId` of a resource is changed in CDF, then any references to it will be broken.
:::
