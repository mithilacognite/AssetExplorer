---
pagination_next: null
pagination_prev: null
---

# Interactive engineering diagrams

Extract information from static engineering diagrams, typically P&IDs (Piping and Instrumentation Diagrams), to create **interactive diagrams** that you can explore on any device.

Use this contextualization tool to **find, extract, and match tags** on engineering diagrams (the identifiers for equipment and file names) and link them to an asset hierarchy or other resource types such as files. The results can be approved or rejected at any time.

An engineering diagram with new tags has the status **Pending approval**. This status means that there are detected tags that need to be either approved or rejected to ensure that the interactive diagrams are accurate. When all the new tags have been either approved or rejected, the status of the diagram changes to **Approved**, and the diagram can be used in CDF.

For each engineering diagram, CDF shows the tag types it has detected:

- **Diagrams**: Tags to other engineering diagrams
- **Assets**: Tags to other assets in CDF
- **Unlinked**: Tags that are already manually linked to other resources

## Create interactive diagrams

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
1. Sign in with your CDF project name and credentials.
1. Select **Create interactive engineering diagrams** in the menu.
1. Click **Create interactive diagrams**.
1. Select the diagrams that you want to make interactive.
   You can filter the diagrams by **Name**, **Data set**, **Label**, or **File type** such as PDF. For assets, you can also filter by **Root asset**.
1. Click **Next step** to continue.
1. Select the diagrams you want to link your diagrams to.
1. Click **Next step**.
1. Select the assets you want to link your diagrams to.
1. Click **Next step**.
1. Select the contextualization model:

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/select_model.png" alt="Select model " width="80%"/>

   - **Standard model** is selected by default as this model is recommended for most engineering diagrams.
   - **Advanced model** lets you configure options such as the number of tokens matched for an entity, partial matches, and field matching.

1. Click **Next step**.

   :::info TIP
   Activate **Save and skip settings** if you always use the same model.
   :::

1. Click **Run model**.
1. Review the result of the model - newly detected tags on the interactive diagrams.
1. Choose **Approve all**, **Preview all**, or click a diagram to review it individually.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/interactive_view.png" alt="Interactive view " width="80%"/>

### Approve or reject detected tags

1. Click the bounding box around the detected tag in the diagram.
   <img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/bounding_box.png" alt="Bounding box " width="40%"/>
1. Choose **Approve tag** or **Reject tag**.
1. Click **Save**.

You can also **Approve** or **Reject** tags like this:

1. Click a diagram to review it individually.
1. If it has tags, click **Asset** or **Diagram** on the right sidebar to review them.
1. Click on the pending tag - outlined in blue.
1. Click the tag you want to review.
1. Choose **Approve tag** or **Reject tag**.
1. Click **Save**.

### Add new tags

1. Click the pencil icon to open edit mode.
   <img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/yellow_box.png" alt="Yellow box" width="40%"/>
1. Use the mouse pointer to draw a bounding box around the tag you want to add.
1. Click **Add manually** and choose the CDF resource in the list that you want to link to.
1. Click **Save**.

## Review engineering diagrams pending approval

You can filter the diagrams that are pending approval by **Name**, **Data set**, or **File type**.

1. Click **More options** icon on the diagram.
2. Choose **Recontextualize diagram**, **Approve pending tags**, **Reject pending tags**, or **Clear all tags** on the diagram.
   If you choose **Recontextualize diagram**, you start the process again.

## Save the diagrams as SVG

1. Click **More options** icon or click **Save as SVG** button.
2. Select to save the files as SVG with the same names, or to specify a prefix to the names.
3. Click **Save files**.
