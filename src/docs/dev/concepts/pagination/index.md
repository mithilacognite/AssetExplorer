---
pagination_next: null
pagination_prev: null
---

# Pagination

Most resource types in Cognite Data Fusion (CDF) can be paginated, as indicated by the `nextCursor` field in the response. Pass the value of `nextCursor` as the cursor to get the next page of limit results. Note that all parameters except cursor have to stay the same.

A request can return fewer results than its limits, as long as there is a `nextCursor` that indicates that there are more data to fetch.

## Simple cursor example

```http
HTTP GET /assets?limit=1
```

```json
{
  "nextCursor": "8ZiApWzGe5RnTAE1N5SABLDNv7GKkUGiVUyUjzNsDvM",
  "items": [
    {
      "name": "23-TE-96116-04",
      "parentId": 3117826349444493,
      "description": "VRD - PH 1STSTGGEAR THRUST BRG OUT",
      "metadata": {
        "ELC_STATUS_ID": "1211",
        "RES_ID": "525283"
      },
      "id": 702630644612,
      "createdTime": 0,
      "lastUpdatedTime": 0,
      "rootId": 6687602007296940
    }
  ]
}
```

Getting the next page of assets.

:::info note
When you send additional parameters to `/assets`, make sure that you also include them in all subsequent requests in addition to the `cursor` parameter.
:::

```http
HTTP GET /assets?limit=1&cursor=8ZiApWzGe5RnTAE1N5SABLDNv7GKkUGiVUyUjzNsDvM
```

## Parallel retrieval

If you download a large number of resources (for example, events with a particular filter), it can take a long time to paginate through millions of records. CDF supports **parallel retrieval** through the `partition` parameter. The parameter has the format `m/n`, where `n` is the number of partitions to split the entire data set into.

### Example

This example downloads an entire data set in parallel by splitting it into 10 partitions and doing the following requests with `m` running from 1 to 10:

```http
HTTP GET /events?type=WORKORDER&partition=1/10
```

```http
HTTP GET /events?type=WORKORDER&partition=2/10
```

```http
HTTP GET /events?type=WORKORDER&partition=3/10
```

Each of the results looks similar to this:

```json
{
  "items": [
    {
      "startTime": 1266130800000,
      "endTime": 1284328234000,
      "type": "Workorder",
      "subtype": "VAL",
      "assetIds": [4650652196144007],
      "source": "cdf-tenant",
      "id": 206950949774808,
      "lastUpdatedTime": 1539151642457,
      "createdTime": 1533747616899
    }
  ],
  "nextCursor": "bU-qc7X1jKMUbXgOYdONu2kRvpsoc60v9qh0Votm4MT0LaH0J0VVhVLoorSh8j_j"
}
```

Follow the `nextCursor` in each response until each partition is drained.

:::info note
Make sure that you send the filter parameters to each subsequent request.
:::
