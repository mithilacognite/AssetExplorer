---
pagination_next: null
pagination_prev: null
title: Setup and administration
---

# Setup and administration for PostgreSQL gateway

Use the **PostgreSQL gateway** to **ingest data into Cognite Data Fusion** (CDF) from popular ETL tools. This service provides a PostgreSQL interface to CDF and the CDF resource types appear as tables in the PostgreSQL database. You can ingest data directly into CDF resources, like assets, events, and datapoints and to [Cognite RAW](././ingest_into_raw.md).

## When should you use the PostgreSQL gateway?

Consider using the PostgreSQL gateway if:

- You're integrating a new data source that can be accessed through Azure Data Factory or other ETL tool that supports writing to PostgreSQL. The PostgreSQL gateway can be used as a sink in ADF.
- You have a previously built an extractor that can push data to PostgreSQL, but not to CDF.

Consider other solutions if:

- You need very high performance especially for ingestion of RAW rows or time series datapoints, in the order of tens of thousands rows/points per second (10-50k/s as a ballpark figure).

:::info NOTE

- Microsoft's Azure Data Factory is the officially supported ETL tool.
- PostgreSQL gateway is only intended for ingestion. Querying data from CDF for analysis and visualization is not supported.

:::

This article explains how an Azure Active Directory (AD) administrator can control access to ingesting data into CDF from your existing ETL tools, such as Azure Data Factory, that support writing to PostgreSQL, using the CDF PostgreSQL gateway.

When you have registered the PostgreSQL gateway, users can sign in with their organizational ID to integrate data in a CDF project.

:::info NOTE
To perform the steps below, you need to be an administrator of Azure AD.
:::

## Before you start

Make sure you have [registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md) and
[set up Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md) to control access to CDF data.

## Step 1: Register an app in Azure AD to use with PostgreSQL gateway

1. Sign in to the [Azure portal](https://portal.azure.com) as an admin.

1. If you have access to multiple tenants, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png"/> in the top menu to select the tenant in which you want to register an application.

1. Search for and select **Azure Active Directory**.

1. Under **Manage**, select **App registrations** > **New registrations**.

1. In the **Register an application** window, enter the app name, and then select **Register**.

1. Copy and make a note of the **Application (client) ID**. This value is required to create user credentials for the PostgreSQL gateway.

1. Under **Manage**, select **Certificates & secrets** > **New client secret**.


   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/oidc_client_secret.png" alt=" " width="100%"/>

8. Enter a client secret description and an expiry time, and then select **Add**.

1. Copy and make a note of the client secret in the **Value** field.

    :::caution NOTE
    Make sure you copy this value now. This value will be hidden after you leave this page.
    :::

## Step 2: Create a group in Azure AD and add the registered app as its member

1. Open the overview window in Azure AD and select **Manage** > **Groups**.

1. Create a group, read more [here](../../../access/guides/create_groups_oidc.md).

1. Open the group. Under **Manage**, select **Members** > **Add members**.

1. Find the app you created above and click **Select**.

1. Return to the overview, and then copy and make a note of the **Object Id**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/app_group.png" alt=" " width="100%"/>

## Step 3: Create a group in CDF and link to the Azure AD group

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com/) as an admin.

1. In the top menu, select **Manage & Configure** > **Manage access**.

1. In the **Access management** window, select **Groups** > **Create new group**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/create_CDF_group_objectId_oidc.png" alt=" " width="60%"/>

1. In the **Create a new group** window, enter a **unique name** for the group.

1. Add relevant capabilities.  The **minimum** requirement is to add the `project:list` and `groups:list` capabilities. You also need to add `read` and `write` capabilities for the CDF resources you want to ingest data into. For instance, if you're ingesting **assets**, add `asset:read` and `asset:write`. 

    :::info
    If you revoke the capabilities in the CDF group, you also revoke access for the PostgreSQL gateway.
    :::

6. Link the CDF group to an Azure AD group:

   1. In the **Source ID** field, enter the **Object Id** for the AAD group exactly as it exists in AAD.

   1. In the **Source name** field, enter the name of the group in Azure AD.

1. Select **Create**.

## Step 4: Create user credentials for the PostgreSQL gateway

1. Send a **POST request** to this server `https://skywarp.{cluster}.cognite.ai/create`.

   `cluster` is where your CDF instance is installed. If you don't know the cluster name, contact Cognite support.

2. Get the **Bearer token** from Azure AD for authentication. To get a bearer token from Postman, see the illustration below.

3. Specify these OIDC credentials in the request body.

```
{
"auth":
    {
    "token_url": "https://login.microsoftonline.com/<YOUR_AAD_TENANT_ID>/oauth2/v2.0/token",
    "client_id": "<YOUR_AAD_CLIENT_ID>",
    "client_secret": "<YOUR_AAD_CLIENT_SECRET>",
    "scope": "<BASE URL>/.default"
    },
    "project": "<YOUR_CDF_PROJECT_NAME>"
}
```

Where:

- `token_url` contains the ID of your Azure AD tenant. To find your tenant ID, see [this article](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant).
- `client_id` is the object Id for the AAD group exactly as it exists in AAD.
- `client_secret` for the AAD group exactly as it exists in AAD.
- `scope` is the base URL + .default of the cluster where your CDF instance is installed.
- `project` is the CDF project name.

The service returns a **username** and **password** with the same CDF capabilities as the group you created in CDF. Make sure to keep these, as they are required when you set up the gateway connection in your ETL tool.

:::caution NOTE
Make sure you copy the **username** and **password**. If you lose the **password**, it cannot be recovered.
:::

**Using Postman**

If you're using the **Postman** tool, you can import [this collection](https://www.getpostman.com/collections/666dd71189d7a997381d). Make sure the **Authorization** parameters are set correctly on the **Authorization** tab:

- In the **Type** field, select **OAuth 2.0**.

- In the **Grant Type** field, select **Client Credentials**.

- In the **Client Authentication** field, select **Send as Basic Auth header**.

- Make sure the **Header prefix** is set to **Bearer**.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/postman_auth_settings.png" alt=" " width="100%"/>

Here's what a user credentials request would look like on the **Body** tab:

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/postman_example.png" alt=" " width="100%"/>

## Step 5: Set up and connect your ETL tool to the PostgreSQL gateway

1. Configure your ETL tool as a pipeline between the source system and the PostgreSQL gateway.

You'll find detailed information in the documentation provided by your tool vendor. For example, you can find the Azure Data Factory documentation [here](https://docs.microsoft.com/en-us/azure/data-factory/).

## Troubleshooting

**User configuration error**

If the connection between the source and sink tests successfully in ADF, but the pipeline fails with a user configuration error, try these solutions:

- The **Write method** field on the **Sink** tab in ADF is set to **Bulk insert**.

- The group for the destination CDF resource type, for instance, assets, is set up with correct capabilities in **Manage & Configure** > **Access management** in CDF.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/adf_config_error.png" alt=" " width="100%"/>
