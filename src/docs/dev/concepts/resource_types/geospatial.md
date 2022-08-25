---
pagination_next: null
pagination_prev: null
---

# Geospatial

In Cognite Data Fusion (CDF), the geospatial endpoint is the base entry point for many resource types that enable storing and querying item collections that have a geospatial nature. Those items, called features in Geographic Information System (GIS) terminology, are grouped in feature types. Features of the same type share several properties (a name, a type, and a value) and have more than one spatial representation, all stored in configurable properties.

In addition, and following the Open Geospatial Consortium recommendation, each spatial representation should have an associated Coordinate Reference System (CRS), but this is not mandatory. The Geospatial API also enables feature search using filters of arbitrary complexity, with a boolean expression of conditions on the properties. Defining a feature type is up to the client, and CDF geospatial does not come with pre-configured schemas and provides excellent flexibility for modelling the client problem domain.

:::tip
See the [Geospatial API documentation](/api/v1/#tag/Geospatial) for more information.

See [Geospatial Examples](https://github.com/cognitedata/geospatial-examples) for Python SDK examples.
:::

## Authentication and authorization

All HTTP endpoints served by the Geospatial API require a valid ticket from the Auth service.

Feature type and feature related endpoints require the GEOSPATIAL capability (READ or WRITE).

CRS related endpoints require the GEOSPATIAL_CRS capability to be enabled (READ or WRITE). Note that reading the predefined CRSs is possible with the GEOSPATIAL capability.

### Data sets
[Feature types](#feature-types) and [Features](#features) support using data sets. Since feature types define the specification of features, you must set these access capabilities:

- `READ` access for the feature type to do any operations (create, update, get by ids, search, and aggregate) on the corresponding features.
- `WRITE` access for all features of a feature type to delete the feature type.

However, there are no constraints on data set specified on a feature and its corresponding feature type. Features of a feature type can belong to different data sets.

**Example**

Assuming that 
* data set 1234 is not write-protected 
* data set 5678 is write-protected
* feature type FT1 has data set ID 1234
* feature type FT2 has data set ID 5678
* feature type FT3 does not have data set ID.

`geospatial:read:1234` indicates READ capability of geospatial objects within data set ID 1234.

`geospatial:read:all` indicates READ capability of geospatial objects within all scopes.

`dataset:owner:5678` indicates OWNER capability of data set ID 5678.

| Scenario                                                 | Required access                                                              |
|----------------------------------------------------------|------------------------------------------------------------------------------|
| Read feature type FT1                                    | `geospatial:read:1234` or `geospatial:read:all`                              |
| Read feature type FT3                                    | `geospatial:read:all`                                                        |
| Create feature type FT4 with data set id 1234            | `geospatial:write:1234` or `geospatial:write:all`                            |
| Create feature type FT4 with data set id 5678            | `dataset:owner:5678` and (`geospatial:write:5678` or `geospatial:write:all`) |
| Create feature type FT4 without data set id              | `geospatial:write:all`                                                       |
| Read feature X (data set id 5678) of feature type FT1    | (`geospatial:read:1234` and `geospatial:read:5678`) or `geospatial:read:all` |
| Read feature X (data set id 1234) of feature type FT3    | `geospatial:read:all`                                                        |
| Create feature Y (data set id 1234) of feature type FT1  | (`geospatial:read:1234` or `geospatial:read:all`) and (`geospatial:write:1234` or `geospatial:write:all`) |
| Create feature Y (data set id 5678) of feature type FT1  | (`geospatial:read:1234` or `geospatial:read:all`) and (`geospatial:write:5678` or `geospatial:write:all`) and `dataset:owner:5678` |
| Create feature Y without data set id of feature type FT1 | (`geospatial:read:1234` or `geospatial:read:all`) and (`geospatial:write:all`) |


:::info NOTE
CRSs do not support data sets.
:::

## Feature types

A CDF feature type defines a class of spatial features with a common specification. The specification defines the property names and their types and what indexes should be maintained to fulfill performance requirements a client might have. Indexing properties come at a price when creating features, and it is crucial to consider whether an index is necessary or not. The choice depends on the size and number of entries for a given feature type and the frequency of access to that particular property.

## Features

A feature is an item following the specification given by its corresponding feature type. A parallel with a class and an object is perfectly valid.

## Properties

### Default properties

Feature type and feature have predefined properties that enable close integration with the rest of the CDF. The default properties are:

| Name            | Type      | Description                                     |
| --------------- | --------- | ----------------------------------------------- |
| externalId      | String    | The standard CDF external id                    |
| createdTime     | Timestamp | The standard CDF resource item created time     |
| lastUpdatedTime | Timestamp | The standard CDF resource item last update time |
| dataSetId       | Long      | The standard CDF data set id                    |

The following property names are reserved for future use:

- id
- assetIds
- metadata
- defaultGeometry
- labels

### Property types

The GeoJSON specification can be found at [GeoJSON](https://geojson.org/).

The Well-Known-Text specification can be found at [Open Geospatial Consortium](https://www.ogc.org/standards/sfa).

### 2D

The Geospatial service supports the following vector types, located in a 2-dimensional space, each as an X and a Y coordinate:

| Type            | Description                                                                                                      | Example WKT                                                                            | Example Geojson                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| POINT           | A simple `point`.                                                                                                | `POINT(1 -1)`                                                                          | `{"type": "Point", "coordinates": [1, -1]}`                                                                                          |
| LINESTRING      | A simple linestring specified by two or more distinct POINTs.                                                    | `LINESTRING(0 0, 1 1, 1 -1, 3 4)`                                                      | `{"type": "LineString", "coordinates": [[0, 0], [1, 1], [1, -1], [3, 4]]}`                                                           |
| POLYGON         | A set of closed LINESTRINGs. A polygon must have exactly one exterior ring and can have one or more inner rings. | `POLYGON(`<p>`((35 10, 45 45, 15 40, 10 20, 35 10), (20 30, 35 35, 30 20, 20 30))`</p> | `{"type": "Polygon", "coordinates": [[[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]], [[20, 30], [35, 35], [30, 20], [20, 30]]]}` |
| MULTIPOINT      | A set of POINTs.                                                                                                 | `MULTIPOINT(-1 1, 0 0, 2 3)`                                                           |                                                                                                                                      |
| MULTILINESTRING | A set of LINESTRINGs.                                                                                            | `MULTILINESTRING((0 0,0 1,1 1), (-1 1,-1 -1))`                                         |                                                                                                                                      |
| MULTIPOLYGON    | A set of POLYGONs.                                                                                               | `MULTIPOLYGON(((2.25 0,1.25 1,1.25 -1,2.25 0)),((1 -1,1 1,0 0,1 -1)))`                 |                                                                                                                                      |

### 3D

The Geospatial service supports the following vector types, located in a 3-dimensional space, each as an X, Y, and Z coordinate. The GeoJSON notation do not support the below vector types:

| Type            | Description                                                                                                      | Example WKT                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| POINTZ          | A simple point.                                                                                                  | `POINTZ(1 -1 1)`                                                                                 |
| LINESTRINGZ     | A linestring in 2D specified by two or more distinct POINTZs                                                     | `LINESTRINGZ(0 0 2, 1 1 3, 1 -1 4, 3 4 5)`                                                       |
| POLYGONZ        | A set of closed LINESTRINGZ. A polygon must have exactly one exterior ring and can have one or more inner rings. | `POLYGONZ(((35 10 3, 45 45 4, 15 40 4, 10 20 5, 35 10 3), (20 30 3, 35 35 4, 30 20 5, 20 30 3))` |
| MULTIPOINTZ     | A set of POINTZs.                                                                                                | `MULTIPOINTZ(-1 1 1, 0 0 3, 2 3 2)`                                                              |
| MULTILINESTRING | A set of LINESTRINGZs.                                                                                           | `MULTILINESTRINGZ((0 0 1, 0 1 2, 1 1 3), (-1 1 2, -1 -1 2))`                                     |
| MULTIPOLYGON    | A set of POLYGONZs.                                                                                              | `MULTIPOLYGONZ(((2.25 0,1.25 1,1.25 -1,2.25 0)),((1 -1,1 1,0 0,1 -1)))`                          |

The fact that a geometry has a Z coordinate does not make it a volumetric geometry. It remains a planar 2D geometry described in a 3D space.

### 2D + measurement / time

The Geospatial service supports the following vector types, located in a 2-dimensional space plus an additional measure, each as an X, Y, and M coordinates. The GeoJSON notation do not support the below vector types:

| Type             | Description                                                                                                       | Example WKT                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| POINTM           | A simple point.                                                                                                   | `POINTM(1 -1 1122)`                                                                              |
| LINESTRINGM      | A linestring in 2D specified by two or more distinct POINTMs.                                                     | `LINESTRINGM(0 0 2, 1 1 3, 1 -1 4, 3 4 5)`                                                       |
| POLYGONM         | A set of closed LINESTRINGMs. A polygon must have exactly one exterior ring and can have one or more inner rings. | `POLYGONM(((35 10 3, 45 45 4, 15 40 4, 10 20 5, 35 10 3), (20 30 3, 35 35 4, 30 20 5, 20 30 3))` |
| MULTIPOINTM      | A set of points.                                                                                                  | `MULTIPOINTM(-1 1 1, 0 0 3, 2 3 2)`                                                              |
| MULTILINESTRINGM | A set of LINESTRINGMs.                                                                                            | `MULTILINESTRINGM((0 0 1, 0 1 2, 1 1 3), (-1 1 2, -1 -1 2))`                                     |
| MULTIPOLYGONM    | A set of POLYGONMs.                                                                                               | `MULTIPOLYGONM(((2.25 0,1.25 1,1.25 -1,2.25 0)),((1 -1,1 1,0 0,1 -1)))`                          |

The M coordinate is convenient to associate a measure with a point in space. Without the M coordinate, you would require an extra property (of array type, not supported by the service) to store the measurement. The M coordinate does not require a spatial interpretation, and its unit is not related to the X, Y, Z coordinates. The M coordinate remains unchanged when the geometry gets transformed.

### 3D + measurement / time

The Geospatial service supports the following vector types, located in a 3-dimensional space plus an additional measure, each as an X, Y, Z, and M coordinates. The GeoJSON notation do not support the below vector types:

| Type              | Description                                                                                                        | Example WKT                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| POINTZM           | A simple point.                                                                                                    | `POINTZM(1 -1 11 22)`                                                                                                                 |
| LINESTRINGZM      | A linestring in 3D specified by two or more distinct POINTZMs.                                                     | `LINESTRINGZM(0 0 2 233, 1 1 3 566, 1 -1 4 788, 3 4 5 988)`                                                                           |
| POLYGONZM         | A set of closed LINESTRINGZMs. A polygon must have exactly one exterior ring and can have one or more inner rings. | `POLYGONZM(((35 10 3 122, 45 45 4 211, 15 40 4 344, 10 20 5 566, 35 10 3 544), (20 30 3 233, 35 35 4 455, 30 20 5 677, 20 30 3 899))` |
| MULTIPOINTZM      | A set of POINTZMs.                                                                                                 | `MULTIPOINTZM(-1 1 1 0, 0 0 3 0, 2 3 2 0)`                                                                                            |
| MULTILINESTRINGZM | A set of LINESTRINGZMs.                                                                                            | `MULTILINESTRINGZM((0 0 1 1, 0 1 2 2, 1 1 3 3), (-1 1 2 1, -1 -1 2 2))`                                                               |
| MULTIPOLYGONZM    | A set of POLYGONZMs.                                                                                               | `MULTIPOLYGONZM(((2.25 0 1 1,1.25 1 1 1,1.25 -1 1 1,2.25 0 1 1)),((1 -1 1 1,1 1 1 1,0 0 1 1,1 -1 1 1)))`                              |

### Geometry collections

The Geospatial service finally supports collections of the previous vector types. It is a collection of heterogeneous vector types. The GeoJSON notation do not support the below vector types:

| Type                 | Description                                       | Example WKT                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GEOMETRYCOLLECTION   | A collection of 2D geometries.                    | `GEOMETRYCOLLECTION(MULTIPOINT(-1 1, 0 0, 2 3), MULTILINESTRING((0 0, 0 1, 1 1),(-1 1, -1 -1)),POLYGON((-0.25 -1.25, -0.25 1.25, 2.5 1.25, 2.5 -1.25, -0.25 -1.25)))`                                                                                                                        |
| GEOMETRYCOLLECTIONZ  | A collection of 3D geometries.                    | `GEOMETRYCOLLECTION Z (MULTIPOINT Z(-1 1 4, 0 0 2, 2 3 2), MULTILINESTRING Z ((0 0 1, 0 1 2, 1 1 3), (-1 1 1, -1 -1 2)), POLYGON Z(`<p>`(-0.25 -1.25 1, -0.25 1.25 2, 2.5 1.25 3, 2.5 -1.25 1, -0.25 -1.25 1),(2.25 0 2, 1.25 1 1, 1.25 -1 1, 2.25 0 2),(1 -1 2, 1 1 2, 0 0 2,1 -1 2)))`</p> |
| GEOMETRYCOLLECTIONM  | A collection of 2D geometries with a measurement. | `GEOMETRYCOLLECTION M (MULTIPOINT Z(-1 1 4, 0 0 2, 2 3 2), MULTILINESTRING M ((0 0 1, 0 1 2, 1 1 3), (-1 1 1, -1 -1 2)), POLYGON M(`<p>`(-0.25 -1.25 1, -0.25 1.25 2, 2.5 1.25 3, 2.5 -1.25 1, -0.25 -1.25 1),(2.25 0 2, 1.25 1 1, 1.25 -1 1, 2.25 0 2),(1 -1 2, 1 1 2, 0 0 2,1 -1 2)))`</p> |
| GEOMETRYCOLLECTIONZM | A collection of 3D geometries with a measurement. | `GEOMETRYCOLLECTION ZM (MULTIPOINT ZM(-1 1 4 5, 0 0 2 5, 2 3 2 5))`                                                                                                                                                                                                                          |

### Simple types

In addition to spatial property types, the following versatile types are supported:

| Type      | Description                                         | Example                 |
| --------- | --------------------------------------------------- | ----------------------- |
| String    | A character string.                                 | “Powered by geospatial” |
| Long      | A 64-bit signed integer.                            | 1234567                 |
| Double    | A 64-bit double precision floating point number.    | 12345.6789              |
| Boolean   | True or False.                                      | true                    |
| Timestamp | Unix timestamp, number of milliseconds since epoch. | 1637764395456           |

### More on properties

By default, the feature type properties are non-null. It is possible to define optional properties simply by adding an _optional_ field with true value in the property definition. In addition to this, it is possible to provide a note on a property using the _description_ field.

```
...
{
    ...
    "properties": {
        "temperature": {
            "type": "DOUBLE",
            "optional": true,
            "description": "air temperature in Celsius"
        },
    },
    ...
}
...
```

It is legal to define several geometry properties, each one with its SRID constraint.

This can for instance, be used to store different levels of details for a given feature type, or store geometries of varying nature:

```
 ...
{
    "externalId": "multiple_geometries",
    "properties": {
        "centerOfGravity": {
            "type": "POINT",
            "srid": 4326
        },
        "centroid": {
            "type": "POINT",
            "srid": 4326
        },
        "shape": {
            "type": "POLYGON",
            "srid": 4326
        },
        "shapeOrig": {
            "type": "POLYGON",
            "srid": 2001
        }
    }
}
  ...
```

Defining a feature type with geometry properties without SRID constraint is also legal. In this case, the server allows mixing geometries located in different CRSs. The drawback is that the property cannot be indexed and used in search constraints; it can store and retrieve the geometry. When a modeling choice is made, the common practice is to project the geometries and store these copies in another geometry property with a fixed CRS, making it possible to apply search constraints on that additional geometry property.

```
...
{
    "externalId": "multiple_geometries",
    "properties": {
        ...
        "trajectoryOrig": {
            "type": "LINESTRING"
        },
        "trajectory": {
            "type": "LINESTRING",
            "srid": 4326
        },
        ...
    }
    ...
}
...
```

## Searching for features

It is possible to retrieve a feature if you know its external id. But the typical use case with geospatial data is searching for data using a geospatial filter. The following operators are currently supported:

- stWithin
- stWithinProperly
- stIntersects
- stContains
- stContainsProperly
- stWithinDistance
- stIntersects3d
- stWithinDistance3d

The meaning of those operators follows the [OpenGIS specification](https://www.ogc.org/standards/sfs).

A filter expression example:

```
...
{
    "stWithin": {
        "property": "location",
        "value": {
            "wkt": "POLYGON((60.547602 -5.423433, 60.547602 -6.474416, 60.585858 -6.474416, 60.585858 -5.423433, 60.547602 -5.423433))"
        }
    }
}
...
```

A filter expression can combine multiple property constraints:

```
...
{
    "and": [
        {
            "range": {
                "property": "temperature",
                "gt": 3.14
        },
        {
            "not": {
                "stWithin": {
                    "property": "location",
                    "value": {
                        "wkt": "POLYGON((60.547602 -5.423433, 60.547602 -6.474416, 60.585858 -6.474416, 60.585858 -5.423433, 60.547602 -5.423433))"
                    }
                }
            }
        }
    ]
}
...
```

The spatial filtering is not required:

```
...
{
    "and": [
        {
            "range": {
                "property": "temperature",
                "gt": 3.14
        },
        {
            "range": {
                "property": "pressure",
                "lt": 129.4
            }
        }
    ]
}
...
```

The filter specification for feature search allows arbitrary complexity and depth:

```
...
{
    "or": [
        {
            "and": [
                {
                    "range": {
                        "property": "attr1",
                        "gt": 3.14
                    }
                },
                {
                    "range": {
                        "property": "attr1",
                         "lt": 5.03
                    }
                }
            ]
        },
        {
            "not": {
                "range": {
                    "property": "attr2",
                    "lt": 6.28
                }
            }
        }
    ]
}
...
```

The full filter language specification is available in [the API specification](../../../../api/v1/#tag/Geospatial).

## Spatial filter operators

1. **stIntersects**

   This is a 2D operator.
   Geometry A intersects geometry B if and only if there are points belonging both to A and B. In particular any geometry intersects itself.

   In each of the examples below, the green geometry intersects the orange geometry.

    <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/intersects.svg" alt=" " width="60%"/>

2. **stWithin**

   This is a 2D operator.
   Geometry A is within geometry B if and only if all the points of A belong also to B. In particular every geometry is within itself. In each of the examples below, the green geometry is within the orange geometry. In each of the examples below, the green geometry is not within the orange geometry.

    <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/within.svg" alt=" " width="60%"/>

3. **stWithinProperly**

   This is a 2D operator.
   Geometry A is completely within geometry B if and only if all the points of A lie in the interior of B. Alternatively, geometry A is completely within geometry B if and only if A is within B and intersection of A and boundary of B is empty. Any geometry A is not completely within itself.

    <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/completelyWithin.svg" alt=" " width="60%"/>

4. **stContains**

   This is a 2D operator.
   Relation "contains" is an oposite relation to "within": geometry A contains geometry B if and only if B is within A.

5. **stContainsProperly**

   This is a 2D operator.
   Relation "contains properly" is an oposite relation to "within properly": geometry A properly contains geometry B if and only if B is properly within A.

6. **stWithinDistance**

   This is a 2D operator.
   Geometry A is within distance of geometry B if and only if there is a pair of points _a_ in A and _b_ in B and distance between _a_ and _b_ is less than or equal the given distance. The distance is specified in units defined by the coordinate reference system (CRS). \
   In the example below the geometries are within distance d from each other.

    <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/withinDistance.svg" alt=" " width="60%"/>

7. **stIntersects3d**

   This is a 3D operator.
   Geometry A intersects geometry B if and only if there are points belonging both to A and B. In particular any geometry intersects itself.

8. **stWithinDistance3d**

   This is a 3D operator.
   Geometry A is within distance of geometry B if and only if there is a pair of points _a_ in A and _b_ in B and distance between _a_ and _b_ is less than or equal the given distance. The distance is specified in units defined by the coordinate reference system (CRS).

## Indexes

By default, features index their `externalId`, `createdTime`, and `lastUpdatedTime`.

Several features in a given feature type impact the filtering features. Associating an index with a property allows for more efficient filtering when the property is present in the filter expression, but this is not a guarantee since it will depend on the index's selectivity, which is data-dependent.

Example of specifying an index on the point2d property:

```
...
{
    ...
    "properties": {
        ...
        "point2d": {
            "type": "POINT",
            "srid": 4326
        },
        ...
    },
    "searchSpec": {
        ...
        "point2d_idx": {
              "properties": [ "point2d" ]
        },
        ...
    }
}
...
```

Indexes can span multiple properties, possibly of different types:

```
...
{
    ...
    "properties": {
        ...
        "point2d": {
            "type": "POINT",
            "srid": 4326
        },
        "temperature": {
          "type": "DOUBLE"
        },
        ...
    },
    "searchSpec": {
        "point2d_temperature_idx": {
            "properties": [ "point2d", "temperature" ]
        }
    }
}
...
```

## Coordinate Reference Systems

A Coordinate Reference System (CRS) defines a 2D or 3D reference somewhere on or above/below the Earth's surface. Coordinates are usually defined in East/North/Height order but this can vary from one CRS to the next. Most CRSs are only valid over a limited part of the globe so for global mapping purposes it is common to use GPS latitude/longitude values as defined by WGS84 and encoded as the EPSG/SRID (Spatial Reference ID) number 4326.

### Predefined CRSs

We currently support about 8500 well known CRSs, all defined by [European Petroleum Survey Group (EPSG)](https://epsg.io/).

### Custom CRS

If a user needs an EPSG entry that is currently missing, you can add it as a custom CRS.

Any API user can create a custom CRS; there will be a limit on how many such definitions each customer can make. A custom CRS is defined by a reference number (a positive integer), by a [wkt (Well Known Text)](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) string, and by a projString. The projString defines the geometrical projection needed to convert coordinates in this CRS into one of the standard CRSs. The projString needs to be in the format defined by the industry-standard [PROJ](https://proj.org/) library ([https://proj.org/](https://proj.org/usage/quickstart.html)).

As an example the string `+proj=ortho +lat_0=59.123456 +lon_0=4.7654321 +x_0=0 +y_0=0 +ellps=intl` defines an orthogonal 3D CRS located at a point in the North Sea, oriented so that geographic east is the x-direction, y is north, and z points up. The ellipsoid used (International 1924) means that the lat/long values are according to that older standard, resulting in an offset (in this particular region) of about 30 m east-west from the GPS coordinate with the same numeric latitude/longitude values.

### Enable CRS transformations

By default, when working with a feature type defining a geometry property that has specified CRS (i.e. the SRID field is set), you can not use a different CRS when you create or update features or search or aggregate with geometry filters on that property.

Change this behavior by setting the **allowCrsTransformation** flag to true. The API will then transform the input geometry coordinates from the input geometry CRS into the feature type property CRS.

Let's consider the feature type extract below.

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes`

```
...
{
    ...
    "properties": {
        ...
        "geom": {
            "type": "POINT",
            "srid": 4326
        },
        ...
    },
    ...
}
...
```

In the following example, the input geometry given in EPSG:3857 will be converted into EPSG:4326. 

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes/.../features`

```
{
    "items": [
        {
            ...
            "geom": {
                "wkt": "POINT(261443.300621 6249935.722823)",
                "srid": 3857
            }
            ...
        }
    ],
    "allowCrsTransformation": "true"
}
```

With **allowCrsTransformation** set to **false** or unspecified, the API returns an HTTP error code 400.

The same **allowCrsTransformation** option must be set to **true** when defining a spatial filter for search/aggregation as in the example below.

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes/.../features/search`

```
{
    "filter": {
        "stWithin": {
            "property": "geom",
            "value": {
                "wkt": "POLYGON((261443 6249935, 261444 6249935, 261444 6249936, 261443 6249936, 261443 6249935))',
                "srid": 3857
            }
        }
    },
    "allowCrsTransformation": "true"
}
```

Here again, with **allowCrsTransformation** set to **false** or unspecified, the API returns an HTTP error code 400.

### Geometry properties without a CRS specified

Let's consider a feature type with a geometry property `geomOriginal` without a specified CRS (i.e. the SRID field is not set). The different features in this feature type will have `geomOriginal` geometries in different CRS (EPSG:4326, EPSG:3857, EPSG:4230, ...).

The API does not allow spatial filtering on that `geomOriginal` property since it would require transforming all the geometries in a common CRS before the filtering can be applied. In addition to the performance implications, the choice of such a common CRS depends on the use case and therefore the API cannot decide which one to use.

In addition, any CRS conversion implies a potential loss of precision and possibly some distorsion. We therefore recommend that you retain geometries in their original CRS. Concretely, it means that you will ingest the geometries twice, once in the original CRS, once in the specified common CRS of your choice.

Back to the example above with `geomOriginal`, we create an additional geometry property with a specified CRS, here EPSG:4326 (let's call this property `geom4326`) that complements the initial `geomOriginal` one, and that will allow spatial filtering.

Let's illustrate the example with some JSON snippets.

The feature type creation looks like below.

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes`

```
...
{
    ...
    "properties": {
        ...
        "geomOriginal": {
          "type": "POINT"
        },
        "geom4326": {
            "type": "POINT",
            "srid": 4326
        },
        ...
    },
    ...
}
...
```

As mentioned earlier, in order to enable the transformation of the input geometry into a geometry in the EPSG:4326 CRS, you have to set the **allowCrsTransformation** flag to **true** when creating or updating features.

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes/.../features`

```
{
    "items": [
        {
            ...
            "geomOriginal": {
                "wkt": "POINT(261443.300621 6249935.722823)",
                "srid": 3857
            },
            "geom4326": {
                "wkt": "POINT(261443.300621 6249935.722823)",
                "srid": 3857
            }
            ...
        }
    ],
    "allowCrsTransformation": "true"
}
```

Spatial filtering on the `geom4326` column can then be achieved for search/aggregation as shown here.

`https://...cognitedata.com/api/v1/projects/.../geospatial/featuretypes/.../features/search`

```
{
    "filter": {
        "stWithin": {
            "property": "geom4326",
            "value": {
                "wkt": "POLYGON((38 27, 39 27, 39 28, 38 28, 38 27))',
                "srid": 4326
            }
        }
    },
}
```

Again, with **allowCrsTransformation** set to **false** or unspecified, the API returns an HTTP error code 400.
