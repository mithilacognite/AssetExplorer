---
pagination_next: null
pagination_prev: null
---

# Troubleshooting

This article helps you resolve issues you may encounter using Cognite Functions.

## Incorrect folder structure when deploying a function as a zip file

Cognite Functions expects `handler.py` to be at the root of the zipped folder or at a path relative to the root as pointed to by the [`function_path`](https://docs.cognite.com/cdf/functions/#create-a-function-from-an-uploaded-zip-file) attribute.
The following errors occur when `handler.py` is not found at either of these locations.

**Error messages:**

When using the API to publish the function, you may see this error message in CDF if the function deployment fails:

```commandline
No Python module found at location "handler.py" in zip-file.
```

If you use the Cognite SDK to publish the function, you may see this error message if the function deployment fails:

```commandline
No file found at location.
```

This typically occurs when the root folder is zipped and not the folder content.
Here's an example of an incorrect folder structure:

```commandline
func/
├── handler.py
└── requirements.txt
```

If you run the zip command outside the `func/` folder, the folder structure becomes incorrect.

```commandline
# pwd: ~/tmp
> zip -r func.zip func/
  adding: func/ (stored 0%)
  adding: func/handler.py (stored 0%)
  adding: func/requirements.txt (stored 0%)
```

The `requirements.txt` must be at the root of the zip-file.

**Solution**:

`cd` into the `func` folder before you zip the contents:

```commandline
# pwd: ~/tmp/func
❯ zip -r func.zip *
  adding: handler.py (stored 0%)
  adding: requirements.txt (stored 0%)
```

## Calling a Cognite Function from within a Cognite Function

When using API keys, you can call a Cognite Function from another Cognite Function. However, we have deprecated legacy authentication with API keys and strongly encourage customers to [migrate](https://docs.cognite.com/cdf/access/guides/migrate_apikeys_oidc) from using API keys to using [OpenID Connect authentication](https://docs.cognite.com/cdf/functions/#authentication-with-openid-connectas) soon as possible.
You can’t call a Cognite Function from within a Cognite Function if you authenticate with OIDC tokens.

## Failed calls without logs

A function call returns with the status `Failed`, and there are no logs to explain why it `Failed`.

**Cause:**

Cognite Functions does not support the Python `logging` module, and importing it can sometimes hide the stack trace of failed calls.

**Solution**

Rerun the function after replacing logging statements with print statements. Remove all imports of the logging module.

## Multithreading is not behaving as expected

Avoid using multithreading from within the function as this may break the internal structure of the function such as function status reporting and error detection.

## Faulty requirements.txt

A faulty requirements.txt usually results in error messages from pip. These occur in the `error` attribute of the object returned by the function `create` operation. If the function deployment fails, the error also occurs in the CDF user interface.

:::info Note!
We have experienced cases where the pip installation failed, but no error messages occurred in the pip log.

:::

**Solution:**

Test the installation locally: `pip install -r requirements.txt`
For Cognite Functions on Azure, the `requirements.txt`-file must be compatible with:

```
azure-functions
azure-identity
azure-keyvault-keys
azure-storage-blob
cryptography
```

## Incorrectly named requirements.txt

Your function call fails with the following message in the logs.

**Error message:**

```
ModuleNotFoundError: No module named ...
```

**Solution:**

Make sure the file requirements.txt is correctly named. If the file name is misspelled, the packages listed in the file will **not be installed**.

## Absolute vs. relative imports

If the following message occurs in the function call logs, a relative import has failed.

**Error message:**

```
ImportError: attempted relative import with no known parent package
```

**Cause:**

The user is attempting to use relative imports within their handler.py.

**Solution:**

Use absolute imports instead of relative imports to avoid ambiguity about where the package should be imported from. See RealPython: [Absolute vs Relative Python Imports.](https://realpython.com/absolute-vs-relative-python-imports)

## Scheduled function call fails/times out

The following error message in the function call logs can indicate a problem with the session used to instantiate `CogniteClient`:

**Error message**:

```commandline
Could not fetch a valid token or a valid API key. Unable to instantiate a CogniteClient. Please verify your credentials.
```

**Solution:**

Check CDF to see if the OIDC settings have been updated. This revokes all existing sessions, and all schedules will fail. Recreate the function schedules to solve this problem.

## Switching from API keys to OIDC tokens

If functions authenticate with API keys, you can use the function's `external_id` to link a schedule to the Cognite Function. If you delete the Cognite Function, the linked schedule will persist and can potentially be relinked to a new function with the same `external_id`.

If functions authenticate with OIDC-tokens, you must link a schedule to a Cognite Function via the function's ID. If you delete the Cognite Function, the schedule can never be relinked to any function since the ID never repeats. Thus, all schedules attached to a function are deleted together with the function.

## Connecting to databases outside CDF

Although connecting to databases outside CDF is technically possible, Cognite doesn't provide an IP range/CIDR to add to an allowlist. This makes your database publicly available for any IP, making it highly insecure.

Cognite Functions is intended to be used with CDF data. Solutions such as Azure Functions or AWS Lambdas may be a better fit for generic or arbitrary code execution.

## Download files to the function

If you are trying to download/create files from within a Cognite Function, you may see this error:

**Error message**

```
OSError: [Errno 30] Read-only file system
```

**Solution:**

The function code only has `write` access to the `/tmp` directory.
For example, the following snippet creates a temporary directory inside `tmp`. Use this directory to create temporary files required during function execution.

```commandline
with tempfile.TemporaryDirectory() as tmpdirname:
    print('created temporary directory', tmpdirname)
```

:::important Note!
You cannot rely on files created during the execution of a function to be persisted and available in the next execution.
:::
