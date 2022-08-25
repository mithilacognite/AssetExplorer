---
pagination_next: null
pagination_prev: null
---

# Using Cognite Functions

:::caution IMPORTANT
We have **deprecated** legacy authentication with API keys and strongly encourage customers to [**migrate**](../../cdf/access/guides/migrate_apikeys_oidc) from using API keys to using [OpenID Connect authentication](#authentication-with-openid-connect) as soon as possible. This article describes authentication with OpenID Connect.
:::

**Cognite Functions** lets users deploy Python code to Cognite Data Fusion (CDF), call the code on-demand, or schedule the code to run at regular intervals.

## Authentication with OpenID Connect

With OpenID Connect, you can instantiate your `CogniteClient` with either a [**user token**](#authenticate-with-a-user-token) or with [**client credentials**](#authenticate-with-client-credentials).

### Authenticate with a user token

`client = CogniteClient(project="my-project", token=my_token)`

:::info Note
`my_token` is a string or a callable.
:::

### Authenticate with client credentials

To instantiate your `CogniteClient` with client credentials:

```python
base_url = "https://api.cognitedata.com"
tenant_id = "my-tenant-id"

client = CogniteClient(
    project="my-project",
    token_client_id="my-client-id",
    token_client_secret="my-client-secret",
    token_scopes=[f"{base_url}/.default"],
    token_url=f"https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token",
)
```

## Create a function

You can create a function from [a Jupyter Notebook](#create-a-function-from-a-jupyter-notebook), [a folder](#create-a-function-from-a-folder), [an uploaded zip file](#create-a-function-from-an-uploaded-zip-file), or from CDF. The examples below assume that you have [the Python SDK](https://github.com/cognitedata/cognite-sdk-python) installed in your environment.

### Create a function from a Jupyter Notebook

To create a function from a Jupyter Notebook, refer directly to a Python function named `handle`. This is the easiest way to get started and is only suitable for short and simple functions.

**Example:**

1. Define the following function in your notebook:

   ```python
   def handle(client, data):
     asset_no = data["assetNo"]
     print("Returning asset number {}".format(asset_no))
     assets = client.assets.list()
     return {"assetName": assets[asset_no].name}
   ```

2. Deploy it to CDF:

   <!-- Is it possible to make the numbering here start from 7? We need to make it clear that handle must be defined before this piece of code. And so we should either update the numbering if possible, or else state this explicitly.-->

   ```python
   from cognite import CogniteClient

   # Instantiate with user token or client credentials
   client = CogniteClient(project="my-project", token="my-token")

   func = client.functions.create(
   name="my-function",
   external_id="my-function",
   function_handle=handle
   )
   ```

:::info NOTE
The `function_handle` argument points to the `handle` function defined above, and the name in the definition must be `handle`.

When you deploy with the `function_handle` argument, you must import within `handle()`. In other cases (with the `folder` or `file_id` arguments), the imports can be outside `handle()`.
:::

### Create a function from a folder

For more advanced functions, you can define your function in a module that imports other modules. To create a function, replace the `function_handle` argument with the `folder` argument and set it equal to the path of the folder containing your code.

**Example:**

```python
from cognite import CogniteClient

# Instantiate with user token or client credentials
client = CogniteClient(project="my-project", token="my-token")

func = client.functions.create(
name="my-function",
external_id="my-function",
folder="path/to/folder"
)
```

Your modules inside `path/to/folder` can have nested imports of arbitrary depth. The only requirement is a file called `handler.py` (assumed to be in the root folder unless otherwise specified) and a function named `handle` within this module. This serves as the entry point to the function.

If your `handler.py` file is not in the root folder, you must specify its location via the argument `function_path` (defaults to `handler.py`).

If your function depends on other packages, you can list these packages in a `requirements.txt` file. You must place the file in the root folder. These packages will be `pip` installed when the function is deployed.

### Create a function from an uploaded zip file

You can also upload a zip file containing the function code directly to the files API and refer to its `id` when you create the function.

**Example:**

```python
from cognite import CogniteClient

# Instantiate with user token or client credentials
client = CogniteClient(project="my-project", token="my-token")

func = client.functions.create(
name="my-function",
external_id="my-function",
file_id=123456789
)
```

The zip file must follow the same structure as when you [create a function from a folder](#create-a-function-from-a-folder) with the zip file itself as the root folder (there should not be an additional root folder within the zip file).

### Additional arguments

The most important optional arguments, in addition to the ones above, are:

- `function_path` (string): The relative path from the root folder to the file containing the `handle` function. Defaults to `handler.py`.

- `secrets` (dict): Secrets that will be stored securely on your function and available call-time.

- `env_vars` (dict): Environment variables that can be accessed inside your function call-time.

- `runtime` (string): The function runtime. Valid values are `[“py37”, “py38”, “py39”, None]`, and `None` translates to the API default.

- `index_url` (string): A URL [pointing to a different package repository](https://pip.pypa.io/en/stable/cli/pip_install/#cmdoption-0). It supports [basic HTTP authentication](https://pip.pypa.io/en/stable/topics/authentication/#basic-http-authentication).

- `extra_index_urls` (list): A list of URLs [pointing to additional python package repositories](https://pip.pypa.io/en/stable/cli/pip_install/#cmdoption-extra-index-url). Supports [basic HTTP authentication](https://pip.pypa.io/en/stable/topics/authentication/#basic-http-authentication).

:::warning IMPORTANT
Be aware of the intrinsic security implications of using the `index_url` and
`extra_index_urls` options. These settings can open for attacks known as
**dependency
confusion**,
whereby the package dependency resolver incorrectly installs a public package with
the same name as the intended private package.

To mitigate this: _only_ use the `index_url` option **and** have your private repository server satisfy the following:

1. Mirror the public default PyPi package index. I.e., your index should be able to serve public packages from the public index.
2. If a package name is shared between a private package in your private index and a public package in the public index, your server must explicitly choose the private package.

Some package index server tools satisfy these requirements out of the box, such as [DevPi](https://devpi.net/docs/devpi/devpi/stable/%2Bd/index.html).

<details>
<summary> Additional information: Dependency Confusion </summary>
The issue of dependency confusion happens when a software installer is tricked into installing malicious software from a public index instead of the intended private index.

In the Python ecosystem, this is made possible when multiple indices are
specified using the `--extra-index-url` option for pip. When installing a
package, the dependency resolver will look for a package with the requested
name in the default index (PyPI by default, can be overridden by `--index-url`).
If the requested package is not found there, it will look at the indices
specified in `--extra-index-url`.

This means that if a malicious entity manages to guess the name of a package
hosted in the additional indices, they can upload a package with the same name
to the public package index, containing malicious code. When resolving, if the
package version is not pinned, pip will choose the package with the highest
version number. Therefore, if the malicious package has the highest version
number, it will be chosen by pip. The user can to some degree mitigate this
risk by pinning the package version. In that case, pip will pull the package
from the private index if that particular version only exists there. However,
if the version exists in both indices, the behaviour is undefined, and you
cannot determine which index pip will pull the package from.

The whitepaper [3 Ways to Mitigate Risk When Using Private Package
Feeds](https://azure.microsoft.com/en-gb/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)
by Microsoft is a good introduction to the dependecy confusion problem.

</details>
:::

For a complete list of arguments, refer to [the SDK documentation](https://cognite-docs.readthedocs-hosted.com/projects/cognite-sdk-python/en/latest/).

## The function definition

The entry point of your function must be named `handle` with any of the following arguments:

- `client` - a pre-instantiated `CogniteClient` automatically available inside your function call-time. It is instantiated with the same permissions as the entity calling the function (on-behalf-of flow). Note that the `client` argument is only specified when you **define** the function but **not** when you **call** it; the client is automatically provided when you call it.

- `data` - (dict) any data you send to your function.
  :::caution WARNING
  **Secrets** or other confidential information should not be passed via this argument. Use the dedicated `secrets` argument in functions.client.create() for this purpose.
  :::

- `secrets` - (dict) serves as a way to send sensitive information to your function that must be available when calling it. You can provide these secrets as a dictionary via the secrets argument in `client.functions.create()`.

- `function_call_info` - (dict) contains information about the function being called. It has the key `function_id`, and, if the call is scheduled, the keys `schedule_id` and `scheduled_time`.

The only requirement for the return of your function is that it is JSON-serializable (and on GCP, is less than 1 MB in size). In general, we recommend that you pass small amounts of data to and from functions and instead read from and write to CDF directly from within your function.

The function `client.functions.create()` returns a function object with various metadata. One of the properties of this object is `status` which will start with `Queued`, change to `Deploying` when the deploy process has started, and end in `Ready` if the build was successful, or `Failed` if it failed. You need to wait until the function is `Ready` before calling it. This typically takes about 3-10 minutes. To retrieve the latest status of your function, do:

```python
func.update()
```

## Call a function

When your function is **Ready**, you can call it.

**Example:**

```python
call = func.call(data={"assetNo": 0})
```

Note that you don’t pass a `client` here, even though it is part of the function definition. You get it automatically inside the function.

When the function is called, a session is created on behalf of the user, and the client inside the function inherits the user’s permissions and scopes.

The call object contains metadata about the call, but not the response itself:

```python
{
"id": 1234,
"start_time": "2020-07-15 08:23:17",
"end_time": "2020-07-15 08:25:15",
"status": "Completed",
"function_id": 456789
}
```

To retrieve the response:

```python
call.get_response()
```

To get the logs:

```python
call.get_logs()
```

All print statements appear in your logs. If an exception is raised, the traceback appears in the logs.

:::caution Important
Functions does not currently support the logging module, but print statements will turn up as logs. In some cases, importing the logging module can hide prints and exception tracebacks in the logs. If you experience `Failed` calls with no traceback in the logs, make sure that the logging module is not imported. If you still don’t see any logs, your function probably ran out of memory during execution. You can check the memory consumption of your function locally with the Memory Profiler.
:::

## Schedule a function

Create a schedule to run a function at regular intervals. Note that when you have created the schedule, you cannot change it. You must delete it and create a new schedule.

**Example:**

```python
schedule = client.functions.schedules.create(
name="my-schedule",
cron_expression="0 0 * * *",
function_id=123456789,
data={"assetNo": 0},
client_credentials={"client_id": "my-client-id", "client_secret": "my-client-secret"}
)
```

This example runs your function every day at 12:00 AM, as specified by the cron expression. You attach the schedule to your function via the `function_id` argument. Note that you need to provide `client_credentials`. These will be used to create a session for the schedule, which will be kept alive for the lifetime of the schedule.

Deleting a function also deletes the associated schedule.

## Upload and run a function from CDF

In addition to uploading and running functions via [the Python SDK](https://github.com/cognitedata/cognite-sdk-python) and [the API](../../api/playground/#tag/Functions), you can upload, run, and share functions directly from CDF at [fusion.cognite.com](#).

:::tip TIP

Choose CDF when you deploy a single function for experimental or test purposes. In CDF, you can also have an overview on all functions running in a project, and check for failed calls.

Use the SDK when you want to deploy functions that are automatable, scalable, and reusable.

:::

To upload a function to CDF:

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com), and select **Cognite Functions**.
2. Select **Upload function**, and drag and drop the zip file with at least a Python file called `handler.py` with a function named `handle` with any of following arguments: `data`, `client`, `secrets`, and `function_call_info`.

   See [Create a function from an uploaded zip file](#create-a-function-from-an-uploaded-zip-file) for more information.

3. Give your function a **name** and, if necessary, fill in the optional fields.

4. Select **Upload**

## Call a function from CDF

To call a function from CDF:

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com), and select **Cognite Functions**.
2. Choose the function you want to call, and then select **Call**.

3. **Optional.** To schedule the function:

   1. Select **Create schedule** and enter a name, client credentials, and a cron expression for when you want to run your function.

The columns **Calls**, **Schedules**, and **Details** provide more information about the functions. You can also find information about **call status**, **response**, and **logs**.
