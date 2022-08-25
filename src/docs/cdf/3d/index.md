---
pagination_next: null
pagination_prev: null
---

# About 3D models

You can upload large **3D models** to Cognite Data Fusion (CDF) to better visualize and contextualize data. CDF automatically analyzes and optimizes the 3D models to enable devices with different form factors to render the models at high frame rates and with great detail.

The 3D API in CDF currently supports CAD files from common systems and in standard formats such as Aveva RVM from PDMS and E3D, STEP, Solidworks, Parasolid, OBJ, and FBX. 
We plan to support more CAD formats over time.
Supported point cloud formats include LAS/LAZ, E57, PTS, and PTX.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/3d/3d_example_in_console.png" alt="3D model in CDF" width="80%"/>

Cognite's [REVEAL 3D Web Viewer SDK](https://cognitedata.github.io/reveal-docs/docs) allows you to integrate 3D model visualizations in any web-based application.
Users can view and interact with the 3D models in a web browser on desktop and mobile devices, and in Cognite applications such as [Asset Data Insight](../../opint/) and [InField](../../infield/).

3D data is organized in **models** and **revisions**:

- **Models** are placeholders for a set of revisions.
- **Revisions** contain the 3D data.

For example, you can have a model named _Compressor_ and upload different revisions of that model. When you create a revision you need to attach a 3D file. For each new version of the 3D model, you upload a new revision under the same model. Revisions can be **published** or **unpublished** so that applications can decide whether or not to list the revision. You can publish multiple revisions at the same time for example for different versions of the model (high detail vs. low detail).

You can [upload](./guides/3dmodels_upload.md) or [edit](./guides/3dmodels_edit.md) 3D models without writing any code using the CDF user interface, or you can [upload them programmatically](../../dev/guides/upload-3d-models/upload-3d) using our API and SDKs.

## Supported 3D file formats

<!-- the table below is reused in Contextualization of 3D models in Entity matching-->

| Format     | Type                                 |
| ------     | ------------------------------------ |
| RVM        | CAD                                  |
| STEP       | CAD                                  |
| Solidworks | CAD                                  |
| Parasolid  | CAD                                  |
| FBX        | CAD/General 3D                       |
| OBJ        | CAD/General 3D                       |
| PTX        | Point Cloud                          |
| PTS        | Point Cloud                          |
| E57        | Point Cloud                          |
| LAZ        | Point Cloud                          |
| LAS        | Point Cloud                          |
| ZIP        | Zip files with CAD/Point cloud files |

<!--
| CIFF                             | Cognite Internal File Format | text
-->
