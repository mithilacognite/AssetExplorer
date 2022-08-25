---
pagination_next: null
pagination_prev: null
---

# Analyze your data

With Asset Data Insight you can create boards for any piece of equipment, system, or platform. Boards give you real-time understanding of operations for a piece of equipment.

## Create charts

You can quickly create and save a chart for any asset.

- Immediately access the most relevant time series for an asset.
- Add **any** time series to the chart, as long as the time series is in Cognite Data Fusion.
- Group y-axes by units, or collapse the y-axes entirely.

<img className="screenshot " src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/20191219_charts.gif" alt=" " width="80%"/>

### Change date range

Select a chart and click **Calendar** to set a date range.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/Insight-Calendar.gif" alt=" " width="40%"/>
<p></p>

### Change the y-axis

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/Y-axis-values.gif" alt=" " width="20%"/>

You can set minimum and maximum values for the y-axis.

1. Select a time series and click **Edit tag**.
2. Activate **Fixed Axis** and enter new values in the **Min** and **Max** fields.
3. Click **Done**.

### Share a chart

Make your chart visible to others by setting **Permission** to **Public** in the Chart details.

### Download a chart

1. Select a chart and click **Download**.
2. Set the date range and granularity in the **Export chart data** window.
3. Select **Format timestamp** to use the U.S date format. Clear to use Epock time format.
4. Click the **delimiter** you want to use to separate data fields.
5. Download the chart as a file in CSV format or as an image in SVG format.

See also [Convert Epoch to GMT time in MS Excel](https://www.epochconverter.com/batch)

### Save a chart

You must enter a name for the chart before you can save a chart.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/2020-06-11_Save-chart.gif" alt=" " width="60%"/>

## Create scatter plots

You can quickly create and save a scatter plot for any asset.

- Immediately access the most relevant time series for an asset.
- Add **any** time series to the scatter plot, as long as the time series is in Cognite Data Fusion.
- Add multiple groups of time series to the scatter plot.
- Add **custom data** by inputting plot pairs or uploading CSV files.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/20200130_scatterplots.gif" alt=" " width="80%"/>

<!-- ## Create infographics

Combine visual representations with live data and use infographics to tell the story behind the data.

- Edit the background image
- Add tags on top of the image
- Shrink or expand sensor tags
- Edit the color of each tag

![New infographics](../resources/21022020_newInfographics.gif) -->

## Embed external dashboards from Power BI or Grafana

Power BI and Grafana are dashboarding tools which support advanced custom dashboards. Through embedding you get access to these dashboards in the same place where you investigate the equipment history, documents, etc.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/20190702_external_grafana.gif" alt=" " width="80%"/>

## Share boards with your colleagues

Often, you make boards that are useful for your colleagues to see as well when they investigate. Sharing of boards lets your entire team benefit from the boards. You can collaborate better because you see the same data.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/20191002_shareBoards.gif" alt=" " width="80%"/>
