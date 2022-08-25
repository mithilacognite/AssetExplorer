---
pagination_next: null
pagination_prev: null
---

# Configuration file

Every model needs to have a `config.yaml`. This file is the truth when it comes to every model. Different fields have different specifications.

## `schedule`

| yaml Field       | Example Value  | Meaning                    | is required      |
| ---------------- | -------------- | -------------------------- | ---------------- |
| `runEveryMinute` | 1              | Model runs every minute    | One of the three |
| `runEveryHour`   | 1              | Model runs every hour      | One of the three |
| `cronExpression` | 0 0/1 \* \* \* | Model runs every full hour | One of the three |

## `modelDescription`

| yaml Field        | Example Value                       | Meaning                                                                 | is required |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------- | ----------- |
| `frontEndName`    | "Dirt Detector"                     | The name end-users will see in the front end                            | Yes         |
| `description`     | "Detects dirt"                      | A short description end-users will see in the front end                 | Yes         |
| `longDescription` | "Detects all the dirt. Everywhere!" | A longer, more detailed description end-users will see in the front end | Yes         |

## `modelSettings`

| yaml Field          | Example Value | Meaning                                                                                               | is required |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------------- | ----------- |
| `modelVersion`      | "0.1.0"       | Versioning for the model and all events it's produces                                                 | Yes         |
| `sendAlerts`        | True          | If the events produced by this model should be picked up and propagated to the front end              | Yes         |
| `displayInFrontEnd` | True          | If the model should be displayed in the front end so that the end-user can submit their own schedules | Yes         |
| `backfill`          | True          | If you want your function to be backfilled historically                                               | Yes         |

## `fields`

10 different fields can be rendered in the front end for the end-user to fill out for creating a monitoring task. Each key is the fields ID with which the information parsed information can be retrieved through the AIR client in the model itself and can be visualized in the front end (next section).

| yaml Field    | Example Value                                          | Meaning                                                                                                                                                                                                       | is required |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `name`        | "Time series to be monitored"                          | The name end-users will see in the front end                                                                                                                                                                  | Yes         |
| `description` | "Please provide a time series that will be monitored." | A description end-users will see in the front end                                                                                                                                                             | Yes         |
| `type`        | "TimeSeries"                                           | Here you can specify one of the following types `Asset`, `TimeSeries`, `bool`, `float` or `str`. The front end will render the field accordingly (for `TimeSeries` it will provide a search for time series.) | Yes         |
| `multiple`    | True                                                   | _DEPRECATED_ This field is only allowed when type equals `Asset` or `TimeSeries`. When `True` the end-user can specify more than one time series or asset.                                                    | No          |

## `visualization`

The AIR front end does not know which time series are important to be displayed. Instead of hard coding all settings in the front end, data scientists can define basic visualizations themselves. All IDs used here are derived from the previous `fields` section.

For now, possible IDs are `timeSeries` and `thresholds`.

### `timeSeries`

As many time series can be specified as `TimeSeries` `fields` are present.

| yaml Field | Example Value                                            | Meaning                                                               | is required |
| ---------- | -------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| `fields`   | ["time_series_external_id1", "time_series_external_id2"] | As defined in the `fields` section, needs to be a `TimeSeries` field. | No          |

### `thresholds`

As many thresholds can be specified as `float` `fields` are present. One limitation: you can only have one or multiple thresholds with exactly one time series specified in `timeSeries`.

| yaml Field | Example Value                  | Meaning                                                          | is required |
| ---------- | ------------------------------ | ---------------------------------------------------------------- | ----------- |
| `fields`   | ["threshold_1", "threshold_2"] | As defined in the `fields` section, needs to be a `float` field. | No          |

### `grouping`

If thresholds and more than one time series should be visualized, the `groupings` parameter needs to be used. This way, time series can be mapped to different thresholds. Note that the order of the time series and threshold IDs in the list/array does not matter.

```yaml
grouping:
  [
    ['time_series_1', 'threshold_1', 'threshold_2'],
    ['time_series_2', 'threshold_3'],
  ]
```

## Example

```yaml
schedule:
  runEveryMinute: 30

modelDescription:
  frontEndName: "Lower Threshold"
  description: "When a selected time series crosses down this value, an alert is created."
  longDescription: "When a selected time series crosses down this value, an alert is created.
  Alerts that are not older than two hours are merged to prevent spamming."


modelSettings:
  modelVersion: "1.3.0" # set the version of your model here
  sendAlerts: True  # set to True if you want the events of this model being propagated to the front end
  displayInFrontEnd: True # set to True if it should be selectable in the front end
  backfill: True

fields:
  ts_ext_id:
    name: "Time series"
    description: "A time series that is going to be monitored"
    type: "TimeSeries"
  upper_threshold:
    name: "Upper Threshold"
    description: "When the selected time series crosses above on this threshold an alert will be created."
    type: "float"
  lower_threshold:
    name: "Lower Threshold"
    description: "When the selected time series crosses down on this threshold an alert will be created."
    type: "float"
  min_minutes:
    name: "Minimum Length in Minutes"
    description: "Please define how long the threshold needs to be crossed before it is registered as an alert. (Note: a smaller amount might lead to more notifications but you can edit this value later on.)"
    type: "float"

visualization:
  timeSeries:
    fields: ["ts_ext_id"]
  thresholds:
    fields: ["threshold"]
  grouping: [["ts_ext_id", "upper_threshold", "lower_threshold"]]

```
