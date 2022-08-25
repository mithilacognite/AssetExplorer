---
pagination_next: null
pagination_prev: null
---

# Historic evaluation

AIR provides historic evaluation through our backfilling service. The service calls your function sequentially (meaning it will wait for each run to finish before calling the function the next time) until you decide backfilling is done.

1. You have to enable `backfill: True` in the [config.yaml](../concepts/configurationfile.md). Backfilling gets triggered with every bump of the major or minor part of the version.
1. You should use the [`cognite-air-sdk`](https://github.com/cognitedata/cognite-air-sdk).

A typical backfilling job can look like this:

```python
from cognite.air import AIRClient
from cognite.air.ts_utils import current_time_in_ms
from datetime import datetime, timezone

WINDOW_SIZE_MS = int(5 * 3600 * 1e3)
BACKFILLING_WINDOW_SIZE = = int(5 * 24 * 3600 * 1e3)

def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    your_ts = air_client.retrieve_field("ts_ext_id")

    # check if backfilling is in ongoing
    if air_client.backfilling.in_progress:
        # make sure that only backfilling job runs at a time
        with air_client.backfilling.acquire_lock():
            first_timestamp = your_ts.first().timestamp
            start = air_client.backfilling.latest_timestamp or first_timestamp
            # if end is larger than now, mark backfilling as completed and break
            if start > current_time_in_ms():
                air_client.backfilling.mark_as_completed()
                break
            end = start + BACKFILLING_WINDOW_SIZE
            operation(my_ts.external_id, start, end)
            air_client.backfilling.update_latest_timestamp(end)
    else:
        start = current_time_in_ms()
        end = start + WINDOW_SIZE_MS
        operation(my_ts.external_id, start, end)


def operation(my_ts_external_id, start, end)
    dp = client.datapoints.retrieve(external_id=my_ts_external_id, start=start, end=end)
    # some operation that is done with the data
```

The `AIRClient` is initiated and the fields, which are defined in the `config.yaml`, are retrieved. Then, the service checks if the backfilling is still in progress:

- if it is not in progres, the code executes the rest where end resembles the current time in milliseconds.
- if backfilling is still in progress, a lock is aquired to make sure that backfilling executions are happening sequentially.

Deciding where to start the backfilling is important. Once the start time is in the future, backfilling is done. After the essential `operation`, the backfilling timestamp needs to be updated which happens in the last two lines before the return statement.
