---
title: Modeling asset structures
pagination_next: null
pagination_prev: null
---

# Modeling asset structures with relationships

Typically, asset resources originate from a maintenance system, and the hierarchical structure from the maintenance system often defines how the asset resources are organized in Cognite Data Fusion (CDF).

The [**relationships**](../../dev/concepts/resource_types/relationships.md) resource type allows you to organize the assets in other structures **in addition to** the standard hierarchical asset structure.

For example, you can choose to organize the assets by their physical **location**, where the grouping nodes in the hierarchy are buildings and floors, rather than systems and functions. Another example is to build a graph structure that allows you to navigate assets by mimicking their physical **connections** through wires or pipes.

## Building asset structures

When you build an asset structure, think of the **assets** as the **nodes** in the graph or hierarchical structure, and **relationships** as the **edges**. The **relationship type** distinguishes a structure from other existing structures.

Each asset object can have one of these roles:

- **Grouping node**. A logical grouping of function nodes for a particular aspect. For example, the physical grouping of equipment on a building floor.

- **Function node**. The functional location in the system. For example, the function of a pump in a production system.

- **Item node**. A physical item that implements a function node. For example, a physical pump with a unique serial number.

## Modeling asset hierarchies

You can group assets by different aspects. One aspect can be the **functional location** of the asset. You can, for example, group assets by first their functional role, then the functional roles by the sub-systems they belong to, sub-systems by systems, and systems into plants.

Another aspect may be the asset's **physical location**, where you, for example, first group assets by the room they are located in, then rooms by the floor they are on, the floors by buildings, and buildings by cities. For example:

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/concepts/location_hierarchy.png" alt="Location hierarchy" width="40%"/>

## Modeling process flows

You can connect assets to mimick the process flow they are part of, for example, in a piped system where fluid flows between assets through pipes or in an electrical system where power flows between assets through electrical wires.

You can use asset resources to represent all the system's relevant functions, and a relationship type, for example, `flowsTo`, to create the connection between the asset objects. For example:

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/concepts/process_flow.png" alt="Production flow" width="40%"/>

## Modeling moving equipment

Throughout its lifetime, physical equipment can serve different roles in a system. For example, a physical pump can be moved between functional locations to meet the changing capacity needs in a system. You can use relationships to model how physical items (asset = item node) have served under different functional nodes (asset = function node) over time using the relationship's time range properties. For example:

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/concepts/moving_equipment.png" alt="Moving equipment" width="40%"/>
