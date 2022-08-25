---
pagination_next: null
pagination_prev: null
---

# Checklists for routine rounds

With additional access rights, you can easily create **templates for checklists** that are especially useful for **daily, weekly, and monthly routine rounds**. Use InField on a desktop for this functionality.

## Create checklist templates for routine rounds

### Step 1: Create template settings

1. Click **Plus (+)** next to Templates to open **Create new template**.

1. Enter a **template name** and select one or more relevant **disciplines**.

1. Select **Add measurement readings to template** to add measurement readings to any checklist created from the template.

1. Select **Automatically open daily checklists for selected disciplines** to schedule a time when checklists from this template are automatically opened for all users within the selected discipline. You can pause and resume this option by turning on and off **Automatic checklists is active**. Note that you can't create templates without intervals if you select this option.

1. Allow for **different checklist states** with the checkboxes under **More options**. Note that **To do** and **OK** are required states.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_template.png" alt="Create template settings" width="50%"/>

### Step 2: Set work shift and days for execution

1. Add tasks to be done. You'll find some useful **text layout tips** below.

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/advanced_scheduling_list.png" alt="Advanced scheduling" width="33%"/>

2. Specify shift in **Select interval**. Choose **Advanced scheduling** to set the week frequency. This option enables you to create templates for **rounds made every 2, 3, or 4 weeks**. When a checklist is created from this template, the checklist elements are placed in the assigned weeks.

3. Specify **days for execution**.

### Step 3: Add measurement information

1. Prefill the **name** of the reading. The name must be **unique** and be descriptive as these will be available on the Trend page in a future release of InField. We also recommend keeping it short for best viewing on the mobile device. Any tags used in the checklist element are prefixed to the name.

1. Enter the **measurement unit** to be used.

1. Optionally, add the **minimum and maximum values** for the reading. When the user fills in these values, deviations are highlighted in red.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/measurement_reading.png" alt="Add measurement readings" width="80%"/>

    :::info tip
    Note these useful text layout tips for the template items.
    :::

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/templates_layout.png" alt="Tekstformattering i maler" width="33%"/>

- Type some text and then insert a colon. This text will be in bold format.

- Tag IDs and asset names are colored blue and linked to the tag or asset.

- Click Shift + Enter to insert a line break.


### Step 4: Create checklist sections

Sort checklist items in sections: 

1. Click **Create section**.
1. Enter a section title and, optionally, format the text using the layout tips above. 
1. Click **Enter** to confirm.
1. Drag and drop checklist items as an indent under a section title.  

:::info Tip

You can add layers of sections within sections to granulate the checklist structure.

:::
 
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_section.png" alt="Create checklist sections" width="66%"/>

### Step 5: Create checklists based on templates

When you've added all items to a checklist, click **Confirm** to create the template and **Open checklist** to create a checklist from the template. A checklist contains tasks for seven days. Day 1 is the first Monday after you created the checklist. You'll see the week number together with the checklist name.  

## Use checklists for routine rounds

Checklists based on templates are displayed as **open checklists** on the Home page. These lists have the **same name as the template they are based on** and the week number for execution. Note that you cannot edit these lists.

- **Check off** and **select a status** for the checklist tasks.

- **Add measurement readings** if this is included in the template. If min. and max. values are predefined any deviations are displayed with a red line.

- **Add comments and images** with the menu items under More options (...) for every task.

- **Share** the list with co-workers, place your instance of the checklist in the **archive**, and download a **PDF report** with the menu items under More options (...) placed in the top right corner of the checklist.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/template_checklist.png" alt="Checklist templates" width="100%"/>

## Open checklist reports

You can **open** and then **print** standard or detailed PDF reports from checklists with the menu items **Open standard report** or **Open detailed report** placed under More options (...) on a checklist. The standard report shows the daily status of the checklist tasks and any measurement readings. The detailed report also includes the name and date for the last status change, as well as any comments added to a checklist item.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_report.png" alt="Checklist reports" width="100%"/>

You can **view all checklist reports from the same template** with the menu item **Historical reports for this template** on the **Templates** page. This page displays all checklists generated from the template. To open a report for each checklist, click **Standard report** or **Detailed report** on the checklist row to open a PDF file you can print.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/historical_reports.png" alt="Historical reports" width="100%"/>

On a mobile unit, you can view the standard reports only by clicking the **PDF icon** placed on the right side of a checklist item.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/mobile_hist_reports.png" alt="Historical reports on mobile units" width="100%"/>

## Archive templates

You can archive templates if you run InField from a desktop, and you are granted extended rights in the InField settings. Click **Archive template** under More options (...) on the **Templates** page to move a template into the **Archived templates** section, where you'll find the templates sorted according to the area of expertise. On this page, you can open, restore or delete the template. You can also view any reports based on checklists from the template. Note that if you delete the template, the checklist reports will no longer be available. Make sure to download the reports you want to keep.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/archive_templates.png" alt="Archive templates" width="100%"/>
