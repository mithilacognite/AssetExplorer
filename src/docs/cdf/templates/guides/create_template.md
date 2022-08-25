---
pagination_next: null
pagination_prev: null
---

# About template management

Template management lets you configure and instantiate templates.

## Create template group

A template group gives you a dedicated space to host the templates and instances for your application.

- Click **New template group** and give it a name and description. The template group will have version 1: v1
- Add the templates you want to use for your group, or create the template you want to add to your group.
- You can query the template groups using the tabs **Overview**, **Schema**, **Templates & instances**, and **Query explorer**.
- Use **Share** to add users that can edit your template groups.

## Create template

- Click **New template** and give it a name and description.
- Add the fields you want to use in your template: **Time series**, **String**, **Int**, **Float**, or **Boolean**.

## About the suggestion feature

When you add instances and properties to your template, the suggestion algorithm learns your patterns and metadata and the connections between the time series, and it will infer the time series for the other instances.

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
