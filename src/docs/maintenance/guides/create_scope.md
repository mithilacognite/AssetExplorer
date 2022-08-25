---
pagination_next: null
pagination_prev: null
---

# Scope

First, select the relevant asset. You are then presented with a 3D model of the asset (if available), and a list of the work orders.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/scope.png" alt="Scope " width="80%"/>

## Work orders

The work order list shows all open work orders for an asset and the work order status.

<!--Note the numbering on the image below and the following list for explanations: must insert image -->

The work order information you can see in the list:

- **Priority**: The color indicates the priority of the work order. Work orders with top priority are listed first.

- **ID**: The id field of the work order.
- **Description**: The description field of the work order.
- **Readiness**: If the data is available, the status indicator represents the **readiness** of the work order, defined by the readiness rules which is configurable.
- **Material readiness**: This allows you to see the material status of the work order, if the data is available.
- **Health check**: Work orders are compared to closed work orders to identify their status. A heart icon in different colors indicates the number of issues related to the work order:

   <img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/hearts.png" alt="hearts " width="40%"/>

  Hover over the heart icon to see further details.

- **Tag list**: The tag list shows a predefined list of fields from the work order.

- **Action button**: The action button displays possible actions depending on the data available for the work order.
<!-- insert table-->

<!-- Insert an image here of the list header when you have clicked the list action to the left (?) -->

The list header contains:

- List actions
- A quick search to find work orders based on description or id
- Download button to download all the work orders in a xlsx format
- Filter options to specify the criteria for the work orders in the list

To view the work order details and its operations, click a work order in the list.
In the detail view the key information is displayed in the top of the window. The information displayed is configurable.

<!-- insert image of work order detail view -->

## Create a scope

Click **Add scope +** to access the data.
You can also add a **New scope** and apply your filters to the data.

To move work orders between lists, drag and drop them to the header of a list. This will change the work order so that its fields matches the list's filter criteria. When you drop it to the list header, you can review the changes before you confirm the move.
Download the work order list to export it as an excel file, or line walk sheet.

The filter functionality handles multiple values and allows you to create a scope based on multiple IDs. To do this, add the IDs separated by line change.

To save a list as a favorite, click **More options** icon, and select **Add to favorites**. Note: your favorite lists are only visible to you.

## Suggestions

**Cognite Maintain** suggests which work orders that you can either add to your scope or remove.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/lightbulb.png" alt="Suggestions " width="60%"/>

- Green light bulb: for items that are suggested to be added.
- Red light bulb: for items that are recommended to be removed.
  Hover over the light bulb icon to see more details.

You can create a list of work orders and click on **Suggestions tab** to see the suggestions for the selected scope.

To see what settings are available to generate suggestions on, click the tool icon next to the heading. The panel that opens lists the different suggestions settings available to you.

Note that for some of the settings you can specify for example the proximity in meters or how many days away from deadline to further narrow your search.

To approve adding or removing a work order from your scope based on suggestions, simply click on the work order. You will be prompted to approve the suggestion, and then presented with the changes in a new window where you confirm or discard your changes.

The work order is then moved as requested.

## Risks

This section contains other data types that are also relevant to visualize in 3D and 2D, and take into account when optimizing a maintenance plan. This can be active risks, defective equipment, or notifications, depending on the way your company is organized.

When clicking on the section in the application you will see the data types available to you listed as tabs. Please view the legend in the bottom left corner of the 3D model to see which icons are used to visualize the data types in 3D.

In this list view, you can filter on type and source by using **Add scope +**.
Select **New scope** to create your own list that you can filter.
