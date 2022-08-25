---
pagination_next: null
pagination_prev: null
---

# Assets

In Cognite Data Fusion, the asset **resource type** stores the **digital representations** of objects or groups of **objects from the physical world**. Water pumps, heart rate monitors, machine rooms, and production lines are examples for those assets.

## About assets

Assets **connect related data from different sources**, and are core to identifying all the data that is relevant to an entity (**contextualization**) in Cognite Data Fusion.

All other resource types, for example time series, events and files, should be connected to **at least one** asset, and each asset can be connected to **many resources and resource types**. A pump asset can for example be connected to a time series that measures the pressure within the pump, to events that record maintenance operations, and to a file with a diagram of the pump.

Assets themselves are organized into **asset hierarchies**. For example, one asset can represent a **water pump** that is part of a larger **subsystem** asset on an **oil platform** asset.

At the top of each asset hierarchy is a **root asset** (for example an oil platform). Each project can have multiple root assets, and all assets under the root asset must have a **parent** asset.

:::info TIP
See the [assets API documentation](/api/v1/#tag/Assets) for more information about how to work with assets.
:::

## Structure an asset hierarchy

This example shows you how to structure the asset hierarchy for the fictional **SYSTEM 11**:

```
SYSTEM 11
└───Pump
│   └───Heating cable
└───Pump
```

Outlined in csv format, the system looks like this:

| name          | description               | externalId    | parentExternalId |
| ------------- | ------------------------- | ------------- | ---------------- |
| SYSTEM 11     | Sea water system          | SYSTEM_11     |                  |
| Pump          | Main pump for system 11   | PUMP_A        | SYSTEM_11        |
| Heating cable | Heating cable for pump A  | HEATING_CABLE | PUMP_A           |
| Pump          | Backup pump for system 11 | PUMP_B        | SYSTEM_11        |

When you structure an asset hierarchy, you can post all assets in one request.

1. Post the following request:

   ```http
   POST /api/v1/projects/<project>/assets
   Host: api.cognitedata.com
   ```

   With this request body:

   ```json
   {
     "items": [
       {
         "name": "SYSTEM 11",
         "description": "Sea water system",
         "externalId": "SYSTEM_11"
       },
       {
         "name": "Pump",
         "description": "Main pump for system 11",
         "externalId": "PUMP_A",
         "parentExternalId": "SYSTEM_11"
       },
       {
         "name": "Pump",
         "externalId": "Pump_B",
         "description": "Backup pump for system 11",
         "parentExternalId": "SYSTEM_11"
       },
       {
         "name": "Heating cable",
         "externalId": "HEATING_CABLE",
         "description": "Heating cable for pump A",
         "parentExternalId": "PUMP_A"
       }
     ]
   }
   ```

   The response body will look similar to this:

   ```json
   {
     "items": [
       {
         "externalId": "SYSTEM_11",
         "name": "SYSTEM 11",
         "description": "Sea water system",
         "metadata": {},
         "id": 4181031623333192,
         "createdTime": 1562764416913,
         "lastUpdatedTime": 1562764416913,
         "rootId": 4181031623333192
       },
       {
         "externalId": "PUMP_A",
         "name": "Pump",
         "parentId": 4181031623333192,
         "description": "Main pump for system 11",
         "metadata": {},
         "id": 2975365566518130,
         "createdTime": 1562764416913,
         "lastUpdatedTime": 1562764416913,
         "rootId": 4181031623333192
       },
       {
         "externalId": "Pump_B",
         "name": "Pump",
         "parentId": 4181031623333192,
         "description": "Backup pump for system 11",
         "metadata": {},
         "id": 1366019363753734,
         "createdTime": 1562764416913,
         "lastUpdatedTime": 1562764416913,
         "rootId": 4181031623333192
       },
       {
         "externalId": "HEATING_CABLE",
         "name": "Heating cable",
         "parentId": 2975365566518130,
         "description": "Heating cable for pump A",
         "metadata": {},
         "id": 3816457134628307,
         "createdTime": 1562764416913,
         "lastUpdatedTime": 1562764416913,
         "rootId": 4181031623333192
       }
     ]
   }
   ```

In addition to `externalId` you get a unique `id` field and value. References within CDF use that id, so `parentExternalId` is translated into that new unique identifier. Also, you have a new `rootId` field that gives you the id of the root asset.
