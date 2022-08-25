---
title: Hardware requirements
pagination_next: null
pagination_prev: null
---

# Hardware requirements for OPC UA extractor

The hardware requirements of the extractor depend on the configuration and server size.

## Memory

The extractor, at some points, replicates the entire node hierarchy and will buffer up to a few minutes of data points and events at a time. Running the extractor against a small server should take no more than 100 MB of memory, while running it against a larger server (> 1 million nodes) may take as much as 3-4 GB. If the server is relatively small, a VM with a single core and 1 GB of memory should be sufficient.

## CPU

In most cases, the bottleneck is the OPC UA server and the network and not the extractor. The OPC UA client operates over a single TCP connection and the extractor will generally not have to do more than some simple transformations of the data arriving over that connection. Heavy use of complicated regex transformations can cause issues, but those only apply on startup. Regular operation of the extractor does not require much processing power.

## Storage

By default, the extractor does not write to disk. The two reasons it may do so are:

- If the **failure-buffer** is configured to buffer data points to disk, the extractor may write an arbitrarily large amount of data. The data points are buffered directly, and if the connection to CDF is down for a few hours, with a few hundred data points per second, that may easily grow fairly large.

  If the intent is to use the buffer, and the server does not support history, we recommend that you give the extractor a decent amount of permanent storage. The data points are removed once the connection to CDF is re-established.

- The extractor is configured to write logs to disk. These will generally not be very large, unless verbose logging is enabled. We don't recommend verbose logging for production use.

## CDF capabilities

The extractor needs the following CDF capabilities on the given dataset, if specified:

- `timeseries:read`, `timeseries:write`, unless there are no variables mapped to timeseries on the server at all, this can be facilitated by adding a transformation to ignore or transform to properties the Variable NodeClass.
- `extractionpipelines:read`, `extractionruns:write` are needed for extraction pipelines.
- `assets:read`, `assets:write` if raw-metadata or skip-metadata are not set.
- `events:read`, `events:write`, if events are enabled.
- `raw:read`, `raw:write`, `raw:list`, if raw-metadata is enabled, or the state-store is set to use Raw.
- `relationships:read`, `relationships:write`, if relationships are enabled.
- `datasets:read`, if using dataset-external-id.
- `projectsAcl:list`, and `groupsAcl:list` if using OIDC tokens for authentication.
