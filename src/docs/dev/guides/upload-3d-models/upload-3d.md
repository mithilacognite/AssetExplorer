---
pagination_next: null
pagination_prev: null
---

# Upload 3D models programmatically

From the Cognite Console, you can [upload a single 3D model](/cdf/integration/#upload-3d-models) to Cognite Data Fusion (CDF) without writing any code. This article explains how you can upload multiple 3D models using our API and SDKs, for instance for nightly updates.

## Prerequisites

To upload 3D models, you need a **service account** with an **API key** with `threed:write` capability for your CDF project. See [Manage access for services](/cdf/access#manage-access-for-services) to learn more.

You also need:

- Your **CDF project name**. You will use this as the _[projectname]_ below.
- The **file name(s)** of the model(s) you will be uploading. You will use this as the _[filename]_ below.

## Upload 3D models

**To upload 3D models using our API and SDKs:**

1. **Create a model** that can hold multiple revisions:

   `curl -H "api-key: $COGNITE_API_KEY" -H "Content-type: application/json" -X POST "https://api.cognitedata.com/api/v1/projects/[projectname]/3d/models" -d '{"items": [{"name":"model name"}]}'`

   API reference: [https://docs.cognite.com/api/v1/#operation/create3DModels](../../../api/v1/#operation/create3DModels)

2. Copy and make a note of the `id` field in the response. You will use this as the _[modelId]_ below.

3. **Create a file placeholder** to make the file available for processing later.

   `curl -H "api-key: $COGNITE_API_KEY" -H "Content-type: application/json" -X POST "https://api.cognitedata.com/api/v1/projects/[projectname]/files" -d '{"name":"[filename]"}'`

   API reference: [https://docs.cognite.com/api/v1/#operation/initFileUpload](../../../api/v1/#operation/initFileUpload)

4. Copy and make a note of the `id` field in the response. You will use this as the _[fileId]_ below. Also, copy and make a note of `uploadUrl`. You will use this as the _[uploadUrl]_ below.

5. **Upload the file**.

   `curl --upload-file [filename] [uploadUrl]`

   Google API reference: [https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#example_uploading_the_file](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#example_uploading_the_file)

6. **Create a versioned model** and link the file from the first step to the revision. This also starts the processing of the model.

   `curl -H "api-key: $COGNITE_API_KEY" -H "Content-type: application/json" -X POST "https://api.cognitedata.com/api/v1/projects/[projectname]/3d/models/[modelId]/revisions" -d '{"items": [{"fileId":"[fileId]"}]}'`

   API reference: [https://docs.cognite.com/api/v1/#operation/create3DRevisions](../../../api/v1/#operation/create3DRevisions)

7. **Monitor the processing** of the model.

   API reference: [https://docs.cognite.com/api/v1/#operation/get3DRevision](../../../api/v1/#operation/get3DRevision)
