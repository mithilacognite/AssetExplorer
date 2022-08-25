---
pagination_next: null
pagination_prev: null
---

# Report quality status in apps and dashboards

You can report quality status using either output time series or output events.

## Use output time series from the data quality monitor

For every data quality rule, CDF generates a few output time series with metrics.
Learn more about output time series in [About data quality monitoring](../../concepts/data_quality_monitoring/index.md#time-series).

You can use these output time series to display the current data quality to the end-user of a dashboard. E.g., a dashboard can display that the data quality is currently only 67%, so the end-user should not make operational decisions based on the data.

For example, the request below retrieves the time series for _number of broken time series_ for a specific rule within a rule set. For instance, leaving just `monitorId` will give you all quality metric time series for that monitor.

**URL:** [https://api.cognitedata.com/api/v1/projects/{project}/timeseries/list](https://api.cognitedata.com/api/v1/)

**Body:**

```json
{
  "filter": {
    "metadata": {
      "monitorId": 322,
      "ruleSetId": 123,
      "dimension": "max_value",
      "type": "broken_time_series_count"
    }
  }
}
```

## Use output events from the data quality monitor

To get the latest data quality status for a particular monitor, you can query events from CDF and filter on the type of events. **Learn more** about output from the data quality monitoring service in [About data quality monitoring](../../concepts/data_quality_monitoring/index.md#events).

When you query for events:

- `monitorId` corresponds to the ID of the monitor
- `ruleSetId` corresponds to the ID of the rule set

For example, the request below returns all currently broken rules for a monitor with ID `322`. You can see the IDs for a monitor and its rule sets by opening the monitor in CDF.

**URL:** [https://api.cognitedata.com/api/v1/projects/{project}/events/list](https://api.cognitedata.com/api/v1/)

**Body:**

```json
{
  "filter": {
    "type": "Data Quality Monitoring Alert",
    "metadata": {
      "monitorId": 322,
      "isOpen": "true"
    }
  }
}
```

**Response** example:

```json
{
  "dataSetId": 363967643601530,
  "startTime": 1586873143968,
  "type": "Data Quality Monitoring Alert",
  "subtype": "max_age_of_last_data_point",
  "description": "",
  "metadata": {
    "isOpen": "true",
    "dimension": "max_age_of_last_data_point",
    "monitorId": "322",
    "ruleSetId": "200",
    "monitorName": "My use case",
    "ruleSetName": "Equipment type 1",
    "timeSeriesId": "123123123",
    "timeSeriesExternalId": "TIMESERIES_ONE",
    "errorMessage": "",
    "threshold": "60000",
    "worstMeasure": "89023",
    "metadataVersion": "2"
  },
  "source": "Data Quality Monitoring in the Cognite Console",
  "id": 4477201650096356,
  "lastUpdatedTime": 1586873272760,
  "createdTime": 1586873146005
}
```

When the data quality is restored and meets the requirements, the event is updated with an end time, and the `isOpen` metadata field is set to `false`.

The response also includes the `ruleSetId`, `ruleSetName`, `timeSeriesId`, and `timeSeriesExternalId` so you can easily see which time series has broken the rules.
