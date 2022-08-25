---
pagination_next: null
pagination_prev: null
---

# Releases

This article documents the ongoing improvements we're making to the **Cognite Power BI connector**.

## November, 2021

**Added**

- We normalize the `tenantId` value for Azure AD authentication to allow `tenantId`, `tenantID`, or `tenantid`.

**Bug fixes**

- The connector now uses the CDF environment over the project URL as the Azure AD resource to get a token for the correct URL if both are set.

- For custom queries with OIDC sign-in, the query URL requires a valid token. The connector now sends the auth challenge (empty bearer token) to the service URL, not the query URL.

- We now disable the `TimeseriesAggregate` function for custom queries on the [/Events](../../../../api/v1/#tag/Events) endpoint to not interfere with custom queries.

- For the `TimeseriesAggregate` function, the connector now escapes special characters properly in tags before sending them to the OData API.

## June, 2021

This release contains a bugfix for the `TimeseriesAggregate` function. The list of tags are now escaped using `Uri.EscapeDataString` which fixes a problem if any of the tags contained any special characters.

## December, 2020

**From Beta to Version 1**

The Cognite Power BI connector moves from Beta to Version 1. The new version is backward-compatible, and you can update the connector without having to migrate your dashboards. If you have manually installed a previous version of the plugin, remove it by deleting it from `Documents\Power BI Desktop\Custom Connectors`.

**Improved support for time series data**

The Cognite Power BI connector V1 comes with improved processing time for time series data and removes the limitations on the number of time series you can download. For example, you can download thousands of time series, each with data from 1 year and with 1 day granularity.

## July, 2020

**New function: Time series aggregates**

The time series aggregation now accepts a list of IDs instead of a comma separated string. You can now use a column from another query directly as input to the function, making it much easier to use.

**Setting the CDF environment for a custom cluster**

If a CDF project is on a custom cluster, you can set the CDF Environment to the URL of the API server for the cluster when you [connect to CDF](retrieve_data_from_cdf.md).

You can also set a specific API version by appending it to the URL, for example `v1`. We also support shorthand notations. For example, `api/v1` uses the default API endpoint and v1 of the API.

Examples of supported CDF environment values:

- (blank) - uses the default setting (`https://api.cognitedata.com`)
- `api` - the same as `https://api.cognitedata.com`
- `api/v1` - the same as `https://api.cognitedata.com/v1`
- `https://api.cognitedata.com`
- `https://api.cognitedata.com/v1`
- `xyz` - a custom cluster. The same as `https://xyz.cognitedata.com`
- `xyz/v1`
- `https://xyz.cognitedata.com`
- `https://xyz.cognitedata.com/v1`
