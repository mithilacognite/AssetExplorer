---
title: What's new?
pagination_next: null
pagination_prev: null
---

# What's new in Solutions Portal

This article documents the ongoing improvements we're making to Cognite Solutions Portal.

## Version 1.3.0 - 17 May, 2022

In addition to bug fixes, this release includes many new features and improvements for the **CDF Explorer** and the **Suites** menu.

#### **CDF Explorer**

- We have updated the asset tabs design.
- On the Details tab, we have added a metadata section.
- We have added a sidebar to the Events tab.
- We have improved the charts application URL templating.

- The new **full-screen view** allows you to preview **time series** and **documents** with **annotations**.

  You can open the full-screen view from any Solutions Portal page by adding a URL parameter: `fullscreen` plus a document ID (`docid`) or a time series ID (`tsid`). For example, `https://cogniteapp.com/fusion/?fullscreen&docid=1133581432976453`.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/document_preview.png" alt="Preview document" width="80%"/>

#### Suites menu.

- We've added a menu item on the Suite menu to move a suite.
- To align with the suite tile menu, we have added a three dots menu to the sub-suite tile.

## Version 1.2.0 - 07 March, 2022

- We have redesigned the **home screen**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/home.png" alt="Solutions Portal Home" width="80%"/>

- Users can select **Browse solutions** to see all available Cognite solutions. Administrators can also install solutions or request a demo from Cognite:

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/browse_applications.png" alt=" " width="80%"/>

- **Beta**: A **CDF Explorer** designed specifically for subject matter experts. You can navigate the asset hierarchy or search by asset name to see detailed information about 3D models, related documents, events, time series and more.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/cdf_explorer.png" alt=" " width="80%"/>

- **Beta**: A new **global search** feature to search for CDF resources. Select a search result to open it in the CDF Explorer.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/global_search_bar.png" alt=" " width="40%"/>

## Version 1.1.0 - 12 November, 2021

- Add possibility to [create sub-suites](guides/set_up_suites_and_boards.md#add-sub-suites).
- Add menu option to move a board to another suite. See [Move a board to another suite](guides/set_up_suites_and_boards.md#move-a-board-to-another-suite).
- Load boards with embedded content sequentially with an interval of 3 sec. See [Working with boards](guides/set_up_suites_and_boards.md#working-with-boards).
- Rename “Maintenance Planner” to “Maintain”.

## Version 1.0.0 - 09 August, 2021

- Support for OIDC authentication.
- New grid layout for boards. See [Rearrange boards](guides/set_up_suites_and_boards.md#rearrange-boards).
- Rearrange suites. See [Rearrange suites](./guides/set_up_suites_and_boards.md#rearrange-suites).
- Improved performance of the process of validating suites and boards.
- Various UI fixes and improvements.

## Version 0.7.1 - 31 May, 2021

- Switch from using `RAW database` to `db-service`.
- Add applications as 1st class citizens. System administrators can now toggle Cognite applications to be shown on the home page.
- Update Top Bar appearance.
- Change API calls to be azure auth friendly.
- Various UI fixes and improvements.

## Version 0.6.2 - 19 March, 2021

- Uploading your company/program logo (Solutions Portal administrators only). Select the settings icon in the top right menu. In the pop-up window, upload your logo. The maximum image size is 100 KB.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/customer_logo_clean_tinypng.png" alt=" " width="40%"/>

- Delete uploaded images (Solutions Portal administrators only). Administrators can now delete previously uploaded images on a board. Select the ‘x’ symbol on the name of the uploaded image or select the upload button to upload a new image and replace the existing one.

- New dataset solution for storing images files in CDF.

- Ability to see events in MixPanel (User behavioural tool) tracking users who enter user interface but don’t have any access to suites or boards.

- Various user interface fixes and improvements.

## Version 0.5.0 - 05 March, 2021

- **Share a suite**. Users can now collaborate by sharing links to suites to make other users aware of new information. If the person you share the link with does not have access to the suite, contact your Solutions Portal administrator for help.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/share_suite_2.png" alt=" " width="60%"/>

- **Error notifications**. To help troubleshoot issues, we show more user-friendly error messages with related error codes if there are problems with the back-end services.

- **Mixpanel events tracking**. To help stakeholders see how users are adopting the solution, we have set up Mixpanel data views to track usage behavior for the Solutions Portal. The data views can be made available to stakeholders.

- **Bugs fixed** include incorrect release date and other small user interface improvements.

## Version 0.4.0 - 10 Feb, 2021

This first release of Solutions Portal encompasses several main features described on this documentation site enabling companies to access all their use cases in one place:

- **Useful place to create & discover all organisation’s use cases** e.g., applications, dashboards (Grafana, PowerBI, Plotly dash, Spotfire etc.) and other links.

- **Solutions Portal administration support and governance** to give users access to only what they need access to using CDF groups aligned with Azure Active Directory (AAD) groups.
