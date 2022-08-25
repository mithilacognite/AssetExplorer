---
pagination_next: null
pagination_prev: null
---

# Create an alert

AIR allows end-users to subscribe to specific groups. If an alert is created in that group, everyone who subscribes to it will receive an e-mail. The underlying notifications engine in AIR relies on the data scientist to use it to make the most sense for the use case. For example, if the data scientists do not want an alert to be sent out more than once a day, they have to develop a system that tracks when the last alert was written and check if the model can send an alert again.

:::info Note
The following properties are reserved by AIR:

- `data_set_id`
- `type`
- `subtype`
- `asset_ids`

:::

## Implementation

This code snippet creates an event every time it runs. This will result in an e-mail to the users who subscribe to this monitoring group. The alert will show up in the front end as an active alert (until it is closed by the user).

```python
from cognite.air import AIRClient
from cognite.air.ts_utils import current_time_in_ms
from cognite.client.data_classes import Event


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    event = Event(start_time=current_time_in_ms() - 100, end_time=current_time_in_ms())
    air_client.events.create_alert(event)
```

## Create an alert without sending notifications

When doing a [historic evaluation](backfilling.md), you do not want to send notifications about incidences that happened a long time ago. Setting `sendNotification` to `False` in the metadata creates a **closed** alert and no notification will be sent.

```python
...

    event = Event(
        start_time=current_time_in_ms - 100,
        end_time=current_time_in_ms,
        metadata={
            "sendNotification": "False"
        }
        )
    air_client.events.create_alert(event)
```

## Create alerts that do not show up

If you want to create an alert that should not end up in the front end, set the metadata field `show` to `False` and set `sendNotification` to `False`.

```python
...

    event = Event(
        start_time=current_time_in_ms - 100,
        end_time=current_time_in_ms,
        metadata={
            "sendNotification": "False",
            "show": "False"
        }
        )
    air_client.events.create_alert(event)
```

## Retrieve alerts

To retrieve all alerts for the current version of this schedule, you can run the following code snippet. The `list_alerts` functionality works as the normal Cognite Python SDK does. Hence, you can filter on specific metadata fields, or other fields.

```python
from cognite.air import AIRClient
from cognite.air.ts_utils import current_time_in_ms
from cognite.client.data_classes import Event


def handle(data, client, secrets):
    air_client = AIRClient(data, client, secrets)
    alerts = air_client.events.list_alerts()
```
