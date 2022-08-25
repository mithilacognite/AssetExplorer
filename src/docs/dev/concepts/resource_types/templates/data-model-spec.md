---
pagination_next: null
pagination_prev: null
title: Data modeling
---

# Model data with templates

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Early adopter
Templates is currently in beta testing and only available to customers via our Early Adopter program. For more information and to request to join the program, visit the [Flexible data modeling](https://hub.cognite.com/groups/flexible-data-modeling-early-adopter-208) group on the Cognite Hub.
:::

The data model is in [GraphQL Schema Definition Language](https://graphql.org/learn/schema) format. Each data model has many `type`s, which consist of `field`s with a specified `type`.

### Types, fields and more types

Each **type** contains fields that references another **type**, forming a `relationship`. You can also specify these **field**s as an array (list) of another **type**.

Use **`!`** to indicate that a field is **required** and that each instance of the template must contain the value.

To add comments, enter `"..."` above the field/type definition.

### Example data model

This example is a simple data model for a Covid-19 outbreak.

```graphql
type Demographics @template {
  "The number of people"
  populationSize: Int
  "The population growth rate"
  growthRate: Float
  metadata: Metadata
}

type Country @template {
  name: String!
  tag: [String]
  demographics: Demographics
  deaths: TimeSeries!
  confirmed: TimeSeries!
}

type Metadata {
  key: String
  value: String
}
```

In the example data model above:

- `Demographics` _type_ has `populationSize`, `growthRate` and `metadata` *field*s
  - `populationSize` must be an `Int` _type_
  - `growthRate` must be a `Float` _type_
  - `metadata` must be a `Metadata` _type_
- `Country` has a required _field_, and `name` must be specified for each instance of the `Country` type.
- `growRate` has a comment/description (_The population growth rate_). `populationSize` also has a comment/description (_The number of people_).

#### Categories of types

The following `type`s are available:

- **Primitives** - simple types like `String`, `Long`, `Int`, `Float`, and `Boolean`.
- **Predefined CDF types** - `Asset`, `TimeSeries`, `Sequence`, `File`, and `SyntheticTimeSeries`. These are types that can reference CDF resources, and provide access to fields in the CDF resources when they're being fetched. For more details, see [CDF types querying fields](../../resource_types/templates/data-query-spec#query-fields-for-cdf-types).
- **User defined** - any other types that're defined in the data model. In the exaple above, `Demographics`, `Country` and `Metadata` are examples of user defined types.

## Available editing features

The form UI in Fusion offers a limited set of features compared to what is possible via the Code Editor in the UI or in the SDKs.

|               | Modeling type       | Editing Form UI | SDK or Code Editor |
| ------------- | ------------------- | --------------- | ------------------ |
| Primitives    | String              | ✅              | ✅                 |
|               | Long                | ✅              | ✅                 |
|               | Int                 | ❌              | ✅                 |
|               | Float               | ✅              | ✅                 |
|               | Boolean             | ✅              | ✅                 |
| CDF resources | Asset               | ✅              | ✅                 |
|               | TimeSeries          | ✅              | ✅                 |
|               | SyntheticTimeSeries | ❌              | ✅                 |
|               | Sequence            | ✅              | ✅                 |
|               | File                | ✅              | ✅                 |
|               | Event               | ❌              | ❌                 |
| Lists([XXX])  |                     | ❌              | ✅                 |
| Required (!)  |                     | ❌              | ✅                 |
| Interface     |                     | ❌              | ❌                 |
| Union         |                     | ❌              | ❌                 |

### Directives

You can use directives to specify additional `qualities` of a type. For Templates, the most important directive is `@template`. Use it to specify if a type is considered a template, which indicates that it will be filled by template instances and can be queried directly.

The `@template` directive generates a `query` endpoint to make the data more accessible. Each field's _type_ limits how you can ingest and query data. For example. with `Float`, data must be populated as a number, and you can do filters like `Greater than` vs. just checking for string equality.

In the [example data model](#example-data-model) above, `Demographics` and `Country` are queryable, for example, you can run `demographicsQuery` and add filters, pagination, etc. `Metadata` is not directly queryable, but has to be accessed via `Demographics`. There is no direct way to query `Metadata` and perform filters, pagination, etc.

## Versioning

Every template group is versioned, and the version changes when the data model is updated with a **breaking change**. You can query each version individually, and consumers are therefore not directly affected by breaking changes. Also, each version has its own set of template instances. The data is tied to each version of a template group, and there is no automatic migration between versions.

## Updating the schema

You can use different conflict modes when updating a schema.

- **Patch**: This is the default mode, and it updates the schema without updating the version as long as there are no unsafe or breaking changes. Else it will fail.
- **Update**: Updates the schema by updating the version of the domain. Instances are kept per version, and it requires a migration.
- **Force**: Updates the schema without updating the version, and does not check for unsafe changes. This mode can cause issues for clients depending on the schema.

## SDK documentation

- [Cognite Python SDK](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html?highlight=templates#upsert-a-template-group-version)
- [Cognite JavaScript SDK (Beta)](https://cognitedata.github.io/cognite-sdk-js/beta/classes/_stable_src_api_templates_templategroupversionsapi_.templategroupversionsapi.html)
