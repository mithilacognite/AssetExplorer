---
pagination_next: null
pagination_prev: null
title: Set up assets and general settings
---

# Set up assets and configure general settings

When you've set up the CDF project that will provide data for InField, you can configure how to visualize the data in the InField application.

First, set up one or more assets and define settings that apply to all of them. The assets are digital representations of, for instance, a plant, platform, or installation and point to asset nodes in the CDF asset hierarchy.

:::tip
You can override some of the general settings for all assets with general settings for individual assets.
:::

## Set up an asset

Follow these steps for each asset you want to make available in InField:

<img class="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_new asset.png" alt="Set up new asset" width="20%"/>

1. In the top menu, select **Manage and Configure** > **Configure InField**.

1. Navigate to **Manage and Configure** > **Configure InField** and select the **Assets** tab.

1. Select **Set up new asset** and give the asset a unique name. This name is displayed in InField.

1. Under **Root node**, select the root node from the CDF asset hierarchy. This asset will use all children of the selected node.

1. Under **Asset short name**, enter a shortcode that is used in the unique URL for the asset. The URL uses this pattern:

   `infield.{cluster_name}.cogniteapp.com/{project_name}/{**asset_short_name**}`.

1. Select the **US** (MM.DD.YYYY) or the **EU** date format (DD.MM.YYYY).

1. Optional: Select a **Beta flag** to display in the InField top bar while you are testing your configuration.

## Configure general settings

1. Navigate to **Manage and Configure** > **Configure InField** and select the **General** tab.

  <img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/config_create_asset.png" alt="Create an asset" width="66%"/>
2. Fill in the fields as necessary:

    | Field                                          | Description                                                                                                                                                                                                              | Default value                |
    | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
    | Available languages                            | List the languages users can select in InField.                                                                                                                                                                          | English, Norwegian, Japanese |
    | Default language                               | Set the default language.                                                                                                                                                                                                | English                      |
    | Voided tag filter                              | Specify a string or a valid regular expression to hide voided tags in search and scan results.                                                                                                                              | -                            |
    | Voided documents                               | Specify file metadata to hide voided documents on the **Documents** page.                                                                                                                                                | -                            |
    | Trends disclaimer                              | Turn on to display the disclaimer **For real-time data, confirm with CCR** for trends/time series.                                                                                                                       | Off                          |
    | Loader screen disclaimer                       | Enter a disclaimer to display once a day as the application loads.                                                                                                                                                       | -                            |
    | File upload data set ID<sup>1</sup>            | Enter the data set ID for images files added by users. Overrides any general data set ID that you have configured.                                                                                                    | -                            |
    | Measure point readings data set ID<sup>2</sup> | Enter the data set ID for time series measurement readings added by users. Enter a value to allow measurement readings to be used in checklist templates. This overrides any general data set ID that you have configured. | -                            |
    | Data set display name mapping                  | Enter a descriptive name for the data sets.                                                                                                                                                                              | -                            |
    | Governed data sets                             | List the data sets that will be used in the application.                                                                                                                                                                 | All production data sets     |
    | Global notifications                           | Enter a text to communicate critical information in a pop-up dialog.                                                                                                                                         | -                            |

    <p><sup>1</sup> required to visualize the data in the user interface.</p>

    <p><sup>2</sup> required if the specific feature is enabled.</p>
