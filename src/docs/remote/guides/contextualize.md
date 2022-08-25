---
pagination_next: null
pagination_prev: null
---

# Contextualize mode

Use the **Contextualize** mode to link 3D objects to equipment to make the twin "smart" and interactive.

Cognite Data Fusion (CDF) supports semi-automatic contextualization of 3D models if the nodes in the 3D model have names that can be related to equipment. We recommend this as **the first step** to contextualize 3D models.

The **next step** is to use the Contextualize mode in Cognite Remote to link geometry and equipment [manually](#manual-contextualization). Contextualization in Cognite Remote is especially useful for combining and visualizing multiple 3D models, point cloud data, and 360-degree images.

<!-- Cognite Remote also supports contextualization based on [tag detection in geo-positioned images](#tag-detection-in-geo-positioned-images). -->

## Manual contextualization

For manual contextualization, you need information about the location of the equipment. This information can, for instance, come from images with visible equipment tags or layout drawings superimposed on the CAD model.

1.  First, **select the 3D model** in the twin that you want to work with. Already contextualized geometry displays in blue color.

2.  To contextualize geometry to an asset, go to the **Assets** panel, and **search** for the equipment in the asset hierarchy that you want to work with.

    Alternatively, switch to the tree view, browse the hierarchy to find the equipment, and select it. If there is geometry linked to the asset, it displays in pink color.

3.  Next, **find and click the geometry** in the 3D view that you want to contextualize to the selected asset. Click already linked geometry to remove a connection.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/contextualize_full.png" width="80%" alt="Contextualize"/>

   <!-- <img className="screenshot" src="/images/remote/contextualize_full.png" alt=" " width="80%"/> -->
   
    The 3D Model panel shows the structure of the 3D model with the hierarchy from the original CAD model. As you link 3D nodes to the selected asset, Remote marks them with pink checkmarks in the 3D model hierarchy. The linked 3D nodes also show up in the Asset panel below the asset you're currently working with.

4.  To save your contextualization changes, select **Save latest changes** in the top right corner. In the list of unsaved changes, choose to keep or remove the changes.

    When you save the changes, the mappings between the CAD model 3D nodes and the equipment in the asset hierarchy are saved to CDF. The changes take effect for any Cognite application and any custom application built on top of CDF using the 3D model.

5.  Switch back to Explore mode to **verify** that the equipment is interactive. Click the equipment in the 3D view to open the **Details** panel and see related information.

:::info Contextualization tips

Use the checkboxes in the 3D hierarchy to **add or remove 3D nodes** from the selected asset. You can also remove linked 3D nodes from an asset by clicking the X next to their name under the asset in the Asset panel.

Colored dots behind the names of collapsed nodes in the 3D model panel indicate contextualized 3D nodes in the sub-hierarchy of that 3D node. Pink dots indicate geometry linked to the selected asset, while blue dots indicate geometry linked to other assets.

The Contextualize mode also allows you to **link nodes high up in the 3D model hierarchy** to assets. These 3D nodes typically don't have a geometry of their own, but if you link it to the asset, any 3D nodes in its sub-hierarchy that aren't linked to an asset will behave like they're linked to the selected asset. 3D nodes that are **indirectly linked** to an asset in this way will be colored in a lighter blue/pink color in the 3D view and will have a light pink/blue checkbox border in the 3D Model panel.

Some assets have drawings associated with them, which can be helpful in contextualization work. Select the **Open drawing** button in the lower right corner to open a drawing side-by-side with the 3D view. You can use the controls to resize and zoom in and out of the drawing.
:::

<!-- ## Tag detection in geo-positioned images

Cognite Remote supports using geo-positioned images with tag detection during contextualization. Upload the images via the **Contextualize Imagery Data** mode in CDF. Run tag detection on the images, and include the images in your twin.

The imagery data contextualization in CDF picks up the approximate image location automatically from the image metadata. In Contextualize mode, the image positions display as icons in the twin. Select an icon to open an image in the 3D view.

Any detected tags displays with rectangle markers in the image and a list below the image. Click a tag to automatically select the corresponding node in the asset hierarchy. Continue by clicking the relevant geometry in the 3D view, and then save the changes to CDF. -->
