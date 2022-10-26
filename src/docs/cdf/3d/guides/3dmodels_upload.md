---
pagination_next: null
pagination_prev: null
---

# Upload 3D models and revisions         

From **Upload 3D models** in Cognite Data Fusion (CDF), you can upload 3D models and revisions to CDF without writing any code. We currently support CAD files from common systems and in standard formats such as RVM, OBJ, and FBX. More formats will be supported in the future.

## Upload a 3D model   

**To upload a 3D model:**

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
2. Sign in with your CDF project name and credentials.
3. Select **Upload 3D models** in the menu.
4. Select **Add model** and follow the wizard to create the model and upload the initial revision of the model.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/3d/3d_upload.png" alt="Upload 3D models" width="60%"/>

## Upload a revision to an existing 3D model

**To add a new revision to a 3D model:**

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
2. Sign in with your CDF project name and credentials.
3. Select **Upload 3D models** in the menu.
4. Select the model you want to add a new revision to.
5. Select **Upload new revision** and follow the wizard to upload a new revision of the model.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/3d/3d_upload_revision.png" alt="Upload 3D model revision" width="60%"/>

## Upload 3D models using the API and SDKs

To upload multiple 3D models programmatically using our API and SDKs, for instance for nightly updates, see [Upload 3D models programmatically](../../../dev/guides/upload-3d-models/upload-3d.md).

## More information

See the [3D models resource type](../../learn/cdf_basics/cdf_basics_datamodel.md#3d-models) to learn more.
