---
pagination_next: null
pagination_prev: null
---

# BestDay views

The BestDay application consists of three views where you can view and work with production performances indicators on different detail levels. When you open BestDay, you are directed to the **KPI dashboard**, where you'll find key performance indicators across system levels, as well as aggregated production, deferment, and deviation data. In the **Well summary** view, you can search, analyze, and prioritize between wells to further explore through the **Deep dive** view, where you will be able to analyze the individual systems or wells more in-depth, and resolve identified production deviations.

## KPI dashboard

This view dispays cards with **key performance indicators** and different panels where you can investigate the details.

These are the KPI cards:

- **Gross production** shows the production of all liquids, including water and impurities.

- **Hydrocarbon** shows the sum of all hydrocarbon production.

- **Deferments** show deferment volume per day.

- **Deviations** show deviation volume per day and number of deviations. You can choose between seeing total sums or the daily averages for a set time range.

:::info Information

The BestDay KPI values are updated once per day (at night). If you create a Best Day deferment, you will not see the impact on the KPI until the next day.

:::

**KPI panels**

**Breakdown by product** - shows values for actual production, the BestDay capacity estimation and other capacity references, deferments, and deviations. You'll see the number of deviations listed for each hydrocarbon product under the **Deviations** column. Showing all products is the default setting, but you can select products with the checkboxes at the top of the panel.

<!-- <img className="screenshot" src="/images//bestday/breakdown_per_product.png" alt="Breakdown per product" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/breakdown_per_product.png" width="100%" alt="Breakdown Per Product"/>

**Production bar chart** - visualizes actual production. You can compare the production capacity to the BestDay data-driven capacity and other capacity references, such as IPSC. You can also select to see the **deviations** between the actual and estimated production. This is illustrated with a grey shaded area on the chart. Hover over the chart to see daily details.

<!-- <img className="screenshot" src="/images//bestday/production_chart.png" alt="Production panel" width="100%"/> -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/production_chart.png" width="100%" alt="Production Panel"/>

**Production efficiency** per product - the efficiency calculation is (Actual production/Capacity)x100%. By default, the BestDay data-driven capacity is used. You can change this with the dropdown list per product located at the top of the panel.

**BestDay deviation volume and classification** - the blue line shows daily or monthly deviation volumes for each well in a system, subsystem, or collection, i.e., the total underperformance for a system level. The green line shows the percentage of deviations that have been classified as deferments. Investigate the discrepancy between these lines to optimize deviation interactions.

**Deviations per status** - see the daily or monthly percentage split per deviation status and the volume this represents.

**Mean time to recover** - the mean duration from start to end date for source and BestDay deferments to help you understand the size of events in a system and how long they affect production to identify challenges and speed up recovery time.

**Active deferments** - shows the number of deferment events from the source system and created from BestDay based on deviations from the BestDay calculations.

**Mean reaction time** - shows the time span from the moment a deviation is detected until it is reacted upon to help you be proactive on major events. The graph does not show events that you are not interacting with.

## Well summary view

**Prioritize** between wells on the **Well summary** page with an **aggregated view** of the **entire field/branch/country, per system and subsystem**. Then filter the **Production efficiency** column to find the area with the highest optimization potential. You can use options under the **Production deviations** column for further filtering; for instance, only show ongoing detected deviations with a volume above 10%.

<!-- <img className="media-center" src="/images//bestday/well_summary_1.6.png" alt="Well summary" width="100%"/> -->

<img className="media-center" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/well_summary_1.6.png" width="100%" alt="Well Summary"/>

## Deep dive view

Use the **Deep dive** page to **analyze individual systems or wells**, and **resolve identified production deviations**. When you want to dive into the nitty-gritty details, use the link to [Cognite Charts](../../cdf/charts/index.md), where you can further explore, trend, troubleshoot, and perform root cause analysis of data and deviations and share the findings with your co-workers.

## General settings

### Search and filter

Find and explore wells, subsystems, or systems from anywhere with the **Search** field in the **System selector** pane located to the left in a BestDay view. You can use both letters and numbers in the search, and the results are filtered according to asset.

### Collect favorite wells

Group your favorite wells into a **Collection** for easy access.

<!-- <img className="screenshot media-right" src="/images//bestday/add_collection.png" alt="Add collection" width="27%"/> -->

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/add_collection.png" width="27%" alt="Add Collection"/>

1. Click **Collections** in the System selector to open the **Add new collection** window.

1. Give a unique and descriptive name of the collection.

1. Add the wells you want to have as favorites.

1. Click **Create new collection**.

You can also add wells to an existing collection from the Well Summary page by clicking the **Watch** icon on each row.

### Set preferred units

Set your **preferred measurement and time units** for all hydrocarbon liquid and hydrocarbon gas values throughout BestDay on the **Profile** page. BestDay uses two decimal digits as standard but if you need even more accuracy, hover over a field where the tooltip displays four decimal digits.

### Export data

Sort all data displayed and produced in BestDay with the **Export** button available from all views into a sorted spreadsheet. Set the date range (recommended max. 1 year) and select the data you want to export, such as production data, deferments, deviations, and BestDay predictions. The exported .cvs files are sorted by date and show each data point with all decimals per product. The standard layout conforms to other tools' typical input format and makes it easy to analyze further the data in other tools, such as MS Excel and PowerBI.

<!-- <img className="media-centre" src="/images//bestday/general_settings.png" alt="General settings" width="100%"/> -->

<img className="media-center" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/general_settings.png" width="100%" alt="General Settings"/>
