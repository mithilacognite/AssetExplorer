---
pagination_next: null
pagination_prev: null
---

# 3D models

In Cognite Data Fusion, the 3D model **resource type** stores files that provide **visual** and **geometrical data** and **context** to assets. For example, we can connect a pump asset with a 3D model of the plant floor where it's placed. Seeing asset data rendered in 3D helps you quickly find the sensor data you are interested in.

## About 3D models

3D data is organized in **models** and **revisions**:

- **Models** are placeholders for a set of revisions.

- **Revisions** contain the 3D data.

For example, you can have a model named `Compressor` and you can upload a revision under that model.

When you create a revision you need to attach a 3D file. For each new version of the 3D model, you upload a new revision under the same model. A revision can have status `published` or `unpublished` which is used by applications to decide whether or not to list the revision. Multiple revisions can be published at the same time, since they do not necessarily represent time evolution of the 3D model, but rather different versions (high detail vs low detail).

When you upload a new revision, Cognite needs to process the 3D data to optimize it for our renderer. Depending on the complexity of the 3D file, this can take some time. A revision can have status `Queued`, `Processing`, `Done` or `Failed`, which can be tracked during processing.

3D data is built up by a hierarchical structure. This is very similar to how we organize our internal asset hierarchy. Each node in the 3D hierarchy is automatically assigned a unique `nodeId` value.

If a user clicks on an object on the screen, the application can get a callback containing the nodeId of the clicked object. We support endpoints to extract the full 3D node hierarchy, and endpoints to create mapping between 3D nodes and nodes in the asset hierarchy. You can then use the `nodeId` to connect the 3D data to asset information such as metadata and time series.

You can also use our [web based 3D viewer](https://cognitedata.github.io/reveal-docs/docs) to embed the 3D model in a web page.

:::info TIP
See the [3D API documentation](/api/v1/#tag/3D-Models) for more information about how to work with 3D models.
:::
