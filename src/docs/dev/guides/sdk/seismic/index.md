---
pagination_next: null
pagination_prev: null
title: Getting started
---

# Getting started with Seismic SDK

## Installation

To install the seismic SDK package:

```sh
pip install cognite-seismic-sdk
```

## Client setup and authentication

All data in CDF are stored in a CDF tenant, identified by a project name. To specify the project or tenant to work on, set the COGNITE_PROJECT environment variable or use the project keyword argument to the CogniteSeismicClient constructor.

The preferred way to authenticate against the Cognite API is by setting the COGNITE_API_KEY environment variable. All examples in this documentation require that the variable has been set.

```sh
$ export COGNITE_PROJECT = example-project
$ export COGNITE_API_KEY = <your-api-key>
```

You can also pass your API key directly to the CogniteClient.

```sh
>>> from cognite.seismic import CogniteSeismicClient
>>> client = CogniteSeismicClient(project = "example-project", api_key="<your-api-key>")
```

## Next steps

To learn more about the Seismic SDK, see the SDK [reference documentation](https://cognite-seismic-sdk.readthedocs-hosted.com/en/latest/cognite.html).
