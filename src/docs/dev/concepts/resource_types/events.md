---
pagination_next: null
pagination_prev: null
---

# Events

In Cognite Data Fusion, the event **resource type** stores complex information that happen over **a period of time**. Events have a **start time** and an **end time** and can be related to **multiple assets**. For example, an event can describe two hours of maintenance on a water pump and associated pipes, or a future time period when the pump is scheduled for inspection.

:::info TIP
The resource type for storing a series of data points in _time order_, for example temperature measurements, is [time series](timeseries.md).
:::

## About events

The `startTime` and `endTime` for an event’s time period are defined in milliseconds in Unix Epoch time. We do not support fractional milliseconds, and do not count leap seconds. You can specify start and end times in the future.

To describe and classify events, you can add arbitrary string values for `description`, `metadata`, `type` and `subtype`.

:::info TIP
See the [events API documentation](/api/v1/#tag/Events) for more information about how to work with events.
:::
