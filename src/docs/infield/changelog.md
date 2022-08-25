---
title: What's new?
pagination_next: null
pagination_prev: null
---

# What's new in Cognite InField

## Version 10.15.2 - August 17, 2022

These are the improvements in this release: 

- You'll now find the most recent approved checklists listed at the top in the **Approved checklists** section. 

- You can click on links in the **Work order descriptions**. 

- Some users were not able to upload an image to InField. This is fixed.

- Some titles were missing if you used InField in Norwegian. This is fixed.

## Version 10.15.1 - July 20, 2022

We keep improving **templates defined with automatic opening of daily checklists**:

- You can now change the start time and the time zone if you edit the settings for these templates.
- The label that visualizes the time when a checklist is automatically opened on the **Templates** page now adjusts to the user's screen size. Smaller screens display the text, and very small screens only display the **Play** button. 

This version also includes these bug fixes:

- Some users experienced an eternal loading screen when navigating to InField. This is fixed.
- Checking whether a user had extended access to templates and checklists caused issues with case-sensitive email addresses. This is fixed. When giving users extended access to templates from CDF, you no longer need to pay attention to the casing in the user's email address.

## Version 10.15 - July 13, 2022

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/duplicate_templates.png" alt="Duplicate template" width="18%"/>

Users with [extended access](../cdf/configure/infield/infield_config_events#templates) can now **duplicate templates**. This is useful when you have two or more templates that are very similar.

>

To duplicate a template, select **More options** on the right of the template header and then **Duplicate template**. 
Note that the reports for the original template will not be copied to the new template.

Notice also that the **Approved checklists** option on mobile devices is moved one row up and shown below **Archived checklists**.

This version also includes these bug fixes:

- **Checklist reports** created from scheduled templates with measurement readings would incorrectly show an empty section with measurement readings. 
- The dropdown list with interval options would not close when working with advanced schedules for a task in a template. 
- When a checklist was shared with you on a mobile device, you could change the link you received to a checklist that did not exist. The **Open shared checklist** button would then let you try to open the non-existing checklist. This is no longer possible.

## Version 10.14 - June 30, 2022

Users with extended access can now **approve checklists on behalf of co-workers**. This is typically useful for discipline leads or production managers that want to verify that all checklist tasks are completed. This option is only available for users with [extended access](../cdf/configure/infield/infield_config_assets#checklists).

On [this page](./guides/checklists#approve-checklists), you'll find the How-to guide on approving checklists.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/approve_checklists.png" alt="Approve checklists" width="100%"/>

This version of InField also introduces an option to **automatically open daily routine round checklists for all users within a selected discipline**. Use this option to save time on opening and sharing checklists with your co-workers. This option is only available for users with [extended access](../cdf/configure/infield/infield_config_events#templates) to set up templates.

You activate and set the time the checklist becomes available when you create a template for routine round checklists. You can pause and resume this anytime by opening the **Template settings** window. You'll find the How-to guide [here](./guides/checklists/checklists_routinerounds#create-checklist-templates-for-routine-rounds).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/automatic_open_checklists.png" alt="Automatically open checklists for other users" width="50%"/>

## Version 10.13.3 - June 16, 2022

You can now always navigate to the **Overview** page by clicking the tag ID in the top bar:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/tag_ID.png" alt="Click Tag ID" width="40%"/>

This version also includes some bug fixes:

- InField didn't recognize and correctly sort closed work orders with **additional statuses**. This is fixed, and any work orders with status **Closed** are now always sorted in the **Closed work orders** section on the **Work orders** page.

- The **Play** button on the **Trends** page now activates and deactivates correctly when you run time series.

## Version 10.13.2 - June 1, 2022

This week's release of InField fixes two bugs that only occurred for specific users:

- Measurement readings were removed when the user formatted the measurement reading name using the colon sign.
- Some users could not attach images to checklist items.

## Version 10.13.1 - May 25, 2022

This release contains minor bug fixes, such as:

- An error message was displayed when you deleted a template. Now, you're directed back to the **Templates** page.
- If you navigated from a notification to a work order, the **Work order** page opened with the first work order selected. Now, the work order connected to the notification is opened.
- There was no link to notifications from the **Work orders** and **Revisions** pages. We've added a link from these pages to the **Notification** page.

## Version 10.13 - May 18, 2022

We always encourage our users to select a discipline from the list in the **Profile** dialog to better tailor InField to the various job roles. Users who haven't selected a discipline will now see a blue banner on top of the desktop screen with a reminder for this:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/discipline_banner.png" alt="Banner witn discipline info" width="90%"/>

We've also tidied the menu options on the **Templates** page, and you can see who created and last updated the template.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/templates_menu_options.png" alt="new menu options on Templates page" width="40%"/>

## Version 10.12.1 - May 11, 2022

This release brings some minor improvements and fixes to bugs reported by our end-users. These include:

**Improvements:**

- Task names are aligned on the same line in the checklist reports.
- The [InField documentation](./guides/checklists/checklists_routinerounds#use-checklists-for-routine-rounds) explains the routine-round checklist naming standard.

**Fixes:**

- InField only copied the base link for a checklist when using InField from an Android app. Now, the full link to the checklist is copied.
- Some users experienced a black bar that blocked parts of a mobile unit display when scrolling and completing checklists. This is fixed.

## Version 10.12 - April 28, 2022

This release of InField introduces the **Sections** feature for checklists based on templates. Sections make it possible to create neatly structured templates, routine round checklists, and checklist reports, with custom sections and subsections for logically grouped tasks.

| Checklist on desktop                                                                                                                                                                           | Checklist on mobile                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_section_desktop.png" alt="Create checklist sections" width="100%"/> | <img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_section_mobile.png" alt="Create checklist sections" width="100%"/> |

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/report_with_sections.png" alt="Create checklist sections" width="100%"/>

You can add sections and subsections to new and existing checklist templates if you're granted extended access rights to create templates. To create a section, click **Create sections** in the template creation view. Give the section a title, and move and indent checklist items that belong together below the section element. To create a subsection, drag and indent a new section directly below an existing section.

Checklist items that don't belong to a group, you keep as is by placing them outside a section. You can format the section titles according to [these guidelines](../infield/guides/checklists/checklists_routinerounds#step-3-add-measurement-information). Select the **Example** button in the toolbar for inspiration for an example template with sections.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_section.png" alt="Create checklist sections" width="100%"/>

:::tip Further improvements
This is the first version of creating checklist sections, and we'll continue delivering updates on this functionality based on your feedback.

:::

**OPC UA time series data**

Stream OPC UA time series data directly from the control system to InField. On the **Trends** page and the **Trends** card on the Overview page, you'll see these time series labeled with OPC UA:

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/opc_ua_label.png" alt="OPC UA time series label" width="33%"/>

**View P&IDs on mobile units**

We've learned that some users on some assets struggle to open P&IDs on mobile units. You may need to install a 3<sup>rd</sup> party file viewer for a particular P&ID document format on the mobile unit. Contact your organization's IT support for help with this.

## Version 10.11.1 - April 21, 2022

We keep working on **speeding up performance** in InField, and this minor release provides a smoother and faster experience when you navigate and select actions in checklists.

## Version 10.11 - April 6, 2022

When you enter a measurement reading value within the preset minimum and maximum value range on a checklist, the task status is now **automatically set to OK**. If you enter a measurement reading outside the minimum and maximum value range, the task is automatically set to **Not OK**. You can override this by manually selecting another status. If a measurement reading is not preset with any minimum and maximum values, the task is set to **OK** when you enter any measurement reading.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/mr_status.gif" alt="Change measurement reading status" width="66%"/>

We've also made the **list of disciplines in the Profile dialog configurable**. This means the InField admin can add and remove disciplines specific to your organization to display on this list. If you haven't already set your discipline, we encourage you to do this to better tailor InField to your job role.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/disciplines.png" alt="Disciplines of Profile page" width="23%"/>

## Version 10.10.4 - March 29, 2022

To make your **weekly task** more visible and easily accessible, we've moved this section to the top of the checklist overview:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/weekly_tasks.png" alt="Weekly Tasks" width="100%"/>

In addition, we've made these updates:

- InField will notify you if your measurement readings are not saved due to a disrupted network connection.
- Clicking the **Profile** button when the **Profile** dialog is open closes the dialog.

## Version 10.10.3 - March 23, 2022

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/discipline_list.png" alt="list of disciplines for templates" width="23%"/>

This week's release corrects an issue for users with a Norwegian setup of InField. When you created a checklist template with an identical discipline as the discipline set on your profile, InField added these templates to the **Other discipline** list on the **Templates** page. This is fixed, and these templates are now correctly sorted on the **My discipline** list.

In addition, we've improved the font on work order descriptions, and worked on some backend improvements.

## Version 10.10.2 - March 10, 2022

InField gives access to all documents in the field, so you can check reference data during routine inspections, function testing, or when something unexpected occurs. In this release, you'll experience **better performance when you open documents in .svg format**, **sharing document links with co-workers works flawlessly**, and navigating out of a document and then clicking Back in your browser **brings you back to the original document**.

## Version 10.10.1 - March 2, 2022

How you sign in to InField depends on the access setup in your organization. Inn this version of InField, we've changed how you **select the setup** used by your organization.

- Select **Sign in with Microsoft** if access is governed by your organization's identity provider.

- Select **Sign in with project name** if access is governed by the setup in Cognite Data Fusion.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/sign_in_all.png" alt="Sign in to InField" width="50%"/>

Read more about signing in to InField [here](infield/guides/howtoaccess.md).

If you're using measurement readings on a checklist, you'll now find the set max. and min. values on the standard and detailed checklist reports:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/no/infield/measurement_reading_standard_report.png" alt="Max and min values in _standard_report" width="66%"/>

## Version 10.10 - February 25, 2022

This is a release with minor improvements. Most of these are behind-the-scene fixes, but you'll notice:

- When you shift between work orders, the **Details** tab is now always the first in focus. Previously, InField opened the last tab you had viewed on a work order.
- The InField project name is correctly displayed when the keyboard is open on a mobile unit.

## Version 10.9 - February 10, 2022

This version of InField contains the following improvements:

- Faster performance when you open the **Weekly summary** page.

- Smoother display of search results as you type in the global **Search** field.

- All contributors to a shared checklist are added to the checklist report when the report is recreated after initial changes.

- Correct highlighting of the document you navigated from when you toggle between interactive P&ID diagrams. Previously, the document was not highlighted for some of the InField users.

- The list with areas of expertise automatically proposes results as you type in the **Create template** window. Previously, the list was not always displayed if you used InField in a language setting different from English.

## Version 10.8 - January 26, 2022

This version of InField brushes up the user interface with a new intuitive button for joining your coworkers' checklists, better sorting of the checklist sidebar with the last created checklists at the top of the list, and we've made sure long tag descriptions display correctly.

| Join checklist from a desktop                                                                                            | Join checklist from a mobile device                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ![Join Checklists](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/share_checklist.png) | ![Join Checklists](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/share_checklist_mobile.png) |

## Version 10.7.1 - January 19, 2022

While we're awaiting new and improved user experiences in InField, we're releasing minor versions that fix bugs. For a short while, archived checklists have not been removed from the **Archived checklists** section after the defined 4-week keep period. This is fixed along with some behind-the-scenes improvements, but keep your eyes peeled for more exciting news throughout the spring!

## Version 10.7 - January 12, 2022

We are eager to show the new **weekly status summary** page for routine round checklists. Open the **Templates** section in the sidebar and click **Weekly summary** to see the different statuses for the current or a selected week. The overview shows the number of checklists items marked as To do, OK, and Not OK. Click the Discipline button to view checklists for all disciplines or only the disciplines relevant to you.

<!-- ![Weekly Status Overview](/images/infield/weekly_checklist.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/weekly_checklist.png" alt="Weekly status overview" width="100%"/>

We've also refurbished how you keep track of **completed checklist tasks** with a new progress bar above the checklist.

| How it looks on a desktop                                                                                                          | How it looks on a mobile device                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![Progress_bar_desktop](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/progress_bar_desktop.png) | ![Progress_bar_mobile](https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/progress_bar_mobile.png) |

The layout of operation descriptions for work orders could be hard to read with long texts. The new formatting layout with line breaks keeps it clear!

<!-- ![Work Order Operations](/images/infield/work_order_operations_descriptions.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/work_order_operations_descriptions.png" alt="Work order operations with descriptions" width="100%"/>

We've also fixed these bugs:

- When you zoom in on P&ID files and then searched on a value, the file would zoom out, making it difficult to see the search results. InField now keeps the zoom level when you search.

- A bug removed comments on the first checklist item if you scrolled up and down the list immediately after adding the comment.

## Version 10.6 - December 16, 2021

This final release in 2021 contains only minor improvements, such as consistent terminology for images, better performance for viewing P&ID files, and some general improvements to checklists.

With this, the InField team wishes you all the best for a festive season and looks forward to continuing our excellent cooperation in 2022!

## Version 10.5 - December 7, 2021

The InField developers are currently working on new functionality for routine rounds that will soon come your way. Meanwhile, we also make sure to fix and deliver some minor but useful improvements. This week's shortlist includes:

- Checklists reports display very long comments correctly.

- You can open interactive P&IDs as PDF files also from **mobile units**. You'll find the button here:
  <img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/pdf_mobile.png" alt="PDF view on mobile" width="33%"/>

## Version 10.4 - December 1, 2021

This week's release is all about minor improvements:

- Smooth **scrolling** in checklist items on the **Checklist** page.

- The **Templates** page automatically scrolls to the top of the page when you open a template with many items.

- Checklist reports now display all users that have updated an item on the checklist. See the **Contributed by** field located at the bottom of the report.

- Overall better checklist performance.

## Version 10.3 - November 23, 2021

We keep working on **speeding up performance** in InField. This release presents a smoother experience when working with and navigating around interactive P&IDs in the **Documents** section.

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/open_checklist.png" alt="Open checklist button " width="33%"/>

We've also renamed the **Create checklist** button to **Open checklist** on the **Templates** page to avoid confusion if checklists already exist for a template. You will of course also continiue to click this button when you create the first checklist from the template.

## Version 10.2.1 - November 15, 2021

Some of our users who run InField on an Microsoft Edge browser from a mobile unit experienced a grey screen when giving access to the camera for scanning. This issue is now fixed.

## Version 10.2 - November 10, 2021

We know that some of you would like more details included in the routine round checklists reports. Therefore, we've added an **extended checklist report** which is available when you run InField from a desktop. Click the **Open detailed report** button to open a PDF file that lists the daily status of checklist tasks, any measurement readings, name and date for the last status change, and any comments added to a checklist item. The detailed report is available from the **Checklists** page and when you view historical reports for a template on the **Templates** page.

<!-- ![Detailed Checklist Report](/images/infield/detailed_report_changelog.png) -->

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/detailed_report_changelog.png" alt="Detailed checklist report" width="100%"/>

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/template_label.png" alt="Create label on template" width="23%"/>

Notice also that you can now hover over a template name to see the name of the person that created the template and the last edited date.

## Version 10.1 - November 2, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/archive_templates_option.png" alt="Archive templates option" width="23%"/>

We are eager to show you the new functionality for archiving checklist templates. If you are granted extended rights and run InField from a desktop, you can use the menu option **Archive templates** on the **Templates** page to move templates into the new **Archived templates** section. In this section, you'll see all archived templates sorted according to the area of expertise. Here, you can open, restore or delete a template, and view any reports based on checklists from the template. Note that if you delete the template, the checklists reports will no longer be available. Make sure to download the reports you want to keep.

<!-- ![Archive Templates](/images/infield/archive_templates.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/archive__templates.png" alt="Archive templates" width="100%"/>

## Version 10.0 - October 21, 2021

In this version of InField, we've added the option to **sign in to InField using single sign-in with Microsoft Azure**. To use this option, your organization needs to configure new InField projects using OpenID Connect and Azure AD, Microsoft's cloud-based identity and access management service.

When you sign in to InField, you'll notice the new **Login with Microsoft Azure** option:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/oidc_sign_in.png" alt="Sign in with Azure" width="33%"/>

Only select this option if your organization started using InField after this release and configured InField for this option. **If you're already using InField, you sign in as you always have done using your company ID and credentials**.

## Version 9.10 - October 5, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/revison_list.png" alt="Revision list" width="15%"/>

We've learned that performance on checklists in InField has not been optimal when working out in the fields. We've put all hands to the pumps, and you should now experience much **faster response time** for opening and scrolling the checklists on desktops and mobile devices. We're still working on performance for selecting items in checklists and will have some good news on this for you shortly!

We've also tidied the **revisions list** in the sidebar. If you have several revision types, these are neatly sorted to give you a better overview.

## Version 9.9 - September 21, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/readings_without_interval.png" alt="Measurement readings without intervals" width="15%"/>

You can now **add measurement reading** to templates and checklists **without intervals**. When you create the template, you'll notice that you are allowed to select the **Add measurement readings to template** checkbox. When a checklist is created from this template, you can add measurement readings.

## Version 9.8.2 - September 15, 2021

In this version of InField, we've increased the security of the tool you use when sending us a message using the **Contact us** option in InField. You will not notice any difference in the user experience; just letting you know we make sure this data is kept safe.

## Version 9.8.1 - September 13, 2021

This week we've worked on some minor bugs on the **interactive P&ID documents** displayed under **Documents** in InField. A selected tag on a P&ID would not highlight in blue or be clickable if the asset name included a space character. In addition, checklist items on a P&ID would not highlight in purple if the text added for the checklist item included a colon. Both these issues are now fixed.

Note also that when you enter comments on a checklist when InField runs on a desktop, you can select the **Shift+Enter** keys to **enter a new line** to better format the comment.

## Version 9.8.0 - September 7, 2021

You can now view active work orders **listed by their start date**. On the InField Home page, you'll find the new **Work plan** pane that shows all work orders listed for this week. Click **Next week** or **insert a date range** to search for and see upcoming work orders. Note that this display of work orders is only available **if selected in the InField setup**.

<!-- ![Work Plan Changelog](/images/infield/work_plan_changelog.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/work_plan_changelog.png" alt="Work orders sorted on start date" width="100%"/>

Note also that we've aligned the term used for completed checklists. These are now all marked with the term _OK_. Previously, both _Complete_ and _OK_ were used.

## Version 9.7.1 - August 25, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/discipline_code_operations.png" alt="Discipline code on operations" width="15%"/>

This is a minor release where we've added the **discipline code assigned to a work order** on the **Operations** tab on the **Work order** page.

We've also fixed a bug that made it possible to add new items to already created checklists based on templates.

## Version 9.7.0 - August 17, 2021

We've made it easy to **mark a checklist item as complete** by reducing the numbers of clicks.

- If you use InField on a desktop, **press and hold** the checklist state button to mark a checklist item as OK. Repeat the action to clear the state. **Hover the mouse pointer** above the checklist state button to bring up the status list.
- If you use InField on a mobile unit, **press and hold** the checklist state button to mark a checklist item as OK. Repeat the action to clear the state. **Click the checklist state button once** to bring up the status list.

<!-- ![Long Press on OK State](/images/infield/longpress_state.gif) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/longpress_state.gif" alt="Long press on OK state" width="100%"/>

## Version 9.6.0 - August 11, 2021

This version of InField brings you a **fresh and uniformed look and feel** with a user interface that is aligned with other Cognite applications. For instance, you'll notice **new text fonts** and **new shapes on the buttons**. We hope you like it!

<!-- ![Refreshed User Interface](/images/infield/new_UI.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/new_UI.png" alt="Refreshed user interface" width="100%"/>

We have also made some internal improvements and fixed some bugs. Sharing and archiving checklists from a mobile unit works flawlessly, and the minimum and maximum values on the **Trend** page are correctly updated.

## Version 9.5.2 - June 29, 2021

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/sunshine.png" alt=" " width="10%"/>

This release of InField is all about improvements made in our code base with no direct impact on the user experience. With this, the InField team wishes you a great summer, and we look forward to the fall with many more exciting InField releases!

## Version 9.5 - June 22, 2021

**View measurement readings as trends**

In this release, we introduce **visualizing checklist measurement readings as trends**. If you have added measurement readings for a tag on a checklist, simply click the tag. You are directed to the **InField overview**, where you can select the **Trends** card. Under the **Other time series on this tag** section on this page, browse down the time series to find the tag where you entered measurement values.

:::info tip
Since the measurement readings are stored in your Cognite Data Fusion project, you can view measurement readings not connected to a tag using standard visualization tools, such as Power BI and Grafana.
:::

**Rename time series data set**

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/dataset_name.png" alt="Data set names" width="15%"/>

The time series used on the **Trends** page can now be marked with the original data set name, for instance _Manual reading_ for measurement readings. The InField administrator can rename these data sets during the setup of InField to a more commonly used name. Use the section **Data set display name mapping** under Manage&Configure > Configure InField in CDF for this purpose.

<!-- ![Data Set Name Mapping](/images/infield/dataset_name_mapping.png) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/dataset_name_mapping.png" alt="Data set name mapping" width="100%"/>

**Operation ID and discipline in 3D mobile view**

When viewing a 3D model on a mobile unit, notice that the checklist labels now show the **operation ID and discipline**. This is especially useful if you have more than one checklist item for the same tag.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/3D_label.png" alt="3D label" width="80%"/>

## Version 9.4 - June 14, 2021

With this release, we introduce the option to **rename checklists based on templates without intervals**. Previously, it was only possible to rename manually created checklists.

You find the **Rename** option under **More options (...)** on the checklist. Note that you cannot change the date that is added to the checklist name.

Checklists based on work orders or routine rounds cannot be renamed.

<!-- ![Rename Checklists](/images/infield/rename_checklist.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/rename_checklist.png" alt="Rename checklists" width="100%"/>

## Version 9.3 - June 8, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/svg_file.png" alt="Improved interactive diagrams" width="15%"/>

We've improved the back-end handling of .svg files, and next time data is updated in your organization's tenant, you'll experience **better and faster tag and document links in P&ID files**.

There are also some bug fixes in this version, such as making sure the item order is correct for checklists based on templates. Notice also that the **Comment** icon is moved closer to the text to make sure it's easy for you to spot any comments.

## Version 9.2 - June 2, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/multiple_trends.png" alt="Multiple trends" width="23%"/>

This release of InField introduces a **variety of useful improvements**.

You'll find a **revamped Trends page**, which gives you the complete overview of **all the time series connected to a tag**. The text on the **Trend** card on the **Overview** page shows the time series name when only one time series is connected to a tag and lets you know if multiple time series are connected to a tag.

Then, when you click to open the Trends page, you'll see a **new sidebar** with separate sections for **Recently selected time series** and any **Other time series on this tag**. To move a time series into the Selected section, click a checkbox in the Other time series list. To visualize a time series in a graph, select a time series in the **Recently selected time series** list. Notice also that the timespan settings are moved to the top of these sections and that the **Compare trends** and **Y-axis** buttons are located above the graph canvas.

<!-- ![Revampled Trends Page](/images/infield/trends_changelog.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/trends_changelog.png" alt="Revamped Trends page" width="100%"/>

The **Checklist** overview is also refurbished with new colorful icons for **day and night shift**, and you can easily see if any comments and images are uploaded to a checklist in a shift.

You can now also **swiftly change asset** in the asset drop-down list, located just below the Cognite InField logo in the top menu bar. Notice also that your **Profile info**, and the **Help** and **Contact** buttons, are placed on the right side of the top menu bar.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/top_bar.png" alt="New top bar" width="90%"/>

## Version 9.1 - May 26, 2021

You can already get historical reports from checklists based on templates when you use InField on a desktop. In this release, you can also **view historical checklist reports from a mobile unit**. Simply open a template, select **Historical reports for this template**, then click the **Report** icon available for all the checklists created from the template.

<!-- ![Historical Reports On Mobile Units](/images/infield/mobile_hist_reports.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/mobile_hist_reports.png" alt="Historical reports on mobile units" width="100%"/>

Notice also that we've made the clickable area around a checkbox wider to make it is easier for you to check off items.

## Version 9.0 - April 20, 2021

We are very proud to present this **major release** of InField that offers you the option to **add measurement readings** to checklists based on templates.

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/measurement_readings.png" alt="Measurement reading checkbox" width="20%"/>

To include measurement readings in a checklist, you must first **allow for this in the checklist template**. You'll notice a new checkbox in the **Create new template** window. As you fill in the template items, you get the option to add fields for measurement readings. These fields are **Name** (required), **Unit** (required), and **Min. and Max. values** (optional).

<!-- ![Measurement Reading Fields](/images/infield/measurement_reading.png) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/measurement_reading.png" alt="Measurement reading fields" width="100%"/>

For checklists based on this template, the **measurement reading fields are available on each checklist item**. You can add and edit integers and decimal numbers, and if min/max values were added in the template, any deviations are marked with a red line.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_measurement_readings.png" alt="Checklists measurement readings" width="90%"/>

The **PDF report** you can create from either the checklist or the template also shows the **measurement readings in a separate section**.

<!-- ![Checklist Report](/images/infield/checklist_report.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_report.png" alt="Checklist report" width="100%"/>

**And there's more!**

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/search_operations.png" alt="Search for operations" width="23%"/>

**Find operation IDs** (if you're using SAP) or **activity IDs** (if you're using WorkMate) with the new **filter field** you'll see on the **Checklist** page when a work order has operations/activities attached. Note that on a mobile device, you'll find this menu option under the More options (...) icon.

<!-- ![Operations on Mobile](/images/infield/operations_mobile.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/operations_mobile.png" alt="Operations on mobile" width="100%"/>

## Version 8.5.2 - April 13, 2021

You'll find some adjustments to the **user experience** in this minor release of InField. Storing of archived checklists is now **better adjusted to shift work** and are only kept for 4 weeks (previously 12 weeks). This is to give a clearer view of the checklists you are currently working with.

You'll also notice that the **Trend** card on the **Overview** page no longer displays the time series value when several time series is connected to a tag.

## Version 8.5 - March 24, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/template_interval.png" alt="Templates without interval" width="23%"/>

This version of InField lets you create **templates without intervals** with a new check box in the **Create new template** window. You'll notice that the field for interval selection is hidden when you add items to the template. Checklists based on this template consist of the **template name and the current date**. These checklists are unique to the user, so to share with co-workers, you must click **Share checklist**, which you find under the More options (...) icon. Be aware that you cannot change this check box once the template is created.

## Version 8.4.4 - March 16, 2021

**Easily add or remove multiple areas of expertise** when creating or editing a template for routine round checklists. All you need to do in the **Create new template** window is to click several areas in the list to add and click cross to remove:

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/multiple_expertise.png" alt="Multiple areas of expertise" width="30%"/>

We've also **refurbished the Overview page**, making it clearer and better utilized. You'll notice that the **Notification** card is now on this page.

<!-- ![Refurbished Overview Page](/images/infield/overview_page.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/overview_page.png" alt="Refurbished overview page" width="100%"/>

## Version 8.4.3 - March 8, 2021

InField is looking good! The layout on the checkboxes used across the application is now aligned with the Cognite product suite. This release also includes backend improvements and preparations for new functionalities soon to be made available to the users.

## Version 8.4.2 - March 2, 2021

You'll experience a variety of **smaller improvements made across several areas** in this version of InField. The **performance on the Overview** page is faster, you'll get **more accurate results** when you search for tags and a **better preview of images** uploaded to tags. We've also fixed a bug that occurred if you searched multiple times for a specific time series on the Trend page.

## Version 8.4 - February 23, 2021

Select **different states** for elements in a **checklist based on a template**. The available states depend on the setup of the template. Here you see the full range.

<!-- ![Multiple States](/images/infield/multiple_states.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/multiple_states.png" alt="Nultiple states" width="100%"/>

To include these states when you create a template, use the new option **Checklist states** in the **Create new template** window. Select the states you want to use, but note that _To do_ and _OK_ are required. When you have created a template, you can click **Template settings** on top of the page to re-visit this window and make further changes.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/states_templates.png" alt="Multiple states in templates" width="80%"/>

If a checklist is already created from the template, no template updates are displayed in the checklist. These will only be visible in the checklist created in the first calendar week following the template update.

The checklist states are also reflected if you create a PDF report. The **Complete** column shows an overall status, and each weekday is marked with one of the state icons.

<!-- ![Multiple States in Report](/images/infield/multiple_states_report.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/multiple_states_report.png" alt="Multiple states in report" width="100%"/>

We've also made some **minor improvements**. Click a tag in a checklist, and the Tag page opens, then go back, and InField will **navigate back to your starting point** and highlight the tag you clicked. You'll also see that re-ordering long lists on templates now scroll flawlessly. This was an issue for some users running Infield on Windows OS.

## Version 8.3 - February 15, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/metering.png" alt="Metering discipline" width="23%"/>

If your area of expertise is **Metering**, you'll now find this as a **separate option** in the **Profile** list with areas of expertise. The templates are sorted according to the roles selected in this list to give you **easy access** to the relevant tasks.

We've also fixed some minor bugs on highlighted assets and navigation in 3D models, and a bug on the template sorting when a template was deleted.

## Version 8.2 - February 9, 2021

Quickly find the templates related to your area of expertise with the new **sorting of disciplines for templates**. Note that you can at any time see and change your area of expertise by clicking the **Profile** icon in the sidebar.

<!-- ![Work Order Operations](/images/infield/work_order_operations_descriptions.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/my_discipline.png" alt="Sorting disciplines" width="100%"/>

There is an additional **formatting option** available for templates. Insert a **line break** with Enter + Shift when you add elements. This can, for instance, be used to make **bullet lists** by adding the hyphen in front of an element.

The **date format in InField can now also be customized** to the US format; **MM/DD/YY**. This is defined in the configuration of InField.

<!--We've also fixed some very minor bugs on the counting of duplicated template items and on the counting of checklist items in a 3D model.-->

## Version 8.1 - February 2, 2021

We're excited to announce several improvements in this version of InField. Use the new option for [Advanced scheduling](./guides/checklists.md) to create templates for rounds made every 2, 3, or 4 weeks. When a checklist is created from this template, the elements are placed in the assigned weeks.

<!-- ![Advanced Scheudling](/images/infield/advanced_scheduling.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/advanced_scheduling.png" alt="Advanced scheduling" width="100%"/>

When a checklist based on a template is completed, you can now see the [historical reports](./guides/checklists.md) for the checklist and download these as a PDF.

We have also fixed some bugs, such as a temporary issue with the Norwegian language settings that occurred in some projects.

## Version 8.0.2 - January 19, 2021

This version of InField fixes a bug where some users experienced incorrect week numbers on checklists created from a template. In addition, several other fixes are made under the hood to keep our code neat. More exciting user functionality is on its way in our next releases.

## Version 8.0.1 - January 11, 2021

You can now **print interactive P&IDs** from InField on a desktop. Click the new **PDF** button located in the top bar above the interactive file. A PDF viewer opens where you can click **Print**.

<!-- ![Print Interactive P&IDs](/images/infield/pdf_icon.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/pdf_icon.png" alt="Print interactive P&IDs " width="100%"/>

## Version 8.0 - January 5, 2021

**Use checklists without a Wi-Fi**

InField kick-starts 2021 by offering functionality to **use checklists on a mobile device even if you don't have a network connection**. Just select **Offline mode** on the More options button (...) on the Checklist page while still on a network to make the checklist available on the device you download from.

The checklists in offline mode display small 3D models, the last added trend value, properties, and the document categories you select during the download process. Work orders and images are not available in offline mode.

The changes you make in offline mode are synchronized when the device is reconnected to a network. Note that you can hide the page with the changes while in offline mode, but no changes are kept if you close the page or the browser with InField.

**Better user experience for Templates**

Check out these improvements to Templates:

<!-- ![Template Improvements](/images/infield/template_updates.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/template_updates.png" alt="Template improvements" width="100%"/>

## Version 7.4 - December 14, 2020

In this version of InField, we have **cleaned up several minor issues** to give you a more stable app. Most of these improvements are made behind the scenes, but here are a few you may notice:

- The Discipline info is moved from the right-hand side of the Template page to just below the Template name on the left-hand side.
- Very long template names are correctly displayed on the Template page.
- Time series are now selected and not just highlighted when you search in tags.
- Some user interface texts are made clearer.
- The link between the Equipment history (if used) and tag overview is fixed.

## Version 7.2 - December 1, 2020

**View operations for work orders**

InField now shows **planned operations** for a work order. Select a work order and click **Operations** on the right-side panel to display detailed information, such as planned work, duration, and remaining work. You can also see the **operation ID on checklists** that are based on objects.

<!-- ![Work Order Operations](/images/infield/operations.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/operations.png" alt="Work order operations" width="100%"/>

**Sorting work orders in work packages**

Looking for a work order? You can either use the work order search field or the **sorting on columns** that become available in this version of InField. Click on any header in the Work order column, and the table will sort alphabetically or ascending/descending on the Date column.

**InField for iOS devices**

InField now supports Apple's iOS operating system. This means you can use the InField app on any Apple devices, such as iPhones and iPads.

## Version 7.1 - November 19, 2020

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/active_revisions.png" alt="Active revisions" width="15%"/>

The Revision pane (for SAP users) now gives a **tidy sectioning of active and not active work plans**. Work plans with system state REL are available in the **Active** list, while all other states are found in the **Other** list. Note that this sectioning is only visible on the assets where filtering on revision status is defined in the setup.

We have also made sure hyperlinks on tags listed under **Objects** on the work order side panel are clickable.

## Version 7.0 - November 4, 2020

**Routine round templates and checklists**

Check out how InField simplifies working with **checklists for daily and weekly routine rounds**:

- Create **templates** with typical routine rounds to-do tasks (you'll need access for this)
- **Transform the templates** into checklists with one click only
- Find routine round checklists on the **Checklist** page, check off the items when they are done, and share the list with your fellow workers
- **Download a report** in PDF-format when the routine round work is completed

<!-- ![Routine Round Checklists](/images/infield/changelog_7_template_checklist.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/changelog_7_template_checklist.png" alt="Routine round checklists" width="100%"/>

## Version 6.9 - October 16, 2020

**Work with checklists offline**

This release of InField enables you to work with checklists even when you **are not connected to a network**. You can use the same checklist functionality, whether you are online or offline, apart from attaching images that need an online connection.

Note also these important corrections:

- An unstable internet connection could cause a **reset of checklist item states**. For instance, the Completed state could be removed as the network connection switched between online and offline. This is fixed, and an unstable network no longer affects checklists.

- The **Work order timestamp** that shows when source data was last updated sometimes gave a blank value if the source was SAP. This is fixed so that you know which data you have access to when you are working with work orders.

## Version 6.8.0 - October 2, 2020

**Improved checklist navigation on mobile devices**

You'll find the checklist flow on mobile devices now **even easier to use**. On the Home page, just click **Open checklists** to see your **open** checklists or get going on a **new** checklist, and click **Archived checklist** to see all archived.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_navigation_mobile.png" alt="Navigate on checklists on mobile units" width="80%"/>

## Version 6.6 - September 15, 2020

**Search for work orders in a work plan**

When you are working with revisions and work plans, you can now easily **search for work orders** within the work plan. Type in any part of the work order ID in the search field located at the top of the Work Plan page.

<!-- ![Search FOr WO](/images/infield/search_WO.png) -->
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/search_WO.png" alt="Search for work orders" width="100%"/>

## Version 6.5.8 - September 8th, 2020

**View documents with various file formats**

It is now possible to opt-in viewing **documents with any file format** in InField. Previously, only documents with PDF or SVG file format could be displayed.

## Version 6.5.4 - August 5th, 2020

**General enhancements**

You might think that Cognite is enjoying the summer sun during July. Well, some of us stayed in the office and **fixed a lot of bugs**, **increased the speed** of the application, and **improved the InField user experience**.

## Version 6.5.0 - July 6th, 2020

**Revisions on InField home page**

**Revisions** are now available on the InField home page. The active work plan is available at the top of the list. You can also browse through work orders and open the work orders as checklists without leaving the home page.

<!-- ![Revision Pane](/images/infield/revisions.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/revisions.png" alt="Revisions pane" width="100%"/>

## Version 6.4.0 - July 1st, 2020

**New design on InField home page**

The InField home page is improved. You can more easily navigate between your open and archived checklists. To create a new checklist, you can click the **Plus** next to the checklist header. You will also find summary information below the checklist names that give a clear overview of your checklists' progress. Note also that the Recently viewed section is now available from the Global search.

<!-- ![New Hope Page](/images/infield/new_home_page.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/new_home_page.png" alt="New hope page" width="100%"/>

**Changed Edit options for checklists created from objects**

The Edit options for checklists created from objects in work orders have changed. You can not rename, or add/remove items for these checklists.

## Version 6.3.0 - June 16th, 2020

**Create custom checklist states quick and easy**

Creating custom states for checklists is now more user friendly. When you create a new checklist, type in the name of the checklist, click **Add states** and push **Enter**/**Return** to create new states.

<!-- ![Create States](/images/infield/create_states.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/create_states.png" alt="Create states" width="100%"/>

## Version 6.2.0 - June 3rd, 2020

**Improved user experience in 3D view**

The overall user experience in the 3D view is improved: You can add images to checklist items, and you can more easily add comments and expand and collapse the bottom drawer.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/images_in_3D.png" alt="View images in 3D view" width="80%"/>

**Filter work orders in 3D**

You can filter work orders by their due date. Soon to follow will be other filtering options like discipline and work package.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/filter_wos.png" alt="Filter work orders" width="80%"/>

## Version 6.1.2 - May 26th, 2020

**Improved Support system**

The Cognite support system now uses **Intercom** to provide better support to our customers.

<!-- ![New Support System](/images/infield/intercom_support.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/intercom_support.png" alt="New support system" width="100%"/>

## Version 6.0 - May 12th, 2020

**Improved Search functionality**

Click the **Search** icon to navigate between **recently visited** trend pages, tags and documents and **search globally** for tags, trends, and documents in the **Search bar**.

<!-- ![Global Search](/images/infield/global_search.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/global_search.png" alt="Global search" width="100%"/>

**View Work order data and browse notifications**

- **Access open work orders** and check details like description, due date, status and main discipline from the menu or the **Overview** page.
- **Create checklists** with objects in a work order without leaving InField with the **Create checklist** button.
- **Browse notifications**, and see the history of notifications sorted by date from the **Notification** tab. Note that this feature is available only for customers with configured work order data.

<!-- ![SAP Work Orders](/images/infield/sap_workorders.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/sap_workorders.png" alt="SAP Work orders" width="100%"/>

## Version 5.0 - April 28th, 2020

**Operation Support becomes InField**

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/infield_logo.png" alt="New logo" width="23%"/>

Our goal is to consistently improve Cognite products and services based on our customer needs. The Operation Support application has evolved and now targets more infield activities such as operational maintenance, and efficient preparation of tasks. Operation Support is therefore renamed to InField.

InField is still as accessible as it has been and now also has a distinguished product name.

**Add images to checklists**

You can now add images to checklist items. This feature is available on the desktop and on the mobile app. To add an image, click the More button to open the menu for checklist items and then click Add image. Take photos by using your phone's camera and attach the photos to your checklists. You can optionally add a description to the photos.

<!-- ![Images in Checklists](/images/infield/images_on_checklists.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/images_on_checklists.png" alt="Images in checklists" width="100%"/>

## Version 4.15.0 - April 22nd, 2020

**View open work orders in 3D view**

In the 3D view, you can now view all open work orders around your location. To activate this feature, click the Briefcase icon placed above the Checklist items icon. The list with all open work orders around the current location shortly appears. Select a work order to display a list with the items within the work order and the work order details at the bottom of the page. This feature is available only for customers of which we have work orders data.

<!-- ![Work Orders in 3d View](/images/infield/open_wo_3D.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/open_wo_3D.png" alt="Work orders in 3D view" width="100%"/>

## Version 4.14.0 - March 25th, 2020

**Checklist roles**

We have removed the roles in checklists. If you archive or remove a checklist from your lists, your colleagues' view of the lists is not affected.

**Reduced number of disciplines**

We have reduced the number of disciplines in the profile section to help improve our metrics.

## Version 4.13.0 - March 18th, 2020

**See your initials in the Profile**

The Profile section now displays your initials.

<!-- ![User Initials on Profile Page](/images/infield/initials_in_profile.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/initials_in_profile.png" alt="User intials on Profile page" width="100%"/>

## Version 4.12.0 - March 10th, 2020

**Buttons have a new look**

We have updated all the buttons in our application to have a consistent look and feel.

**Pagination in trends page**

When there is a lot of trend data attached to a tag we will create multiple pages to display the data.

**Privacy policy link**

Follow the link in the profile section to read about our privacy policy.

## Version 4.11.0 - March 4th, 2020

**Add tags to checklist from different sections of the application**

You can now add tags to your checklists by clicking the plus button both on top navigation bar and from recently viewed items. To display the button, hover over the tag name and description. Click the plus button to open a window where you can select which checklists the tag should be added to.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/add_tags_to_checklists.png" alt="Add tags to checklists" width="80%"/>

**Clickable checklist name in 3D view**

You can now navigate to the home screen where your active checklists are open by clicking the checklist name in the 3D view.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/clickable_checklist_name.png" alt="Clickable checklist names" width="80%"/>

## Version 4.10.0 - Feb 25th, 2020

**Small improvements**

In this release, we have focused on bug fixes and minor interface improvements.

## Version 4.9.0 - Feb 19th, 2020

**Profile section**

With this release, we're introducing a profile section to Operation Support. On the new login screen, you can select your discipline (optional) and the asset you are working at. Operation Support remembers your settings the next time you sign in. You can always update your settings on the profile page.

<!-- ![Search FOr WO](/images/infield/profile_section.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/profile_section.png" alt="Profile section" width="100%"/>

## Version 4.8.0 - Feb 10th, 2020

**Create checklists from object lists**

You can now create checklists from objectlists of open work orders or join the ones created by your colleagues. (This feature is only avaliable for the tenants which work orders are enabled.)

<!-- ![Create Checklists from Object Lists](/images/infield/checklist_from_objectlist.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_from_objectlist.png" alt="Create checklists from object lists" width="100%"/>

## Version 4.7.0 - Jan 30st, 2020

**Archive multiple checklists**

You can now archive multiple checklists at the same time by first selecting them on the open checklist page.

<!-- ![Archive Multiple Checklists](/images/infield/multiple_checklists.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/multiple_checklists.png" alt="Archive multiple checklists" width="100%"/>

**Duplicate items in checklists**

You can now add duplicate items to your checklists. Duplicate tags in checklists will have numbers before their tag ID, for example (1),(2), etc. You can find the duplicate checklist items also in the 3D view.

<!-- ![Duplicate Items](/images/infield/duplicate_items.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/duplicate_items.png" alt="Duplicate items in checklists" width="100%"/>

**Interactions are disabled while adding items to a checklist**

We disabled unwanted interactions with the other parts of the page while you add items to a checklist by darkening the background.

<!-- ![Diabled Checklist](/images/infield/disabled_checklist_background.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/disabled_checklist_background.png" alt="Archive multiple checklists" width="100%"/>

## Version 4.6.0 - Jan 21st, 2020

**Overview page order matches the sidebar menu**

We updated the order of the overview page to match the order of the sidebar menu in the application.

## Version 4.5.2 - Jan 13th, 2020

**Critical fixes**

We fixed the recent issues with joining a checklist and the scanning features.

## Version 4.5.0 - Jan 8th, 2020

**Generating PDFs from checklists with long names**

In this release, we fixed issues related to generating PDF files from checklists with long names.

**Improved search**

We improved the accuracy of search results. Now, you can search assets with both tag name and description. The exact match will appear on top results no matter if you typed it with or without dashes.

<!-- ![Improved Search](/images/infield/improved_search.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/improved_search.png" alt="Improved search" width="100%"/>

## Version 4.4.0 - Dec 11th, 2019

**Archived checklists**

Select "View All Checklist" to navigate to a new page where you can find all your archived and open checklists. You can restore your archived checklists or remove them permanently

<!-- ![Archived Checklists](/images/infield/archived_checklist.gif) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/archived_checklist.gif" alt="Archive checklists" width="100%"/>

**Improved experience of checklist items on 3D**

By simplifying the steps for editing states of checklist items and adding comments, we improved the overall experience of checklists on 3D. Now, you can add comments or edit state with a few clicks.

## Version 4.3.0 - Dec 3rd, 2019

**Location is now available at a glance**

On the tag overview page, you can see where the tag is located on the plant. Clicking "View 3D Model" still takes you directly to the detailed 3D model where you can see the detailed surroundings of the tag.

<!-- ![3D Overview](/images/infield/3D_area_overview.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/3D_area_overview.png" alt="3D area overview" width="100%"/>

This is now available for selected plants only. We are working on enabling this for more plants.

## Version 4.2.0 - Nov 26th, 2019

**Fixed bug with PDF documents not opening correctly on mobile**

We have fixed a bug where PDF documents did not open correctly. Clicking on a document now opens the file in your default PDF viewer. We recommend that plants that use digital redline markups in PDFs set Adobe Acrobat as the default PDF viewer to make sure that all redlines display correctly.

**Fixed bug with Interactive P&IDs causing app to crash**

We have also fixed the bug that caused some P&IDs to crash the application. The cause was a small problem related to certain highlighted tags in the P&IDs, which should now not occur any more.

## Version 4.1.0 - Nov 19th, 2019

**See full tag name and description in header**

On the mobile version, you can now click the header to see the full tag name and description.

<!-- ![Tag Header](/images/infield/tap_on_top_bar.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/tap_on_top_bar.png" alt="Tag header" width="100%"/>

**Redesigned help pages**

We've redesigned the help section with a new menu structure and replaced the in-app help sections with links to the [online help pages](./guides/howtoaccess.md). This gives you more up-to-date help directly from the app and allows us to communicate the updates in a richer way (more images and videos).

<!-- ![New Help Section](/images/infield/help_section.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/help_section.png" alt="New help section" width="100%"/>

## Version 4.0.0 - Nov 7th, 2019

**Lube oil information**

Lube oil data is now included in the properties section, and you can easily find information about which lube oil and what quantity to use for an asset. Navigate to an asset (typically pumps, motors, gearboxes), click "Properties", and scroll down to the lube oil section.

<!-- ![Lube Oil Data](/images/infield/lube_oil_properties.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/lube_oil_properties.png" alt="Lube oil data" width="100%"/>

## Version 3.0.0 - Nov 6th, 2019

**Work orders and equipment history**

Big news: we've added work order and equipment history information to each tag. Navigate to a tag and click the "Work orders" or "Equipment history" tabs to see if there is any work planned, or how previous problems have been solved. The object list and operations section of work orders is coming soon!

<!-- ![Work Orders Equipment History](/images/infield/workorder_equiphistory.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/workorder_equiphistory.png" alt="Work orders and equipment history" width="100%"/>

This feature is only available for selected plants for the time being!

## Version 2.12.0 - Oct 21st, 2019

**Group checklist by area**

We´ve added the ability to group checklists by area. Click the context menu and select "Group list by area." If you change your mind, click the "Ungroup by area" to revert the list to the original order. This feature is only available for plants where area code is enabled.

<!-- ![Group Checklists by area](/images/infield/group_by_area.gif) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/group_by_area.gif" alt="Group checklists by area" width="80%"/>

## Version 2.11.0 - Oct 15th, 2019

**Improved checklist user interface**

We've made significant changes to the design of checklists on mobile, to add more space for the actual lists. Also, we have reorganized the menu pop-ups and changed the flows for adding comments and adding and deleting checklist items, so that you don't have to scroll to the top to confirm.

<!-- ![Improved Checklist Items](/images/infield/improved_checklists.gif) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/improved_checklists.gif" alt="Improved checklist items" width="100%"/>

**Fixed bug with search box not going away**

We have fixed a bug on the desktop version where the search dropdown didn't go away unless you completed a search or clicked a search result.

## Version 2.10.0 - Oct 2nd, 2019

**See checklist items in 3D on mobile**

We are delighted to release a significant update to the 3D viewer on mobile devices! A common request has been to be able to see other checklist items in your current surroundings. With our latest software version, when you view a 3D model on a tag, you can now select a button to show all checklist items within your area.

All checklist items within the currently visible area have a small card. You can use this card to zoom to the tag and open up the checklist status and comments. You can also change the status and add comments to checklist items directly from the 3D view. When you set a checklist item to "completed", it is removed from the view, and only active items are visible.

<!-- ![Checklist in 3D](/images/infield/checklist_in_3d.gif) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_in_3d.gif" alt="Checklist items in 3D" width="100%"/>

Let us know what you think of the new features, and how we can improve them further.

## Version 2.9.0 - Sep 23rd, 2019

**Fixed checklist bug**

We fixed a bug that made it complicated to add comments to checklist items. We are working hard on making the checklists a fantastic tool for you, and are releasing significant improvements in the coming weeks!"

**Voided documents**

We've received feedback that including voided documents in Operation Support was confusing. We now hide all documents that are marked as voided in the document source systems from Operation Support.

**Improved 3D on mobile**

We have done a small upgrade on how we select objects to show in the 3D model on the phone (when we show only the area around the tag). You reported issues with certain objects being invisible, and we now handle this in a different way to make the resulting view less confusing.

## Version 2.8.0 - Sep 17th, 2019

We have now redesigned the documents page on each tag to make the documents easier to find. At the top, you will always find _your_ 5 most recently viewed documents for this tag.

<!-- ![Recently Viewed Documents](/images/infield/recent_docs.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/recent_docs.png" alt="Recently viewed documents" width="100%"/>

## Version 2.7.0 - Sep 03rd, 2019

We have completely redesigned the top bar and side menu. On the desktop: click the menu icon in the top left-hand corner to expand and see the descriptions for each item.

<!-- ![New Side Menu](/images/infield/left_menu.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/left_menu.png" alt="New side menu" width="100%"/>

We have also updated how elements load on the tag overview page to reduce the chance of clicking the wrong button.

## Version 2.6.0 - Aug 22nd, 2019

Based on your feedback, we have redesigned the desktop search dropdown to accommodate long text fields. Happy searching!

## Version 2.5.0 - Aug 14th, 2019

**Properties page**

We have redesigned the properties page, and you can now set your favorite properties to stay at the top of the page. The favorites are shared between tags, so you don't need to favorite the same properties for all tags.

<!-- <img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/properties.png" alt="New Properties page" width="100%"/> -->

**Minor fixes**

We've removed unnecessary scroll bars from many sections and pages (showed up on Windows PCs only), fixed issues with trend charts that displayed aggregate values instead of raw values at some zoom levels, and many more.

## Version 2.4.0 - Jul 31st, 2019

**Notifications**

We've seen how intrusive the notifications could be in situations with varying WiFi quality, and have redesigned how the notifications work. Confirmations show as a small grey single-line message (for example, "checklist deleted"), while important issues show as full-width, horizontal bars.

<!-- ![New Notifications FOr WO](/images/infield/notifications.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/notifications.png" alt="New notifications" width="100%"/>

**Image performance**

Uploading of images has been a massive success, with thousands of images uploaded so far. Pages with many high-quality images could cause the app to fail, but we have now improved the performance. We'll continue improving the performance in the coming releases.

**Checklist performance**

When many users each had many checklists, the app would sometimes load slower. The app now loads with the same speed regardless of the number of checklists.

## Version 2.3.1 - Jul 15th, 2019

**The scanner function is improved**

We've rolled out to customers and assets that have a very different tag and nameplate structures. To improve tag scanning, we have made a separate tag scanning workflow to better support these cases. This change does not affect tag scanning at plants where the functionality already worked well.

## Version 2.3.0 - Jul 9th, 2019

**New loading screen**

We've introduced a new loading screen in line with Cognite brand identity.

**Trend y-axis now handles large numbers better**

When a time series y-axis range had large numbers (typically 10.000 and higher), the charts could look cluttered. We are now displaying large numbers by shortening them to 10k for 10.000, and 1M for 1.000.000.

<!-- ![New Loading and Improved Trend Axes](/images/infield/loading.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/loading.png" alt="New loading screen and improved trend axes" width="100%"/>

## Version 2.2.0 - Jun 26th, 2019

**Delete checklists warning**

We've received feedback that it was too easy to unintentionally delete checklists that others were still working on. You now get a warning if you try to delete a checklist that others could still be using. The logic remains the same: if **you** created a checklist, you can delete it, but that makes the checklist unavailable for others. If you did **not** create the checklist, you can not delete it (but you can choose to leave the checklist).

**Manage multiple checklists**

It is now easier to switch between multiple checklists on mobile devices. Click the checklist title to pull down a list of checklists and select the checklist you are looking for.

## Version 2.1.0 - Jun 11th, 2019

**Multiple states on checklist items**

Checklist items can now have multiple states. When you are collaborating with others about a checklist, you can, for example:

- Use a "started" state to prevent others from starting on the same items.

- Use multiple states to control progress (for example, "started", "started in field", "finished in field", "completed")

<!-- ![Search FOr WO](/images/infield/checklist_states.png) -->
<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/checklist_states.png" alt="Multiple states in checklists" width="100%"/>

## Version 1.37.0 - May 22nd, 2019

**Tag description in checklists**

We've received feedback that checklist items were difficult to relate to without the description field. We've updated the way we show tags in checklists to include the tag description field.

**Pre-fixes in checklist items**

To make it easier to add tag-based checklists from certain other systems, you can now add checklist items with prefixes. For example, if your work management tool (e.g., SAP or Workmate) uses a prefix for each tag (MyPlant-21PT1019), you don't have to remove the prefix in Excel or other tools before you create a checklist. You can paste the tag list, including the prefixes, directly into the tag field.

**Clicking other tags in the 3D view**

We have fixed an issue where it could be a problem identifying tags when clicking on another asset in the 3D view. It is now easier to click nearby tags and find out what the item is or navigate to the tag directly.

**Checklists now include the name of who checked it (desktop only)**

When you collaborate with others, it can be convenient to see who has performed each task. On the desktop, you can now see who checked an item and also when the item was checked. The information is also included when you export the checklist to PDF.
