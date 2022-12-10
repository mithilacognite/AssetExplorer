---
pagination_next: null
pagination_prev: null
---
 

# Detect deviations
######################                          


Detect production deviations for your overall production throughput - your total hydrocarbon production - on a daily basis, analyze and investigate the data using multiple panels in a **deep dive for a well**, then classify and group deviations as you see best fit to transition into BestDay deferments. Use the insights you get from the data generated around production deviations to reduce the duration and impact of deviations and to analyze performance patterns over time. When you have handled the deviations, you can export and ingest the BestDay deferments back into your source system.

A deviation is regarded as the difference between the BestDay capacity estimation and the sum of actual production and actual deferments.
######################

## Create deviation groups

When you are ready to handle the deviations, you classify and group deviations for further investigation or ignore deviations that you disagree with.
Deviation grouping is used to group daily identified production deviations, classify and document deviation events, and transition these into BestDay deferments. Drill down to the well you want to focus on. Then create deviations groups from the **Production** chart by selecting and clicking one or more days in the **Production** bar chart or selecting **Create group** in the **Deviations** side panel.

<!-- <img className="screenshot" src="/images//bestday/deviation_groups.png" alt="Deviation groups" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/deviation_groups.png" width="100%" alt="Deviation Groups"/>

The deviations are now automatically transitioned from **Detected** to **Investigation** mode. In the dialog that opens, you select to **Investigate** or **Ignore** deviations, and this opens the **Create group** window.

1.  In the **Create group** window, the deviations are automatically classified with the **Investigation** status, but you can select a different classification under **Actions**.

    <!-- <img className="screenshot" src="/images//bestday/create_group.png" alt="Create groups" width="100%"/> -->

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/create_group.png" width="100%" alt="Deviation Groups"/>

1.  Turn on **Ongoing events** to automatically add new days to this group. BestDay keeps adding days until you turn off this switch or production is overperforming. Note that this option is only available when the last day with a deviation is included in the time period. This means you can't use this for historical deviations.

1.  Insert a value in **Use equal percentage for all days** to modify the volumes by percentage or clear this field to manually tweak the values in percentage or absolute numbers for each day. Use this if not all of the volume applies as a deviation, or to split the numbers on different groups.

    :::info Note

    BestDay keeps adding the exact percent of daily detected deviation volume for each new day in an ongoing event. For example, suppose you select 70% of the volume of the last day when you create your ongoing event. In that case, only 70% of the new days' deviation volumes are automatically added to this ongoing deferment.

    :::

1.  Select **Create group**.

1.  On the **Classification** tab, you classify the deviation with the same rules that are used in your source system for deferment classification. The deviation card is set to 100% when the required fields are filled in.

1.  The **Activity and Comments** tab logs all comments you have entered and all actions you've made on a deviation.

1.  Select **Save** to keep your values but continue to work on this card later or, if you have filled out all mandatory fields, select **Create deferment** to transition the deviation to a BestDay deferment. Notice that the status now updates to **Explained**.

## Ignore deviations

If you disagree with the BestDay calculation, you can ignore the deviation volume parts that you think are wrong by creating a group and setting the group's status to **Ignore**.

1. In the **Create group** window, select **Ignore** under **Actions**, and add a reason and a comment for ignoring the deviation.

1. Turn on **Ongoing events** to automatically add new days to this group. BestDay keeps adding days until you turn off this switch or production is overperforming. Note that this option is only available when the last day with a deviation is included in the time period. This means you can not use this for historical deviations.

1. Select **Create group** to create a card on the **Deviations** side panel with the deviations listed as **Ignored**.

## Export deferments to CSV

Click the **Export** button in the top right corner to add source deferments and BestDay deferments to a CSV file you can ingest into your source system for further handling and reporting.

## Actions on the Deviations side panel

The **Deviations** side panel shows the list of detected deviations for the selected system level. Click a deviation to find the key information about all deviations in any state. On the front page of a card, you'll see the amount of volume attributed to a group and the current status for the deviation. Use the filters to find the deviations you want to work with, then click a card to see more details.

- On the **Allocation** tab, you'll see how the volume of this deviation is distributed to different groups,

- On the **Initial data** tab, you'll see the initial volumes for a specific day prior to any user modifications. The initial data is the input used in the BestDay calculations.

- The **Activity and Comments** tab unifies the comments entered for the deviation group and a log with all changes made to the deviation group.

All deviation comments and status updates are maintained, stored, and made available through the Cognite Data Fusion APIs and the **Export** option in the application.

## View detected deviations across BestDay views

Detected deviations are displayed across all the views in BestDay for different system levels. Use this as a starting point for troubleshooting deviations through access to real-time sensor data, scheduled deferments, contextualized links to custom advisors, and access to [Cognite Charts](../../cdf/charts/index.md).

### KPI dashboard

The [KPI dashboard](./views.md) shows the number of deviations and the overall average or total volume in a set period. On the **Breakdown per product** panel, you'll see the deviations for total hydrocarbon and the number of deviations listed for each hydrocarbon product under the **Deviations** column. The graph on the **Production** panel shows the deviation volume per day as a grey shaded area between the production bars and the BestDay capacity line. On the **BestDay deviation volume and classification** panel, the blue line shows daily or monthly deviation volumes for each well in a system, subsystem, or collection, i.e., the total underperformance for a system level. The green line shows the percentage of deviations that have been classified as deferments. Investigate the discrepancy between these lines to optimize deviation interactions. You can also see the daily or monthly percentage split per deviation status and the volume this represents on the **Deviations per status** panel.

<!-- <img className="screenshot" src="/images/bestday/detect_deviations_kpi.png" alt="Detec deviations on KPI dashboard" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/detect_deviations_kpi.png" width="100%" alt="Detec Deviations on KPI Dashboard"/>

<p></p>

### Deep dive

On the [Deep dive](./views#deep_dive_view) page, you can open the [Deviations side panel](#actions-on-the-deviations-side-panel), which lists all the detected deviations for the current system, subsystem, or well you are looking into.

<!-- <img className="screenshot" src="/images/bestday/deep_dive.png" alt="Production panel" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/deep_dive.png" width="100%" alt="Deep Dive"/>

### Well summary

On the [Well summary](./views#Well_summary_view) page, you can view and sort wells according to production deviation in the **Production deviation** column. Click the column header to filter the deviations you want to see.

<!-- <img className="screenshot" src="/images/bestday/detect_deviations_well_summary.png" alt="Detect deviations on Well summary page" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/detect_deviations_well_summary.png" width="100%" alt="Well Summary"/>
