---
pagination_next: null
pagination_prev: null
title: Introduction
---

# Templates

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Early adopter
Templates is currently in beta testing and only available to customers via our Early Adopter program. For more information and to request to join the program, visit the [Flexible data modeling](https://hub.cognite.com/groups/flexible-data-modeling-early-adopter-208) group on the Cognite Hub.
:::

Templates allow you to structure and organize data stored in CDF and create data models specific to your applications and solutions. By accessing the data through templates, you can scale your solution across more data without changing or redeploying your application.

Each **template** defines **the structure** of the data objects that will be using the template. You can, for example, create a template for the _pumps_ you use in your application. In the template, you define that _pumps_ should have _inlet pressure_ as a property referencing a time series. You can use **template groups** to hold collections of templates.

Each **instance** of a template is **the actual data object**. The instance can, for example, be _pump_01_ with _timeseries_240_ as the _inlet pressure_.

Follow the steps below to create a template group and a template to model data, populate the data model with data, and then query the data.

<!-- ## Getting started with templates

To turn on the templates feature, follow the below steps:

1. You need to have a CDF account that has `group:list` scoped to at least yourself.
2. Make sure your tenant has a new Group called `templates-preview` and add all the relevant users who wants to access Templates
3. If you're using an OIDC tenant, make sure you link to the correct Azure AD group, see [Create groups](/cdf/access/guides/create_groups_oidc).
4. Contact us on [Cognite Hub](https://hub.cognite.com/groups/flexible-data-modeling-early-adopter-208) to get access.

To ensure you have access to templates, navigate to [fusion.cognite.com](fusion.cognite.com). Check if you have **Template management** on the Homepage, and we're good to go.

<img className="screenshot" src="/images/cdf/templates/templates-in-fusion.png" alt="View template groups"/>

And make sure when you enter into the feature you do not get any permissions warning. -->

## Step 1: Create a template group

Before you can create a template, you need to create a template group using [the CDF portal application](#create-a-template-group-using-the-cdf-portal-application) or an [SDK](#create-a-template-group-using-an-sdk).

### Create a template group using the CDF portal application

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Explore and build** > **Template management**.

1. Select **Create template group** and give the group a name and description. The new template group is automatically versioned as `v1`.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/create_template_group.png" alt="Create template group"/>

1. Select **Share** to give additional users access to edit your template group.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/share-template.png" alt="Share template"/>

### Create a template group using an SDK

<Tabs>
  <TabItem value="py" label="Python" default>

<PythonSdk />

1. Install and authenticate the Cognite Python SDK to get started: [Getting started with Python SDK](/dev/guides/sdk/python). In the below code, assume that `client` is an authenticated `CogniteClient` from `cognite-sdk`.

2. Create a template group:

   ```python
   from cognite.client.data_classes import TemplateGroup
   template_group = TemplateGroup(
   "Pump-Dashboard",
   "Template group containing templates for a pump dashboard"
   )
   client.templates.groups.create(template_group)
   ```

   Learn more: [Using the Python SDK with templates groups](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html?highlight=templates#templates).

</TabItem>
<TabItem value="js" label="JavaScript" default>

<JsSdk />

1. Install the JavaScript SDK:

   ```bash
   npm install @cognite/sdk
   ```

   To learn about **authentication** with the SDK, see [Getting started with JavaScript SDK](/dev/guides/sdk/js). In the below code, assume that `client` is an authenticated `CogniteClient` from `@cognite/sdk`.

2. Create a template group:

   ```js
   const templateGroups = [
     {
       externalId: 'Pump-Dashboard',
       description: 'Template group containing templates for a pump dashboard',
     },
   ];
   const createdTemplateGroups = await client.templates.groups.create(
     templateGroups
   );
   ```

   Learn more: [Using the JavaScript SDK with templates groups](https://cognitedata.github.io/cognite-sdk-js/beta/classes/_stable_src_api_templates_templategroupsapi_.templategroupsapi.html).

</TabItem>
</Tabs>

## Step 2: Model data with templates

You can use templates to model the structure of your data objects using [the CDF portal application](#model-data-using-the-cdf-portal-application) or an [SDK](#model-data-using-an-sdk).

### Model data using the CDF portal application

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Explore and build** > **Template management**.
1. Select the template group where you want to create the template.

1. Select **Create template** and give the new template a name and description.

1. Add the fields you want to use in your template:

   - Resource types: **Asset**, **Time series**, **Files**, **Sequences**.
   - Primitives: **String**, **Int**, **Float**, or **Boolean**.
   - Relationships: other templates you have defined in your data model.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/create_template.png" alt="Create template UI" style={{ maxWidth: '800px', width: '100%', display: 'block' }} />

   To specify a list, use `[nnn]`. For example, a list of `String` is `[String]`.

:::tip
The template UI form does not display all available features. Use the Code Editor or an SDK to access all features. To use the Code Editor, navigate to **Schema** tab and select **Edit template** in the template overview.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/code-editor-ui.png" alt="Code Editor UI" style={{ maxWidth: '800px', width: '100%', display: 'block' }}/>

Once you've made the changes to the code editor on the right side, select **Save** to save the changes.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/create_template_fusion.png" alt="Create template" style={{ maxWidth: '800px', width: '100%', display: 'block' }}/>
:::

### Model data using an SDK

<Tabs>
  <TabItem value="py" label="Python" default>

<PythonSdk />

1. Install and authenticate the Cognite Python SDK to get started: [Getting started with Python SDK](/dev/guides/sdk/python). In the below code, assume that `client` is an authenticated `CogniteClient` from `cognite-sdk`.

2. Create a template.

   ```python
   from cognite.client.data_classes import TemplateGroupVersion

   schema = '''
   "The schema of pumps as seen by the dashboard"
   type Pump @template {
   "Inlet pressure"
   inlet_pressure: TimeSeries,
   "Generation"
   gen: String
   }
   '''
   template_group_version = TemplateGroupVersion(schema)
   client.templates.versions.upsert(template_group.external_id,template_group_version)
   ```

Learn more: [Data modeling](/dev/concepts/resource_types/templates/data-model-spec).

</TabItem>
<TabItem value="js" label="JavaScript" default>

<JsSdk />

1. Install the JavaScript SDK.

   ```bash
   npm install @cognite/sdk
   ```

   To learn about authentication with the SDK, see [Getting started with JavaScript SDK](/dev/guides/sdk/js). In the below code, assume that `client` is an authenticated `CogniteClient` from `@cognite/sdk`.

2. Create a template:

   ```js
   import { ConflictMode } from '@cognite/sdk';

   const version = {
     schema: `
       "The schema of pumps as seen by the dashboard"
       type Pump @template {
           "Inlet pressure"
           inlet_pressure: TimeSeries,
           "Generation"
           gen: String
       }`,
     conflictMode: ConflictMode.Patch,
   };

   const versions = await client.templates
     .group('Pump-Dashboard')
     .versions.upsert(version);
   ```

   Learn more: [Data modeling](/dev/concepts/resource_types/templates/data-model-spec).

</TabItem>
</Tabs>

## Step 3: Populate the data model using templates

When you have created your data model&mdash;the template group and the template to structure the data&mdash;you can use the template to populate your model with data.

### Populate the data model using the CDF portal application

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Explore and build** > **Template management**.
1. Select the template group and the template that you want use to populate your data model.

1. Add an **instance** to your template from the list of available assets. Then populate the rest of the fields.
1. Select + to add a **time series**, and the select the time series.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/populate_template.png" alt="Populate template " style={{ maxWidth: '800px', width: '100%', display: 'block' }}/>

:::info important
The template user interface does not display all available features. You can use the Code Editor or an SDK to access all features.

Learn more: [Data ingestion](/dev/concepts/resource_types/templates/data-ingest-spec).
:::

#### Suggestions

When you add instances and properties to your template, the **suggestion algorithm** learns your patterns, metadata, and the connections between the time series and infers the time series for the other instances.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/suggestions.png" alt="Suggestions" style={{ maxWidth: '800px', width: '100%', display: 'block' }} />

You can find suggested entries in an overview, or for each property.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/suggestions_bulk.png"
alt="Bulk suggestions " style={{ maxWidth: '800px', width: '100%', display: 'block' }} />
<br />

Review, approve, or reject the suggestions in the **Suggestions overview** panel.

### Populate the data model using an SDK

<Tabs>
  <TabItem value="py" label="Python" default>

<PythonSdk />

1. Install and authenticate the Cognite Python SDK to get started: [Getting started with Python SDK](/dev/guides/sdk/python). In the below code, assume that `client` is an authenticated `CogniteClient` from `cognite-sdk`.

2. Create a `pump` instance using the template you created in the previous example.

   ```python
   from cognite.client.data_classes import TemplateGroup, TemplateGroupVersion, TemplateInstance, ConstantResolver

   pump_1 = TemplateInstance(
       external_id="asset_1",
       template_name="Pump",
       field_resolvers={
           "inlet_pressure": ConstantResolver("timeseries_inletpressure_240"),
           "gen": ConstantResolver("Hex")
           }
       )
   pump_2 = TemplateInstance(
       external_id="asset_2",
       template_name="Pump",
       field_resolvers={
           "inlet_pressure": ConstantResolver("timeseries_inletpressure_249"),
           "gen": ConstantResolver("hex")
           }
       )

   template_group_list = client.templates.versions.list("Pump-Dashboard")
   latest_version = template_group_list[0].version
   client.templates.instances.upsert("Pump-Dashboard", latest_version, [pump_1, pump_2])
   ```

Learn more: [Data ingestion](/dev/concepts/resource_types/templates/data-ingest-spec).

#### Suggestions

To interact with Templates suggestions via Python, install the Python Experimental SDK.

:::caution Alpha
The **Python Experimental SDK** is an alpha version of the Cognite Python SDK.
:::

```bash
pip install cognite-sdk-experimental
```

Learn more in the [experimental SDK documentation](https://cognite-sdk-experimental.readthedocs-hosted.com/en/latest/cognite.html?highlight=templates#get-suggestions-for-missing-entries).

  </TabItem>
  <TabItem value="js" label="JavaScript" default>

<JsSdk />

1. Install the JavaScript SDK:

   ```bash
   npm install @cognite/sdk
   ```

   To learn about authentication with the SDK, see [Getting started with JavaScript SDK](/dev/guides/sdk/js). In the below code, assume `client` is an authenticated `CogniteClient` from `@cognite/sdk`.

2. Create `pump` instances using the template you created in the previous example:

   ```js
   const versions = await client.templates
     .group('Pump-Dashboard')
     .versions.list();
   const instances = [
     {
       externalId: 'Pump_a',
       templateName: 'Pump',
       fieldResolvers: {
         gen: 'Hex',
         inlet_pressure: 'timeseries_inletpressure_240',
       },
     },
     {
       externalId: 'Pump_b',
       templateName: 'Pump',
       fieldResolvers: {
         gen: 'hex',
         inlet_pressure: 'timeseries_inletpressure_249',
       },
     },
   ];
   await client.templates
     .group('Pump-Dashboard')
     .version(versions.items[0].version)
     .instances.upsert(instances);
   ```

Learn more: [Data ingestion](/dev/concepts/resource_types/templates/data-ingest-spec).

  </TabItem>
</Tabs>

## Step 4: Query data with templates

When you have populated the data model with templates, you can query the data using [the CDF portal application](#query-data-using-the-cdf-portal-application), [an SDK](#query-data-using-an-sdk), [a URL](#query-data-via-a-url), or with [the Cognite Data Source for Grafana](#query-data-via-the-cognite-data-source-for-grafana).

### Query data using the CDF portal application

1. Navigate to [Cognite Data Fusion](https://fusion.cognite.com) and select **Explore and build** > **Template management**.
1. Select the template group and the template that you want to use to query data.
1. Use the **Query explorer** tab to create GraphQL queries.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/query-explorer.png" alt="Query explorer" style={{ maxWidth: '800px', width: '100%', display: 'block' }} />

   :::tip
   Use <kbd>CMD</kbd>/<kbd>CTRL</kbd> + <kbd>SPACE</kbd> to toggle autocomplete.
   :::

### Query data using an SDK

<Tabs>
  <TabItem value="py" label="Python" default>

<PythonSdk />

1. Install and authenticate the Cognite Python SDK to get started: [Getting started with Python SDK](/dev/guides/sdk/python). In the below code, assume that `client` is an authenticated `CogniteClient` from `cognite-sdk`.

1. Create and run a query.

   ```python
   query = '''
   {
       pumpQuery {
           items {
               _externalId
               inlet_pressure {
                   externalId
                   datapoints(limit: 100) {
                       timestamp
                       value
                   }
               }
           }
       }
   }
   '''
   result = client.templates.graphql_query("Pump-Dashboard", 1, query)
   ```

Learn more: [Data querying](/dev/concepts/resource_types/templates/data-query-spec).

  </TabItem>
  <TabItem value="js" label="JavaScript" default>

<JsSdk />

1. Install the JavaScript SDK:

   ```bash
   npm install @cognite/sdk
   ```

   To learn more authentication with the SDK, see [Getting started with JavaScript SDK](/dev/guides/sdk/js). In the below code, assume `client` is an authenticated `CogniteClient` from `@cognite/sdk`.

1. Create and run a query:

   ```js
   const query = `
   {
       pumpQuery {
           items {
               _externalId
               inlet_pressure {
                   externalId
                   datapoints(limit: 100) {
                       timestamp
                       value
                   }
               }
           }
       }
   }`;

   await client.templates
     .group('Pump-Dashboard')
     .version(1)
     .runQuery({
       query,
     });
   ```

Learn more: [Data querying](/dev/concepts/resource_types/templates/data-query-spec).

  </TabItem>
</Tabs>

### Query data via a URL

With the correct authentication headers you can make queries directly against the data model via the GraphQL endpoint:

`https://{cluster}.cognitedata.com/api/v1/projects/{project}/templategroups/{externalId}/versions/{version}/graphql`

Where:

- `{cluster}` is the name of the CDF cluster (`api`, `greenfield`, etc.)
- `{project}` is the name of the CDF project.
- `{externalId}` is the external id of the template group to query (for example, _Pump-Dashboard_)
- `{version}` is the version of the template group to query (for example, _2_).

You can also use GraphQL or Postman (with the correct authentication headers) to run the queries.

### Query data via the Cognite Data Source for Grafana

You can use a modified version of the Cognite Data Source for Grafana with added support for templates to query data. Learn more about the
[Cognite Data Source for Grafana](/cdf/dashboards/guides/grafana/getting_started).

If you already have Grafana on your computer:

1. Download [this zip file](https://github.com/cognitedata/templates-docs/blob/master/assets/cognitedata-datasource.zip).
2. Extract the file into your local Grafana plugins folder.
3. Restart Grafana.

#### Install

Run Grafana with the data source installed using Docker:

1. `docker run -p 3000:3000 --name grafana -e "GF_INSTALL_PLUGINS=https://github.com/cognitedata/templates-docs/raw/master/assets/cognitedata-datasource.zip;cognitedata-templates-datasource" grafana/grafana`
2. You should now have access to Grafana at `http://localhost:3000`.

   **Note:** The default username/password for signing in is admin/admin.

#### Getting started

To use the Cognite Data Source for Grafana:

1. In Grafana, navigate to **Configuration**, select **Data Sources**, then **Add data source**, and choose **Cognite Data Fusion (w/ Templates)**.
2. Give the data source a name, provide the name of the project, and the credentials.
3. Click **Save & test**.
4. Create a dashboard with a panel, and choose the CDF Templates datasource you just created.
5. Navigate to the **Template Query** tab and select your template group in the dropdown.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/grafana-plugin-query-editor.png" alt="Create template group" style={{ maxWidth: '800px', width: '100%', display: 'block' }} />
