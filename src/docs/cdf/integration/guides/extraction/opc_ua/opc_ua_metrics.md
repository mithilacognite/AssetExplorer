---
pagination_next: null
pagination_prev: null
---

# Extractor metrics

This section contains the full list of available metrics from the extractor, grouped by general purpose. For information on the different types of metrics, see the official prometheus documentation [here](https://prometheus.io/). In general, **Counter** starts at zero and increases during a run of the extractor, **Gauge** may change freely, **Summary** calculates a running average of observations and Histogram contains counts of different measurement sizes, distributed in buckets.

## Source system

| Name                                 | Type    | Purpose                                                                                                                                        |
| ------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **opcua_version**                    | Counter | Value always `0`, help string contains version of extractor.                                                                                   |
| **opcua_connects**                   | Counter | Counts the number of times the extractor has connected to the OPC UA server.                                                                   |
| **opcua_connected**                  | Gauge   | 1``if the extractor is connected to the server,`0` otherwise. Can be used to track extractor connectivity, together with prometheus heartbeat. |
| **opcua_attribute_requests**         | Counter | Number of `Read` service calls made to the OPC UA server.                                                                                      |
| **opcua_subscriptions**              | Gauge   | Number of data-variables currently subscribed to.                                                                                              |
| **opcua_history_reads**              | Counter | Number of `HistoryRead` calls made to the OPC UA server.                                                                                       |
| **opcua_browse_operations**          | Counter | Number of `Browse` service calls made to the OPC UA server.                                                                                    |
| **opcua_attribute_request_failures** | Counter | Number of times calls to the `Read` service has failed.                                                                                        |
| **opcua_history_read_failures**      | Counter | Number of times calls to the `HistoryRead` service has failed.                                                                                 |
| **opcua_browse_failures**            | Counter | Number of times calls to the `Browse` service has failed.                                                                                      |
| **opcua_bad_datapoints**             | Counter | Number of datapoints with a `Bad` status code received from the server.                                                                        |
| **opcua_bad_events**                 | Counter | Number of events skipped due to bad fields.                                                                                                    |

## Extractor

| Name                                 | Type     | Purpose                                                                                                                                                                                                                                                                                            |
| ------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **opcua_start_time**                 | Gauge    | Start time for the extractor, in milliseconds since 1/1/1970                                                                                                                                                                                                                                       |
| **opcua_extractor_starting**         | Counter  | `1` if the extractor is in the process of starting, `0` otherwise.                                                                                                                                                                                                                                 |
| **opcua_tracked_assets**             | Counter  | Number of OPC UA nodes that have been mapped to destination assets.                                                                                                                                                                                                                                |
| **opcua_tracked_timeseries**         | Counter  | Number of OPC UA nodes that have been mapped to destination timeseries.                                                                                                                                                                                                                            |
| **opcua_num_pushes**                 | Counter  | Increments by 1 for each push of datapoints and events to destinations.                                                                                                                                                                                                                            |
| **opcua_streaming_delay_datapoints** | Summary  | Estimated time it takes for datapoints to go from the source system to the extractor. Relies on clocks being synchronized between extractor machine and source machines.<p></p>With this, average time to CDF can be calculated as (`1 / rate(opcua_num_pushes)) / 2 + opcua_streaming_delay_data` |
| **opcua_streaming_delay_events**     | Summary  | Similarly for events, time from source system to extractor. Note that this uses the `Time` property, which may be set by the server in some cases, or be generated in the past.                                                                                                                    |
| **opcua_array_points_missed**        | Counter  | Number of points missed due to nodes reporting too large arrays.                                                                                                                                                                                                                                   |
| **opcua*node*[node name]**           | Gauge(s) | The value of nodes in the OPC UA server hierarchy, if configured.                                                                                                                                                                                                                                  |

## CDF

| Name                                        | Type    | Purpose                                                                        |
| ------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| **opcua_datapoints_pushed_cdf**             | Counter | Number of datapoints pushed to CDF.                                            |
| **opcua_datapoint_pushes_cdf**              | Counter | Number of times datapoints have been pushed to CDF.                            |
| **opcua_datapoint_push_failures_cdf**       | Counter | Number of failed pushes of datapoints to CDF.                                  |
| **opcua_events_pushed_cdf**                 | Counter | Number of events pushed to CDF.                                                |
| **opcua_event_pushes_cdf**                  | Counter | Number of times events have been pushed to CDF.                                |
| **opcua_event_push_failures_cdf**           | Counter | Number of failed pushes of events to CDF.                                      |
| **opcua_node_ensure_failures_cdf**          | Counter | Number of times trying to create nodes in Clean or Raw have failed completely. |
| **opcua_skipped_events_cdf**                | Counter | Number of events skipped due to issues or because they already exist.          |
| **opcua_missing_timeseries**                | Gauge   | Number of timeseries missing from CDF.                                         |
| **opcua_mismatched_timeseries**             | Gauge   | Number of timeseries with wrong datatype in CDF relative to OPC UA.            |
| **extractor_utils_cdf_asset_requests**      | Summary | Number and duration of asset requests to CDF.                                  |
| **extractor_utils_cdf_timeseries_requests** | Summary | Number and duration of timeseries requests to CDF.                             |
| **extractor_utils_cdf_datapoint_requests**  | Summary | Number and duration of datapoint requests to CDF.                              |
| **extractor_utils_cdf_event_requests**      | Summary | Number and duration of event requests to CDF.                                  |
| **extractor_utils_cdf_raw_requests**        | Summary | Number and duration of raw requests to CDF.                                    |
| **extractor_utils_cdf_assets_skipped**      | Counter | Number of assets skipped due to errors.                                        |
| **extractor_utils_cdf_timeseries_skipped**  | Counter | Number of timeseries skipped due to errors.                                    |
| **extractor_utils_cdf_events_skipped**      | Counter | Number of events skipped due to errors.                                        |
| **extractor_utils_cdf_login_requests**      | Summary | Number and duration of requests to /login/status                               |
| **extractor_utils_cdf_token_requests**      | Summary | Number and duration of requests to /token/inspect                              |
| **extractor_utils_cdf_datapoints**          | Counter | Number of datapoints pushed to CDF by the utils.                               |
| **extractor_utils_cdf_invalid_data_points** | Counter | Number of datapoints skipped due to bad timestamp.                             |
| **cognite_sdk_fetch_inc**                   | Counter | Number of POST/GET/… actions performed                                         |
| **cognite_sdk_fetch_error_inc**             | Counter | Number of errors on actions.                                                   |
| **cognite_sdk_fetch_retry_inc**             | Counter | Number of retries on actions.                                                  |
| **cognite_sdk_decode_error_inc**            | Counter | Decoding data errors.                                                          |
| **cogntie_sdk_fetch_latency_update**        | Gauge   | Latency on actions performed.                                                  |

## Influx

| Name                                     | Type    | Purpose                                                                |
| ---------------------------------------- | ------- | ---------------------------------------------------------------------- |
| **opcua_datapoint_pushes_influx**        | Counter | Number of times datapoints have been pushed to influxdb.               |
| **opcua_datapoints_pushed_influx**       | Counter | Number of datapoints pushed to influxdb.                               |
| **opcua_datapoint_push_failures_influx** | Counter | Number of failed pushes of datapoints to influxdb.                     |
| **opcua_skipped_datapoints_influx**      | Counter | Number of datapoints that have been skipped while pushing to influxdb. |
| **opcua_event_pushes_influx**            | Counter | Number of times events have been pushed to influxdb.                   |
| **opcua_events_pushed_influx**           | Counter | Number of events pushed to influxdb.                                   |
| **opcua_event_push_failures_influx**     | Counter | Number of failed pushes of events to influxdb.                         |
| **opcua_events_skipped_influx**          | Counter | Number of events that have been skipped while pushing to influxdb.     |

## MQTT

| Name                                 | Type    | Purpose                                                          |
| ------------------------------------ | ------- | ---------------------------------------------------------------- |
| **opcua_created_assets_mqtt**        | Counter | Number of assets sent by the MQTT pusher.                        |
| **opcua_created_timeseries_mqtt**    | Counter | Number of timeseries sent by the MQTT pusher.                    |
| **opcua_datapoints_pushed_mqtt**     | Counter | Number of datapoints sent by the MQTT pusher.                    |
| **opcua_datapoint_pushes_mqtt**      | Counter | Number of times datapoints have been sent by the MQTT pusher.    |
| **opcua_skipped_datapoints_mqtt**    | Counter | Number of datapoints skipped by the MQTT pusher.                 |
| **opcua_events_pushed_mqtt**         | Counter | Number of events sent by the MQTT pusher.                        |
| **opcua_event_pushes_mqtt**          | Counter | Number of times events have been sent by the MQTT pusher,.       |
| **opcua_skipped_events_mqtt**        | Counter | Number of events skipped by the MQTT pusher due to invalid data. |
| **opcua_created_relationships_mqtt** | Counter | Number of relationships sent by the MQTT pusher.                 |

## History, State Store and Failure Buffer

| Name                               | Type    | Purpose                                                      |
| ---------------------------------- | ------- | ------------------------------------------------------------ |
| **opcua_frontfill_data_points**    | Counter | Number of datapoints retrieved through frontfill.            |
| **opcua_frontfill_data_count**     | Counter | Number of frontfill datapoints requests to OPC UA server.    |
| **opcua_backfill_data_points**     | Counter | Number of datapoints retrieved through backfill.             |
| **opcua_backfill_data_count**      | Counter | Number of backfill datapoints requests to OPC UA server.     |
| **opcua_frontfill_events**         | Counter | Number of events retrieved through frontfill.                |
| **opcua_frontfill_events_count**   | Counter | Number of frontfill events requests to OPC UA server.        |
| **opcua_backfill_events**          | Counter | Number of events retrieved through backfill.                 |
| **opcua_backfill_events_count**    | Counter | Number of backfill events requests to OPC UA server.         |
| **opcua_buffer_num_points**        | Gauge   | Number of datapoints stored in buffer.                       |
| **opcua_buffer_num_events**        | Gauge   | Number of events stored in buffer.                           |
| **extractor_utils_restore_states** | Counter | Number of states retrieved from state store.                 |
| **extractor_utils_restore_count**  | Counter | Number of times states have been retrieved from state store. |
| **extractor_utils_store_states**   | Counter | Number of states stored in state store.                      |
| **extractor_utils_store_count**    | Counter | Number of times states have been written to state store.     |

## Native Prometheus

| Name                              | Type    | Purpose                                                                   |
| --------------------------------- | ------- | ------------------------------------------------------------------------- |
| **dotnet_total_memory_bytes**     | Gauge   | Number of bytes of allocated memory                                       |
| **dotnet_collection_count_total** | Counter | Number of GC calls, grouped by generation.                                |
| **process_cpu_seconds_total**     | Counter | Total number of CPU seconds used by the process.                          |
| **process_num_threads**           | Gauge   | Current threads in use by the process.                                    |
| **process_open_handles**          | Gauge   | Current open handles.                                                     |
| **process_open_fds**              | Gauge   | Current open file descriptors.                                            |
| **process_private_memory_bytes**  | Gauge   | Current private memory bytes.                                             |
| **process_resident_memory_bytes** | Gauge   | Current resident memory bytes.                                            |
| **process_virtual_memory_bytes**  | Gauge   | Current virtual memory.                                                   |
| **process_working_set_bytes**     | Gauge   | Current working set.                                                      |
| **process_start_time_seconds**    | Gauge   | Start time in unix time seconds.                                          |
| **push_time_seconds**             | Gauge   | Time in unix time seconds data was last pushed to prometheus pushgateway. |
