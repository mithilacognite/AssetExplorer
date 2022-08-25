---
pagination_next: null
pagination_prev: null
---

# Changelog: API v1

This article documents all notable changes to the Cognite Data Fusion (CDF) API v1.

<!--
Group changes by release (and date), API area, and these types of changes:

 - **Added** for new features.
 - **Changed** for changes in existing functionality.
 - **Deprecated** for soon-to-be removed features.
 - **Removed** for now removed features.
 - **Fixed** for any bug fixes.
 - **Security** in case of vulnerabilities.-

Use[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) for dates: 2019-06-20

Add entries for new features on top of this page. Newest release goes on top.
Changes only for API v1 series

Template:

## <YYYY-MM-DD>

### <Core resource name>

#### <Group name -- see top of the page>

    - <my change>
    - <my change>

#### <Group name -- see top of the page>

    - <my change>
    - <my change>
-->

## 2022-08-12

### Time series

#### Changed

- Updated datapoints timestamp range from 1971 - 2050 to 1900 - 2050.
  Affected endpoints:
  * [Insert data points](https://docs.cognite.com/api/v1/#tag/Time-series/operation/postMultiTimeSeriesDatapoints)
  * [Retrieve data points](https://docs.cognite.com/api/v1/#tag/Time-series/operation/getMultiTimeSeriesDatapoints)
  * [Delete data points](https://docs.cognite.com/api/v1/#tag/Time-series/operation/deleteDatapoints)
  * [Retrieve latest data point](https://docs.cognite.com/api/v1/#tag/Time-series/operation/getLatest)
  * [Synthetic query](https://docs.cognite.com/api/v1/#tag/Synthetic-Time-Series/operation/querySyntheticTimeseries)

## 2022-07-21

### Transformations

#### Added

- Added authentication using nonce for transformation's exisiting endpoints.

## 2022-06-21

### Annotations (Data organization)

#### Added

- Moved the annotation service from playground to v1.

## 2022-07-07

### Events

#### Removed

- End-of-life for [filter.rootAssetIds](https://docs.cognite.com/api/v1/#operation/advancedListEvents) filtering attribute.

## 2022-06-13

### IAM (Identity and access management)

#### Added

- Added the [POST /projects/{project}/sessions/revoke](https://docs.cognite.com/api/v1/#operation/revokeSessions) endpoint. 

## 2022-05-20

### Documents

#### Added

- Added the `POST /documents/aggregate` endpoint. The endpoint allows you to count documents optionally grouped by a property and also to retrieve all unique values of a property.

## 2022-05-12

### Documents

#### Added

- Added the `POST /documents/list` endpoint. The endpoint allows you to iterate through all the documents in a project.
- Added the `POST /documents/{documentId}/content` endpoint. The endpoint lets you download the entire extracted plain text of a document.

## 2022-04-11

### Documents

#### Added

- Added the [GET /documents/{documentId}/preview/image/pages/{pageNumber}](https://docs.cognite.com/api/v1/#operation/documentsPreviewImagePage) endpoint.
- Added the [GET /documents/{documentId}/preview/pdf](https://docs.cognite.com/api/v1/#operation/documentsPreviewPdf) endpoint.
- Added the [GET /documents/{documentId}/preview/pdf/temporarylink](https://docs.cognite.com/api/v1/#operation/documentsPreviewPdfTemporaryLink) endpoint.

## 2022-03-15

### Sequences

#### Changed

- Changed sequences column limits. Old limit of maximum total 200 columns limits is updated to maximum 400 total columns, maximum 400 numeric columns and maximum 200 string columns.

## 2022-03-02

### Sequences

#### Added

- Added the [POST /sequences/data/latest](https://docs.cognite.com/api/v1/#operation/getLatestSequenceRow) endpoint.

## 2022-02-08

### Time series

#### Changed

- Marked `isStep` parameter to be editable (i.e. removed description stating it is not updatable) in [POST /timeseries/create](https://docs.cognite.com/api/v1/#operation/postTimeSeries).

#### Added

- Added `isStep` parameter to the `TimeSeriesPatch` object used in [POST /timeseries/update](https://docs.cognite.com/api/v1/#operation/alterTimeSeries)

## 2022-02-07

### Documents

#### Added

- The [POST /documents/search](https://docs.cognite.com/api/v1/#operation/documentsSearch) endpoint now supports pagination.

## 2022-01-25

### Documents

#### Added

- Added the [POST /documents/search](https://docs.cognite.com/api/v1/#operation/documentsSearch) endpoint.

## 2022-01-24

### Time series

#### Added

- Added optional `ignoreUnknownIds` parameter to [POST /sequences/delete](https://docs.cognite.com/api/v1/#operation/deleteSequences). Setting this to true will prevent the operation from failing if one or more of the given sequences do not exist; instead, those given sequences that do exist will be deleted.

## 2021-12-07

### Transformations

#### Added

- New [Transformations](https://docs.cognite.com/api/v1/#tag/Transformations) APIs to v1 to create,retrieve,list and delete transformations
- New [Transformation Jobs](https://docs.cognite.com/api/v1/#tag/Transformation-Jobs) APIs to v1 to retrieve and list transformation jobs or job metrics
- New [Transformation Schedule](https://docs.cognite.com/api/v1/#tag/Transformation-Schedules) APIs to v1 to manage schedules of transformations
- New [Transformation Notifications](https://docs.cognite.com/api/v1/#tag/Transformation-Notifications) APIs to v1 to manage notifications from transformation job

## 2021-11-22

### Contextualization

#### Added

- Added [diagram detect](https://docs.cognite.com/api/v1/#operation/diagramDetect) endpoint to v1 to detect annotations in engineering diagrams
- Added [diagram detect results](https://docs.cognite.com/api/v1/#operation/diagramDetectResults) endpoint to v1 to get the results from an engineering diagram detect job
- Added [diagram convert](https://docs.cognite.com/api/v1/#operation/diagramConvert) endpoint to v1 to create interactive engineering diagrams in SVG format with highlighted annotations
- Added [diagram convert results](https://docs.cognite.com/api/v1/#operation/diagramConvertResults) endpoint to v1 to get the results for a job converting engineering diagrams to SVGs

## 2021-11-17

### 3D

#### Added

- Added `dataSetId` support to 3D models enabling data access scoping of 3D data

## 2021-10-13

### Raw

#### Changed

- To align with Microsoft Azure clusters, table and database names are now sensitive to trailing spaces also in Google Cloud Platform clusters.

## 2021-10-05

### Extraction Pipelines

#### Added

- New [Extraction Pipelines](https://docs.cognite.com/api/v1/#tag/Extraction-Pipelines) resource to document extractors and monitor the status of data ingestion to make sure reliable and trustworthy data are flowing into the CDF data sets.
- API endpoints for creating, managing, and deleting extraction pipelines. Capture common attributes around extractors such as owners, contacts, schedule, destination RAW databases, and data set. Document structured metadata in the form of key-value attributes as well unstructured `documentation` attribute that supports Markdown (rendered as Markdown in Fusion).
- Extraction Pipelines Runs are CDF objects to store statuses related to an extraction pipeline. The supported statuses are: `success`, `failure` and `seen`. They enable extractor developers to report status and error message after ingesting data. As well enables for reporting heartbeat through `seen` status by the extractor to easily identify issues related to crushed applications and scheduling issues.

## 2021-09-28

### Sequences

#### Added

- Added `partition` parameter to the [GET /sequences](https://docs.cognite.com/api/v1/#operation/listSequences) endpoint to support [parallel retrieval](https://docs.cognite.com/api/v1/#section/Parallel-retrieval).
- [POST /sequences/list](https://docs.cognite.com/api/v1/#operation/advancedListSequences) now supports [parallel retrieval](https://docs.cognite.com/api/v1/#section/Parallel-retrieval).

### Time series

#### Added

- Added `partition` parameter to the [GET /timeseries](https://docs.cognite.com/api/v1/#operation/getTimeSeries) endpoint to support [parallel retrieval](https://docs.cognite.com/api/v1/#section/Parallel-retrieval).

## 2021-08-18

### IAM (Identity and access management)

#### Added

Added sessions to [v1](https://docs.cognite.com/api/v1/#tag/Sessions). Sessions let you securely delegate access to CDF resources for CDF services (such as Functions) by an external principal and for an extended time.

## 2021-08-12

### Relationships

#### Added

- Relationships now support [Parallel Retrieval](https://docs.cognite.com/api/v1/#section/Parallel-retrieval)

## 2021-07-01

### 3D

#### Added

- Added filter3dNodes endpoint to allow for more advanced filtering on node metadata

## 2021-06-29

### Labels

#### Added

- [Dataset scoping](https://docs.cognite.com/api/v1/#operation/createLabelDefinitions) on labels, with access check, is now available. You can also [filter labels](https://docs.cognite.com/api/v1/#operation/listLabels) based on `dataSetIds`.

## 2021-06-08

### Sequences

#### Added

- Added [syntax for updating columns](https://docs.cognite.com/api/v1/#operation/updateSequences) of existing sequences. Can `remove` columns, `modify` existing columns, and `add` new columns as well.

## 2021-06-01

### Assets

#### Added

- Added labels replace (set) method for [assets update](https://docs.cognite.com/api/v1/#operation/updateAssets).

## 2021-04-28

### Time series

#### Changed granularity limits on hour aggreagates

You can now ask for a [granularity](https://docs.cognite.com/dev/concepts/aggregation/#granularity)
of up to 100000 hours (previously 48 hours), both in normal aggregates and in synthetic time series.

## 2021-04-12

### IAM (Identity and access management)

#### Added

- Added [configuration](https://docs.cognite.com/api/playground/#tag/Projects) for native tokens to playground
- Added a [projects list](https://docs.cognite.com/api/v1/#operation/listProjects) endpoint to v1
- Added a [token inspection](https://docs.cognite.com/api/v1/#operation/inspectToken) endpoint to v1

## 2021-04-06

### Authentication

#### Deprecated

We are deprecating authentication via CDF service accounts and API keys, and user sign-in via `/login`, in favor of registering applications and services with your IdP (identity provider) and [using OpenID Connect](../cdf/access/) and the IdP framework to manage CDF access securely.

The legacy authentication flow is available for customers using Cognite Data Fusion (CDF) on GCP until further notice. We strongly encourage customers to adopt [the new authentication flows](../cdf/access/) as soon as possible.

The following API endpoints are deprecated:

- `/api/v1/projects/*/apikeys`
- `/api/v1/projects/*/serviceaccounts`
- `/login`
- `/logout`
- `/api/v1/projects/*/groups/serviceaccounts` <sup>\*</sup>

<sup>\*</sup>only the sub-resources for listing, adding, and removing members of groups.

## 2021-03-22

CDF API 0.5, 0.6 reached their end-of-life after its initial [deprecation announcement](/blog/2019/07/11/api-v1/#deprecating-api-0-3-0-6) in Summer 2019.

## 2021-03-10

### 3D

#### Added

- Added `partition` parameter to the List 3D Nodes endpoint for supporting parallel requests.
- Added `sortByNodeId` parameter to the List 3D Nodes endpoint, improving request latency in most cases if set to `true`.

## 2021-02-26

### Entity matching

#### Fixed

- Fixed a bug in the documentation for Entity matching. The (job) `status` shall be capitalized string.

## 2020-12-22

### Files

#### Added

- New field `fileType` inside `derivedFields` to refer to a pre-defined subset of MIME types.
- New filter `fileType` inside `derivedFields` to find files with a pre-defined subset of MIME types.

## 2020-10-20

### Files

#### Added

- New field `geoLocation` to refer to the geographic location of the file.
- New filter `geoLocation` to find files matching a certain geographic location.

To learn how to leverage new geoLocation features, [follow our guide](/dev/concepts/resource_types/files.html#geographic-location-of-files).

## 2020-08-29

### Files

#### Added

- New field `directory` referring to the directory in the source containing the file.
- New filter `directoryPrefix` allows you to find Files matching a certain directory prefix.

## 2020-08-05

### Files

#### Added

- New field `labels` allows you to attach labels to Files upon creation or updating.
- New filter `labels` allows you to find Files that have been annotated with specific labels.

## 2020-07-08

### IAM (Identity and access management)

#### Added

- New project field `applicationDomains`. If this field is set, users only sign in to the project through applications hosted on
  a whitelisted domain. [Read more](/dev/guides/iam/#application-domains).

## 2020-07-01

### Events

#### Added

- New aggregation [`uniqueValues`](https://docs.cognite.com/api/v1/#operation/aggregateEvents) allows you to find different types, subtypes of events in your project.

## 2020-06-29

### Labels

#### Added

- New data organization resource: [labels](https://docs.cognite.com/api/v1/#tag/Labels). Manage terms that you can use to annotate and group assets.

### Assets

#### Added

- New filter `labels` allows you to find resources that have been annotated with specific labels.

### Time series

#### Added

- Combine various input time series, constants and operators with on-the-fly [synthetic time series](/dev/concepts/resource_types/synthetic_timeseries).

## 2020-04-28

### Events

#### Added

- New filtering capabilities to find open events [`endTime=null`](https://docs.cognite.com/api/v1/#operation/advancedListEvents).
- New filtering capabilities to find all events intersecting a timespan using [activeAtTime](https://docs.cognite.com/api/v1/#operation/advancedListEvents).

## 2020-03-12

### General

#### Added

- New data organization resource: [data sets](https://docs.cognite.com/api/v1/#tag/Data-sets). Document and track data lineage, ensure data integrity, and allow 3rd parties to write their insights securely back to your Cognite Data Fusion (CDF) project. Learn more about data sets [here.](https://docs.cognite.com/cdf/blog/data_sets.html).
- New attribute `datasetId` introduced in assets, files, events, time series and sequences.
- New filter `dataSetIds` allows you to narrow down results to resources containing `datasetId` by a list of ids or externalIds of a data set. Supported by assets, files, events, time series and sequences.
- We have added a new aggregation endpoint for [time series](https://docs.cognite.com/api/v1/#operation/aggregateTimeSeries), [sequences](https://docs.cognite.com/api/v1/#operation/aggregateSequences) and [files](https://docs.cognite.com/api/v1/#operation/aggregateFiles). With this endpoint, you can find out how many results in a tenant meet the criteria of a filter. We will expand this feature to add more aggregates than `count`.

### Groups

#### Added

- Introduced a new capability: `datasetsAcl` for managing access to data set resources.
- New scope `datasetScope` for assets, files, events, time series and sequences ACLs. Allows you to scope down access to resources contained within a specified set of data sets.

## 2020-03-10

### 3D

#### Fixed

- We fixed a bug in the documentation of [3D model revisions](https://docs.cognite.com/api/v1/#operation/get3DNodesById). Applications should anticipate that 3D nodes may not have a bounding box.

## 2020-02-25

### Assets

#### Added

- We have added a new [aggregation endpoint](https://docs.cognite.com/api/v1/#operation/aggregateAssets) for assets. With this endpoint, you can find out how many assets in a tenant meet the criteria of a filter. We will expand this feature to add more aggregates than `count`.

### Events

#### Added

- We have added a new [aggregation endpoint](https://docs.cognite.com/api/v1/#operation/aggregateEvents) for events. With this endpoint, you can find out how many events in a tenant meet the criteria of a filter. We will expand this feature to add more aggregates than `count`.

## 2020-02-12

### Assets

#### Added

- We have added new aggregation properties: `depth` and `path`. You can use the properties in the filter and retrieve endpoints.

## 2020-02-10

### Assets

#### Added

- Added the property `parentExternalId` which is returned for all assets which have a parent with a defined `externalId`.

## 2019-12-09

### General

#### Added

- Added `assetSubtreeIds` as a parameter to filter, search, and list endpoints for all core resources. `assetSubtreeIds` allows you to specify assets that are subtree roots, and then only retrieve resources that are related to assets within those subtrees.

## 2019-12-04

### Assets

#### Added

- Added the ability to [filter](https://docs.cognite.com/api/v1/#operation/listAssets) and [search](https://docs.cognite.com/api/v1/#operation/searchAssets) assets by parent external IDs.

## 2019-11-18

### Events

#### Added

- [Added the ability to filter events by the external ID of linked assets](https://docs.cognite.com/api/v1/#operation/advancedListEvents)

## 2019-11-12

### Access control

#### Removed

- [Groups](/api/0.5/#operation/createGroups) can no longer be created with a permissions field in v0.5.

## 2019-10-31

### Assets

#### Added

- [Asset search](/api/v1/#operation/searchAssets) now has a `search.query` parameter. This uses an improved search algorithm that tries a wider range of variations of the input terms and gives much better relevancy ranking than the existing `search.name` and `search.description` fields.

### Time Series

#### Changed

- The `search.query` parameter for [time series search](/api/v1/#operation/searchTimeSeries) now uses an improved search algorithm that tries a wider range of variations of the input terms, and gives much better relevancy ranking.

## 2019-10-23

### Files

#### Added

- Added support for updating the `mimeType` for existing files in files/update requests.

## 2019-10-18

### Time Series

#### Added

- Time series expanded their filtering capabilities with new `Filter time series` endpoint, allowing for additional filtering by:

  - Name
  - Unit
  - Type of time series: string or step series
  - Metadata objects
  - ExternalId prefix filtering
  - Create and last updated time ranges

  Endpoint in addition support pagination and partitioning. Check out detailed API documentation [here](/api/v1/#operation/listTimeSeries).

## 2019-10-16

### Events

#### Added

- [Added the ability to sort events on startTime, endTime, createdTime, and lastUpdatedTime](https://docs.cognite.com/api/v1/#operation/advancedListEvents)

## 2019-10-02

### Sequences

#### Added

- Introducing the new **sequences** core resource type that lets you store numerically indexed multi-column rows of data. Connect your sequences to physical assets and to their source systems through `externalId` and metadata support. Read more [here](./concepts/resource_types/sequences.html).

## 2019-09-30

### 3D

#### Added

- Added endpoint to get multiple nodes for a 3D model by their IDs.
- Added endpoint to get asset mappings for multiple node IDs or asset IDs.

## 2019-09-23

### Files

#### Added

- Added support for filter on `rootAssetIds` in files GET /files (using query parameter) and POST /files/list (in request body).

## 2019-09-16

### Assets and Events

#### Added

- Added support for `partition` in `/assets` and `/events` to support parallel retrieval. See guide for usage [here](./concepts/pagination)

## 2019-08-22

### 3D

#### Added

- Added the query parameter `intersectsBoundingBox` to the list asset mappings endpoint. The parameter filters asset mappings to the assets where the bounding box intersects (or is contained within) the specified bounding box.

## 2019-08-21

### Files

#### Added

- Added support for sourceCreatedTime and sourceModifiedTime fields in files v1 endpoints.

### Assets

#### Added

- Allow the parent asset ID to be updated. The root asset ID must be preserved, and you can not convert a non-root asset to a root asset or vice versa.
- Support for ignoreUnknownIds when deleting assets.

## 2019-08-15

### 3D

#### Added

- Properties field for 3D nodes, extracted from uploaded 3D files.
- Ability to filter nodes with a specific set of properties.

## 2019-07-24

### Files

#### Changed

- Allow lookup of names with length up to 256 characters (was 50) for GET /files and POST /files/search operations.
- Allow creating and retrieving files with mimeType length up to 256 characters (was 64).

## 2019-07-15

### Time series

#### Added

- Added query parameter `rootAssetIds` to list time series endpoint. Returns time series that are linked to an asset that has one of the root assets as an ancestor.

## 2019-07-11

List of changes for initial API v1 release in comparison to previous version - API 0.5

### General

#### Added

- Support for `externalId` added across resource types. `externalId` lets you define a unique ID for a data object. Learn more: [External IDs](concepts/external_id.md)
- `externalIdPrefix` added as a parameter to the list events, assets and files operations.
- Richer filtering on the list assets, files and events operations.
- Search, list and filter operations for assets, events and files now support filtering on source and metadata field values.

#### Changed

- Core resources standardize on HTTP methods and URI naming for common operations such as search, partial updates, delete, list and filter
- API responses are no longer wrapped in a top level `data` object.
- Standardized pagination across resources through `limit`, `cursor` and `nextCursor` parameters.
- The `limit` parameter no longer implicitly rounds down requested page size to maximum page size.
- Standardized error responses and codes across all resources. Errors across CDF can be parsed into a single model.
- Overall improvements to reference documentation. Including documented input constraints, required fields, individual attribute descriptions.

#### Removed

- The `sourceId` field has been removed from resources. Use `externalId` instead of `sourceId`+`source` to define unique IDs for data objects.
- Sorting is removed from the search operations for files, assets, events and time series. Results are sorted by relevance.
- `offset` and `previousCursor` parameters are no longer supported for pagination across resources.
- Fetching an asset subtree is no longer supported by files, assets, events and time series.

### Assets

#### Added

- Ability to select only root assets though new `root` filter.
- Added the `rootId` field to specify the top element in an asset hierarchy.
- Added the ability to filter by the root asset ID. This allows you to scope queries for one or many asset hierarchies.
- List Assets allows for filtering assets belonging to set of root assets, specified by list of asset internal ids. New query parameter: `rootIds`.
- Filter and Search Assets allows or filtering assets belonging to a set of root assets, specified by combination of internal and external asset identifiers. New body attribute: `rootIds`.

#### Changed

- Updating a single asset is no longer supported through a separate endpoint. Use the update multiple endpoint instead.
- Delete assets by default removes only leaf assets (assets without children). New parameter 'recursive' allows for enabling recursive removal of the entire subtree of the asset pointed by ID (API 0.5 behaviour).

#### Removed

- Overwriting assets is no longer supported.
- Filtering assets by their complete description is no longer supported.
- Locating assets fuzzily by name has been removed. Instead, search for assets on the `name` property.
- When searching assets, querying over both name and description in the same query is no longer supported.
- The experimental query parameter `boostName` has been removed from the search for assets operation.
- Removed the `path` and `depth` fields.

### Events

#### Added

- Events can now be filtered on asset ID in combination with other filters.
- New filter `rootAssetIds` allows for narrowing down events belonging only to list or specified root assets. Supported by Filter and Search API

#### Removed

- Events can no longer be filtered by empty description.
- The 'dir' parameter has been removed from the search events operation.

### Files

#### Added

- Filtering files by `assetIds` in list files operations now support multiple assets in the same request.

#### Changed

- Download file content has changed from HTTP GET to HTTP POST method.
- We have renamed the `fileType` field to `mimeType`. The field now requires a MIME formatted string (e.g. `text/plain`).
- We have renamed the `uploadedAt` field to `uploadedTime`.
- Resumable is now the default behavior for file uploads.
- Update metadata for single files is no longer supported by a separate operation. Instead, use the update multiple operation.

#### Removed

- Replace files metadata endpoint has been removed.
- Directory has been removed as a property of files.
- Updating the `name` or `mimeType` of a file through the update multiple files operation is no longer supported.
- Query parameter for specifying the sort direction has been removed from list all files operations.

### Raw

#### Changed

- Raw has changed structure to become resource-oriented. The URL structure has changed.
- Recursively delete of tables and rows when deleting a database is now the default behavior without a control parameter.

### Time series

#### Added

- Support for adding datapoints by `id` and `externalId` of time series. Adding datapoints to time series by `name` has been removed.
- Add ability to update the new `externalId` attribute for time series.
- Allow to set `externalId` during creation of time series. `ExternalId` requires uniqueness across time series.
- Consolidate multiple APIs to allow adding datapoints into a single endpoint. Allows datapoints to be added to multiple time series at the same time.
- Retrieve data points by using `id` and `externalId` of the time series.
- Time series created through API v1 are not discoverable by API 0.3, 0.4, 0.5 and 0.6 by default. Introduce the option to enable this compatibility by setting new attribute - `legacyName` on time series creation. Value is required to be unique.

#### Changed

- Get latest datapoints has been reworked. Introduces support for `id` and `externalId` lookup as well retrieval for multiple time series within the same request.
- Time series name is no longer limited by uniqueness. Note that time series (meta objects) created by API v1 will not be discoverable by older API versions.
- Delete time series endpoint has been redesigned to allow deletion of multiple time series by `id` and `externalId`.
- Delete single and multiple datapoints endpoint has been redesigned and consolidated into a single endpoint. New delete allows selection of multiple time series and time ranges by `id` and `externalId`. Selecting by `name` is no longer available.
- Update multiple time series restructured to support lookup by `externalId`.
- Retrieve time series by ID endpoint restructured adding the ability to get time series by `externalId`.
- Set limit for data point value to min -1E100, max 1E100.

#### Removed

- Experimental feature for performing calculations across multiple time series (synthetic time series), function and alias attributes are no longer available.
- The experimental query parameter `boostName` has been removed from search operation.
- Short names for aggregate functions are no longer supported.
- Ability to remove time series by `name` have been removed as names are no longer unique identifiers.
- Select multiple time series and time ranges by `name` is no longer available.
- The ability to update `isString` and `isStep` attributes is removed. The attributes are not intended to be modified after creation of time series.
- The endpoint for updating single time series is removed. Use the update multiple time series endpoint instead.
- Remove ability to overwrite time series object by `id`. Use the update multiple time series endpoint instead.
- The ability to retrieve time series matching by `name` has been removed. Use `externalId` instead.
- The ability to retrieve by `id` from a single time series has been removed. Use retrieve multiple datapoints for multiple time series instead.
- The ability to retrieve time-aligned datapoints through "dataframe" API has been removed. Similar functionality is available through our supported SDKs.
- The ability to add datapoints to time series by `name` has been removed.
- The ability to look up by time series `name` has been removed.

### IAM (Identity and access management)

#### Added

- The login status endpoint includes the ID of the API key making the request (new attribute: `apiKeyId`), if the request used an API key.

#### Changed

- The user resource type has been replaced with service accounts. Users from previous API versions are equivalent to service accounts.
- Adding, listing and removing users from a group has been replaced by equivalent operations for service accounts.
- Retrieve project returns a single object instead of a list.
- API keys endpoints for list/create rename `userId` attribute to `serviceAccountId`.

#### Removed

- List and create groups no longer use the `permissions` and `source` attributes.

### 3D

#### Added

- New 3D API lets you upload and process 3D models. Supported format: FBX.
- Ability to create and maintain multiple revisions for the 3D models.
- API for mapping relationships between 3D model nodes and asset hierarchy.
