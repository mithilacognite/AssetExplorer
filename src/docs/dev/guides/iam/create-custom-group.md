---
pagination_next: null
pagination_prev: null
---

# Create a group with custom capabilties

As mentioned described in the [authorization guide](authorization.md), capabilities are the source of access to resources in Cognite Data Fusion. Fine grained access control requires the ability to define fine grained capabilities.

A group to which principals can be added must be defined, and may contain one or more capability objects. Each object must have a scope set, as well as one or more actions. Which actions and scopes are valid are defined by the resource type of the capability.

As a slightly more complex example, to construct a group whose members have access to read all assets, and read and write on time series associated with an asset subtree (any asset under the asset with id 1364346 in this case), a group must be made with two capabilities: one for assets, and one for time series.

```json
{
  "assetsAcl": {
    "actions": ["READ"],
    "scope": { "all": {} }
  }
}
```

```json
{
  "timeSeriesAcl": {
    "actions": ["READ", "WRITE"],
    "scope": { "assetIdScope": { "subtreeIds": ["1364346"] } }
  }
}
```

Thus, using curl to POST, we can create a new group named 'restricted1' that only grants access to read assets, and read and write to time series associated with asset subtree 1364346.

```sh
curl -X POST \
https://api.cognitedata.com/api/v1/projects/{project}/groups \
-H 'Accept: application/json' \
-H 'Cache-Control: no-cache' \
-H 'Content-Type: application/json' \
-H 'api-key: REDACTED' \
-d '{ "items": [
    { "name": "restricted1",
        "capabilities": [
        { "assetsAcl": {
            "actions": ["READ"],
            "scope": {"all": {}}
            }},
        { "timeSeriesAcl": {
            "actions": ["READ","WRITE"],
            "scope": {"assetIdScope": {"subtreeIds" : ["1364346"]}}
            }}
        ]}
    ]}'
```
