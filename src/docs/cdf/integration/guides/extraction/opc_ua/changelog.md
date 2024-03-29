---
pagination_next: null
pagination_prev: null
---

# What's new?

This article documents the ongoing releases of the OPC UA extractor.

## 2.7.0 2022-05-12

---

- Update docker image to correctly use .NET 6
- Improve configuration tool logging.
- Add support for cron expressions for certain configuration options.
- Add option to run the extractor entirely without an OPC UA server.

## 2.6.2 2022-02-23

---

- Fix issue causing history to not be read when using CDF as source.

## 2.6.1 2022-02-01

---

- Do not set history read end to zero if `historyEndTime` is set.
- Add option to log extra tracing from OPC UA.

## 2.6.0 2022-01-27

---

- Further improvements to logging.
- Transformation to let timeseries create events instead of datapoints.
- Option to cap size of failure buffer.
- Option to call a CDF function after finished browse.
- Fix issue where history would not be restarted after a normal reconnect.

## 2.5.3 2021-12-09

---

- Catch errors on JSON serialization.
- Allow certificate expiry to be configured.
- Update OPC UA SDK to give better performance for PubSub.
- Automatically recreate dead subscriptions.

## 2.5.2 2021-11-19

---

- Improvements to logging.
- Update extractor to .NET 6.
- Add **Historizing** filter to transformations.
- Add new option to require **Historizing** when reading history.
- Several minor fixes and performance improvements.

## 2.5.0 2021-10-29

---

- Wait for config file to exist when starting extractor.
- Use NodeSet2 files as source for nodes instead of the server.
- Throttle browse operations.
- Add name of event type to CDF event metadata.
- Correctly handle nodes that are discovered during browse but do not actually exist.
- Limit config values based on server capabilities, if reported.
- Improve logging of exceptions.
- Add support for extraction pipelines.
- History node parallelism is now properly shared, so that the configuration option can reflect available continuation points directly.
- Add PoC for OPC UA PubSub using exposed server configuration.
- Log modified config on startup.
- Specify timestamps using relative syntax like _2d-ago_, and timespans like _2m_.
- Optionally map nested variables to CDF, instead of treating them as metadata.
- Optionally estimate size of OPC UA arrays based on value on startup.
- Optionally log OPC UA SDK trace.
- Optionally browse in background when reading from CDF.
- Fix issues with the service manager.
- Fix logging of transformations.
- Considerable internal changes, using new ExtractorUtils infrastructure.

## 2.4.0 2021-08-26

---

- Option to store additional metadata in RAW.
- Service version and installers for Linux.
- New command-line interface.
- Service version and standalone now use the same executable.
- Option to suppress certificate errors.
- Option to start extractor using nodes in CDF RAW.
- Fix issues when serializing certain built in OPC UA types.

## 2.3.0 2021-08-10

---

- System to obtain server diagnostic metrics.
- Authenticate using x509 certificates
- Throttle history reads.
- Configure the OPC UA data change filter.
- Write asset and timeseries metadata as JSON when pushing to RAW.
- Disable history or subscriptions on all or specific nodes.
- Automatically restart history without restarting the extractor.
- Use AccessLevel to determine which nodes to read from.
- Fix issue in standalone version of extractor.

## 2.2.0 2021-04-06

---

- Reduce memory usage.
- Support pushing OPC UA references as CDF relationships.
- Add option to get metadata for OPC UA type definition.
- Better support for complex OPC-UA structures, built in types should now be written in a readable format even if the extractor lacks explicit support.
- Improve performance of configuration tool.
- Add support for dataset external id.
- Add new system for specifying flexible transformations to the server hierarchy, to ignore or treat nodes as properties.
- Add support for arbitrarily nested properties.
- Add support for nested event properties.
- Include SourceName when pushing events.
- The extractor now allows reading object- and variable types as assets.
- Allow specifying multiple source nodes.
- Fix issue with the extractor generating multiple log files.
- Fix issue caused by the server returning null from history read.
- Fix empty values on non-base inherited event properties.
- Numerous small fixes and improvements.

## 2.1.0 2020-09-11

---

- Performance improvements
- Automatic configuration of events, it is no longer necessary to manually configure each event type.
- Automatic detection of event emitters, using the EventNotifier attribute.
- Fix crash on rebrowse if there are properties with null value in the server.
- Add support for token-based authentication to CDF.
- Add option to skip pushing asset and timeseries data entirely, only creating basic timeseries.
- Update to .NET 5.0.

## 2.0.0 2020-07-17

---

- New config schema
- Use common libraries with other .NET extractors.
- Option to push asset hierarchy and timeseries data to CDF RAW.
- Update metadata in both RAW and Clean.
- Dynamic handling of data types.
- Improvements for very large servers.

## 1.2.0 2020-06-08

---

- Add new MQTT Pusher
- Add MQTT Bridge application
- Add Windows service with MSI installer
- Add support for late initialization if a destination is unavailable on restart
- Add state-storage to persist state between restarts
- Add LiteQueue as alternative to buffering to binary files
- Add buffering on failure for events
- Add persisting of influx-buffer state
- Improvements to reliability and stability

## 1.1.0 2020-02-18

---

- Add support for events to influxdb pusher
- Improve buffering on failure, add support for buffering to influxdb
- Add support for Backfill/Frontfill logic.
- Add new configuration tool to analyze server structure and generate a suggested config file.
- Add support for simple command-line arguments.
- Numerous fixes. Notably, custom datatypes were broken, as was the ForceRestart option.

## 1.0.0 2019-11-07

---

- Moved responsibility for handling non-finite datapoints to the pushers, resulting in a small change to the config scheme.
- Improved user feedback on common OPC UA errors
- Add support for integer/bool/string datatypes to influx pusher
- Some added metrics
- Updated dependencies
- Numerous bugfixes

## 0.10.0 2019-10-21

---

- Node discovery using either periodic restarts or audit events
- Improved performance on fetching latest timestamp from CDF

## 0.9.0 2019-10-21

---

- Update CogniteSdk to public version
- Improvements to restarting and re-browsing
- Fix limit of pushes to CDF, and make larger data batches work

## 0.8.1 2019-10-07

---

- Config option for earliest history-read timestamp

## 0.8.0 2019-10-07

---

- Add support for reading events from OPC UA and pushing to events in CDF.
- Update to .NET Core 3.0, trim and optimize binaries, and deploy as a single platform specific executable

## 0.7.0 2019-10-03

---

- Configurable chunk sizes to CDF and OPC UA server.
- Disable history synchronization with Source.History = false.
