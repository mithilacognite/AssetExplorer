---
pagination_next: null
pagination_prev: null
---

# Explore mode

Use the **Explore** mode to navigate a 3D digital representation of an asset (CAD models, point cloud data, 360 images) and access detailed information about equipment, including real-time sensors. This mode is available in all twins by default.

## Navigate the twin

You can move around in the twin using the keyboard or a mouse. The first time you open a twin, you'll see a navigation help screen. To display the navigation help, select the **?** icon in the top bar.

#### Keyboard

| Press this key     | To move |
| ------------------ | ------- |
| W (or up arrow)    | Forward |
| S (or down arrow)  | Back    |
| A (or left arrow)  | Left    |
| D (or right arrow) | Right   |
| Q                  | Down    |
| E                  | Up      |

:::info TIP
You can press two keys simultaneously to move efficiently. For example, press W and E to move forward and up.
:::

#### Mouse

To **rotate** the view, press and hold a mouse button and move the mouse. To **zoom**, use the mouse wheel. You can also use the mouse and the buttons in the top right corner to navigate.

To set the **speed** of movement, use the movement speed slider.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_speed.png" width="60%" alt="Menu Speed"/>

<!-- <img className="" src="/images/remote/menu_speed.png" alt=" " width="60%"/> -->

## Select which layers to display

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_layers.png" width="20%" alt="Menu Layers"/>

<!-- <img className="media-right" src="/images/remote/menu_layers.png" alt=" " width="20%"/> -->

A twin can consist of many components, including several 3D CAD models and point clouds. To select which components to display, use the **Layers** menu.

You can, for example, hide a CAD model to get easier access to interior details.

## View equipment details

In contextualized 3D models, you can select a piece of equipment in the 3D view to view details about the equipment in the right-hand pane.

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/details_view.png" width="20%" alt="View Details"/>

<!-- <img className="screenshot media-right" src="/images/remote/details_view.png" alt=" " width="20%"/> -->

- The **Details** tab shows the main properties of the equipment.

- The **Documents** tab typically contains a list of layout drawings and engineering diagrams.

  You can select PDF drawings to open them full-screen in Cognite Remote. Other document types open in an external browser window, where you can download them and then open them from your computer.

- Use the **Media** tab to view images related to the equipment. The images may have been uploaded and linked to the equipment via automatic tag detection in CDF, or operators have captured the images with mobile devices and the [Cognite InField application](../../infield/). Images can also be collected using robots or drones.

- The **Time series** tab typically shows sensor data originating from historian databases. CDF is often set up to collect sensor data continuously, with only a few seconds delay from the live data. You will see the sensor tag and name, the sensor value and unit of measurement, as well as the time and date for the latest reading. Select or remove the checkbox next to a time series to add or remove it from an [interactive chart](#view-time-series-in-interactive-chart).

## View time series in an interactive chart

Select or remove the checkbox next to a time series to add or remove it from an interactive chart. Use the mouse to resize the chart window or select the expand button to view it in full-screen mode.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/time_series_charts.png" width="80%" alt="Time Series Charts"/>

<!-- <img className="screenshot" src="/images/remote/time_series_charts.png" alt=" " width="80%"/> -->

Use the top right buttons (H = hour, D = day, W = week, M = month, Y = year, and ALL = entire history) to set the current **time range** of the chart, or use the calendar to set the start and end times. You can also use the time range control below the chart to drag the start and end positions.

As you add new time series to the chart, they appear in the table below the chart where you can see additional information, for example, **the unit of measurement** and high-level information about the time series.

- Use the eye icon to **turn on and off** the display of a time series in the chart, .
- Select the checkmarks next to **Avg** and **Min/Max** to display dotted lines at the average and min/max limits for the time series, .
- CTRL + click a position on a time series to **add temporary labels** with the exact time series values, for example to compare the time series values.

- To adjust the time series position vertically, **drag** its axis up or down. **Scroll** to scale the time series. The mouse position determines the center of the scaling.

- To reset the chart, select the ellipsis (**...**) and **Reset chart**.

## Search for equipment

<!-- <img className="screenshot media-right" src="/images/remote/empty_search.png" alt=" " width="20%"/> -->

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/empty_search.png" width="20%" alt="Empty Search"/>


To search for equipment, open the **Search** pane from the top right corner. As you start typing, the result list displays the matching results.

Select the equipment in the search results to zoom to and highlight to it the 3D view.

## Visualize 360 images and markups

<!-- <img className="media-right" src="/images/remote/menu_visualization.png" alt=" " width="20%"/> -->

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_visualization.png" width="20%" alt="Menu Visualization"/>



To display additional data on top of the CAD and point cloud models, use the **Visualization** menu. Currently, we support [360 images](#visualize-360-images) and [markups](#visualize-markups).

#### Visualize 360 images

To enter 360 mode, select one of the 360 markers. From one 360 image, you can quickly move to other scanning positions by selecting 360 markers. You can also use the keyboard to navigate:

- Press A or D to rotate the camera left or right.
- Press W to move forward to a nearby 360 image in the camera view direction.

Each 360 image position can have multiple images. Open the **Photos** tab at the bottom of the window to display a gallery of images associated with the position, and select an image to open it in full-screen mode. The images can, for example, contain detections based on computer vision algorithms.

You can also capture multiple 360 images at the same location to reflect changes over time. For instance, you can let a robot follow a fixed daily route and have the robot capture a 360 image at predefined waypoints. When viewing one of these 360-degree images, you can use the History tab to see previous 360 images taken at the location.

#### Visualize markups

<!-- <img className="media-right" src="/images/remote/menu_visualization.png" alt=" " width="20%"/> -->

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_visualization.png" width="20%" alt="Menu Visualization"/>


You can create markups in [Plan mode](plan.md) to highlight important information related to inspections or other planned activities. In Explore mode, you can use the Visualization menu to turn on the display of markups.

Each markup type has a customer-defined icon, and you can select a markup to display more details. Markups can also include references to images or documents that you can open in full-screen mode.

## Measure length/distance and areas

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_measure.png" width="20%" alt="Menu Measure"/>

<!-- <img className="media-right" src="/images/remote/menu_measure.png" alt=" " width="20%"/> -->

To measure length/distance and areas, use the **Measure** tool.

Click the 3D view to establish measuring points and view the resulting length or area. The **Area** tool is restricted to horizontal measurements, while you can use the **Length** tool in any direction. To measure an aggregated distance, use the length tool and click multiple times.

As you measure, the measurements are added to a list within the tool. You can select previous measurements to highlight them in the 3D view. To improve the precision of the measurements, you can edit the existing points. You can use the measuring tools on top of both CAD and point cloud data.

## Slice to show/hide geometry

<!-- <img className="media-right" src="/images/remote/menu_slice.png" alt=" " width="20%"/> -->

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_slice.png" width="20%" alt="Menu Slicee"/>

Use the **Slice** tool to show/hide geometry, for example, to reveal hidden areas, such as lower-level decks and floors.

Drag the slice level downwards to hide geometry.

## Set a current time for the twin

<!-- <img className="media-right" src="/images/remote/menu_timeline.png" alt=" " width="20%"/> -->

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_timeline.png" width="20%" alt="Menu Timeline"/>


Use the **Timeline** to set a current time for the twin. This impacts the display of time-based data, such as sensor values.

The timeline also impacts objects that change position over time, such as moving ROVs or vehicles.

## Modify point cloud settings

<!-- <img className="media-right" src="/images/remote/menu_settings.png" alt=" " width="20%"/> -->

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/menu_settings.png" width="20%" alt="Menu Settings"/>


Use the **Settings** menu to modify the visualization of point cloud data. You can increase or decrease the point budget. A higher budget improves the visual quality but also requires a high-performance computer. Experiment with the point scale to find your preferred clarity.

On the Settings menu, you can also modify the **current time zone** for the twin.
