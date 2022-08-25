---
title: What's new?
pagination_next: null
pagination_prev: null
---

# What's new in Cognite BestDay?

## Version 2.4 - July 6, 2022

When using the BestDay charts to identify optimization potentials, you'll now see the **last reported data point for timeseries with a step change** when you hover over the step: 

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/hover_datapoints.png" alt="Production panel" width="80%"/>

You can also zoom in on a **particular region** of a chart by selecting the area you want to inspect. Both the x- and y-axis will zoom. Previously, only either the y-axis or the x-axis would zoom at a time. Notice also that the **Reset** button is only visible when you've zoomed in on the graph and resets to the original frame. 

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/zoom_section.gif" alt="Zomm in to graph sections" width="93%"/>

When you group your favorite wells into collections, you can now search for wells while you're creating the collection: 

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/search_collection.png" alt="Search for well in create collection" width="80%"/>

## Version 2.3 - June 23, 2022

We want to make sure you quickly find the data you're looking for in BestDay. With this release, you can **filter well types and product deviations** with the improved **Add filter** button on the **Well summary** page. In any of the BestDay charts, you can **zoom in and out** by pressing the **Ctrl** key (PC) or the **Cmd** (Mac) while scrolling your mouse pointer over the y-axis or x-axis. Notice also that the days and date range you've set are kept as you navigate around BestDay. 

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/well_summary_filters.png" alt="Production panel" width="83%"/>

Notice also that the **Add to collection** option will be deactivated if you try to add a well that you've already added to the collection or if a collection's maximum limit (200 wells) is reached.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/add_to_collection.png" alt="Deactivated Add to collection option" width="66%"/>

## Version 2.0 - February 8, 2022

We're very excited to present BestDay's all-new deviation and deferment handling workflow. Detect production deviations for your overall production throughput - **your total hydrocarbon production** - on a daily basis, analyze and investigate the data using multiple new panels on the KPI page, then classify and group deviations as you see best fit to transition into BestDay deferments. When you have handled the deviations, you can export and ingest the BestDay deferments back into your source system.

The **Production** panel on the KPI dashboard visualizes actual production, deferments, and identified production deviations in a stacked bar chart, as well as your BestDay capacity now based upon **daily** volume calculations of **total** hydrocarbon products for your system, subsystem, and even for your **collections** of favorite wells. Investigate and discover the optimization potential by selecting all or only the hydrocarbon products you want to focus on, then hover over the chart to see the details. Dive into further details by scrolling down to the **Breakdown per product** chart.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/deep_dive.png" alt="Production panel" width="100%"/>

:::info NOTE

The BestDay capacity and production deviation calculations are now based on **total hydrocarbon production**.

- This means that the BestDay capacity and deviation volumes **include** the well main hydrocarbon product (such as oil for an oil well) and the hydrocarbon side-products (such as associated gas for an oil well) in one single Best Day capacity daily number per well.

- The BestDay daily identified production deviations volumes **exclude** deferment volumes recorded in the source system on the day of the BestDay capacity calculation. This means the source deferment events do not need to be attached to BestDay deviations as these are two separate volumes.

- You can verify the production and deferment volumes available in the system at the time of the BestDay capacity calculation in the detailed description of the BestDay daily production deviations. This means that if a deferment event and volume have been added in the source system after the BestDay calculation, you can check the values at the time of the calculation.

:::

When you are ready to handle the deviations, you can classify and group deviations for further investigation or ignore deviations that you disagree with.

#### Create deviation groups

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/deviation_groups.png" alt="Deviation groups" width="40%"/>

Deviation grouping is used to group daily identified production deviations, classify and document deviation events, and transition these into BestDay deferments. Drill down to the well you want to focus on. Then create deviations groups from the **Production** chart by selecting and clicking one or more days in the **Production** bar chart or selecting **Create group** in the **Deviations** side panel. The deviations are now automatically transitioned from **Detected** to **Investigation** mode. In the dialog that opens, you select to **Investigate** or **Ignore** deviations, and this opens the **Create group** window:

1.  In the **Create group** window, the deviations are automatically classified with the **Investigation** status, but you can select a different classification under **Actions**.

     <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/create_group.png" alt="Create groups" width="100%"/>

2.  Turn on **Ongoing events** to automatically add new days to this group. BestDay keeps adding days until you turn off this switch or production is overperforming. Note that this option is only available when the last day with a deviation is included in the time period. This means you can't use this for historical deviations.
3.  Insert a value in **Use equal percentage for all days** to modify the volumes by percentage or clear this field to manually tweak the values in percentage or absolute numbers for each day. Use this if not all of the volume applies as a deviation or to split the numbers on different groups.

    :::info Note

    BestDay keeps adding the exact percent of daily detected deviation volume for each new day in an ongoing event. For example, suppose you select 70% of the volume of the last day when you create your ongoing event. In that case, only 70% of the new days' deviation volumes are automatically added to this ongoing deferment.

    :::

4.  Select **Create group**.
5.  On the **Classification** tab, you classify the deviation with the same rules that are used in your source system for deferment classification. The deviation card is set to 100% when the required fields are filled in.
6.  The **Activity and Comments** tab logs all comments you have entered and all actions you've made on a deviation.
7.  Select **Save** to keep your values but continue to work on this card later or, if you have filled out all mandatory fields, select **Create deferment** to transition the deviation to a BestDay deferment. Notice that the status now updates to **Explained**.

#### Ignore deviations

If you disagree with the BestDay calculation, you can ignore the deviation volume parts that you think are wrong by creating a group and setting the group's status to **Ignore**.

1. In the **Create group** window, select **Ignore** under **Actions**, and add a reason and a comment for ignoring the deviation.
1. Turn on **Ongoing events** to automatically add new days to this group. BestDay keeps adding days until you turn off this switch or production is overperforming. Note that this option is only available when the last day with a deviation is included in the time period. This means you can not use this for historical deviations.
1. Select **Create group** to create a card on the **Deviations** side panel with the deviations listed as **Ignored**.

#### Export deferments to CSV

Click the **Export** button in the top right corner to add source deferments and BestDay deferments to a CSV file you can ingest into your source system for further handling and reporting.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/export_deviations.png" alt="Export deviations" width="40%"/>

#### The Deviations side panel

The new cards on the **Deviations** side panel help you quickly find the key information about all deviations in any state. On the front page of a card, you'll see the amount of volume attributed to a group and the current status for the deviation. Use the filters to find the deviations you want to work with, then click a card to see more details. On the **Allocation** tab, you'll see how the volume of this deviation is distributed to different groups, and on the **Initial data** tab, you'll see the initial volumes for a specific day prior to any user modifications. The initial data is the input used in the BestDay calculations. The **Activity and Comments** tab unifies the comments entered for the deviation group and a log with all changes made to the deviation group.

#### Additional panels on the KPI dashboard

To gain insights into your system's total deviation and deferment handling, track the BestDay value, and get a bird's eye view of the volume handling and interactions with deviations and deferments, check out the new or improved panels on the KPI dashboard.

:::info Information

The BestDay KPI values are updated once per day (at night). If you create a Best Day deferment, you will not see the impact on the KPI until the next day.

:::

**Breakdown per product** - The number of deviations is listed for each hydrocarbon product under **Deviations**.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/breakdown_per_product.png" alt="Breakdown per product" width="100%"/>

**BestDay deviation volume and classification** - The blue line shows daily or monthly deviation volumes for each well in a system, subsystem, or collection, i.e., the total underperformance for a system level. The green line shows the percentage of deviations that have been classified as deferments. Investigate the discrepancy between these lines to optimize deviation interactions.

**Deviations per status** - See the daily or monthly percentage split per deviation status and the volume this represents.

**Mean time to recover** - The mean duration from start to end date for source and BestDay deferments to help you understand the size of events in a system and how long they affect production to identify challenges and speed up recovery time.

**Active deferments** - This shows the number of actual deferment events from the source system and created from BestDay based on deviations from the BestDay calculations.

**Mean reaction time** - This shows the time span from the moment a deviation is detected until it is reacted upon to help you be proactive on major events. The graph does not show events that you are not interacting with.

## Version 1.11 - November 15, 2021

**Shift between assets**

**Select the asset** you want to work with using the new dialog box that appears when you sign in to BestDay. The asset dropdown list shows all the assets you have access to.

<img className="screenshot media-center" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/asset_selector.png" alt="Asset selector" width="40%"/>

When you want to work with a different asset, click the asset name under the BestDay logo in the top left corner and select another asset from the list.

**View daily and hourly rates**

To give you even more details about the data displayed in BestDay, we've added **time rates on all measurement units** across the different BestDay views. You can select to show daily or hourly rates with the new **Preferred rate** field on the **Profile** page. We've also made sure BestDay **keeps this setting and all other settings** on this page if you use BestDay on different browsers and computers.

<!-- ![Copy objects to a checklist](/images/bestday/preferred_rate.png) -->
<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/preferred_rate.png" alt="Preferred rate" width="100%"/>

**Group favorite wells into Collections**

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/add_collection.png" alt="Add collection" width="40%"/>

We've expanded and enhanced how your favorite wells are grouped with the new **Collections** option. Instead of having a list of favorites, you can now group wells into one or several collections. This is how to create a collection:

1. Click **Collections** in the System selector to open the **Add new collection** window.

1. Give a unique and descriptive name of the collection.

1. Add the well you want to have as favorites.

1. Click **Create new collection**.

**Keep your user preferences**

When you open BestDay, you'll notice that you'll find the application just as you left it! BestDay now **keeps all settings and filters** you have added to the different views, such as open or closed sidebars, time range, and production settings.

## Version 1.10 - November 2, 2021

In this release of BestDay, we've made sure the preferred settings you have selected on the **Profile** page are kept even when you're using BestDay across different browsers and computers.

<!-- ![Profole Page](/images/bestday/profile_page_changelog.png) -->
<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/profile_page_changelog.png" alt="Profile page" width="100%"/>

Notice also how the breadcrumb path at the top of each page, which helps you keep track of your location, now automatically adjusts to the size of the screen you're working on.

## Version 1.9 - October 1, 2021

This version of BestDay is all about making it easier for you to navigate and find the data you are looking for. The BestDay views, **KPI dashboard**, **Deep dive**, and **Well summary** are relocated and displayed as tabs closer to the working canvas enabling swift navigation between these. Notice also that you can close the **System selector** pane by clicking the X icon, and the **Export** button is now easy to spot in the top bar.

<!-- ![New Tabs](/images/bestday/new_tabs.png) -->
<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/new_tabs.png" alt="New tabs" width="100%"/>

## Version 1.8 - September 21, 2021

When you want to further explore and analyze trends from BestDay, you can now easily **copy the external ID** for a production trend and use this to find the same trend/time series in **Cognite Data Fusion** or **Cognite Charts**. Simply click the drop-down for a product on the **Deep Dive** page and click the **copy** icon.

<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/copy_externalId.gif" alt="Find External ID" width="80%"/>

This version also includes some minor tweaks made to the overall user interface, and we've taken care of some minor issues.

## Version 1.7 - June 21, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/frequency.png" alt="Production rate frequency " width="20%"/>

BestDay keeps expanding the trend options, and for well deep-dives, you can now **trend a set of production rates**, for instance, from different measuring points or a combination of live measurements and allocated production. The most frequent measurement is used for BestDay capacity calculation and deviation detection.

We've also **grouped all trends for a product** on the deep-dive pages. You use the dropdown lists to select the trends you want to visualize. Notice that a product’s production and target rates are represented by one shared Y-axis, making comparison very easy. You'll also find that systems and subsystems deep-dives now have a separate Y-axis per product.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/shared_axis.png" alt=" " width="80%"/>

## Version 1.6 - June 10, 2021

This version of BestDay focuses on giving you a **bird's eye overview of production performance** and some new options to find areas that need **further investigation and understanding** quickly and easy.

**KPI Dashboard**

When you open BestDay, you are now directed to the new **KPI Dashboard** page. Here you'll see **all your key performance indicators** for your selected system level. Below, you'll find different panels where you can investigate the details.

These are the main KPI cards:

- **Gross production** shows the production of all liquids, including water and impurities.

- **Hydrocarbon** shows the sum of all hydrocarbon production.

- **Deferments** show deferment volume per day.

- **Deviations** show deviation volume per day and number of deviations. You can choose between seeing total sums or the daily averages for a set time range.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/kpi_main_cards.png" alt="Main KPI cards" width="80%"/>

**KPI panels**

The **Breakdown by product** panel shows values for actual production, the BestDay capacity estimation and other capacity references, deferments, and deviations. Showing all products is the default setting, but you can select products with the checkboxes at the top of the panel.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/kpi_breakdown.png" alt="KPI Breakdown per product" width="80%"/>

Next is the **Production bar chart**, which visualizes actual production. You can compare the production capacity to the BestDay data-driven capacity and other capacity references, such as IPSC. You can also select to see the **deviations** between the actual and estimated production. This is illustrated with a grey shaded area on the chart. Show or hide a box with daily details with **Show values on hover**.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/kpi_production.png" alt="KPI production" width="80%"/>

Scroll further to see the **Deviations and Deferments** volume lined up side by side. A gap between the two indicates a reason for **investigating the optimization potential**. Click **Split by status count** to display the amount of detected and ignored deviations and planned and unplanned deferments. Notice that both the **Deviation** and **Deferments** side panels are available on the right side of the page to give you easy access to more details, such as event distributions.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/kpi_deferments.png" alt="KPI Deferments and Deviations" width="80%"/>

The last panel displays **Production efficiency** per product. The efficiency calculation is (Actual production/Capacity)x100%. By default, the BestDay data-driven capacity is used. You can change this with the dropdown list per product located at the top of the panel.

**Deep dive**

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/link_to_charts.png" alt="Link to Cognite Charts" width="40%"/>

When you want to dive into the nitty-gritty details, use the new link to [Cognite Charts](../cdf/charts/index.md), where you can **further explore, trend, troubleshoot, and perform root cause analysis of data and deviations** and also share the findings with your co-workers.

You'll find the link to Cognite Charts right above the graphs per **Deep dive** page.

**Well summary**

**Broaden your understanding and prioritize** between wells on the **Well summary** page with a new **aggregated view** of the summary. This is now available for the **entire field/branch/country, per system and subsystem**. Then filter further by sorting on the new **Production efficiency** column to find the area with the highest optimization potential. You can use new advanced options under the **Production deviations** column for further filtering; for instance, only show ongoing detected deviations with a volume above 10%.

<!-- ![Well Summary](/images/bestday/well_summary_1.6.png) -->
<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/well_summary_1.6.png" alt="Well summary " width="100%"/>

Note also that all trends for a **product are now grouped** in the well chart view. Use the dropdown lists to select the trends you want to visualize.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/grouped_wells.png" alt="Well products grouped" width="80%"/>

**Network tree**

Get the **overview of the production flow** from a selected well to the export point with the **Network tree** that you find as a side panel when you have selected a well. Traverse up and down the network, view network nodes such as gathering points or measuring points, or jump over to other wells and facilities.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/network_tree.png" alt="Network tree" width="40%"/>

## Version 1.5 - May 20, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/sorting_filtering.png" alt=" " width="20%"/>

We've added a wide range of options for **sorting and filtering deferments and deviations**. On the **Derferments** and **Deviations** side panels, just click the **Sort** list to sort according to newest or oldest item, largest and lowest volume, or longest and shortest duration. Click **Filter on deviations** to filter by status, duration, or volume, and click **Filter on deferments** to filter by type, event, duration, volume, or choke.

We've also added a **histogram for all deferment and deviation events** to visualize event distribution. Deferment events are categorized as event type, choke, volume, and duration. Deviation events are categorized as status, volume, and duration. Note that the volume ranges are sorted according to less than 5% of BestDay capacity, 5-10% of BestDay capacity, and more than 10% of BestDay capacity.

## Version 1.4 - April 20, 2021

**Find your favorite wells** and add them to the **Watched Wells** collection for **easy access from anywhere**. Simply click the star icon next to a well on the **Well Summary** page or on the well path list on the **Deep Dive** page to add to the collection.

<!-- ![Watched Wells on Well SUmmary Page](/images/bestday/watched_wells.png) -->
<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/watched_wells.png" alt="Watched wells on well summary page" width="100%"/>

<!-- ![Watched Well on Deep Dive Page](/images/bestday/watched_wells_deepdive.png) -->
<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/watched_wells_deepdive.png" alt="Watched well on deep dive page" width="100%"/>

## Version 1.3.2 - April 12, 2021

The **Export** option in BestDay **keeps improving**! If you have changed the measurement units for **production and deferment data** according to **your preferences**, these units are now **included in the exported spreadsheet**.

:::info tip
You set your preferred measurement units on the **Profile** page.
:::

## Version 1.3.1 - March 25, 2021

You'll experience a variety of **minor improvements made across several areas** in this version of BestDay. Here's a selection - **special characters are displayed correctly in Excel** after export from BestDay, **charts load faster** when you switch between wells, and you will find that **y-axes with the same unit are aligned automatically** on the Well Deep dive page to make it easier to compare values directly.

## Version 1.3 - March 19, 2021

Check how easy you now can **set your preferred measurement units for all hydrocarbon liquid and hydrocarbon gas values** throughout BestDay on the refurbished **Profile** page. Instead of going through the whole list of units per product, set the measurement units with two simple steps.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/profile_page.png" alt="Profile page" width="100%"/>

You'll also notice we have added the recycle bin icon to each **Advisor** card to make it **apparent and easy to delete advisors**. If an advisor is added to several assets, choose to delete only current or all assets.

Note also that you now find any **deleted comments to deviations** in the **Deviation log**.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/delete_comment.png" alt="Delete comment" width="40%"/>

## Version 1.2 - March 11, 2021

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/advisor_selection.png" alt="Advisor selection" width="20%"/>

**Add advisors to systems, subsystems**, and to **all or selected wells** in the **Advisors** view in BestDay to **fast-track** root cause analysis.

You'll also notice a few other improvements, the **References** option for charts is only visible when references are available, and the **Export** button is always displayed as active.

## Version 1.1 - March 5, 2021

**Export all data displayed and produced in BestDay** with the **Export** button into a neatly sorted spreadsheet. Set the date range (recommended max. 1 year) and select the data you want to export, such as production data, deferments, deviations, and BestDay predictions. The exported .cvs files are sorted by date and show **each data point with all decimals** per product. The **standard layout** conforms to other tools' typical input format and makes it easy to analyze further the data in other tools, such as MS Excel and PowerBI.

<!-- ![Export](/images/bestday/export.png) -->
<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/export.png" alt="Export" width="100%"/>

## Version 1.0 - February 19, 2021

The BestDay team keeps focusing on making it easy for you to **find and see** the data you need in your daily operations.

**Find and explore** wells, subsystems, or systems from anywhere in BestDay with the new **Search** field in the **System selector**. You can use both letters and numbers in the search, and the results are filtered according to asset.

<!-- ![Search](/images/bestday/search.png) -->
<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/search.png" alt="Search" width="100%"/>

We have improved the **data visualization**. The data points for trends representing averages over a time period have precise **forward step presentation**, and the **revamped Deferments** panel gives a **clear overview** of actual and scheduled deferments.

Want to read more about the recent BestDay updates or learn more? Click the Help icon located in the top right corner to directly access the **BestDay Changelog**, **Cognite Docs**, **Cognite Learn**, and **Cognite Support**.

## Version 0.12 - February 10, 2021

**Welcome to the BestDay changelog!**

This version of BestDay is all about **keeping you orientated** as you navigate around the BestDay application. The new path located above the Well Deepdive page **keeps track of your location**, and you can quickly go back to previous steps. You can also easily **switch between assets** with the expanding subsystem list on the application's left side.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/bestday_orientation.png" alt="BestDay Orientation" width="100%"/>

You'll also find a more aligned use of **decimal numbers** across BestDay. **2 decimal digits** are used as standard but if you need even more accuracy, hover over a field where the tooltip displays **4 decimal digits**.

The BestDay team has also fixed some bugs, such as **flawless reloading of charts** when you toggle on and off a trend.
