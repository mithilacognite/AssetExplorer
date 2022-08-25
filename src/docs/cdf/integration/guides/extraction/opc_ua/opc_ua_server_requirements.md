---
pagination_next: null
pagination_prev: null
---

# Server requirements

Depending on the features used, the OPC UA extractor places certain requirements on the server. If these are not fulfilled, the feature will not work, and the extractor may crash.

## Base

These services are required for all servers the OPC UA extractor connects to:

- **Session management** - The server must support connections from clients and be able to manage at least one session.
- **Browse and BrowseNext** - These services are used for mapping the node hierarchy and must be supported. If the server does not support **BrowseNext**, it must return all child nodes on a single request. It is possible to get around this limitation by adjusting browse-chunk/browse-nodes-chunk config options.
- **Read** - The server must support the **Read** service in order to read attributes for nodes.

## Variables

Any server that has data variables to read from must support these:

- **Create Subscription** - The client must be able to create new subscriptions.
- **Create Monitored Item** - The client must be able to create new monitored items on an existing subscription.
- **Publish** - The server must handle publish requests from the client in a good way.
- **Notifications on data changes** - The server must provide clean notifications on data changes to the client.

## History

To read from a server with **History** set to `true`, the server must support the following:

- **HistoryReadRaw** - Data is only read using the **ReadRaw** mode history read. The server must support this.
- **ContinuationPoints** - The server must return a `continuationPoint` if a single request is insufficient to fetch all data points for a given node.
- **Historizing** - Any variable that supports history must have its **Historizing** attribute set to `true`.

## Backfill

To backfill, the server must support the following:

- **History read ordering** - If start/endtime is reversed in a `historyRead` call, the data must be returned in reverse order. If this is not the case, backfill may not work properly.

## Arrays

To read from a server with a non-zero `MaxArraySize`, the following must be true:

- **ArrayDimensions** - Must be of length `1`, and be set for all variables that should be read.
- **ValueRank** - Must be set to `0` or higher, as `-1` indicates a scalar.

## Events

To read events from the server, it must support the following:

- **Create Subscription** - The client must be able to create new subscriptions.
- **Create Monitored Item** - The client must be able to create new `monitoredItems` on an existing subscription.
- **Publish** - The server must handle publish requests from the client in a good way.
- **Notifications on events** - The server must provide clean notifications on events to the client, on the form specified in the specifications.
- **Filtering of events** - The server must support event filters, with at a minimum the `InList`, `Equals`, and `And` operators. The extractor filters clientside, but the server must tolerate a filter option, at the very least, and respect the `SelectClauses` to deliver only requested fields.
- **SourceNode** - The server must set the `SourceNode` property on all events that the Extractor is going to map to destinations.
- **EventNotifier** - The server should correctly set the `EventNotifier` property. If this is not done, event emitters will have to be manually added.

## History

In addition to the base event properties, to read history, the server must support:

- **HistoryReadEvents** - Reading events from history.
- **ContinuationPoints** - The server must return a `continuationPoint` if a single request is insufficient to fetch all events for a given emitter.
- **Filtering in history** - Same as the general case, but for history. Note that in both cases it is possible for a server to just ignore filters, though the `SelectClause` must be respected.

## Auditing

In addition to the base event properties, to support node discovery using auditing, the server must support:

- **AuditingEvents** - Of at least two types, `AuditAddNodesEventType`, and `AuditAddReferencesEventType`. These must be emitted from the server node and provided to the client.
