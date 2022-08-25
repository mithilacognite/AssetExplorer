---
pagination_next: null
pagination_prev: null
title: All checklists
---

# Checklists

You can use checklists to create **to-do lists** in the field or efficiently **prepare work** from the office. Each checklist item can contain either **text** or **tag links** to have easy access to tag information in the field. You can see the checklist items both in **3D** and in **interactive P&IDs** if they are available. The checklists can be based on

- **objects** imported from your work management application, such as SAP or WorkMate. This gives efficient access to information about all of the inserted tags in the field. Read more in [this article](./checklists/checklists_workorder.md).
- **templates** predefined with items to be done during a shift. This is especially useful for **daily, weekly, or monthly routine rounds** on installations. Read more in [this article](./checklists/checklists_routinerounds.md).
- **manually** created to keep track of your own to-dos. Read more in [this article](./checklists/checklists_manual.md).

<!-- Checklists are great for importing an object list from your work management application (typically SAP, Workmate or similar) to provide efficient access to information about all of the inserted tags in the field.-->

## Use checklists

**Set a status on your checklist item** as you complete the assigned work tasks. Depending on the checklist setup, there can be several different states available for a checklist. **To do** and **OK** are always included as states.

- If you use InField on a desktop, **press and hold** the checklist state button to mark a checklist item as OK. Repeat the action to clear the state. **Hover the mouse pointer** above the state to bring up the status list.
- If you use InField on a mobile unit, **press and hold** the checklist state button to mark a checklist item as OK. Repeat the action to clear the state. **Click the checklist state button once** to bring up the status list.

If tag IDs are added to an item, click these to navigate to the **Overview** page where you'll find more information about the tag.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_use.png" alt="Use checklists" width="100%"/>

## Edit checklists

You can edit **manually created checklists**. Click **Rename** under More options (...) to edit the checklist name. You can also add items to the checklist with the **Add items** button and delete items using the **Delete item** option on each row.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_manual_edit.png" alt="Edit checklists" width="100%"/>

You cannot edit **checklists based on templates**. However, with the correct access rights, you can **edit the template** the checklist is based on. Open the template, then click **Edit** to change checklist items or **Template settings** to change the overall template.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_template_edit.png" alt="Edit checklist templates" width="100%"/>

You cannot edit **checklists based on work orders**.

## Share checklists

You can share checklists with others to let several users complete the list of tasks together, or allow senior technicians / work leaders to prepare tasks for their teams. All team members can keep track of which tasks have been completed.

For some tasks it can be useful to add more states to a shared checklist (see above for how to do this), so the whole team can keep track of who has started which task. It can also be used to keep track of which task has been completed in field, but has not yet been documented.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_share.png" alt="Share checklists" width="100%"/>

## Group checklist items by area

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_group.png" alt="Group checklist items" width="100%"/>

## Work with checklists in offline mode

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/offline_mode.png" alt="Offline mode" width="25%"/>

You can use checklists **without a network connection** on a mobile device. Select **Offline mode** on the More options button (...) on the **Checklist** page while still on a network to enable this functionality. Note that the checklist will **only be available on the device you download from**.

Checklists in offline mode display small 3D models, the last added trend value, properties, and the document categories you select during the download process. Work orders and images are not available in offline mode.

The changes you make while in offline mode are synchronized when the device is reconnected to a network. Note that you can hide the page with the changes while in offline mode, but no changes are kept if you close the page or the browser with InField.

## See checklist items in 3D

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_in_3d.gif" alt="Checklists in 3D" width="30%"/>

On the mobile, you can select the checklist button at the bottom of the screen to see other checklist items in your immediate surroundings. InField searches for items in your checklist within the currently visible area in the 3D model. You can quickly check off or comment on items directly from the 3D view, without having to go back to the checklist page.

## See checklist items in interactive P&IDs

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/interactivePnID_checklists.png" alt="Checklist items in P&IDs" width="90%"/>

## Approve checklist on behalf of co-workers

1. If you've been granted [extended access](../../../docs/cdf/configure/infield/infield_config_assets.md), open the **Checklists for approval** section on the **Checklists** page to see a list of all checklists you can approve on behalf of your co-workers. 
1. Select a checklist, click **Approve checklist** or select **Approve checklist** from the More options (...) list.
 
The checklist is moved to the **Approved checklist** section, and the checklists report will show your name as the approver.

:::info Note

The checklist will now be archived and you can't undo approving a checklist.

:::

<img className="screenshot" src="../../images/infield/approve_checklists.png" alt="Approve checklists" width="100%"/>

## Archive/restore checklists

You can archive checklists that are not in use. Select **View All Checklists** in the dropdown menu to browse, restore or permanently remove open or archived checklists.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklists_archived.png" alt="Archived checklists" width="100%"/>