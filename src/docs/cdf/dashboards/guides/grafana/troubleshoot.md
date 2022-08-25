---
pagination_next: null
pagination_prev: null
---

# Troubleshooting

<!-- TEMPLATE

## Problem

**Symptom**

Describe the symptoms as users will experience them.

**Causes**

Explain what the potential causes could be.

**Fixes**

Explain fixes for the different causes. -->

## I cannot find time series by name/externalId

**Symptom**

I’m trying to create a dashboard using time series on Grafana.
The time series work on Insight and on Postman but it doesn’t work on Grafana.

**Causes**

It might happen for the Grafana Connector v1 only. It uses CDF API v05,
so please make sure the time series you’re trying to load into Grafana has `legacyName` set.
You can check by trying to load the time series on Postman using the v0.5 endpoint

**Fixes**

Upgrade or set legacyName for searched time series

**or**

Upgrade to Grafana Connector v2

## Dashboard frequently timeout

**Symptom**

Receive network errors (429, 503) when you have multiple dashboards sharing the same datatasource.

**Causes**

Might happen when too many requests are firing at the same time from the different dashboards.

**Fixes**

Reduce the number of dashboards that uses same data source or reduce the refresh rate of the dashboard.

**or**

Create few datasources with different API keys for the same tenant

## Template query does not retrieve expected assets

**Symptom**

After migration to Grafana Connector v2 template query failed to fetch assets
or result is different it was in Grafana Connector v1

**Causes**

Endpoint that is used to get assets has been changed in Grafana Connector v2.
Now [assets/list](https://docs.cognite.com/api/v1/#operation/listAssets) is used for this and filtering by `description` and `name` should be done in different way.

**Fixes**

Because of `assets/list` endpoint doesn't support filtering by `description`, it can be implementing using regexp filters in query:

`assets{parentIds=[123], description="some"}` can be changed to `assets{parentIds=[123], description~=".*some.*"}`

But solution above has limitation under the hood – regexp filter is case-sensitive, you should pay attantion on it.

Filtering by `name` is also different as it was in Grafana Connector v1. In Grafana Connector v2 filtering by `name` is strict.
For instance, query `assets{name="some"}` in Grafana Connector v2 matches assets with name equals `some` string. But in
Grafana Connector v1 example query matches assets with names, which contatin `some` string.