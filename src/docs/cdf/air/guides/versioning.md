---
pagination_next: null
pagination_prev: null
---

# Versioning a model

Data scientists can version their models in AIR by increasing the version number in the [configuration file](../concepts/configurationfile.md). Versioning a model has multiple effects, such as restarting a [historic evaluation](backfilling.md).

## How to version

The field `modelVersion` should receive a string that is structured in the following way: `INTEGER.INTEGER.INTEGER` such as this `1.0.3`. Following semantic versioning, the first number represents a major release, the middle number a minor release, and the third number a patch or bug fix. AIR ignores the bug fix number and assumes that the functionality is the same. Hence, the third number can be bumped up without triggering any event.

## When triggering historic evaluation

When the major or minor version is increased, a new historic evaluation is triggered. This allows data scientists to fundamentally change their model/code and rerun it on all schedules. If you overwrite or delete an alert or time series that are created through the AIR SDK, they remainl versioned in AIR. (Read more about [alerts](alert.md) and [time series](createts.md)).

## Versioning events and alerts

The AIR SDK handles the versioning by writing it to a protected metadata field on the event. When retrieving events through the AIR SDK, only events that match the current version of the deployed model will be returned. The same is true for the front end: only alerts that match the current model version will be shown to the end-users.

## Versioning time series

When versioning time series, the AIR SDK keeps the same external ID on the current version. Once a new version is released, the old time series is renamed. This way the front end and other services can always fetch the right time series.
