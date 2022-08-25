---
pagination_next: null
pagination_prev: null
---

# Files

In Cognite Data Fusion, the file **resource type** stores **files** and **documents** that are related to one or more assets. For example, a file can contain a piping and instrumentation diagram (P&ID) that shows how multiple assets are connected.

## About files

Files are created in two steps where the first step **stores the metadata** in a file object, and the second step **uploads the file contents**. This means that files can exist in Cognite Data Fusion without actually being uploaded.

Each file is identified by a unique `id` that is generated when the file is a created. You also have to specify a `fileName` when the file is created.

If you want to be in control of the identifier of a file, you can specify an `externalId` , which must be unique within a project.

A file can also have `metadata` key-value fields. You can for example use these fields to store source system IDs and other information. The metadata fields can be searched.

Additionally, files can have `labels` attached to them, making it easier to organize and categorize files.

You can retrieve the information for a file, both standard fields and the dynamic metadata field, by using the files list or search REST API calls. You can download the file contents with the file download REST API call.

:::info TIP
See the [Files API documentation](/api/v1/#tag/Files) for more information about how to work with the files API.

See the [Labels API documentation](/api/v1/#tag/Labels) for more information about how to manage Labels.
:::

## Geographic location of files

A file's geographic location, i.e., its geometric features and coordinates, can be specified with the `geoLocation` field. Data in this field needs to follow the [GeoJSON specification](https://geojson.org/), explained in detail in [RFC 7946](https://tools.ietf.org/html/rfc7946). The [coordinate reference system](https://tools.ietf.org/html/rfc7946#section-4) for all GeoJSON coordinates is a geographic coordinate reference system, using the [World Geodetic System 1984 (WGS84)](https://tools.ietf.org/html/rfc7946#ref-WGS84).

### GeoJSON types

A GeoJSON object can have one of 3 types:

- **Feature** - Geometric objects with (optional) additional features.
- **FeatureCollection** - A collection of Features.
- **GeometryCollection** - A collection of Geometry objects (see below).

Currently, **Feature** is the only type supported by Cognite Data Fusion.

To describe a geographic feature, the Geometry object needs a `type` and a corresponding array of `coordinates`. Below are the supported Geometry types:

| Type            | Description                                                       | Example                                                                                         |                                                                                                                                            |
| --------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Point           | Only one exact point.                                             | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/point.png" alt="point" />                     | `{"type": "Point", "coordinates": [30, 10]}`                                                                                               |
| MultiPoint      | Multiple points.                                                  | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/multipoint.png" alt="multipoint" />           | `{"type": "MultiPoint", "coordinates": [[10, 40], [40, 30], [20, 20], [30, 10]]}`                                                          |
| LineString      | A line.                                                           | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/linestring.png" alt="linestring"/>            | `{"type": "LineString", "coordinates": [[30, 10], [10, 30], [40, 40]]}`                                                                    |
| MultiLineString | Multiple lines.                                                   | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/multilinestring.png" alt="multilinestring" /> | `{"type": "MultiLineString", "coordinates": [[[10, 10], [20, 20], [10, 40]], [[40, 40], [30, 30], [40, 20], [30, 10]]]}`                   |
| Polygon         | A closed shape. Can have inner holes of arbitrary shapes.         | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/polygon.png" alt="polygon " />                | `{"type": "Polygon", "coordinates": [[[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]], [[20, 30], [35, 35], [30, 20], [20, 30]]]}`       |
| MultiPolygon    | Multiple closed shapes. Can have inner holes of arbitrary shapes. | <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/multipolygon.png" alt="multipolygon" />       | `{"type": "MultiPolygon", "coordinates": [[[[30, 20], [45, 40], [10, 40], [30, 20]]], [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]]}` |

### Adding geoLocation to a file

The `geoLocation` field requires the following properties to be populated:

#### type

The type of GeoJSON. Cognite Data Fusion only supports the `Feature` type.

#### geometry

Represents the points, curves, and surfaces in coordinate space.

Consists of

`type` - Must be one of the following geometry types: `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, and `MultiPolygon`. See [GeoJSON types](#geojson-types) above.

`coordinates` - An array describing the specified geometry type. The shape of this array will be determined by the type of geometry. For instance, a `Point` geometry type will contain a `coordinate` array consisting of just a single _x_ and a single _y_ coordinate. See example 1 below.

A `LineString` geometry type will contain a `coordinate` array with two or more points, as shown in example 2. A `Polygon` geometry type will need to contain an array of closed `LineStrings` with four or more points, as shown in example 3. See [the GeoJSON spec](https://tools.ietf.org/html/rfc7946#section-3.1.1) for more details on the various shapes of the `coordinates` field.

#### properties

An optional field specifying additional information to enrich the `Feature`.

**Example 1**

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [10.727414488792418, 6059.91713955864316]
  },
  "properties": {
    "name": "Norwegian Royal Palace"
  }
}
```

**Example 2**

```json
{
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [35, 10],
      [45, 45],
      [15, 40],
      [10, 20],
      [35, 10]
    ]
  }
}
```

**Example 3**

Note that in this example, the `Polygon` specifies an outer and inner `LineString`.

A `Polygon` can (but does not have to) contain multiple of these `LineStrings`, where the first must be the exterior ring, and the subsequent `LineStrings` are interior rings. This is how you would define a surface with holes.

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [35, 10],
        [45, 45],
        [15, 40],
        [10, 20],
        [35, 10]
      ],
      [
        [20, 30],
        [35, 35],
        [30, 20],
        [20, 30]
      ]
    ]
  }
}
```

### Upload example

```json
POST /api/v1/projects/publicdata/files
Host: api.cognitedata.com
api-key: <key>
Content-Type: application/json

{
  "name": "file1",
  "externalId": "file",
  "geoLocation": {
    "type": "Feature",
    "geometry": {
      "type": "point",
      "coordinates": [
        10.727414488792418,
        6059.91713955864316
      ]
    },
    "properties": {
      "name": "Norwegian Royal Palace"
    }
  }
}
```

### Update example

```json
POST /api/v1/projects/publicdata/files/update
Host: api.cognitedata.com
api-key: <key>
Content-Type: application/json

{
  "items": [
    {
      "id": 123454321,
      "update": {
        "geoLocation": {
          "set": {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                133.2,
                2.5
              ]
            },
            "properties": {
              "name": "Another place"
            }
          }
        }
      }
    }
  ]
}
```

## GeoLocation filtering

Filtering on, or searching for files matching a certain `geoLocation` requires two properties:

`relation` - The geographic relation, either `INTERSECTS`, `WITHIN` , or `DISJOINT`.

`shape` - The `geometry`, as described in [the geometry section](#adding-geolocation-to-a-file). Filtering is **not** available for the `MultiPoint` type.

### Filter example

```json
POST /api/v1/projects/publicdata/files/list
Host: api.cognitedata.com
api-key: <key>
Content-Type: application/json

{
   "filter": {
       "geoLocation": {
         "relation": "intersects",
         "shape": {
           "type": "MultiPolygon",
           "coordinates": [[
            [[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]],
            [[20, 30], [35, 35], [30, 20], [20, 30]]
            ], [
          [[36, 11], [46, 46], [16, 41], [11, 21], [36, 11]],
          [[21, 31], [36, 36], [31, 21], [21, 31]]
          ]]
         }
       }

   }
}
```
