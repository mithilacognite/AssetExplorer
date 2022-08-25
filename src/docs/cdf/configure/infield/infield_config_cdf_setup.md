---
pagination_next: null
pagination_prev: null
---

# Prepare the CDF project

Make sure you understand your organization's IT architecture to determine which data sources to ingest into CDF. How you integrate the source data into the [CDF resource types](/dev/concepts/resource_types/index.md) determines how the data displays in the InField app.

Optionally, you can create data sets in CDF to hold uploaded images and measurement readings from users.

:::caution
Changes to the InField configuration are deployed to the current environment when you save the changes, and we do not support rollback to previous versions.

We strongly recommend that you establish testing and staging environments to test and verify changes to the InField configuration before applying the configuration to the production environment.
:::

## Map source data to CDF resource types

To set up InField, you need to map the source system data types to CDF resource types. The properties of each of the source system objects are stored in the metadata property of each CDF resource type.

:::info Note
InField requires an [asset hierarchy](/cdf/learn/cdf_basics/cdf_basics_datamodel.md) as a minimum but will only provide value with at least two other data types.
:::

| Map this data type                | To this CDF resource type | InField configuration                                                                                          |
| --------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Asset hierarchy (**required**)    | Assets                    | [General asset settings](infield_getting_started.md)                                                           |
| Equipment                         | Assets                    | [Tags, properties, checklists, scanner](infield_config_assets.md) |
| Trends                            | Time series               | [Trends](infield_config_timeseries.md)                                                                         |
| Documents                         | Files                     | [Documents](infield_config_files.md)                                                                           |
| Work orders                       | Events                    | [Work orders](infield_config_events.md#general-settings-for-work-orders)                                       |
| - Work order items                | Events                    | [Work orders](infield_config_events.md#general-settings-for-work-orders)                                                                                                          |
| - Work order operations           | Events                    | [Work operations](infield_config_events.md#work-operations)                                                                                                      |
| - Work order revisions            | Events                    | [Work plans](infield_config_events.md#work-plans)                                                                                                     |
| Notifications (SAP only)          | Events                    | [Notifications](infield_config_events.md#work-orders-for-source-system-sap)                                    |
| Equipment history (Workmate only) | Events                    | [Equipment history](infield_config_events.md#work-orders-for-source-system-workmate)                           |
| 3D model                          | 3D                        | [3D models](infield_config_3D.md)|

## Create data set(s) for images and measurement readings

To allow InField users to upload images and measurement readings into checklists, [create data sets](/cdf/data_governance/guides/datasets/create_data_sets.md) to isolate the uploaded data in CDF. InField stores **images** in the [files](../../../dev/concepts/resource_types/files) resource type and **measurement readings** in the [time series](../../../dev/concepts/resource_types/timeseries) resource type.

### Configure a data set for images

1. In CDF, navigate to **Manage and Configure** > **Create, view, and manage data set** to create a data set.
1. Give the data set a name and a description to explain that InField users have captured the images and **note the data set ID**.
1. Navigate to **Manage and Configure** > **Manage access** to give an [existing group or new group](/cdf/access/guides/create_groups_oidc.md) access to the data set.

1. Add the `files:write` capability and set the **scope** to the data set you created.

1. When you configure InField, add the **data set ID** you copied above to one or all assets in InField:

   - To use the data set for **all** assets in InField, navigate to **Manage and Configure** > **Configure InField** > **General** and paste the data set ID into **File upload data set ID**.

   - To use different data sets for different assets, navigate to **Manage and Configure** > **Configure InField**. Next, open the asset you want to use the data set for, select the **General** tab, then paste the data set ID into **File upload data set ID**.

### Configure a data set for measurement readings

1. In CDF, navigate to **Manage and Configure** > **Create, view, and manage data set** to create a data set.
1. Give the data set a name and a description to explain it will store measurement readings, and **note the data set ID**.
1. Navigate to **Manage and Configure** > **Manage access** to give an [existing group or a new group](/cdf/access/guides/create_groups_oidc.md) access to the data set.
1. Add the `timeseries:write` and `timeseries:read` capabilities and set the **scope** to the data set you created.

1. When your configure InField, add the **data set ID** you copied above to one or all assets in InField:

   - To use the data set for **all** assets in InField, navigate to **Manage and Configure** > **Configure InField** > **General** and paste the data set ID into **Measure point readings data set id**. 

   - To use different data sets for different assets, navigate to **Manage and Configure** > **Configure InField**. Next, open the asset you want to use the data set for, select the **General** tab, then paste the data set ID into **Measure point readings data set ID**.
