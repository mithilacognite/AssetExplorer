---
title: What's new?
pagination_next: null
pagination_prev: null
---

# What's new in Cognite Discover

This article documents the ongoing releases of Cognite Discover
features.

## Version 1.30.0 - August 11, 2022

### Enhancements

- New **Well view** tab:
  - Stick Chart view with Casing information, NPT, and NDS events in scatter or cluster views.
- In the **Geomechanics** view:
  - Display NPT and NDS events next to Geomechanics curves.
  - The angle information is now on the Geomechanics curve tooltip and graph.
  - Connect NDS / NPT scatter view to view toggle in Geomechanics.
  - Zoom and selection for PPFG well page should scale graph and related columns.
  - Add events filter into Geomechanics.
- In the **Well log** view:
  - Distinct colors for logs.
- In the **3D** view:
  - Description of NPT and NDS events are more precise.
  - Well names are more readable on the top of the well.
- In the **Well filter**:
  - Data Availability includes Hole Sections, Well Tops, and Time Measurements.
- In **Document** filter:
  - Introduction of a new author filter for document search. Capability to filter on unknown authors.
- Manage **document feedback** from the Admin Panel:
  - Approve/reject document type feedback document classification. Note that only one change of document type label is allowed per day.
- **Project Config Layer**:
  - Support to create, search and delete more than 1000 features.
  - Option to remove old layers from the admin settings dropdown.
  - Add and manage shapefiles.

### Fixed bugs

- In the **Map view**:
  - Resolution of icon position for polygon search.
- In the **well filters**:
  - Region remains selected when the field is unselected.
  - For the NPT events, no more duplicated NPT Risk Types.
- In the **Wells Search** result table:
  - Results are correctly sorted when ordering by "Water Depth".
- In the **Trajectories** view:
  - Equivalent Departure graph has been resolved.
  - No duplicated trajectories for GoM Atlantis Wells.
  - Colors for wellbore remain the same independently of the selection or deselection.
  - Resolution of the trajectory display concerning the geographic coordinates system for consistency with 3D View.
- In the **NDS Events** view:
  - Sub types can be deselected in Risk type and subtype filters.
- In Casing view:
  - No Casing message should be centered.
- In the **Well log** view:
  - The curves in one subplot are displayed with different colors.
- In the **Geomechanics & PPFG** view:
  - No more duplicate errors.
  - Leak of Test (LOT) data is now visible.
  - Connect NDS / NPT scatter view to view toggle.
- In the **3D** view:
  - The close feature works now.
  - When selecting "Exit full screen", the "set-z scale" button is now clearly displayed.
  - Check of data for NPT events against well trajectories in the 3D view and NPT view.
- In the **Favorite** view:
  - Resolution of the favorite card size behavior when clicking on comment.
  - Resolution of the unit for water depth when changing distance unit.
  - Resolution of issue in unit between ft and m on event descriptions.
- Improved stability for **discover-api** categories call when data are missing.

## Version 1.29.0 - June 24, 2022

### Enhancements

- Added the ability to **set the legend** for the Non-Productive Time (NPT) codes and detail codes in the Admin settings.
- In **3D view**:
  - The **unit for the measure distance** option now displays.
  - The new "**view mode**" feature lets you overlay multiple wells to compare their trajectories.
  - The **measurement reference** is hidden on the Compare Curves view for the Geomechanics and PPFG data view.
- **Improved colors** for the NPT events.
- The **favorite option** now has the star icon inside the well map card
- On the **feedback** on documents:
  - The **company name** is displayed below the submitter's name and the assigned user.
  - Administrators can **assign tickets** to other administrators.
  - **Dynamic search** for the assigned administrator as you type.
- The **Well result table** shows KB elevation, Dog Leg Severity, Measured Depth, and True Vertical Depth to help you understand the results of the corresponding well characteristic filtering.
- You can **save the Project Configuration Layer** with updates in the geospatial data.
- No Drilling Surprise **(NDS) clusters** are visible next to the Casings data.
- Development of **NDS Tree view**.
- When **opening a favorite** that only presents wells, with no document, the favorite opens directly on the Well tab.
- A new **tooltip** component.
- The updated dropdown component improves the feature **stability**.

### Fixed bugs

- On **the casing view**, the resolution of the overlapping texts with casing elements or other texts.
- On the **3D view**:
  - **Improved readability** of the event description when selecting aN NPT event or No-Drilling-Surprise event
  - **Depth values and unit** are properly displayed on the Vertical axis as a function of the unit setting.
- Fixed clearing of the **document selection**.
- Problems related to **zooming in and out** on the map have been resolved.
- The **minimap** now shows the exact location.
- Corrected the original path for the **metadata** of documents.
- **Search and close** options remain close to the polygon when zooming in or out.
- Fixed the **search** on the exact page number for documents.

## Version 1.28.0 - May 13, 2022

### New features

- Enhanced [**Casing** tab](guides/well_data.md#casings).
  - Ability to view casing **schematics** on one side or both sides.
  - Ability to view **RKB**, **sea level**, and **mud line** in casing schematics.
- Ability to view **NDS events** next to casings schematics on the **Casing** tab.
- Ability to view NPT codes and details codes in NPT graphs and tables using the **i** button or by hovering over.
- Ability to expand the trajectories graph in the **Trajectories** view.

### Fixed bugs

- The **Related Documents** view does not display duplicated items.
- Fixed bugs related to the **Comments** tab in favorites and saved search.
- Fixed the **NPT Code** toggle option.
- The **NPT** and **NDS** events are now visible in the 3D view.
- Fixes to the display of the scatter plot in the NPT tab.
- Fixed a bug that prevented the right arrow in the casings view from working correctly.
