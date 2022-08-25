---
pagination_next: null
pagination_prev: null
---

# Define unique IDs with externalId

The external ID field, (`externalId`), is available in API v1 for time series, assets, events, files and sequences.
It lets you define a unique ID for each data object in Cognite Data Fusion (CDF) as an optional extension to the existing `id` field.

The purpose of external IDs is to:

- Avoid duplicates when you insert data.
- Avoid extra lookups when you update data.
- Maintain relationships between data objects from source systems.
- Use the time series `name` field for display instead of lookup.
- Give you a way of performing key-value lookups with keys you control that works the same across resources.

We strongly encourage that you set an `externalId` on all CDF resources.

## Properties of external IDs

The external ID is unique per resource type. An **asset** with `externalId=123` will **not** interfere with a **time series** with `externalId=123`.

If you try to create a data object with an existing external ID for a resource type, you will cause an error.

The field is **optional** and **mutable**, so users can choose to add external IDs to data objects that already exist in CDF. If you try to update the external ID to an existing external ID, you will will cause an error.

An empty external ID is not treated as a unique value.

The external ID is limited to 255 characters, and leading and trailing white spaces are not allowed. The external ID is case sensitive.

## Migrate from earlier API versions

For **time series** that were created in earlier versions of the API, the `name` field was **unique**, and the `externalId` field will automatically be populated with the value of the `name` field. The external ID is mutable, and you can override this value.

All **other resource types** created in earlier API versions will start with an empty `externalId` field.

## Key collisions

When you populate the external IDs it is important that you build a structure in each ID that avoids key collisions. For example, some databases use incrementing integers as row keys, and it's probably a good idea to use for instance `<database name>/<table name>/<row key>` as the external ID instead of just the row key.

## ID vs. external ID

The existing `id` field, which is a pseudo-random integer between 1 and 2^53-1, remains a valid way of doing key value lookup on data objects in CDF. All data objects still have an `id`, and `externalId` is an optional extension that lives side-by-side with it.

You can not specify both the `id` and the `externalId` in the same object when you do **lookups**. However, batch lookups in the same request, for example `/byids`, can mix `id` and `externalId` if each object only contains one of the fields.

We do **not** support external IDs in GET requests to `/resource/:externalId`, like we do with the existing `id` field. You must use the `POST resource/byids` endpoint instead.
