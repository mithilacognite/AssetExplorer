---
pagination_next: null
pagination_prev: null
title: Overview
---

# Configure InField

Proper planning is crucial to setting up the InField application. This section helps you plan and configure the source data and the Cognite Data Fusion (CDF) project that will power the application and describes how to set up assets and visualize data in InField.

<img class="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/configure/infield/data_flow.png" alt="Data flow from source system to InField" width="100%"/>

## Step 1: Prepare the source data

Make sure you understand your organization's current IT architecture to determine which data sources to integrate with InField.

**Learn more:** [The CDF architecture and implementation steps](../../learn/cdf_basics/cdf_basics_overview.md)

## Step 2: Prepare a CDF project

InField gets its data from a CDF project, and you need to establish efficient [data integration pipelines](/cdf/integration/index.md) between your existing data infrastructure and the CDF project. Also, make sure you understand the [CDF resource types](../../../dev/concepts/resource_types/index.md) to plan how to best store the data and display it in InField.

To enable InField users to upload images and measurement readings into InField, you need to [create data sets](../../data_governance/concepts/datasets/index.md) in CDF to hold the uploaded data.

:::caution
Changes to the InField configuration are deployed to the current environment when you save the changes, and we do not support rollback to previous versions.

We strongly recommend that you establish testing and staging environments to test and verify changes to the InField configuration before applying the configuration to the production environment.
:::

**Learn more:** [Map data to resource types and create data sets for images and measurement readings](../../configure/infield/infield_config_cdf_setup.md)

## Step 3: Set up access and designate admin users

You can use your existing identity provider (IdP) framework to manage access to InField and designate admin users. We currently support Azure Active Directory (AD), Microsoft's cloud-based identity and access management service.

**Learn more:** [Grant access and designate InField admins](../../configure/infield/infield_setup_oidc.md)

## Step 4: Configure InField

When you've set up the CDF project that will provide data for InField, you can configure how to visualize the data in the InField application.

1. **First**, set up one or more assets and define settings that apply to all of them. The assets are digital representations of, for instance, a plant, platform, or installation and point to asset nodes in the CDF [asset hierarchy](/dev/concepts/resource_types/assets.md).

   **Next steps:** [Set up assets and configure general settings](../infield/infield_getting_started.md)

2. **Next**, configure each asset by mapping the metadata from the source system to the metadata for the CDF resource types.

   :::tip
   You can override some of the general settings for all assets with the general settings for individual assets.
   :::

   **Next steps:** [Configure individual assets](../infield/infield_config.md)
