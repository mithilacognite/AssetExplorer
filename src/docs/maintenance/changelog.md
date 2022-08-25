---
pagination_next: null
pagination_prev: null
---

# What's new

## Version 1.25 - April 21, 2022

Release 1.25 is out, and it includes a few new features and several bug fixes!

**New features:**

**Multiple isolation list statuses**

You can now add multiple isolation list statuses in Workspaces. If this has been configured for your company’s tenant, the statuses appear when you click **Examine**. Scroll to see and select the relevant status to apply.
If this has not been configured for your tenant yet, please contact us.

**Download and import Workspaces**

We have enabled downloading and importing backups of workspaces in json format. This allows a new way of sharing workspaces with your colleagues and introduces an extra precaution that work is not lost.

**Bug fixes**

The following fixes have been implemented:

- The order of columns in Excel when exporting is now correct and consistent
- The **Remove work order** button is no longer shown in **Day by Day** tab
- **Stamp preview** is center aligned
- The **Share with** dropdown now shows all users
- The correct message is now displayed when creating a **Custom List**

**Behind the scenes**

We have launched a new user satisfaction survey that we have shared with our users. The feedback from this survey will greatly help us understand the baseline usability of the application from our end users’ perspective. This **2-minute or less survey** will be used to calculate an overall usability score (called a System Usability Scale (SuS)) for the application.

## Version 1.24 - March 24, 2022

We are excited to share what’s new in version 1.24 of Cognite Maintain!

In this sprint, we have focused on **improving existing features**.

**Work order lists**

- You can now expand and collapse a work order list. This improves interaction when working with multiple work order lists at once.

**Workspaces**

- **Autosaving** behavior is changed. Your workspace autosaves only when you have made a change (such as added markup or comment). A spinner is displayed when autosaving happens. Note that you can still click **Save** in the right top corner to save your changes.
- The **search** experience is improved. Exact matches are shown at the top of search results and highlighted in yellow.
- There is now a **document description** under the title of each document. The description is also included in the 2D view.

**Bug fixes**

- Workspace is automatically closed if a loading error occurs.
- Removing elements in the 3D or 2D view toolbar (Legend) also removes the elements from P&ID exports.
- It is again possible to **comment** on workspaces.
- We have fixed the **Hide off-screen** button.

**Behind the scenes**

- We actively address reported bugs and prototype robust components for Cognite Maintain v2.

## Version 1.23 - March 4, 2022

In this release we have simplified the sign-in flow. Now users only have to enter their project name to sign in.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/sign_in.png" alt="The new Sign in  " width="60%"/>

Sign in with a project name:

1. Navigate to the app sign-in page, https://mp.cogniteapp.com/.
1. Specify the Company ID for your company/organization.
1. Select **Continue** to sign in.

If you don’t know what values to enter to sign in, contact your internal help desk or the CDF admin for help. The CDF admin is often the person who gave you the link to sign in to the Cognite application. If you can’t find out who the CDF admin is in your organization, contact [support@cognite.com](mailto:support@cognite.com).

## Version 1.22 - February 10, 2022

Hello from the Maintain team!

We’ve been focusing heavily on the future of scheduling. We’re happy to release significant changes to this feature as well as updates to the workspaces functionality and a standard slew of bug fixes.

**Scheduling upgrades**

We’re introducing several new upgrades to our scheduling component, and laying the foundation for upgrades to come!

- You can now create **operations**. These operations are tied to Maintain and are used for ‘noting down’ new operations that are required. Once you have finalized your changes, you can export these and add them to your source system (e.g., SAP).
- You can adjust the granularity to see your schedule in a **day**, **week**, **month**, or **year** view - making it easier to view longer-lasting plans.
- You can **drag and drop** operations to **reorder** them to make the most sense to your plan.
- Drag and drop bars are now more user friendly and easier to do.
- The trade matrix will now use the **number of workers** as a baseline instead of the number of work hours each day. This will be the foundation for the **teams** concept coming up the next half year.
- We’ve given the page a new **design refresh** to make the experience cleaner and easier to use.
- Finally, we have added a **selection of filters** for you to use specific to the scheduling page. For example, filtering by the type of operation phase (Pre, Post or Exec).

**Workspace upgrades**

- We’ve given the stamp tool a redesign.
- We also have added a base set of P&ID symbols that you can use as stamps.
- You can upload images to CDF and use as stamps.
- If a document physically covers another document on the page, you can now move it between layers.
- You can now swap between pages of a PDF.

**Integrity and Major Risks Dashboard**

We have made multiple changes to improve the performance of the IMR-dashboard.

**Other updates**

- We have improved the filtering options selection to be more performant and included the number of options this filter has.

**Bug fixes**

- Fixed issue with rendering suggestions.
- Comments tool in workspaces now works again.
- Fixed issue where the material status did not show on work orders.
- This release also contains bug fixes to improve performance and user experience.

**Behind the scenes**

We’re looking forward to booking meetings with super users from our customers to start validating our roadmap plans for the upcoming months! Several users have raised some exciting ideas that we are developing a concept around. We hope that these will further increase the value of Maintain going forward.
Head on over to the [Maintain Group on Cognite Hub](https://hub.cognite.com/groups) to learn more about specific features, what’s to come, and post a question if you have one!

## Version 1.21 - January 21, 2022

The Maintain team wishes you a happy new year! We’re looking forward to delivering some exciting new features in 2022. Here is how we are starting the year:

**Integrity and Major Risks Dashboard**

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/imr_dashboard.png" alt="The new IMR dashboard " width="60%"/>

We have released the first version of the Integrity and Major Risks (IMR) dashboard. This dashboard allows selected users to define lists of the most critical risks for others to view and analyze. You can use the advanced filtering in Maintain and the new risk matrix view to understand the risk priorities. You can also view key documents related to your risks.

We are looking forward to feedback from our users about this feature!

**P&ID Workspaces**

This is the official release of **Workspaces** that we introduced in the October release.

We have also added new functionalities, such as copy/paste, undo/redo for shapes, and multiple improvements:

- Added **Quick search** for **Suggestions**
- Improved performance
- Added **No match** message when the search for a **Work order** has an invalid criterion

**Bug fixes**

- The **Save** button will no longer be disabled
- The autosaved date is now showing properly
- Fixed the issue where the P&ID would not be shown in the work order modal if the user was in 3D view
- Fixed and improved the **Download** function in the **Materials** tab
- Updated the **Filter** window overlap with the **Scope header** when you are scrolling the work order list
- The **Progress** cell is now showing proper values in the **Equipment** tab
- Fixed styling for **Material status** tag

**Coming up**

We’re currently planning a substantial change in **Maintain**, which will coincide with our first release of **2.0**. This is in proud collaboration with several customers that have helped us pave the way for where we want to go with **Cognite Maintain**. We’ll soon be in the testing phase and will be sharing our plans with you in our group on [Cognite Hub](https://hub.cognite.com/) in the coming weeks.
Become a member of the [Maintain group on Cognite Hub](https://hub.cognite.com/groups/) and give us feedback!

## Version 1.20 - December 17, 2021

We are excited to share what’s new in version 1.20 of Cognite Maintain!

We have improved the workspace and added new features. Now, you can share a workspace with colleagues. When you have a list, you can load the documents related to the work orders in the list to the workspace. If a work order is unmapped, you can now map it to an asset in one of the documents in the workspace. You can collapse the list panel to the right to get more room to work with workspaces. We have added a shortcut to return to the select tool, press **s**, or the **escape key**. You can also delete stamps.

When you move an operation on the scheduler page, the trade matrix (showing the number of workers and planned hours for each day for each trade) will be updated accordingly.

We have also brought back the Help center.

## Version 1.19 - November 25, 2021

The **Site view** has been enabled for specific customers. This feature allows users to see a group of assets in one view, supporting the task of for example, coordinating campaigns that span across many assets. In addition to clicking individual assets as before, the user can now also click a group of assets.

The improvements and bug fixes below are also included:

- The loading time of superimposition suggestions have been improved
- Trades are now displayed in the resource optimization drop-down suggestions
- If a user has selected the **Suggestions** tab for work orders, we default change to the **Work orders** tab when switching between platforms.

## Version 1.18 - November 17, 2021

The new feature of this release is **Workspaces**. **Workspaces** allows you to create and view your markups on selected P&IDs. You can create a new workspace or modify an existing one.

## Version 1.17 - November 12, 2021

A spinner is now displayed when waiting for data to load in predefined work order lists. We have also made adjustments to make Maintain work on Azure.

## Version 1.16 - October 12, 2021

We are excited to share what’s new in version 1.16 of Cognite Maintain.
The work order cards are now customizable! Select the metadata most important to you and pin these to the top of the work order card for a better overview.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/view_perf_impr.png" alt="Pin work order " width="60%"/>

The navigation help now includes a guide on how to navigate by using keyboard shortcuts. The help modal has also been adjusted to fit smaller screens better.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/nav_shortcuts.png" alt="Navigation shortcuts " width="60%"/>

We have made it easier to change your list filters by enabling toggling of list filters in work order cards. Simply click the item you want to remove as a filter.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/toggle_filter.png" alt="Toggle filter " width="60%"/>

When hovering over the asset tag, we now display the asset description for easy overview.
Under suggestions, we have improved the algorithm for superimposition to provide you with more accurate suggestions.

Give it a try and see what you think!

## Version 1.15 - September 3, 2021

Hello! We are excited to release Cognite Maintain 1.15.

We are enabling an isolated view of the 3D model. Now the user can choose which parts of the 3D model to see, instead of loading the entire model. A 3D navigation cube is now visible in the top right corner of the 3D view, making it even easier to navigate. Another improvement is that we added a 3D model color explanation to the legend, which explains what the grey, blue, yellow, and red colored assets mean. We have also changed the color on superimposed models, which are now purple, to make it more visible on the model.

## Version 1.14 - June 21, 2021

We are happy to share release 1.14 with you.

A big chunk of the work in this release is not visible features but background changes. We have been working towards a goal to remove a big and time-consuming request. Instead of one request, we get the parts of the data we need only when and where we need it to enhance the performance of the initial load.

We have also fixed bugs and implemented several improvements:

- Using the Segmented Control component to switch between 3D/2D view
- Several typo fixes
- Black border on 3D view on big screens is now removed
- Toggling risks on/off on 3D view works again

We hope the improved loading time of the application is experienced as significant and that it will contribute to easier use of Cognite Maintain!

## Version 1.12 - May 21, 2021

Based on the feedback from several of you, we have **improved the visualization of work orders and other events in 3D**. These are now visualized in a honeycomb structure, which will expand as you create scopes. We hope this improvement will significantly ease the visualization in 3D. Give it a try, and let us know what you think!

We have also improved the performance by reducing the number of API calls.

## Version 1.11 - April 16, 2021

We're excited to release version 1.11 of Cognite Maintain.

We have enabled a **Help center** in the application to provide you with useful tips on how to use the application.

To access the help center, click **?** in the right top corner of the application. A side panel will open containing useful links to the documentation and walkthrough cards that cover central features of Cognite Maintain. Currently, there are two guides on how to create and optimize a Scope. Guides for Schedule and Report will be added in the near future.

The 3D viewer now uses Reveal version 1.5, which **enhances the 3D model performance**. We have added tips on how to **navigate** in the 3D viewer and how to **slice the 3D model** using the new slicer in the toolbox in the bottom left corner of the 3D view.

To increase the speed of Cognite Maintain, substantial work has been done to **enhance the performance**. We have developed enrichment services to consolidate the API calls to prevent hitting the API call limit on browsers.

We have also improved the **filter functionality**. The string search handles multiple values and makes it easier to create a scope based on multiple IDs. These are separated by line change.

## Version 1.10 - March 11, 2021

We're excited to release 1.10 of Cognite Maintain.

#### Configurations

We have made several improvements to make the application more configurable and thus easier to accommodate for new customers.

#### Mass changing available hours in Schedule

- In the **Schedule** view, you can change available hours in bulk to adjust the trade matrix.
- Click on the grey cog in the bottom right corner (**Configuration**) and update the workday hours and capacity for the different trades all at once

#### P&ID improvements

- P&ID added as a new setting for suggestions: we can now offer suggestions based on P&IDs relevant to the chosen scope
- Ability to download P&IDs both with and without work orders and risks highlighted on them
