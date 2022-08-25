---
pagination_next: null
pagination_prev: null
---

# Cognite PI Extractor

The **OSISoft PI Server** collects, stores, and organizes data from sensors and control systems and is widely used across many industries. The OSISoft PI Server stores information as **PI Points** in a **PI Data Archive**. PI Points correspond to time series in Cognite Data Fusion (CDF).

The **Cognite PI Extractor** connects to the PI Data Archive, detects and extracts time series data, and transfers the data to your CDF project to make time series available in near real-time. The extractor streams data continuously, and in parallel, ingests historical data (backfilling) to make all time series data available in CDF.

## Server requirements

You can install the extractor on a physical server or on a virtual machine on-premises or in the cloud.

| Hardware requirements                                                                                                 | Software requirements                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The **minimum** requirements are: <ul><li>2 CPUs</li><li>4 GB RAM</li><li>256 GB HD for logging and storage</li></ul> | <ul> <li>Windows Server 2016</li><li>.Net Framework 4.6.2</li><li>PI AF SDK 2018 distributed as part of the PI AF Client 2018 R2 with a PI license that grants access to the download.</li></ul> |

:::info Note

The hardware requirements depend on the number of PI Points in the Data Archive, the rate of real-time data points, the volume of historical data, and the rate at which the extractor checks for new PI Points.

:::

## Before you start

Before you configure and deploy the Cognite PI Extractor, make sure you have:

### PI system prerequisites

- A username and password for connecting to the PI server where the data is stored.
- Network access to the PI system, i.e. to each PI server on TCP port 5450, including PI trust and AD authentication.
- All PI Points must have unique names.

### CDF system prerequisites

- Network access to the CDF cluster (firewall opening).
- An API key for the CDF project where you want to upload the data. Go to [Access Management](../../../access/index.md) in CDF and create a service account with the following capabilities:
  - `timeseries:read` and `timeseries:write`
  - `raw:read`, `raw:write`, `raw:list` (for state store configured to use Cognite Raw)
  - `events:read`, `events:write` (for logging extractor incidents as events in CDF)
- Optional: A unique `externalId` prefix time series namespace in CDF.

## How the extractor processes data

The Cognite PI Extractor connects to the PI Data Archive (the source), extracts the time series data (PI Points) according to your filters, creates corresponding time series in CDF, and then feeds all data points in the PI Point to the time series in CDF. The extractor supports CDF [data sets](../../../data_governance/concepts/datasets/index.md), and each extractor can push data into one data set.

In CDF, the time series get an `externalId` composed of a configurable prefix and the PI Point name. If the PI Points on the PI server do not have unique names, then the extractor can be configured to use the PI Point ID instead.

The extractor does not map the times series to assets in CDF but instead makes the data available to contextualization services for further processing.

### Extraction modes

The Cognite PI Extractor runs one or more of these tasks concurrently:

- **Backfill**: fills in historical data backward from the **first** data point in CDF.
- **Frontfill**: fills in historical data forward from the **last** data point in CDF.
- **Streaming**: adds data points to CDF in **real-time**.

The **first time** you start the extractor, it creates all the necessary time series in CDF and then begins to stream data points from the current time and to backfill the time series with historical data.

If the extractor **restarts** after a period of downtime, it resumes the backfill task and also starts a frontfill task to fill in the gap from when the extractor stopped and the current time. When the frontfill task has caught up, the extractor returns to streaming live data points.

The extractor maintains an extraction state for the time range between the first and last data point inserted into CDF. Only the streaming task can insert data points in CDF within this range. Any changes to historical values already existing in CDF will only be updated in CDF when the extractor is streaming data.

:::caution Important
The PI extractor can miss data updates on the PI server, for example if the extractor restarts while the PI server is getting historical updates. Any changes in PI within a time range that has already been extracted, will be picked up by streaming if the PI extractor is running while the change is made. If the PI extractor is not running while the change is made, the change is not replicated to CDF.
:::

The backfill and frontfill tasks extract **compressed** data points from the PI Data Archive, while the streaming task extracts **all** data points. The compression settings of your PI system may impact the quality of the data for your data models.

:::info note
CDF receives data points (from streaming) that may be later removed in PI by compression. For this reason, there may be more data points in CDF than in PI.
:::

### Time series processing

The extractor runs an update task on a schedule, by default every 24 hours, and when it re-connects to the PI server after downtime. The update task discovers new PI Points and adds the corresponding time series in CDF, including the metadata. If a PI Point has been deleted in the PI server, the extractor does not remove the associated time series in CDF. The extractor logs the deletion and keeps track of the number of deleted PI Points. The extractor resets the number when it restarts or re-connects to the PI server.

The mapping from PI Point attributes (metadata) and fields to time series attributes and metadata in CDF is:

| Source (PI Point)           | Destination (CDF)                           |
| --------------------------- | ------------------------------------------- |
| `engunits`                  | `Unit`                                      |
| `descriptor`                | `Description`                               |
| `PointType`                 | `IsString`                                  |
| `Name`                      | `Name`                                      |
| Attributes (filters below)  | `MetaData`, every value converted to string |
| `<prefix>` + `Name`         | `ExternalId`, `LegacyName`                  |
| `step` attribute equal to 1 | `IsStep`                                    |

The PIPointType maps to numeric (`IsString` = false) for `Digital`, `Float16/32/64`, `Int16/32` and `Timestamp`. All other types (including `String`) maps to `IsString` = true.

Internal bookkeeping attributes in the PI system are not included in the CDF time series metadata: `creationdate`, `creator`, `changedate`, `changer`, `ptowner`, `ptgroup`, `ptaccess`, `ptsecurity`, `dataowner`, `datagroup`, `dataaccess`, and `datasecurity`.

### Data points processing

Each data point in the source has a source timestamp, a generic value, and a `IsGood` flag.

The extractor sets **the source timestamp** in PI as the data point timestamp in CDF. Because the timestamp resolution in PI is higher than in CDF (milliseconds), multiple data points in PI can be mapped to the same timestamp in CDF. In the unlikely event that this should happen, the PI Extractor can not guarantee which data point it extracts to CDF.

The **`IsGood`** flag in PI signals there is an issue reading the value from the sensor or control system, for example because of a broken wire or the system is down. In these cases, the PI value may be a string description even though the PI Point has a numeric type. The extractor ignores data points with `IsGood = false`. For `IsGood = true`, it tries to convert the value to the type of the CDF time series. If the conversion fails, typically only for numeric time series in CDF, the data point is ignored. The extractor logs the number of ignored data points.

The extractor ignores PI's unit of measure (UOM) property per data point.

<!--
## Deploy

## Install
-->
