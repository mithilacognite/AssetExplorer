---
pagination_next: null
pagination_prev: null
---

# About data quality monitoring

When you rely on data to make operational decisions, it is critical that you know when the data is reliable, and that end-users know when they can rely on the data to make decisions.

## Monitoring concepts

### Monitor

A **data quality monitor** monitors a collection of time series, typically related to a particular use case.

For each monitor, you can specify a name and a description. You can also choose who else should have permission to edit the monitor. All other users have access to view the monitor.

:::info Note
Each monitor can contain a maximum of 500 time series.
:::

### Rule sets

Rule sets let you group time series within each monitor with similar data quality requirements. You can specify quality requirements for a group of time series at once using rule sets.

:::info Note
Each rule set a maximum of 150 time series.
:::

### Time window

The **time window** specifies how far back the data quality monitor should check that the selected time series meet the data quality requirements.

:::info Note
The time window has to be between 1 minute and 48 hours. We recommend that you specify a time window between 1 minute and 30 minutes.
The rules **Max distance between datapoints** and **Min standard deviation** are only supported for time windows shorter than 3 hours.
:::

### Evaluation interval

The **evaluation interval** is how often rules are evaluated in a rule set for time series . The evaluation interval is set to once per minute.

### Data quality rules

You can specify the following rules for time series in a rule set:

- **Max age of the last data point** - checks that the latency is acceptable for each of the time series in the rule set.
- **Max distance between data points** - monitors the gap between any two data points in each of the time series in the rule set.
- **Min number of data points** - checks that the number of data points in the defined time window is high enough for each time series in the rule set.
- **Max value** - checks that the data points are below a max value for each of the time series in the rule set.
- **Min value** - checks that the data points are above a minimum value for each of the time series in the rule set.
- **Min standard deviation** - checks that the standard deviation of the data points is above a minimum value for each of the time series in the rule set.

## Output from quality monitoring

The data quality monitor outputs events and time series to CDF.

These output events and time series let you [report the data quality status in other apps and dashboards](../../guides/data_quality_monitoring/report_quality_status.md). They are also the basis for [alerts](#alerts) via email or webhooks.

### Events

**If the data quality does not meet the requirements, the data quality monitor writes an event to Cognite Data Fusion (CDF)**.

The event is of the type `Data Quality Monitoring Alert` and includes a sub-type corresponding to the type of rule that was broken:

- `min_count`
- `max_age_of_last_data_point`
- `max_value`
- `min_value`
- `max_distance_between_points`
- `min_standard_deviation`

The metadata fields contain information about which monitor and rule set the event belongs to and which time series broke the rule. The monitor creates one event per time series and rule to help you check when and how each time series broke the data quality requirements.

**As the quality incident progresses, the event will be updated**. The worst measurement for the whole incident is stored in the metadata.
If the time series data is unavailable, the `errorMessage` field is updated accordingly.

**When the data quality is restored and meets the requirements, the event is updated with an end time, and the isOpen metadata field is set to false**.

The Event metadata looks like this:

```json
"metadata": {
    "isOpen": "true_or_false", // boolean
    "monitorId": "some_id", // number
    "ruleSetId": "some_id", // number
    "monitorName": "some_name", // string
    "ruleSetName": "some_name", // string
    "dimension": "rule_dimension_broken", // string
    "timeSeriesId": "some_id", // number
    "timeSeriesExternalId": "some_external_id", // string
    "threshold": "some_number", // number
    "worstMeasure": "some_number", // number
    "errorMessage": "some_error", // string
    "metadataVersion": "some_number", // number
  }
```

You can also learn about events in CDF in general [here](../../../../dev/concepts/resource_types/events.md).

### Time series

For every data quality rule, we generate a few output time series with metrics.

**The three data quality metric time series are:**

- **Broken time series count**: Count of broken time series for the rule. A high value means that many time series in the rule set are breaking the specified rule. Includes time series with abnormal errors, for instance, if there are zero data points in the time series or if the time series has been deleted.
- **Worst measurement**: This is the worst measurement within the evaluation window across all time series in the rule set.
- **Data quality score base on ratio of broken time series**: A score between 0 and 1 that estimates the current data quality for the rule. The calculation is `(1 - num_timeseries_broken / num_timeseries_in_ruleset)`. A high value means higher data quality, as fewer time series are breaking their data quality requirements.

A data point is added to each of these time series every time a rule is evaluated.

## Alerts

You can set up alerts via email or a webhook URL when data quality is broken.

The alerts are sent whenever a data quality rule is broken, and when it is restored:

- The monitor sends an alert when one or more time series in a rule set breaks a rule. You will not receive new alerts for the rule until the quality has been restored for **all** time series in the rule set.
- When the quality has been restored for all time series (no time series in the rule set break the rule), you will get a resolution alert.

Learn more about [output events](#events) above.

### Email

You can specify up to 5 email addresses to send alerts to.

### Webhook

You can use a webhook to send notifications through other channels. A webhook lets an app provide other applications with real-time information. For example, you can use a tool like Opsgenie to receive the notification and pass it on to the relevant recipients through email, Slack, or other mediums.
