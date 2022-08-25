---
pagination_next: null
pagination_prev: null
---

# Create templates with global variables

To create templates to build interactive dashboards you can use variables via the `$variable` or `[[variable]]` syntax. You can learn more about templates and variables in the [Grafana documentation](https://grafana.com/docs/grafana/latest/variables/templates-and-variables/).

To add variables for assets to a dashboard in Grafana:

1. Navigate to your dashboard's settings, and then select **Variables** from the left side.
1. Make sure the **Type** is set to **Query**, and then set your Cognite Data Source as the **Data Source**.
1. Specify the query to fetch and filter assets from CDF. For example:

   ```
   assets{parentIds=[123], name=~"test-.*"}
   ```

   The query above requests assets with the parameter `parentIds=[123]` and filters the results by `name` that matches the `test-.*` regular expression.

   - For a full list of **valid parameters** see [the API documentation](../../../../api/v1/#operation/listAssets).

   - [**Learn more**](./timeseries.md#filtering) about how you can **filter** the results, for example by using regular expressions.

 <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/add_variable.png" alt="Variable" width="80%"/>

1. Click **Update**.

You can format variables to fit into the query, for instance if you have a multi-value variable:

```
ts{assetIds=[${variable:csv}]}
```

The variable will be serialized to comma-separated values in case several assets are selected from the dropdown. Learn more about formatting of variables in the [Grafana documentation](https://grafana.com/docs/grafana/latest/variables/advanced-variable-format-options/).

## Nested (chained) variables

With nested variables, you can create a template to visualize time series related to a branch of the asset subtree and let users navigate the subtree.

1.  Create the necessary nested variables.
    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/nested_variables_0.png" alt="Link variables" width="80%"/>

1.  Use the variable as the asset filter on the dashboard.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/nested_variables_1.png" alt="Use the variable on the dashboard" width="80%"/>

1.  On the dashboard, users can choose assets on each level of the hierarchy.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/nested_variables_2.png" alt="Select assets from the dropdown" width="80%"/>
