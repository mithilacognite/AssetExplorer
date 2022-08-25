---
pagination_next: null
pagination_prev: null
---

# Manage templates

:::info BETA
Templates is currently in beta testing and only available to a few customers via our Early Adopter program. To join an Early Adopter program, contact your Cognite representative.
:::

**Build your solution’s data model** and populate it with data already in Cognite Data Fusion (CDF), independently from your solution code. <!-- can you explain what "independently from your solution code" means?  -->

Use templates to structure and organize data to your needs. You can assign fields to the template that you then assign values or reference other data such as time series or assets. Build your view of the data you have available in Cognite Data Fusion and simplify the applications and solutions you are working on by accessing data through templates. Templates remove the gap between the application’s data model and the preexisting structure of the relevant data. It is easy to scale your solution across more data without changing or redeploying your application code or configuration. Instead, you can work with your template in Cognite Data Fusion, use the tooling available there to scale to more data with governance.

- A **template group** hosts your grouping of templates.
- A **template** describes the structure of your data objects.
- An **instance** is the actual data object.<!-- can we call instance data object?-->

  <!--  insert image to show this? -->

  You can, for example, create templates for pumps and valves that you use in your solution. You can further define that pumps should have inlet pressure as a property referencing a time series. The instance can, for example, be your pump_01 with the time series timeseries_inletpressure_240 as the inlet pressure.

## Create template group

To create a template, you first need to create a template group where you can store it.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/create_template_group.png" alt="Create template group " width="80%"/>

- Click **Create template group** (1) and give it a name and description (2). The template group will have version 1: v1

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/inside_template_group.png" alt="Use template group " width="80%"/>

1. Query the template groups using the tabs **Overview**, **Schema**, **Templates & instances**, and **Query explorer** (1).
2. Use **Share** (2) to add users that can edit your template groups.
3. Click **Create template** (3) to add a new template to your group.

## Create template

Use templates to build the structure of your data objects.
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/create_template.png" alt="Create template " width="80%"/>

1. Click **Create template** and give it a name and description.
1. Add the fields you want to use in your template: **Asset**, **Time series**, **String**, **Int**, **Float**, or **Boolean** (1).

## Populate templates

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/populate_template.png" alt="Populate template " width="80%"/>

1. Choose from the list of available assets to add an **instance** to your template (1). When you’ve added an instance, you can populate the rest of the fields.
1. Add **time series** (2). Choose from the list of available time series (3).

## Suggestions

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/suggestions.png" alt="Suggestions " width="80%"/>

1. When you add instances and properties to your template, the **suggestion algorithm** learns your patterns, metadata, and the connections between the time series. The algorithm infers the time series for the other instances.
2. You can find suggested entries in an overview (1), or for each property (2).
   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/templates/suggestions_bulk.png" alt="Bulk suggestions " width="80%"/>

3. Review, approve, or reject the suggestions in the **Suggestions overview** panel, as a bulk operation, or individually.
4. Proceed to solve your data model. <!--  can you explain what this means? -->
5. Use **Grafana** or other tools to visualize your data.

<!--  ## Example: Create a template to monitor the values from a well

### Find your data

In CDF, find the relevant data that you have stored in Collections.
Navigate the asset to find the time series you need, in this case: bottom hole pressure, reservoir data for the well, and gas flow rate. Store these data in Collections.

### Continue in Notebook

Apply your formula in Jupyter Notebook or your tool of choice.
We are going to look for a reduction in the productivity index.
In the algorithm: the productivity index equals the flow rate divided by the pressure differentiator. Use statistics to reduce the number of results. When you are satisfied with the calculations’ result, write the data back to CDF.

### Create a template in Cognite Data Fusion

To scale this solution, we create the calculations above as a template in Cognite Data Fusion:

- Navigate to Cognite Data Fusion (fusion.cognite.com) and Template management,find the relevant Template group, and then Create template
- Enter a Template ID, Template name, Owner, and a description.
- Add properties: In this example we use _Bottom hole pressure_. Give it a descriptive name, and select type: **Time series**. All the following properties we add are type **Time series**:

* _Reservoir pressure_
* _Gas flow rate_
* _Productivity index_
* _Risk score_

- Click **Create** to save the gas well template <!-- Create? or Save>
- Next step is to add **Instances** to this template:
  Click **Add instance** and find your gas well in the asset hierarchy list.**Add** it to the template.
  Select the time series in the properties for your gas well and **add** them to your instance:

* Bottom hole pressure time series
* Reservoir pressure time series
* Gas flow rate time series
* Productivity index

You can also use an algorithm to populate the time series to the instance. And you can bulk add instances so the template can become a large matrix.
Click **Add instance** to add more wells to your template.

<!--### About the suggestion feature

When you add instances and properties to your template, the suggestion algorithm learns your patterns and metadata and the connections between the time series, and it will infer the time series for the other instances.

When you have added several instances, in this example, gas wells, the suggestion feature will propose more time series candidates to your template. Click on the candidates to see if you want to verify them to your template. Click **Select** and then **Commit** to add them to your template.

### Use the template in Jupyter Notebook

You can now run your template in Jupyter Notebook, do the calculations and store the output.
Each template almost becomes its own API with a set of methods and querying capabilities.
Now you can execute the algorithm in Notebook, and it fetches the computations and
runs the algorithm for each well.

### Looking at the output

You can use Grafana to create a dashboard to view the output of the wells' health score. Grafana will query the gas well template to create a visual presentation of the results.

### Set up a schedule to run the template

Use Cognite Functions to set up schedules to run your template.

### Set up data quality monitoring

Use the data quality monitoring functionality in CDF to monitor the data in the time series you use in your template. Set threshold values and create rules for when you import new data. -->

<!-- build pr-->

<!-- Prototype?
Model your data
Populate your template
Use templates to scale your calculations -->
