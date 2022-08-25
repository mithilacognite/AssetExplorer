---
pagination_next: null
pagination_prev: null
---

# Schedule

The Schedule page visualizes work orders and connected operations in an interactive gantt chart, allowing you to adjust the schedule based on constraints such as capacity and POB limits.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/schedulelists.png" alt="Schedule " width="80%"/>

## Before you start

To use schedule, you must first create a list in the **Scope** view.
You can create several lists, so you can switch between the different scopes in the **Schedule** view.

## Optimizing the schedule

In the **Schedule** view, you can explore the work orders in your scope. Click on the work order to see their **Operations**. This also zooms your view to that work order's timeline.

Note! If operations have different phases, the operations have different colors:

- **Light blue**: prep hase
- **Dark blue**: execution phase
- **Green**: post phase

You may adjust the timing of the work orders and its operations:

- Click and drag the different bars to your preferred timing.
- Click and drag the cursor to adjust the start and end time.
- Click the settings wheel to adjust the number of hours in a workday.

When the schedule is done, you can download it as a **Gantt chart**.

### Personnel onboard limit (POB)

Click the date to set a phase duration and POB limit. A red warning appears when you reach your POB limit for a day.

## Trade matrix

The trade matrix shows the schedule for different trades such as mechanics, welders, scaffolding etc in a matrix scheme.

- In **Scheduling** view, click the blue tab to see the trade matrix.
  If you have two scopes visualized, the matrix addresses the first schedule (listed at the top of the screen).
- The matrix shows the disciplines for your current scope and total/available man-hours.
- You can edit the number of hours. The boxes will then be marked with a dot in different colors.
- When hovering over the different boxes, you will be prompted with the possibility to edit the maximum number of hours:

**Green**: available capacity
**Yellow**: exceeding ideal capacity
**Red**: capacity exceeded given current scope

- You can download the trade matrix as an excel file.

## Change configuration

The configuration button is located in the bottom right corner. You can change the work day hours and the daily capacity for a resource.

## Comments

You and other users can comment on the operations to improve collaboration:
In **Schedule**, click the operations bar and add your comments in the panel.
You can also see the history of other users' comments:

- A text icon after the title of the work order
- A small circle after the specific operation indicates comments. Click on the text icon to access the comments.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/maintain/comment.png" alt="Comment " width="80%"/>

To add a comment, click the work order or the operation and click the **Comments** tab. Comments entered by other users will also be visible here.
