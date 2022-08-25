---
pagination_next: null
pagination_prev: null
---

# Create a versioned time series

Use AIR to interact with synthetic time series. You can also [visualize](customtsvisualization.md) synthetic time series.

:::info Note
The following properties are reserved by AIR:

- `data_set_id`

:::

## Time series in AIR

Use the AIR SDK to create versioned time series with a similar syntax as in the Cognite SDK. [Go to AIR SDK](https://pypi.org/project/cognite-air-sdk/).

The following example shows how to create a time series in AIR. The AIR client is instantiated in line 5. We then retrieve the time series as it has been configured in the [config.yaml](../concepts/configurationfile.md).
Next, the prefix "my*ts*" and the time series external ID create a new unique external ID for the synthetic time series.
If the name would be hardcoded to "my_ts" without the time series external ID, only one schedule could be deployed since different schedules would try to write to the same time series.

:::info NOTE
The `retrieve` command is either creating, updating, or retrieving the time series. This is necessary because it is unclear when the code will run for the first time or when the model version improved, and a backfilling is triggered.
:::

```python
from cognite.air import AIRClient


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    time_series = air_client.retrieve_field("my_time_series")
    air_client.time_series.retrieve(
        external_id=(
            "my_ts_"
            + time_series.external_id
            + air_client.schedule_asset_ext_id # add schedule external id to make time series unique
        ),
        name=f"My Time Series created from {time_series.name}",
        )
```

## How to version the time series

When a major or minor version number is updated in the [config.yaml](../concepts/configurationfile.md) it triggers a [historic evaluation](backfilling.md). The AIRClient then checks whether the version of the current time series is still relevant. If not, a new time series is created with the same external ID. The stale time series with the old version number gets the version attached to its external ID. This way, the time series can be referenced with the same external ID without the need of version changes.

## Visualize the time series

To visualize a calculated time series in the front end, set the argument `visualize` to `True`.

**Example**

```python
from cognite.air import AIRClient


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    time_series = air_client.retrieve_field("my_time_series")
    air_client.time_series.retrieve(
        external_id=(
            "my_ts_"
            + time_series.external_id
            + air_client.schedule_asset_ext_id # add schedule external id to make time series unique
        ),
        name=f"My Time Series created from {time_series.name}",
        visualize=True)
```

## Adding additional data to the time series

You can add additional data to the time series as if it is a normal time series. Note that the metadata has to be always present when retrieving the time series.

```python
from cognite.air import AIRClient


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    time_series = air_client.retrieve_field("my_time_series")
    air_client.time_series.retrieve(
        external_id=(
            "my_ts_"
            + time_series.external_id
            + air_client.schedule_asset_ext_id # add schedule external id to make time series unique
        ),
        name=f"My Time Series created from {time_series.name}",
        metadata={"my_metadata_field": "some info"}
        )
```

## Attaching the time series to an asset

You can connect the time series to an asset of your choice. However, only the current version of the time series is connected to that asset. Older versions are moved into the AIR asset hierarchy, to prevent creating a messy asset hierarchy. If no asset ID is specified, the time series will be attached in the AIR asset hierarchy.

```python
from cognite.air import AIRClient


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    time_series = air_client.retrieve_field("my_time_series")
    air_client.time_series.retrieve(
        external_id=(
            "my_ts_"
            + time_series.external_id
            + air_client.schedule_asset_ext_id # add schedule external id to make time series unique
        ),
        name=f"My Time Series created from {time_series.name}",
        asset_id=12345
        )
```
