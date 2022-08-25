---
pagination_next: null
pagination_prev: null
title: Get started
---

Cognite **Charts** is a part of Cognite Data Fusion (CDF), which collects, cleans, and contextualizes industrial data to make the data accessible and meaningful for humans and machines.

Charts is a powerful tool for engineers and domain experts to explore, trend, and analyze industrial data. It gives industrial experts instant access to data and no-code tools to find, understand and troubleshoot for actionable insights. Charts is cloud-native and is speedy compared to traditional tools. It runs securely on any computer in your desktop browser with **a single, secure sign-in**.

If you are doing routine tasks or troubleshooting complex issues where you need access to industrial data, Charts makes this **fast**, **repeatable** and **collaborative** - in one tool. You can find and work with any time series or contextualized P&ID available in your organization's Cognite Data Fusion. You can also find and analyze data you find in other Cognite applications for a seamless collaborative experience.

## Open Charts

To open Charts, navigate to [https://charts.cogniteapp.com/](https://charts.cogniteapp.com/), type in your company name, and sign in with your company ID and credentials.

Currently, we recommend that you run Charts in Google Chrome.

Start a new chart or open a private or public chart on the **Overview** page. Find data to plot with the search icon in the top left corner on the **New chart** page.

## Exploring data

**Charts** help you explore contextualized data from CDF to find the time series you want to plot.

Use the **Tag number** tab to search for the asset tag related to the time series you’re interested in or the **Time series ID** tab to search for a specific time series.

You can also search for an `externalId` (which may be different from the name) for a time series or asset/equipment tag in the search bar. Charts will automatically display the result at the top of the list. Note that `externalId` requires an exact match.

If an asset is found in one or more P&IDs, you can select the icon next to the result to open the P&ID.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/charts/search_panel.png" alt="Search panel " width="80%"/>

You can also add time series data directly from the P&ID to your chart.

Below the chart, you can see all the time series that you have added to the chart. You can rename, remove, and change units for each time series. Also, you can adjust the thickness and color of the line and select dotted or dashed lines. To show or hide a time series, click the colored dot at the beginning of the row.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/charts/arrow.png" alt="Icon " width="80%"/>

Use the search icon to open the related P&IDs. Select the information icon to zoom into functions and constants.

## Trending data

All vertical y-axes are interactive and can be independently moved by click+hold and drag, or scaled in and out by hovering over each respective horizontal axis and scroll using your mouse. This allows for fast stacking, overlay, and comparison of trends of multiple time series. Navigate between current and historic data with the **Last year**, **Last 6 or 1 month**, **Last week**, and **Last 1 or 2 days** buttons, or set a specific time and date in the calendar.

## Calculations and analysis

Troubleshooting and working on root cause analysis often require calculations ranging from basic algebraic to more advanced algorithms. You can easily apply these calculations to one or multiple time series, and the results are directly available in the chart.

To start a new calculation, click **Add calculation**, and a new line in the list is added with a square color-box representing the new calculation. When the node editor opens, right-click in the grey work area and add one or more input time series to get started.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/charts/calculations.png" alt="Calculations " width="80%"/>

You can use **Automatic data alignment** in the node editor to ensure that data in calculations are automatically aligned (resampled and reindexed). If you want to define and set up your own resampling and reindexing parameters, turn off **Automatic data alignment**. You can manually add resampling or reindexing function nodes into any given calculation and define the parameters yourself.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/charts/align.png" alt="Align " width="80%"/>

## Constants and functions

<img className="media-right" src="/images/cdf/charts/build_calculation.png" alt="Build calculation" width="40%"/>

Right-click in the work area to add **constants** or **functions** to the calculation. Add any input parameters before you save. You can also click **i** to view the function or constant details.

Right-click again to add an **Output time series** for the calculation to be written back to the chart area. Pipe the calculations together in the right order to complete the computational graph. When a valid calculation is connected with an output calculation, the calculation runs automatically and shows the results in the graph as a new, calculated time series.

Whenever an input source is changed, a parameter changed, or the time frame in the chart is changed - a refresh of the calculation is automatically run and shown in the graph. Adjust input parameters and constants values at any time by double-clicking a function or constant.

Calculations in the list are valid inputs to a new calculation, which means you can divide the steps of a calculation into several distinct calculations, and see the output of each calculation step.

## Collaboration and sharing

Charts can be private or public. You can share a link to public charts with co-workers with access to the Cognite Charts project. All users in your organization can see the charts under **Public charts** on the **Overview** page.

Only the owner of a chart can save changes made to Public charts. To save changes to a chart you don't own, duplicate the chart with the **Duplicate** option on the **Actions** menu and save changes to the duplicated chart.

You can use duplicated charts to create template charts with pre-selected time series and calculations that you can reuse when performing troubleshooting or root cause analysis and share with your team.

<!-- trigger build -->
