---
pagination_next: null
pagination_prev: null
---

# About resource types

A resource is an individual data entity with a unique identifier. This article introduces the different **resource types** that you can interact with using the Cognite API.

## Assets

The [**assets**](assets.md) resource type stores **digital representations** of objects or groups of **objects from the physical world**. Assets are organized in **hierarchies**. For example, a **water pump** asset can be part of a **subsystem** asset on an **oil platform** asset.

Assets **connect related data from different sources**, and are core to identifying all the data that is relevant to an entity (**contextualization**) in Cognite Data Fusion. All other resource types, for example time series, events and files, should be connected to **at least one** asset, and each asset can be connected to many resources and resource types.

[**Learn more**](assets.md) about assets.

## Time series

The [**time series**](timeseries.md) resource type stores a series of **data points** in **time order**. Examples of a time series is the temperature of a water pump asset, the monthly precipitation in a location and the daily average number of manufacturing defects.

[**Learn more**](timeseries.md) about time series.

## Events

The [**events**](events.md) resource type stores information that happen over **a period of time**. Events have a **start time** and an **end time** and can be related to **multiple assets**. For example, an event can describe two hours of maintenance on a water pump and associated pipes, or a future time period for when the pump is scheduled for inspection.

[**Learn more**](events.md) about events.

## Files

The [**files**](files.md) resource type stores documents that contain information that is related to **one or more assets**. For example, a file can contain a piping and instrumentation diagram (P&ID) that shows how multiple assets are connected.

[**Learn more**](files.md) about files.

## 3D models

The [**3D models**](3dmodels.md) resource type stores files that provide **visual** and **geometrical data** and **context** to assets. For example, we can connect a pump asset with a 3D model of the plant floor where it's placed. Seeing asset data rendered in 3D helps you quickly find the sensor data you are interested in.

[**Learn more**](3dmodels.md) about 3D models.

## Sequences

The [**Sequences**](sequences.md) resource type stores series of rows indexed by row number. Each row contains one or more columns with either string or numeric data. Examples of sequences are performance curves and various types of logs, for example depth logs in drilling.

[**Learn more**](sequences.md) about sequences.

## Labels

With [**labels**](labels.md) you can create a predefined set of **managed terms** that you can use to annotate and group **assets**.

You can organize the labels in a way that makes sense in your business and use the labels to make it easier to find what you want.

For example, you can create a label called _pump_ and apply it to all asset resources that represent pumps, and then filter assets to see only pumps.

[**Learn more**](labels.md) about labels.

## Relationships

The [**Relationships**](relationships.md) resource type represents connections between resource objects in Cognite Data Fusion (CDF). Each relationship is between a source and a target object and is defined by a **relationship type** and the **external IDs** and **resource types** of the source and target objects. Optionally, a relationship can be time-constrained with a start and end time.

<!-- What can I use it for? -->

[**Learn more**](relationships.md) about relationships.

## Templates

The [**Templates**](templates.md) resource type represents solutions' data model and connects the data model with data in Cognite Data Fusion (CDF).

<!-- What can I use it for? -->

[**Learn more**](templates.md) about templates.

## Entity matching

Different sources of industrial data can use different naming standards when they refer to the same entity. With [**Entity matching**](entity_matching.md), you can match entities like time series, files, and sequences from different source systems to assets.

<!-- What can I use it for? -->

[**Learn more**](entity_matching.md) about entity matching.
