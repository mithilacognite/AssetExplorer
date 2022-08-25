---
pagination_next: null
pagination_prev: null
---

# Setup and administration with API keys

This article explains how you can use the **Cognite Data Source for Grafana** to use a Cognite Data Fusion (CDF) project as a data source in Grafana to query, explore and visualize data that is stored in CDF.

The Cognite Data Source uses an API key to connect to your CDF project. The API key is stored in a safe location on your computer, and you can safely share the Grafana report with other users. To view the data in the report, the other users need their own API key.

## Connect to Cognite Data Fusion (CDF)

Follow the steps below to connect to a CDF project and use it as a data source in Grafana.

## Before you start

To access data in CDF you need a service account and an API key:

1. Follow [these steps](../../../access/guides/give_access_services.md#create-a-service-account-for-an-app-or-service) to create a service account. The account needs these capabilities:

   - `timeSeriesAcl:READ`: **required** to find and plot time series.
   - `assetsAcl:READ`: **optional** to use template variables and select time series from an asset.
   - `eventsAcl:READ`: **optional** to use annotations.

   Optionally, you may also need to give access to security categories. More about CDF access management is at [docs.cognite.com/cdf/access](http://docs.cognite.com/cdf/access/).

1. Follow [these steps](../../../access/guides/give_access_services.md#generate-an-api-key-for-a-service-account) to generate an API key for the service account.

## Step 1: Sign up for Grafana

To sign up for Grafana:

1. Navigate to [grafana.com](https://grafana.com/signup/starter/connect-account), **create** your Grafana Cloud Account and then **go to your account**.

2. **Log in** to your Grafana instance.

   :::info NOTE
   To install Grafana as a **self-hosted** instance, follow [this installation guide](https://grafana.com/docs/grafana/latest/installation/).
   :::

## Step 2: Install the Cognite Data Source for Grafana

To install the Cognite Data Source:

1. Navigate to **Configuration > Plugins** and click **Find more plugins on Grafana.com**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/search-plugin.png" alt="Search plugin " width="80%"/>

1. Scroll down and select the **Cognite Data Fusion** data source. Then, click **Install plugin** and **Install now**.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/install-plugin.png" alt="Install plugin " width="80%"/>

:::info NOTE

If you installed Grafana as a **self-hosted** instance, install the Cognite Data Source for Grafana via the [grafana-cli](https://grafana.com/docs/grafana/latest/administration/cli/) command:

```bash
grafana-cli plugins install cognitedata-datasource
```

:::

## Step 3: Configure the Cognite Data Source for Grafana

To add **Cognite Data Source** to your Grafana instance:

1. Navigate to **Configuration > Data Sources** in the left sidebar of your dashboard and click **Add data source**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/add-datasource.png" alt="Add datasource " width="80%"/>

1. Search for the **Cognite Data Fusion** data source and click **Select**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/search-datasource.png" alt="Search datasource " width="80%"/>

1. Configure your data source by providing the **project name** and the **API key**. Then click **Save and test**.
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/configure-datasource.png" alt="Configure datasource " width="80%"/>

You’re now ready to [create your first dashboard](timeseries#create-a-dashboard).

## Connect the Cognite Data Source to multiple projects

If you need to separate environments (prod/dev) or to give more granular access, you can [initialize](https://grafana-devx.cognite.ai/datasources/new) the Cognite Data Source multiple times with different projects, clusters or/and service accounts.

## Restricting access to dashboards in Grafana

In Grafana, you can use the [folder structure](https://grafana.com/docs/grafana/latest/permissions/dashboard_folder_permissions/) to control who can access your dashboards.

:::info TIP
Grafana has a way to [share dashboards](https://grafana.com/docs/grafana/latest/dashboards/share-dashboard/#dashboard-snapshot) called **snapshot**. Dashboard snapshots can be accessed by anyone who has the link and can reach the URL. We do **not** recommend creating snapshots for any dashboards that contain **restricted information**.
:::

**Learn more** about managing Grafana at [grafana.com](https://grafana.com/) and [community.grafana.com](https://community.grafana.com/).
