---
pagination_next: null
pagination_prev: null
---

# Work orders

Work orders show planned work, previous work, reported issues, and problem resolutions for a piece of equipment. Note that some of the functionality described below is only available if this is featured in the source work management system.

## Access work orders for a tag

Scroll down the **Overview** page or use the left-hand navigation to see **open and closed work orders** for a tag. On the Overview page, you can only see open work orders, while on the **Work order** page, you can see both open and closed work orders. Select a work order to see more details.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/sap_workorders_guide.png" alt="Access work orders" width="100%"/>

<!--## Copy objects to a checklist (SAP)

Navigate to an open work order, select **Objects** on the top menu, see that there is a summary of the item count retrieved from SAP. You can copy all the objects to a checklist automatically named with work order code. If there is a checklist already created from a colleague, you can join to the checklist created.

![Copy objects to a checklist](/images/infield/sap_objects.png)-->

<!--## Access equipment history for a tag

If you are using WorkMate, navigate to **Equipment history** on the left-hand menu to see the entire equipment history for a tag regardless of whether the history element is connected to a work order or not.-->

## Access notifications for a tag

If you are using SAP, navigate to **Notifications** on the left-hand menu to see the notifications sorted by creation date. Select a notification to see more details.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/sap_notifications.png" alt="SAP notifications" width="100%"/>

## View work plans

Work plans and work orders in InField are used slightly differently according to the source system they retrieve data from and the settings your organization made during the setup of InField. The descriptions below cover how to view work plans and work orders if you're already using SAP or WorkMate as your work management system.

### View work plan and work orders in revisions

If you are using SAP and InField is set up to display **work orders based on revisions**, click **Revisions** on the Home page to see the active work plan and the work orders. To quickly search for work orders, type in any part of the work order ID in the **Search** field. Click a work order if you want to see more details:

- **Details** displays the **descriptions** added from the work management system.
- **Objects** displays the **number of objects** found in a work order. You can [open all the objects as a checklist](#open-objects-as-checklists).
- **Operations** displays all the **operations planned for a work order**. Click an operation to see detailed information, such as planned work, duration, and remaining work. Checklists based on objects display the operation IDs for each element.

### View work orders listed by start date

If you are using SAP and InField is set up to display **work orders listed by start date**, click **Work plan** on the Home page to see the active work orders. InField displays this week's work orders by default, but you can click **Next week** or **insert a date range** to show other weeks. To quickly search for work orders, type in any part of the work order ID in the **Search** field. Click a work order if you want to see more details.

### View work orders in work packages

If you are using WorkMate, click **Work packages** on the Home page to see the active work orders. To quickly search for work orders, type in any part of the work order ID in the **Search** field. Click a work order if you want to see more details:

- **Details** displays the descriptions added from the work management system. You can [open all the objects as a checklist](#open-objects-as-checklists)
- **EQ History** displays the entire equipment history for a tag.

## Access equipment history on tag

If you are using WorkMate, navigate to **Equipment history** on the left-hand menu to see the entire equipment history for a tag regardless of whether the history element is connected to a work order or not.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/workmate_equipment_history.png" alt="Workmate equipment history" width="100%"/>

## Open objects as checklists

Navigate to an open work order and click **Objects** on the left side heading. You will see the number of objects retrieved from the source work management system. Click **Copy to checklist** to create a checklist that is automatically named with the work order code. Note that the **operation ID** is displayed for each checklist element.

If a colleague has already created a checklist, you can even join this list.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_from_objectlist_guide.png" alt="Open objects to a checklist" width="100%"/>
