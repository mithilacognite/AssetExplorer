---
pagination_next: null
pagination_prev: null
---

# Visualize a calculated time series created in the model

A calculated time series in an AIR function can be visualized in the AIR front end.
[Read more](createts.md) about how to create a time series.

To visualize a calculated time series in the front end, set the argument `visualize` to `True`.

## Example

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
        visualize=True,

        )
```
