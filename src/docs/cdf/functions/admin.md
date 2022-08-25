---
pagination_next: null
pagination_prev: null
---

# Setup and administration

The [Functions service](https://docs.cognite.com/api/v1/#tag/Functions) provides a **scalable**, **secure**, and **automated** way to host and execute **Python** code.

The Python code can range from basic operations and data transformations to deploying advanced machine learning models. For example, you can use Functions to:

- Preprocess data, transform and validate data, convert data to the same unit, and detect deviation from estimated production.
- Convert from simple to complex calculations: interpolation, production trends, computing gas rates, generating alarms based on events.
- Create statistical models such as forecasting oil/water separation and time series smoothing.

## Activate Cognite Functions in CDF for Azure

Before creating a Cognite Function you may have to activate functions in the CDF application.

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).

1. Sign in and navigate to **Explore** and then **Cognite Functions**.

- If you see the warning: `Cognite Functions is not activated for the project`, click **Activate** to request activation.

- If you see the **Upload function** button, your project is already activated for Cognite Functions.

Activation can take up to two hours. The **Activation in progress** message will be shown until the process has been completed.

When the activation is done, the **Upload function** button is available. You can now create Cognite Functions using the CDF user interface, [the Functions API](https://docs.cognite.com/api/v1/#tag/Functions), or the [Python SDK](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#functions)

## Set up Functions authentication

When Cognite Functions has been activated for your CDF project, make sure you have [registered the Cognite API and the CDF portal application in Azure AD](https://docs.cognite.com/cdf/access/guides/configure_cdf_azure_oidc) and [set up Azure AD and CDF groups](https://docs.cognite.com/cdf/access/guides/create_groups_oidc).

To use Functions, a user or an application must be a member of a CDF group with these capabilities:

- `functions:write`: to create, call and schedule functions.
- `functions:read`: to retrieve and list functions, retrieve function responses and function logs.
- `files:read`: to create functions.
- `files:write`: to create functions.
- `sessions:create`: to call and schedule functions.

Read more about [capabilities](https://docs.cognite.com/cdf/access/guides/capabilities).
