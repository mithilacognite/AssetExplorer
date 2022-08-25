---
pagination_next: null
pagination_prev: null
---

# Local testing with AIR SDK

:::info note
Make sure that:

- `cognite-air-sdk` is version 3.0.0 or higher and
- `cognite-air-workflow` is version 2.0.16 or higher
:::
<p></p>
To test code locally, the arguments in the `data` dictionary need to match what is written in the config.yaml.

Let's assume the following config.yaml is given:

```yaml
fields:
  ts_ext_id:
    name: 'Time series'
    description: 'A time series that is going to be monitored'
    type: 'TimeSeries'
  threshold:
    name: 'Lower Threshold'
    description: 'When the selected time series crosses down on this threshold an alert will be created.'
    type: 'float'
  min_minutes:
    name: 'Minimum Length in Minutes'
    description: 'Please define how long the threshold needs to crossed before it is registered as an alert. (Note: a smaller amount might lead to more notifications but you can edit this value later on.)'
    type: 'float'
```

Then, the following call to the function is needed to run a local test:

```python
handle(
    data={
        "ts_ext_id": "time_series_ext_id",
        "threshold": "5",
        "min_minutes": "20",
    },
    client=client,
    secrets={}
)
```

It is important to note that all fields from the config.yaml need to be specified in the dictionary of the `data` argument. Otherwise the function will fail.

For testing backfilling locally, make sure backfilling is enabled in the config.yaml next to passing in the following additional key value pair in the `data` dictionary:

```python
handle(
    data={
        "ts_ext_id": "time_series_ext_id",
        "threshold": "5",
        "min_minutes": "20",
        "backfilling": "True",
    },
    client=client,
    secrets={}
)
```
