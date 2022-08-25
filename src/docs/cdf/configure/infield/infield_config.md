---
pagination_next: null
pagination_prev: null
---

# Configure individual assets

For each asset you have selected to make available in InField, you need to complete the detailed configuration to visualize the data in the InField application.

Navigate to **Manage and Configure** > **Configure InField**, select the **Assets** tab, and click **Edit asset**.

Each tab in the configuration setup represents a function in InField. You specify the metadata from the source system with the values you want to display or enter specific values. You'll find an option to disable the function at the top of each tab.

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_general_setting_subasset.png" alt="General setting per asset" width="100%"/>

:::info
How you configure **work orders** varies according to the underlying source system. [Learn more](./infield_config_events.md).
:::

## General settings

The settings below override the general settings you have made for **all** assets.

| Field                                          | Description                                                                                                                                                                                                                | Default value |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| File upload data set ID<sup>1</sup>            | Enter the data set ID to add images uploaded by users to an asset-specific data set. Overrides any general data set ID that you have configured.                                                                                                         | -             |
| Measure point readings data set ID<sup>2</sup> | Enter the data set ID to add time series measurement readings uploaded by users to an asset-specific data set. This overrides any general data set ID that you have configured. | -             |

<p><sup>1</sup> required to visualize the data in the user interface.</p>

<p><sup>2</sup> required if the specific feature is enabled.</p>

**Next steps:**

- [Set up Tags, Properties, Checklists, 3D, and Scanner](infield_config_assets.md)
- [Set up Trends](infield_config_timeseries.md)
- [Set up Documents](./infield_config_files.md)
- [Set up Work orders, Work operations, Templates, and Alarms](./infield_config_events.md)
