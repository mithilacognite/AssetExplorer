---
pagination_next: null
pagination_prev: null
---

# About the Cognite OPC UA extractor

The **Cognite OPC UA extractor** reads time series, events, and asset information via the open OPC UA protocol. The extractor copies the OPC UA node hierarchy to Cognite Data Fusion (CDF), then **streams data and events to time series** in CDF.

## OPC UA extractor features

The OPC UA extractor supports:

- **Security** using a username/password or automatically generated client/server certificates.
- **Mapping a node hierarchy** from an arbitrary root node to CDF.
- **Subscribing to data changes** in OPC UA and pushing these to destinations.
- **Pushing to multiple destinations**, currently only InfluxDB databases and CDF.
- **Pushing to multiple projects** in CDF or multiple InfluxDB databases.
- **Reading historical data** from OPC UA, starting from the earliest last point found in all push destinations.
- **Using properties** in OPC UA as metadata in CDF.
- **Numerical data types** in OPC UA. By default, these are basic types, but you can add additional types in the configuration.
- **String values**: Non-array data types in OPC UA can be converted to strings and then pushed to CDF.
- **Variables** in - UA with an array-type data type of fixed length can be mapped to multiple different measurements in influx or time series in CDF.
- **Setting up a list of events** during the configuration. The event properties are automatically mapped and used as metadata in CDF. <!--The source node of each event is used as XXX-->
- **Using different emitters** for events than the server node.
- **Discovering new nodes** through auditing or by periodically re-browsing the node tree.

<!--## Node model types

OPC UA is built on a model of nodes. It is often represented as a hierarchy, and treated as such, but there is no requirement of any such structure. The relevant node types are as follows:

- **Objects** are used for organization and structure. They can represent anything from physical assets to simple abstractions for organizing other nodes. These are represented with **Assets** in CDF.
- **Variables** are nodes on the same level as objects, but they also have a data type and a value, which may change over time. These are generally represented as **time series** in CDF. Changes to variables may be stored in a history.
- **Events** are not nodes, but instead transient. These are used to notify clients about occurrences on the server or in the source system. These are mapped to **Events** in CDF.
- **DataTypes** are nodes in the hierarchy. These are used to identify the variables with a valid mapping to CDF, and how to map them.
- **ObjectTypes** are nodes used by the extractor to map event attributes, since the connected servers often use custom type events.
- **VariableTypes** are nodes used by the extractor to assess if a variable is to be used as a time series or a piece of metadata.-->
