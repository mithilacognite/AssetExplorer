---
pagination_next: null
pagination_prev: null
title: Introduction
---

# Introduction to time series

<!--What is a time series?  Generic overview information-->

In Cognite Data Fusion, a time series is the **resource type** for indexing a series of **data points** in **time order**. Examples of a time series are the temperature of a water pump asset, the monthly precipitation in a location and the daily average number of manufacturing defects.

Watch this video for a quick introduction to time series:

<iframe width="560" height="315" src="https://www.youtube.com/embed/9tm7sl4YNos" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## About time series

An asset can have several time series connected to it. A water pump asset can for example have time series that measure the pump temperature, the pressure within the pump, rpm, flow volume, power consumption, and more.

<!--What can I do with time series?  -->

Time series can be analyzed and visualized to **draw inferences** from the data, for example to identify trends, seasonal movements and random fluctuations. Other common uses of time series analysis include to **forecast** future values, for example to schedule maintenance, and to control the series by adjusting parameters, for example to **optimize** the performance of equipment.

<!--What is a data point? More details + specific information for the Cognite implementation-->

A **data point** is a piece of information associated with a specific time, stored as a **numerical** or **string** value. Data points are identified by their timestamps, defined in milliseconds in Unix Epoch time. We do not support fractional milliseconds, and do not count leap seconds.

Use the `isString` flag on the [time series object](/api/v1/#tag/Time-series) to decide whether to store data points in a time series as numerical values or as string values.

- **Numerical** data points can be **aggregated** to reduce the amount of data transferred in query responses and improve performance. You can specify one or more aggregates (for example `average`, `minimum` and `maximum`) and also the time **granularity** for the aggregates (for example `1h` for one hour).

  See [Aggregating time series data](../../concepts/aggregation/index.md) to learn more about how Cognite Data Fusion aggregates and interpolates time series data, and see the details about the available aggregation functions.

- **String** data points can store arbitrary information like states (for example `open` or `closed`) or more complex information in JSON format. String data points can **not** be aggregated by Cognite Data Fusion.

Cognite Data Fusion stores discrete data points, but the underlying process measured by the data points can vary continuously. To **interpolate** between data points, use the `isStep` flag on the [time series object](/api/v1/#tag/Time-series) to assume that each value stays the same until the next measurement (`isStep`), or that it linearly changes between the two measurements (not `isStep`).

:::info tip
See the [time series API documentation](/api/v1/#tag/Time-series) for more information about how to work with time series.
:::

<!--The examples below should support and illustrate the concepts above -->

## Get the data points from a time series

You can get data points from a time series by using the `externalId` or the `id` of the time series.

1. To get data points from a time series by using the `externalId`, in this case `outside_temperature`, enter:

   ```http
     POST /api/v1/projects/publicdata/timeseries/data/list
     Host: api.cognitedata.com
     api-key: <key>
     Content-Type: application/json
     content-length: 99

     {
       "items": [
         {
           "limit": 5,
           "externalId": "outside-temperature"
         }
       ]
     }
   ```

   The response will look similar to this:

   ```json
   {
     "items": [
       {
         "isString": false,
         "id": 44435358976768,
         "externalId": "outside-temperature",
         "datapoints": [
           {
             "timestamp": 1349732232902,
             "value": 31.62889862060547
           },
           {
             "timestamp": 1349732244888,
             "value": 31.59380340576172
           },
           {
             "timestamp": 1349732245888,
             "value": 31.62889862060547
           },
           {
             "timestamp": 1349732258888,
             "value": 31.59380340576172
           },
           {
             "timestamp": 1349732259888,
             "value": 31.769287109375
           }
         ]
       }
     ]
   }
   ```

## Get aggregate values between two points in time

To visualize or analyze a longer time period, you can extract the aggregate values between two points in time. See [Retrieve data points](/api/v1/#operation/getMultiTimeSeriesDatapoints) for valid aggregate functions and granularities.

1. For example, to return the hourly average aggregate with a granularity of 1 hour, for the last 5 hours, for the `outside_temperature` time series, enter:

   ```http
     POST /api/v1/projects/publicdata/timeseries/data/list
     Host: api.cognitedata.com
     api-key: <api-key>
     Content-Type: application/json

     {
       "items": [
         {
           "limit": 5,
           "externalId": "outside-temperature",
           "aggregates": ["average"],
           "granularity": "1h",
           "start": 1541424400000,
           "end":"now"
         }

       ]
     }
   ```

   The response will look similar to this:

   ```json
   {
     "items": [
       {
         "id": 44435358976768,
         "externalId": "outside-temperature",
         "datapoints": [
           {
             "timestamp": 1541422800000,
             "average": 26.3535328292538
           },
           {
             "timestamp": 1541426400000,
             "average": 26.34716274449083
           },
           {
             "timestamp": 1541430000000,
             "average": 26.35558703492914
           },
           {
             "timestamp": 1541433600000,
             "average": 26.36287845690146
           },
           {
             "timestamp": 1541437200000,
             "average": 26.36948613080317
           }
         ]
       }
     ]
   }
   ```

## Count number of time series matching filtering criteria

Count number of time series that match selected filtering criteria, such as being part of specific data set and follow naming convention for externalId.

```http
POST /api/v1/projects/daitya/timeseries/aggregate HTTP/1.1
Host: https://api.cognitedata.com
api-key: <api-key>
content-type: application/json

{
    "filter": {
        "dataSetIds": [
            {
                "externalId": "Cognite data quality monitoring alerts and metrics"
            }
        ],
        "externalIdPrefix": "dq_monitor"
    }
}
```

The response will look similar to this:

```json
{
  "items": [
    {
      "count": 273
    }
  ]
}
```

## Best practices

Use the tips and best practices below to increase the throughput and query performance.

### Message size/batching

Send many data points from the same time series in the same request. If you have room for more data points in the request, you can add more time series.

We prefer batch sizes up to 100k **numeric** data points or 10-100k **string** data points, depending on the string length (around 1 MB is good).

For each time series, group the data points in time.
Ideally, different requests should not have overlapping time series ranges. If data changes, update existing ranges.

### Error handling

We have three error categories.

#### 429 - Too many requests

To ensure that we do not overload the API and have enough capacity for other
users on the server, we return a 429 error code when you have too many concurrent requests to the API.

If you receive this error, reduce the number of concurrent threads or _retry with capped exponential backoff_. Try again after, for instance, 1 second.
If you still get the error, try again after 2 seconds, followed by 4, 8, 10, 10, ... seconds (cap = 10 seconds).

When you're no longer rate limited with a 429, you can try to scale up.

:::info NOTE
We don't have a fixed limit of requests before we return 429. The limit depends on the complexity of the requests, other users on the server, and service performance.
:::

#### 5xx - Server errors

If you receive these errors, reduce the number of concurrent threads or _retry with capped exponential backoff_ as described for [429 errors](#429---too-many-requests).

If you receive repeated 500 - Internal Server Error,
you may have found a bug. Notify [support@cognite.com](mailto:support@cognite.com), and include the request-ID in the error message. When you longer get the 5xx errors, you can scale up to normal operations.

#### 4xx - User errors

Usually, you don't want to retry 4xx errors, but instead ensure that you're using the API correctly, that you've signed in with the correct user, and that the resources you try to access haven't been modified in a separate request.

### Retries and idempotency

Most of the API endpoints, including all datapoint requests, are idempotent. You can send the same request multiple times without any effect beyond the first request.

When you modify or delete time series, subsequent requests can fail harmlessly if the references have become invalid.

The only endpoint that is not idempotent is creating a time series **without externalId**. For each successful request, you generate a new time series. We recommend that you always use _externalId_ on your time series.

:::info NOTE
We always apply the complete request or nothing at all. A 200 response indicates that we applied the complete request.
:::
