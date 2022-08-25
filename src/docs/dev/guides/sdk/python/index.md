---
pagination_next: null
pagination_prev: null
title: Getting started
---

# Getting started with Python SDK

## Installation

To install the Python SDK package:

```sh
pip install cognite-sdk
```

To upgrade the version of Python SDK package:

```sh
pip install cognite-sdk --upgrade
```

To install the Python SDK package without the pandas and NumPy support:

```sh
pip install cognite-sdk-core
```

## Authenticate

The preferred way to authenticate against the Cognite API is using **OpenID Connect (OIDC)**. To enable this, use one of the credential providers such as **OAuthClientCredentials**:

```python
from cognite.client import CogniteClient, ClientConfig
from cognite.client.credentials import OAuthClientCredentials

creds = OAuthClientCredentials(token_url=..., client_id=..., client_secret=..., scopes=[...])
cnf = ClientConfig(client_name="my-special-client", project="my-project", credentials=creds)
c = CogniteClient(cnf)
```

You can also make your own credential provider:

```python
from cognite.client import CogniteClient, ClientConfig
from cognite.client.credentials import Token
def token_provider():
     ...

cnf = ClientConfig(client_name="my-special-client", project="my-project", credentials=Token(token_provider))
c = CogniteClient(cnf)
```

To know more about authentication, see [Authenticate with Azure AD](../../../guides/sdk/python/python_auth_oidc.md).

You can also authenticate against the Cognite API by using an API Key.

```python
from cognite.client import CogniteClient, ClientConfig
from cognite.client.credentials import APIKey
cnf = ClientConfig(client_name="<your-client-name>", project="my-project", credentials=APIKey("very-secret"))
c = CogniteClient(cnf)
```

## Instantiate a new client

Use this code to instantiate a client and get your login status. CDF returns an object with attributes that describe which project and service account your API key belongs to.

The `client_name` is a user-defined string intended to give the client a unique identifier. You can provide the `client_name` by passing it directly to the `ClientConfig` constructor.

You may set a default client configuration which will be used if no config is passed to the CogniteClient. All examples in this documentation assume that a default configuration has been set.

```python
from cognite.client import CogniteClient, ClientConfig, global_config
from cognite.client.credentials import APIKey
cnf = ClientConfig(client_name="my-special-client", project="my-project", credentials=APIKey("very-secret"))
global_config.default_client_config = cnf
c = CogniteClient()
status = c.login.status()
```

Read more about the [`CogniteClient`](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#cogniteclient) and the functionality it exposes.

## Discover time series

For the next examples, you will need to supply IDs for the time series that you want to retrieve. You can find some IDs by listing the available time series. Limits for listing resources default to 25, so the following code returns the first 25 time series resources.

```python
from cognite.client import CogniteClient

c = CogniteClient()
ts_list = c.time_series.list(include_metadata=False)
```

## Plot time series

There are several ways of plotting a time series you have fetched from the API. The easiest is to call
`.plot()` on the returned `TimeSeries` or `TimeSeriesList` objects. By default, this plots the raw
data points for the last 24 hours. If there are no data points for the last 24 hours, `plot` throws an exception.

```python
from cognite.client import CogniteClient

c = CogniteClient()
my_time_series = c.time_series.retrieve(id=<time-series-id>)
my_time_series.plot()
```

You can also pass arguments to the `.plot()` method to change the start, end, aggregates, and granularity of the
request.

```python
my_time_series.plot(start="365d-ago", end="now",
                    aggregates=["average"], granularity="1d")
```

The `Datapoints` and `DatapointsList` objects that are returned when you fetch data points, also have `.plot()`
methods you can use to plot the data.

```python
from cognite.client import CogniteClient

c = CogniteClient()
my_datapoints = c.datapoints.retrieve(
                    id=[<time-series-ids>],
                    start="10d-ago",
                    end="now",
                    aggregates=["max"],
                    granularity="1h"
                )

my_datapoints.plot()
```

:::info tip
To use the `.plot()` functionality you need to install `matplotlib`.
:::

## Create an asset hierarchy

CDF organizes digital information about the physical world. Assets are digital representations of physical objects or groups of objects, and assets are organized into an asset hierarchy. For example, an asset can represent a water pump which is part of a subsystem on an oil rig.

At the top of an asset hierarchy is a root asset (for example, the oil rig). Each project can have multiple root assets.
All assets have a name and a parent asset. No assets with the same parent can have the same name.

To create a root asset (an asset without a parent), omit the parent ID when you post the asset to the API.
To make an asset a child of an existing asset, you must specify a parent ID.

```python
from cognite.client import CogniteClient
from cognite.client.data_classes import Asset

c = CogniteClient()
my_asset = Asset(name="my first asset", parent_id=123)

c.assets.create(my_asset)
```

To post an entire asset hierarchy, you can describe the relations within your asset hierarchy
using the `external_id` and `parent_external_id` attributes on the `Asset` object. You can post
an arbitrary number of assets, and the SDK will split the request into multiple requests.

To make sure that the
assets are posted in the correct order, you can use the `.create_hierarchy()` function, which takes care of the
sorting before splitting the request into smaller chunks. Note that the `.create_hierarchy()` function requires the `external_id` property to be set for all assets.

This example shows how to post a three levels deep asset hierarchy consisting of three assets.

```python
from cognite.client import CogniteClient
from cognite.client.data_classes import Asset

c = CogniteClient()
root = Asset(name="root", external_id="1")
child = Asset(name="child", external_id="2",
              parent_external_id="1")
descendant = Asset(name="descendant", external_id="3",
                   parent_external_id="2")

c.assets.create_hierarchy([root, child, descendant])
```

Wrap the `.create_hierarchy()` call in a try-except to get information if posting the assets fails:

- Which assets were posted. (The request yielded a 201.)
- Which assets may have been posted. (The request yielded 5xx.)
- Which assets were not posted. (The request yielded 4xx, or was a descendant of another asset which may or may not have been posted.)

```python
from cognite.client.exceptions import CogniteAPIError

try:
    c.assets.create_hierarchy([root, child, descendant])
except CogniteAPIError as e:
    assets_posted = e.successful
    assets_may_have_been_posted = e.unknown
    assets_not_posted = e.failed
```

## Retrieve all events related to an asset subtree

Assets are used to connect related data, even if the data comes from different sources. Time series of data points, events and files are all connected to one or more assets. A pump asset can be connected to a time series measuring pressure within the pump, as well as events recording maintenance operations, and a file with a 3D diagram of the pump.

To retrieve all events related to a given subtree of assets, we first fetch the subtree under an asset using the `.subtree()` method. This returns an `AssetList` object, which has a `.events()` method. This method return events related to any asset in the `AssetList`.

```python
from cognite.client import CogniteClient
from cognite.client.data_classes import Asset

c = CogniteClient()
subtree_root_asset="some-external-id"
subtree = c.assets.retrieve(external_id=subtree_root_asset).subtree()
related_events = subtree.events()
```

You can use the same pattern to retrieve all time series or files related to a set of assets.

```python
related_files = subtree.files()
related_time_series = subtree.time_series()
```

## Next steps

To learn more about the Python SDK, see the SDK [reference documentation](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/).
