---
pagination_next: null
pagination_prev: null
---

# Create a data quality monitor

Follow the steps below for continuously monitoring the data quality of time series. 

## Step 1. Create a monitor

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).

1. Select **Managed and configure** > **Configure time series quality monitoring**.

1. Select **+ Create**.

1. Enter a **name** and a **description** to indicate what the monitor will be used for or the data the monitor includes.

1. Enter up to 5 email addresses for users that can edit the monitor.

1. Select **Create** to create the monitor.
 
## Step 2: Create rule sets

Group time series with similar data quality requirements into **rule sets**, and add as many rule sets as you need. 

1. On the **Time series** tab, select **+ Add new rule set** to create a rule set and start adding data to your monitor.

1. **Search**, **filter**, and **select** the time series you want to add to your rule set.

1. Select **Add to monitor**.

1. Select **Add more** to add or remove time series, or **Go to monitor** to view the data in your monitor.

:::info Note

Each monitor can contain a maximum of 500 time series, and each rule set a maximum of 150 time series.

:::

## Step 3. Add data quality monitoring to rule sets

Add data quality monitoring to a rule set to specify the data quality requirements for a group of time series.

1. On the **Rules** tab, select **Add rules** to specify the quality requirements for the time series in the rule set.

1. Define the **time window** that matches the requirements of your data science model or application. The time window specifies how far back the data quality monitor should check that the selected time series meet the data quality requirements.

    :::info Note
    The time window has to be between 1 minute and 3 hours. We recommend that you specify a time window between 1 minute and 30 minutes.
    :::

1.  Select the **data quality rules**.

    Different models and apps have different data quality requirements and will need to be monitored for different aspects of data quality. Select which data quality rules to apply to the time series in each rule set:

    - **Max age of the last data point** - checks that the latency is acceptable for each of the time series in the rule set.
    - **Max distance between data points** - monitors the gap between any two data points in each of the time series in the rule set.
    - **Min number of data points** - checks that the number of data points in the defined time window is high enough for each of the time series in the rule set.
    - **Max value** - checks that the data points are below a max value for each of the time series in the rule set.
    - **Min value** - checks that the data points are above a minimum value for each of the time series in the rule set.

1.  Set up **notifications**.

    Specify the email addresses or a webhook URL to notify if the data quality fails to meet the requirements and when data quality returns to normal.

    A webhook lets an app provide other applications with real-time information. You can use a tool like Opsgenie to receive the notification and pass it on to the relevant recipients through email or other mediums.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/data_governance/add_notifications.png" alt="Add notifications " width="60%"/>

1.  Select **Apply**.
