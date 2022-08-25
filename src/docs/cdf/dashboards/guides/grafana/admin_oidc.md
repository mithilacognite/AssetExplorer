---
pagination_next: null
pagination_prev: null
---

# Setup and administration with OpenID Connect

This article explains how you can use the **Cognite Data Source for Grafana** to use a Cognite Data Fusion (CDF) project as a data source in Grafana to query, explore and visualize data that is stored in CDF.

You can use OpenID Connect and your existing identity provider (IdP) framework to manage access to CDF data securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

Follow the steps below to connect to a CDF project with OpenID Connect and use CDF as a data source in Grafana.

:::info NOTE
To perform the steps below, you need to be an administrator of Azure AD and your Grafana instance.
:::

## Before you start

Make sure that you have administrator access to your Grafana instance. We support the [Enterprise](https://grafana.com/products/enterprise/grafana/) and the [self-hosted](https://grafana.com/docs/grafana/latest/installation/) editions of Grafana. We also support free cloud instances, but then you need to [set up a client credentials grant flow](#set-up-a-client-credentials-grant-flow) for each instance of the Cognite Data Source.

## Step 1: Register Grafana as an application in Azure AD

The Cognite Data Source for Grafana uses the credentials you use to sign in to Grafana to connect to CDF. Therefore, you need to set up the Grafana instance to authenticate the user towards the same identity provider (IdP) as your CDF project.

The first step is to configure the Grafana instance to use OAuth2. The example below uses Azure AD as the IdP.

1.  Make sure that you have already [registered the Cognite API and the CDF portal application in Azure AD](../../../access/guides/configure_cdf_azure_oidc.md).
1.  To enable users to sign in to Grafana with their organizational ID, follow the steps in the Grafana documentation to [register Grafana as an application in Azure AD and enable Azure AD authentication in Grafana](https://grafana.com/docs/grafana/latest/auth/azuread/).

    :::info NOTE

    Use these permission **scopes** in the [Grafana configuration file](https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations):
    `scopes = openid email profile offline_access https://<your-cluster>.cognitedata.com/user_impersonation https://<your-cluster>.cognitedata.com/IDENTITY`
    :::

    :::info TIP
    If you are running Grafana locally, use `http` in the **redirect URL**. For example: `http://localhost:3000/login/azuread`.
    :::

1.  Make sure that you close the Grafana configuration file after you have updated it, and the restart the Grafana service.

1.  Sign in to Grafana to **verify** that the configuration is successful.

## Step 2: Decide access to CDF data

1.  To decide what access users should have to **data in CDF**, follow the steps in [Link Azure AD and CDF groups](../../../access/guides/create_groups_oidc.md).

2. The account needs these capabilities:

   - `timeSeriesAcl:READ:` **required** to find and plot time series.

   - `groupsAcl:LIST:` **required** to verify Grafana connectivity.

   - `projectsAcl:LIST:` **required** to verify Grafana connectivity.

   - `assetsAcl:READ:` **optional** to use template variables and select time series from an asset.

   - `eventsAcl:READ:` **optional** to use annotations.

   - `templateGroupsAcl:READ:` **optional** to use templates.

   - `templateInstancesAcl:READ:` **optional** to use templates.

## Step 3: Install the Cognite Data Source for Grafana

To install the Cognite Data Source for Grafana:

- If you are using the **Grafana Enterprise** edition:

  1. In your browser, make sure you're logged in to Grafana as an administrator.

  2. Navigate to the [Cognite Data Source for Grafana plugin](https://grafana.com/grafana/plugins/cognitedata-datasource) and select **Install plugin**.

- If you are using a **self-hosted** Grafana instance:

  1. Follow the instructions on the [Installation](https://grafana.com/grafana/plugins/cognitedata-datasource/?tab=installation) tab to install the plugin.

## Step 4: Configure the Cognite Data Source for Grafana

To configure the Cognite Data Source for Grafana:

1. In your browser, log in to Grafana as an administrator.

1. In Grafana, navigate to **Configuration** > **Data sources** > **Add data source** > Search for "**Cognite**".

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/grafana_config_select_datasource.png" alt="Select data source plugin " width="60%"/>

1. Enter your **project name**, the **API URL** and select **Forward OAuth Identity**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/grafana_configure_plugin.png" alt="Configure data source " width="60%"/>

   :::info NOTE
   The Grafana free tier does not allow you to set an identity provider for the whole Grafana instance, and you can not select a **Forward OAuth Identity**. Instead, you need to [set up a client credentials grant flow](#set-up-a-client-credentials-grant-flow) for each instance of the Cognite Data Source.
   :::

1. Click **Save & Test** to validate your Cognite credentials.
1. **Verify** that the configuration is successful: Sign in to Grafana with a non-admin identity and [create a dashboard](timeseries.md#create-a-dashboard) to confirm that regular users in your Azure AD can access Grafana and work with data from CDF.

**Learn more** about managing Grafana at [grafana.com](https://grafana.com/) and [community.grafana.com](https://community.grafana.com/).

## Set up a client credentials grant flow

In some cases, for example, if you're using the Grafana free tier, you can not set up an identity provider for the whole Grafana instance. Instead, follow these steps to set up a client credentials grant flow for each instance of the Cognite Data Source:

1. Navigate to your Grafana instance.
2. Open **Data Source settings**.
3. Disable **Forward OAuth identity**.
4. Enable **OAuth2 client credentials**.
5. Fill in the necessary credentials.
6. Click **Save & Test** to validate your Cognite credentials.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/config-client-credentials.png" alt="Configure client credentials " width="60%"/>
