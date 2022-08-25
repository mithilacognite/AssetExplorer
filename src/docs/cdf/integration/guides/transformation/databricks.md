---
pagination_next: null
pagination_prev: null
---

# Databricks

Databricks is a collaborative, Jupyter-style notebook application that lets you analyze and transform data in Cognite Data Fusion (CDF) using distributed cloud computing, Spark, and the [Cognite Spark Data Source](https://github.com/cognitedata/cdp-spark-datasource/blob/master/README.md).

The collaborative features make Databricks an excellent tool to use for experimentation and development during the initial phases of a project. Later, you can move the code from the Databricks notebooks to your production setup, or continue to use Databricks notebooks as part of your production workflow. For example, you can use Databricks to:

- Quickly set up complex transformations in an ingestion pipeline.
- Cooperatively develop transformations.
- Explore data.
- Contextualize data.
- Train machine learning models.

Databricks notebooks can also be part of your **Azure Data Factory** pipeline, where they are a good fit for the more complex calculations and processing-heavy components of data science workflows.

## Enable Databricks and create a cluster in Azure

To use Databricks in Azure, you need to create an Azure Databricks workspace and an Apache Spark cluster:

1. To create an **Azure Databricks workspace**, follow [these instructions](https://docs.microsoft.com/en-us/azure/azure-databricks/quickstart-create-databricks-workspace-portal#create-an-azure-databricks-workspace).

2. To create an **Apache Spark cluster**, follow [these instructions](https://docs.microsoft.com/en-us/azure/azure-databricks/quickstart-create-databricks-workspace-portal#create-a-spark-cluster-in-databricks).

## Install the Cognite libraries on your cluster

To work with the data in your CDF project, you need to install both the **Cognite Python SDK** and **Cognite Spark Data Source** on your cluster.

### Install the Cognite Python SDK

1. Click the **Clusters** icon in the sidebar.

1. Select your cluster.

1. Click the **Libraries** tab.

1. Click **Install New**.

1. Choose **PyPI**.

1. Type **cognite-sdk** in the Package field, and click **Install**.

### Install the Cognite Spark Data Source

1. Select the **Clusters** icon in the sidebar.

1. Select your cluster.

1. Select the **Libraries** tab.

1. Select **Install New**.

1. Select **Maven**.

1. Select **Search Packages**.

1. Choose to search in **Maven Central**, and search for **com.cognite.spark.datasource**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/search_maven.png" alt="Search Maven central" width="60%"/>

1. Select the row where the **version number** (\*cdf-spark-datasource\_**X.xx\***) in the **Artifact Id** column matches the **version of Scala** that is running on the cluster. Then click **Select**.

1. Select **Install**.

#### Learn more

- [Using libraries in Azure Databricks](https://docs.microsoft.com/en-us/azure/databricks/libraries)
- [The Cognite Python SDK](../../../../dev/guides/sdk/python/index.md)
- [The Cognite Spark Data Source](https://github.com/cognitedata/cdp-spark-datasource/blob/master/README.md)

## Create a notebook and connect it to your cluster

1. Click the **Azure Databricks** icon in the sidebar.

2. Under **Common Task**, click **New Notebook**.

3. Give your notebook a **Name**, choose **Python** as the **language** and choose the **cluster** you just created. Then click **Create**.

4. In the notebook menu bar, find the dropdown with the name of your cluster. Click the small arrow pointing downwards, and click **start Cluster**.

5. **Confirm** that you want to start the cluster.

The cluster takes a few minutes to start. A solid green light shows when it is running.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/notebook_start_cluster.png" alt="Start the cluster" width="33%"/>
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/notebook_cluster_running.png" alt="Notebook cluster running" width="33%"/>

## Set up and use a secret scope to store your API key

We recommend that you use the Databricks CLI and secrets to store the API key for your CDF project. Do not store API keys in clear text in your notebooks.

To set up a scope and a secret:

1. To install **the Databricks CLI**, follow [these instructions](https://docs.databricks.com/dev-tools/databricks-cli.html#set-up-the-cli).

2. To generate a **personal access token**, follow [these instructions](https://docs.databricks.com/dev-tools/api/latest/authentication.html#generate-a-token).

3. Run `databricks configure --token` and specify your **Databricks host** and your **personal access token** to set up authentication.

4. Run `databricks secrets create-scope --scope <scope-name>` to create your secret scope.

5. Run `databricks secrets put --scope <scope-name> --key <key-name>` to add the API key as a secret to the scope.

6. In the editor that starts, paste in the API key for your CDF project. Then save and exit the editor.

7. To use the secret in your notebook, add this code snippet into the first cell in the notebook:

   ```python
   ts = spark.read.format("cognite.spark.v1") \
       .option("type", "timeseries") \
       .option("apiKey", dbutils.secrets.get("<scope-name>", "<key-name>")) \
       .load()
   display(ts)
   ```

8. Replace `<scope-name>` and `<key-name>` with your own values, and then press **Ctrl + Enter** to run the cell.

   The result is a table with all the time series you have ingested into CDF.

## Share a notebook with other users

To collaborate with your colleagues, you can give other users permissions to use your notebook:

1. Open the notebook you want to share, and in the notebook menu bar, click **Permissions**.

2. Select the users and groups you want to share the notebook with, and specify the permissions you want to grant them. Then click **Add** and **Done**.

3. Share the link to your notebook.
