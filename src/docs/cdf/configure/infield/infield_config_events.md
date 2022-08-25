---
pagination_next: null
pagination_prev: null
title: Work orders, templates, alarms
---

# Work orders, templates, and alarms

The settings listed below apply to data types connected to the CDF **Events** resource type.

## General work order settings

Use the **Work orders** tab to configure the settings below.

InField supports work orders from either SAP or Workmate, and some pages will look different depending on the source system for the work orders. Work orders are sorted by the due date for open work orders and the completion date for closed work orders.

The settings in the table below apply to work orders coming from **any** source system.

| Field                                                 | Description                                                                                                                                                                                                                                                  | Default value                                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Work order event type<sup>1</sup>                     | Specify the value of the Type field for work order events in CDF.                                                                                                                                                                                            | WorkMate: `workorder`<p></p> SAP: `maintenance`                                  |
| Work order event subtype                              | Specify the value of the Subtype field for work order events in CDF                                                                                                                                                                                          | { enabled: true, value: `work-order` }                                         |
| Object list event type<sup>1</sup>                    | Specify the value of the Type field for Object list events in CDF.                                                                                                                                                                                           | WorkMate: `WorkorderItem`<p></p> SAP: `maintenance`                              |
| Object list event subtype                             | Specify the value of the SubType field for Object list events in CDF.                                                                                                                                                                                        | { enabled: true, value: `work-order-item` }                                    |
| Work order by object list fetch key<sup>1</sup>       | Specify the work order metadata field to fetch the Object list for a single work order.                                                                                                                                                                      | Workmate: `WORKORDER_NUMBER`<p></p> SAP: `MaintenanceOrder`                    |
| Work order ID metadata field<sup>1</sup>              | Specify the event metadata field that contains the unique ID of a specific work order.                                                                                                                                                                       | Workmate: `WORKORDER_ID` <p></p>SAP: `MaintenanceOrder`                        |
| Work order number metadata field<sup>1</sup>          | Specify the event metadata field that contains the work order number. Work order search filters based on `WorkOrderNumber`. The data must be in string format. See also the examples below.                | Workmate: `WORKORDER_NUMBER` <p></p>SAP: `MaintenanceOrder`                    |
| Work order title metadata field<sup>1</sup>           | Specify the event metadata field that contains the work order title. The data must be in string format.                                                                                                                                                      | Workmate: `WORKORDER_TITLE` <p></p>SAP: `MaintenanceOrderDesc`                 |
| Work order user status metadata field<sup>1</sup>     | Specify the event metadata field that contains the user status. The data must be in string format. If a work order has multiple statuses, the string must have a format of either `status1`,  `status2`, or `status1, status2`. See item 3 in the example below. | Workmate: `WORKORDER_STATUS` <p></p>SAP: `ConcatenatedActiveUserStsName`       |
| Work order system status metadata field<sup>1</sup>   | Specify the event metadata field that contains the system status. The data must be in string format.                                                                                                                                                         | Workmate: `WORKORDER_SYSTEMSTATUS` <p></p>SAP: `ConcatenatedActiveSystStsName` |
| Work order status description metadata field          | Specify the event metadata field that contains the status description.                                                                                                                                                                                       | Workmate: `WORKORDER_STATUSDESC` <p></p>SAP: `SystemStatusDescription`         |
| Work order discipline metadata field<sup>1</sup>      | Specify the event metadata field that contains the work order discipline. The data must be in string format. See item 4 in the example below.                                                                                                                | Workmate: `WORKORDER_LEADDISCIPLINEDESC` <p></p>SAP: `MainWorkCenter`          |
| Work order due date metadata field<sup>1</sup>        | Specify the event metadata field that contains the work order due date. The data must be in string format.                                                                                                                                                   | Workmate: `WORKORDER_DUEDATE` <p></p>SAP: `LatestAcceptableCompletionDate`     |
| Work order completion date metadata field<sup>1</sup> | Specify the event metadata field that contains the work order completion date. The data must be in string format.                                                                                                                                            | Workmate: `WORKORDER_COMPLETIONDATE` <p></p>SAP: `MaintOrderReferenceDateTime` |
| Work order item name metadata field<sup>1</sup>       | Specify the event metadata field that contains the work order item name. The data must be in string format.                                                                                                                                                  | Workmate: `WORKORDER_ITEMNAME` <p></p>SAP: `TechnicalObject`                   |
| Work order description metadata field<sup>1</sup>     | Specify the event metadata field that contains the work order description. The data must be in string format.                                                                                                                                                | Workmate: `WORKORDER_DESC` <p></p>SAP: `MaintenanceOrderLongText`              |
| Work order inserted date metadata field<sup>1</sup>   | Specify the event metadata field that contains the work order inserted date. The data must be in string format.                                                                                                                                              | Workmate: `WORKORDER_INSERTEDDATE` <p></p>SAP: `CreatedOn`                     |
| Work order metadata keys that are links               | Specify work order metadata fields that will be links in the user interface.                                                                                                                                                                                 | Workmate: - <p></p>SAP: `MaintenanceNotification`                              |
| Work order discipline description                     | Insert the number of characters in the work order discipline to be displayed.                                                                                                                                                                                | Workmate: `{prefixChars: 3, upperCase: true, }` <p></p>SAP: `{}`               |
| Work order details field mappings                     | Click to add unique fields in the work order’s metadata field to display on the **Details** tab for a single work order.                                                                                                                                     | -                                                                              |

<p><sup>1</sup> required if the specific feature is enabled.</p>

## SAP work orders

These settings are made under **Source-specific properties** on the **Work orders** tab and are displayed when users open the **Notification** page from the sidebar or **Overview** page in InField. Scroll down to see examples from the UI.

| Field                                     | Description                                                                                                                                                                    | Default value                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Notification details field mappings       | Click to add notifications' metadata fields. These are displayed in the detailed view for a notification.                                                                      | -                                        |
| Work order type metadata field            | Specify the work order event metadata field key for a specific work order type. This data must be in string format. Note: This is different from the Work order event type above. | `MaintenanceOrderType`                   |
| Work order active status key              | Specify the work order metadata field that contains the work order active status.                                                                                              | `WorkOrderStatus`                        |
| Work order non-active status values       | Specify values for the field above that are non-active work orders. This is used for filtering.                                                                                | `['CLSD', 'TECO']`                       |
| Notifications event type                  | Specify the value of the Type field for notification events in CDF.                                                                                                            | `maintenance`                            |
| Notifications event subtype               | Specify the value of the Type field for notification events in CDF.                                                                                                            | `{enabled: true, value: "notification"}` |
| Notification metadata keys that are links | Specify a list of notification metadata fields that will display as links in the user interface.                                                                               | -                                        |
| Notification id metadata field            | Specify the work order event metadata field that contains the work order notification ID.                                                                                      | `MaintenanceNotification`                |
| Notification type metadata field          | Specify the work order event metadata field that contains the work order notification type. This is different from event type. See also the examples below.                | `NotificationType`                       |
| Notification description metadata field   | Specify the work order event metadata field that contains the work order notification description.                                                                             | `NotificationText`                       |
| Notification creation time metadata field | Specify the work order event metadata field that contains the work order notification creation time.                                                                           | `CreatedOn`                              |

## Work operations

In InField, the settings on the **Work operations** tab apply to the **Operations** tab for work orders.

| Field                                                        | Description                                                                                                                 | Default value                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Work operations event type<sup>1</sup>                       | Enter the value of the Type field for work operation events in CDF.                                                         | Workmate: `WorkorderTask` <p></p>SAP: `maintenance` |
| Work operations event subtype<sup>1</sup>                    | Enter the value of the Subtype field for work operation events in CDF.                                                      | `{ enabled: true, value: "work-order-operation" }`  |
| Work operations tab display name<sup>1</sup>                 | Enter a name for the tab showing work operations in the user interface.                                                     | `Operations`                                        |
| Work operation id metadata field<sup>1</sup>                 | Specify the work operation event metadata field that contains the work operation ID. The data must be in string format.     | `MaintOrderOperationInternalID`                     |
| Work operation name metadata field<sup>1</sup>               | Specify the work operation event metadata field that contains the work operation name. The data must be in string format.   | `OperationDescription`                              |
| Work operation number metadata field<sup>1</sup>             | Specify the work operation event metadata field that contains the work operation number. The data must be in string format. | `MaintenancOrderOperation`                          |
| Work operation code metadata field<sup>1</sup>               | Specify the work operation event metadata field that contains the work operation code.                                      | `WorkCenter`                                        |
| Work operation completed datetime metadata field<sup>1</sup> | Specify the work operation event metadata field that contains the work operation completed date time.                       | `CompletedDateTime`                                 |
| Work operation details field mappings                        | Specify the work operation metadata fields to display in the detailed view of a single work operation.                      |                                                     |

<p><sup>1</sup> required if the specific feature is enabled.</p>

## Work plans

Work orders must be enabled on the **Work orders** tab for the settings on this tab to be relevant. Different methods of grouping work orders will be available for different source systems. You select the source system on the **Work orders** tab.

### Date-based work plans

The list of work orders is displayed according to the date range.

| Field                                             | Description                                                                                                                                                                                                                                                    | Default value                                      |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Section title| Customize the display title of this section in the user interface.| `Work Plan`|
| Date filter key|Specify the property on work order event objects that the date range filtering will be based on. This must be a top-level property that supports min/max filtering and cannot be a metadata property.  | `startTime`|
|Start day of week| Enter the first day of each week.| `sunday`|
|Work order by date range field mappings| Add fields to display in the grid displayed for each work order.  |-|

### Revisions/Work packages

In InField, the **Revision** section is displayed with the active work plans, and users can browse through work orders and open work orders as checklists.

| Field                                             | Description                                                                                                                                                                                                                                                    | Default value                                      |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Revision event type<sup>1</sup>                   | Specify the value of the Type field for revision events in CDF.                                                                                                                                                                                                | `maintenance`                                      |
| Revision event subtype<sup>1</sup>                | Specify the value of the Subtype field for revision events in CDF.                                                                                                                                                                                             | `{ enabled: true, value: "revision" }`             |
| Revision ID metadata field<sup>1</sup>            | Specify the work operation event metadata field that contains the revision ID.                                                                                                                                                                                 | `RevisionID`                                       |
| Revision Name metadata field<sup>1</sup>          | Specify the work operation event metadata field that contains the revision name.                                                                                                                                                                               | `RevisionName`                                     |
| Revision StartDateTime metadata field<sup>1</sup> | Specify the work operation event metadata field that contains the revision start date time.                                                                                                                                                                    | `RevisionStartDateTime`                            |
| Revision EndDateTime metadata field<sup>1</sup>   | Specify the work operation event metadata field that contains the revision end date time.                                                                                                                                                                      | `RevisionEndDateTime`                              |
| Revision type metadata field                      | Specify the metadata field name that will be used to retrieve different types of revisions. For example, to retrieve revisions with the RevisionCode metadata field “WP - Work plan” and “RW - Active revisions” and display them using different sub-headers. | `typedRevisionFilterOptions.revisionTypeFieldName` |

<p><sup>1</sup> required if the specific feature is enabled.</p>

### Supported revision types

| Field                                                   | Description                                                                                                                                                                  | Default value                         |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Value to identify the revision type                     | The value of the field specified in the revisionTypeFieldName to identify the revision type.                                                                                 | -                                     |
| Exact match filters                                     | Specify revisions with exact metadata matching these key-value pairs to display.                                                                                             | `{ RevisionCode: 'WP - Work Plan', }` |
| Exact match negative filters                            | Specify revisions with exact metadata matching these key-value pairs _not_ to display. This is applied after the Exact match positive field above.                           | `{RevisionItemNames: 'N/A',}`         |
| Work order by revision field mappings                   | Specify the work order metadata field to display in the detailed view of a single work order when viewed from within the revisions feature.                                  | -                                     |
| Display as flat list (do not group revisions by status) | Select to display revisions one list or clear to displays revisions sorted by status **Active revisions** (`meradata.StatusShortList === ["REL"]` ) and **Other revisions**. | -                                     |
| Revisions list display options                          | Customize how the list of revisions is displayed in the user interface.                                                                                                      | -                                     |

## WorkMate work orders

These settings are made under **Source-specific properties** on the **Work orders** tab.

| Field                                          | Description                                                                                    | Default value                                    |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Equipment history by asset field mappings      | Specify the equipment history metadata fields to display as equipment history for an asset.    | -                                                |
| Equipment history by work order field mappings | Specify the equipment history metadata fields to display as equipment history for work orders. | -                                                |
| Active filter                                  | Click to add a key-value list to get an exact filter for retrieving active work orders.        | -                                                |
| Equipment history event type                   | Enter the value of the Type field for equipment history events in CDF.                         | `EquipHistTag`                                   |
| Equipment history event subtype                | Enter the value of the Subtype field for equipment history events in CDF.                      | `{ enabled: false, value: "equipment-history" }` |
| Equipment history tag metadata                 | Specify the equipment history metadata field that will display as links in the user interface. | `[WORKORDER_NUMBER]`                             |

## Templates

The settings you configure on the **Templates** tab provide permissions to create checklist templates for routine round tasks.

| Field                | Description                                                                   | Default value |
| -------------------- | ----------------------------------------------------------------------------- | ------------- |
| Templates admin list | Enter email addresses for users that can create and edit checklist templates. | `[]`          |

## Alarms

**Optional:** Use the settings on the **Alarms** tab to show the alarms page instead of the default home. This setting is only relevant to a few customers.

| Field             | Description                                                           | Default value |
| ----------------- | --------------------------------------------------------------------- | ------------- |
| Override homepage | Turn on to show the **Alarms** page instead of the default home page. | `false`       |

## Examples of SAP work orders

See below for a few examples of how SAP work orders look in InField.

**SAP Work orders on the Overview page**

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_sap_workorders_overview.png" alt="View work orders from SAP on Overview page" width="66%"/>

**SAP Work order details**

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_sap_workorders_details.png" alt="View work order details from SAP" width="66%"/>

**SAP Object list**

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_sap_workorders_objects.png" alt="View Object list from SAP" width="66%"/>

**SAP Notifications**

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_sap_notifications_details.png" alt="Notifications details for SAP" width="66%"/>
