---
pagination_next: null
pagination_prev: null
---


# API versions

Learn about our API versioning, our policy for backwards compatibility, and the end-of-life schedule for our APIs.

## Current API versions

We currently offer these versions of the Cognite Data Fusion API.

| API version | Status   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API v1      | Stable   | **Recommended for production environments.** <p></p>We will keep adding [backwards-compatible (non-breaking)](#backwards-compatible-non-breaking-changes) changes to the stable API. If we change the API in a [backwards-incompatible](#backwards-incompatible-breaking-changes) way, we will release those changes as a new major API version. <p></p> Supported by JavaScript SDK 2.x.x and the Python SDK 1.x.x or newer<p></p>The current stable API will be **available for a 12 months after the release of the next major API version.**                                                                                                          |
| API v1 Beta | Beta     | **Not recommended for production environments.** <p></p>Beta features allow you to start developing solutions with the latest features early and be ready to deploy as soon as we promote the feature to the stable release.<p></p>Any changes we make to a feature while it's in beta will be [backwards-compatible (non-breaking)](#backwards-compatible-non-breaking-changes).<p></p>Beta features are supported by the JavaScript Beta SDK 3.x.x and Python SDK 2.x.x using the Beta client.<p></p>To use the API directly, use the header `{"version": "beta"}`.<p></p>We typically promote beta features to the stable version within three months. |
| Playground  | Unstable | Do **not** use in production environments. <p></p>This version showcases our newest ideas, experimental features and demos. <p></p> The interface is highly unstable and constantly changing.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Deprecated API versions

The following API versions have been removed. If you make direct API calls to these versions or use SDKs or other tools that depend on them, you will receive errors.

| API version | SDK version                                                       | Removed                      |
| ----------- | ----------------------------------------------------------------- | ---------------------------- |
| API 0.5     | Python SDK 0.x.x or earlier<p></p>JavaScript SDK 1.x.x or earlier | March&nbsp;22,&nbsp;2021     |
| API 0.6     | Python SDK 0.x.x or earlier<p></p>JavaScript SDK 1.x.x or earlier | April&nbsp;1,&nbsp;2020      |
| API 0.4     | Python SDK 0.11.x or earlier                                      | September&nbsp;10,&nbsp;2019 |
| API 0.3     | Python SDK 0.11.x or earlier                                      | September&nbsp;10,&nbsp;2019 |

## Backwards compatibility

If we change the current stable API in a way that is backwards-incompatible, we will release those changes as part of a new major API version. The current stable API will be available for 12 months after the release of the next major API version to provide a migration period for our users.

A backwards-incompatible change is a change that causes a previously successful request, or successful parsing of the response, to fail or give different results after the change is released.

### Backwards-compatible (non-breaking) changes

We consider the following to be examples of backwards-compatible (non-breaking) changes:

- Increasing the request limits.
- Adding properties to the response body.
- Adding properties to the request body (as long as it doesn't affect previous requests).
- Adding support for more query parameters (as long as it doesn't affect previous requests).

### Backwards-incompatible (breaking) changes

We consider the following to be examples of backwards-incompatible (breaking) changes:

- Removing an endpoint.
- Removing a property in the response.
- Changing the error response format (not the status code).
- Changing the status code from 2xx to another 2xx.
- Reducing the limit on a request (not the response). Example: the number of assets to retrieve by `assetIds`.
- Changing the name of query parameters and body properties.
- Changing the sort order if the original order was expected by the user.
