---
pagination_next: null
pagination_prev: null
---

# Assign capabilities

To control access to data and features in Cognite Data Fusion (CDF), you define what **capabilities** users or applications have to work with different **resource types** in CDF, for example, if they can _read_ a _time series_ (`timeseries:read`) or _create_ a _3D model_ (`3D:create`).

Capabilities also decide which **features** in CDF you have access to. For example, you need the `3d:create` capability to be able to upload 3D models to CDF.

A capability is defined by a **resource type**, a **scope**, and **actions**. The resource type and scope defines **what data** the capability applies to, while the action defines **which operations** you are allowed to perform.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/group.png" alt="Groups " width="50%"/>

Instead of assigning capabilities to individual users and applications, you use **groups** in CDF to define which capabilities the group members (users or applications) should have. You **link** and synchronize the CDF groups to user groups in your identity provider (IdP), for instance, Azure Active Directory (AAD).

For example, if you want users or applications to _read_, but not _write_, time series data in CDF, you first create a group in your IdP to add the relevant users and applications. Next, you create a CDF group with the neccessary capabilities (`timeseries:read`), and then link the CDF group and the IdP group.

For even more fine-grained access control and protection, you can tag sensitive resources with additional **security categories**.

This flexibility allows you to manage and update your data governance policies quickly and securely. You can continue to manage users and applications in your organization's IdP service outside of CDF.

This article explains how to [add capabilities to groups](#create-a-group-and-add-capabilities) and how to [create and use security categories](#create-security-categories). You will also find overviews of the necessary [capabilities to access and use different features in CDF](#feature-capabilities).

:::info NOTE
To configure the IdP integration you need these capabilites: `projects:list`, `projects:read`, `projects:update`

To work with CDF groups, you need: `groups:list`, `groups:read`, `groups:create`, `groups:update`, `groups:delete`

:::

## Create a group and add capabilities

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com/).

1. In the top menu, select **Manage & Configure** > **Manage access**.

1. In the Access management window, select **Groups** > **Create new group**.

1. In the Create new group window, enter a **unique name** for the group.

1. Select **Add capabilities**.

   1. In the **Capability type** field, select a resource type, such as assets and time series, CDF groups, data sets, or specific functionality.

   1. In the **Action** field, allow for actions on the data, such as `read`, `write` or `list`.

   1. In the **Scope** field, scope the access to **all data** or **a subset** within the selected capability type. The subset differs according to the capability type but always includes all data as an option.

1. Click **Save**.

1. Link the CDF group to an Azure AD group:

   1. In the **Source ID** field, enter the **Object Id** for the AAD group exactly as it exists in AAD.
   1. In the **Source name** field, enter the name of the group in Azure AD.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/create_CDF_group_objectId_oidc.png" alt="Create new group with link to AAD group object ID" width="60%"/>

## Create and assign security categories

You can add an extra access level for **time series** and **files** by tagging resources with **security categories** via the Cognite API. This is useful if you want to protect market-sensitive data. To access resources tagged with a security category, you must have both the standard capabilities for the resource type and capabilities for the security category.

To access, create, update, and delete security categories, you need these capabilities via a group membership:

- `securitycategories:create`
- `securitycategories:update`
- `securitycategories:delete`

To assign security categories to groups:

1. Open the group you want to add security categories to.
1. In the **Capability type** field, select **Security categories**.
1. In the **Action** field, select `securitycategories:memberof`.
1. In the **Scope** field, select **Security categories**, associate a security category, or select **All**.

To perform actions, such as `read` or `write` on **time series** and **files** tagged with capabilities and security categories: 

- You must be a member of a group with actions that provide access to a times series or files, for instance, `timeseries:read`.
- You must be a member of a group with the `securitycategories:memberof` capability for the same time series or files.

<!-- ## Grant access to CDF data

[_arne: do we need this?_]

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/data_governance/access_cdf_data.png" alt="Access CDF data" width="30%"/>

You grant access and allow actions on the **data** by defining capabilities on the **CDF resource types** listed in the **Add capability** window. You can set actions for all data in the selected resource type or for a specific data set. See best practices [here](../../access/concepts/best_practices_oidc#best-practices-register-applications-and-set-up-groups). -->

## Feature capabilities

The tables below describe the necessary capabilities to access different CDF features.

:::info NOTE
In addition to the capabilities listed in the sections below, users and applications need these **minimum** capabilities to access any feature in CDF.

| Capability type | Action          | Scope             | Description                     |
| --------------- | --------------- | ----------------- | ------------------------------- |
| Groups          | `groups:list`   | Current user, All | Verifies user group access.     |
| Projects        | `projects:list` | All               | Verifies that a user or application has access to the CDF project itself. To access the resources in the project, see the capabilities listed below.|

:::

### Extractors

#### PI extractor

Extract time series data from the OSISoft PI server.

| Capability type          | Action                                | Scope                                | Description                                                              |
| ------------------------ | ------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| Timeseries               | `timeseries:read`, `timeseries:write` | Data set, All                        | Ingest time series                                                       |
| RAW                      | `raw:read`, `raw:write`, `raw:list`   | Tables, All                          | Ingest to Cognite RAW and for state store configured to use Cognite RAW. |
| Events                   | `events:read`, `events:write`         | Data sets, All                       | Log extractor incidents as events in CDF.                                |
| Extraction pipeline runs | `extractionruns:write`                | Data sets, Extraction pipelines, All | Allow extractor to report state and heartbeat back to CDF.               |

#### PI AF extractor

Wrtie data from the Osisoft PI Asset Framework to Cognite RAW.

| Capability type          | Action                              | Scope                                | Description                                                              |
| ------------------------ | ----------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| RAW                      | `raw:read`, `raw:write`, `raw:list` | Tables, All                          | Ingest to Cognite RAW and for state store configured to use Cognite RAW. |
| Extraction pipeline runs | `extractionruns:write`              | Data sets, Extraction pipelines, All | Allow extractor to report state and heartbeat back to CDF.               |

#### DB extractor

Extract data from any database supporting ODBC.

| Capability type          | Action                              | Scope                                | Description                                                              |
| ------------------------ | ----------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| RAW                      | `RAW:read`, `RAW:write`, `RAW:list` | Tables, All                          | Ingest to Cognite RAW and for state store configured to use Cognite RAW. |
| Extraction pipeline runs | `extractionruns:write`              | Data sets, Extraction pipelines, All | Allow extractor to report state and heartbeat back to CDF.               |

#### OPC UA extractor

Extract time series, events and asset data via the OPC UA protocol.

| Capability type          | Action                                       | Scope                                | Description                                                                  |
| ------------------------ | -------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| Timeseries               | `timeseries:read`, `timeseries:write`        | Data set, All                        | Ingest time series                                                           |
| Assets                   | `assets:read`, `assets:write`                | Data set, All                        | Use if RAW metadata or skip metadata are not set.                            |
| Events                   | `events:read`, `events:write`                | Data set, All                        | Ingest events if enabled                                                     |
| RAW                      | `RAW:read`, `RAW:write`, `RAW:list`          | Tables, All                          | Ingest metadata to Cognite RAW or the state-store is set to use Cognite RAW. |
| Relationsships           | `relationsships:read`, `relationships:write` | Data sets. All                       | Ingest relationships if enabled.                                             |
| Data sets                | `data-sets:read`                             | Data sets, All                       | Ingest the data set external ID if enabled.                                  |
| Extraction pipeline runs | `extractionruns:write`                       | Data sets, Extraction pipelines, All | Allow extractor to report state and heartbeat back to CDF.                   |

#### Documentum extractor

Extract documents from OpenText Documentum or OpenText D2 systems.

| Capability type          | Action                              | Scope                                | Description                                                |
| ------------------------ | ----------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| Files                    | `files:read`, `files:write`         | Data sets, All                       | Ingest files                                               |
| RAW                      | `raw:read`, `raw:write`, `raw:list` | Tables, All                          | Ingest metadata to Cognite RAW                             |
| Extraction pipeline runs | `extractionruns:write`              | Data sets, Extraction pipelines, All | Allow extractor to report state and heartbeat back to CDF. |

### PostgreSQL gateway

Ingest data into CDF using the Cognite PostgreSQL gateway.

| Capability type | Action          | Scope          | Description                                                                                                                                                       |
| --------------- | --------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resource types  | `read`, `write` | Data sets, All | Add `read` and `write` capabilities for the CDF resources you want to ingest data into. For instance, to ingest **assets**, add `assets:read` and `assets:write`. |

:::info Note
If you revoke the capabilities in the CDF group, you also revoke access for the PostgreSQL gateway.
:::

### Manage staged data

Work with tables and databases in Cognite RAW.

| Capability type | Action                 | Scope       | Description                                                 |
| --------------- | ---------------------- | ----------- | ----------------------------------------------------------- |
| RAW             | `RAW:read`, `RAW:list` | Tables, All | View tables and databases in Cognite RAW.                   |
| RAW             | `RAW:write`            | Tables, All | Create, update, delete tables and databases in Cognite RAW. |

### Transform data

Transform data from RAW tables into the CDF data model.

| Capability type | Action                                                                                                              | Scope          | Description                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Resource types  | `read` and `write` actions according to the CDF resources you want to read from and write to using transformations. | Data sets, All | For instance, to transform data in Cognite RAW and write data to assets, add `RAW:read` and `assets:write`.                                |
| Transformations | `transformations:read`                                                                                              | All            | View transformations.                                                                                                                      |
| Transformations | `transformation:swrite`                                                                                             | All            | Create, update, delete CDF transformations.                                                                                                |
| Session         | `sessions:create`                                                                                                   | All            | Run scheduled transformations. You must also set the `token_url`. Read more [here](../../integration/guides/transformation/admin_oidc.md). |

:::info note

We support transformation access using the `transformations`or `jetfire` groups for existing users to ensure backward compatibility. However, we recommend that you switch to managing access to Transformations using the capabilities above.

:::

### Upload 3D models

Upload and work with 3D models, 3D revisions and 3D files.

| Capability type | Action      | Scope          | Description                       |
| --------------- | ----------- | -------------- | --------------------------------- |
| 3D              | `3d:read`   | Data sets, All | View 3D models.                   |
| 3D              | `3d:create` | Data sets, All | Upload 3D models to CDF.          |
| 3D              | `3d:update` | Data sets, All | Update existing 3D models in CDF. |
| 3D              | `3d:delete` | Data sets, All | Delete 3D models.                 |

### Extraction pipelines

Set up and monitor extraction pipeline and report the pipeline run history.

| Capability type          | Action                      | Scope                                | Description                                                                     |
| ------------------------ | --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| Extraction pipelines     | `extractionpipelines:read`  | Data sets, Extraction pipelines, All | List and view metadata of extraction pipelines.                                 |
| Extraction pipelines     | `extractionpipelines:write` | Data sets, Extraction pipelines, All | Create and edit individual pipelines and edit notification settings.            |
| Extraction pipeline runs | `extractionruns:read`       | Data sets, Extraction pipelines, All | View extractor run history reported by the individual extraction pipeline runs. |
| Extraction pipeline runs | `extractionruns:write`      | Data sets, Extraction pipelines, All | Allow extractors to report state and heartbeat back to CDF.                     |

### Match entities

Create and tune models to automatically contextualize resources.

| Capability type | Action                    | Scope          | Description                                    |
| --------------- | ------------------------- | -------------- | ---------------------------------------------- |
| Entity matching | `entitymatchingAcl:read`  | All            | List and view entity matching models.          |
| Entity matching | `entitymatchingAcl:write` | All            | Create, update, delete entity matching models. |
| Assets          | `assets:read`             | Data sets, All | Match entities to assets.                      |

### Interactive engineering diagrams

Find, extract, and match tags on engineering diagrams and link them to an asset hierarchy or other resource types.

| Capability type | Action                        | Scope          | Description                                                                        |
| --------------- | ----------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| Files           | `files:read`, `files:write`   | Data sets, All | List and extract tags from engineering diagrams.                                   |
| Assets          | `assets:read`, `assets:write` | Data sets, All | Add tags to assets.                                                                |
| Events          | `events:read`, `events:write` | Data sets, All | View and create annotations manually or automatically in the engineering diagrams. |
| Labels          | `labels:read`, `labels:write` | Data sets, All | View, approve, and reject tags in the engineering diagrams.                        |

### Explore data

Find, validate, and learn about the data you need to build solutions.

| Capability type | Action | Scope          | Description                                 |
| --------------- | ------ | -------------- | ------------------------------------------- |
| Resource types  | `read` | Data sets, All | All resource types used in the CDF project. |

### Functions

Deploy Python code to CDF and call the code on-demand or schedule the code to run at regular intervals.

:::info Early adopter
Functions is currently only available to customers via our Early Adopter program. Contact your Cognite representative for more information.
:::

| Capability type | Action            | Scope          | Description                                                                 |
| --------------- | ----------------- | -------------- | --------------------------------------------------------------------------- |
| Functions       | `functions:write` | Data sets, All | Create, call and schedule functions.                                        |
| Functions       | `functions:read`  | Data sets, All | Retrieve and list functions, retrieve function responses and function logs. |
| Files           | `files:read`      | Data sets, All | View functions.                                                             |
| Files           | `files:write`     | Data sets, All | Create functions.                                                           |
| Sessions        | `sessions:create` | Data sets, All | Call and schedule functions.                                                |

### Data sets

Use the **Data sets** capability type to grant users and applications access to add or edit metadata for data sets.

To add or edit data within a data set, use the relevant resource type capability. For instance, to write time series to a data set, use the **Time series** capability type. Read more [here](../guides/datasets/create_data_sets.md).

| Capability type | Action           | Scope          | Description               |
| --------------- | ---------------- | -------------- | ------------------------- |
| Data sets       | `datasets:read`  | Data sets, All | View data sets.           |
| Data sets       | `datasets:write` | Data sets, All | Create or edit data sets. |

### Configure AIR

Set up the AIR application.

| Capability type | Action           | Scope             | Description                                                 |
| --------------- | ---------------- | ----------------- | ----------------------------------------------------------- |
| Groups          | `groups:create`  | Current user, All | For AIR administrators to grant access to users.            |
| Data sets       | `datasets:read`  | Data sets, All    | View data sets in the CDF project used by AIR.              |
| Data sets       | `datasets:write` | Data sets, All    | Create and update data sets in the CDF project used by AIR. |

### Configure InField

Set up the InField application.

| Capability type | Action            | Scope                                   | Description                                                       |
| --------------- | ----------------- | --------------------------------------- | ----------------------------------------------------------------- |
| Assets          | `assets:read`     | Data sets, All                          | View asset data from the CDF project that InField runs on top of. |
| Groups          | `groups:read`     | Current user, All                       | For InField administrators to grant access to users.              |
| 3D              | `3d:read`         | Data sets, All                          | Upload 3D models to be displayed in InField.                      |
| Files           | `files:write`     | Data set                                | Allow users to upload images.                                     |
| Time series     | `timeseries:read` | Data sets, Timeseries, Root assets, All | Allow users to upload measurement readings.                       |

Add the InField admin users to an access group named `applications-configuration`. [Learn more](../../configure/infield/infield_setup_oidc.md)

### Solutions Portal

Set up the Solutions Portal.

| Capability type | Action                              | Scope          | Description                                                                                              |
| --------------- | ----------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| Data sets       | `data-sets:read`, `data-sets:write` | Data sets, All | For Solution Portal administrators to create data sets for images files (optional).                      |
| Files           | `files:read`, `files:write`         | Data sets, All | For Solution Portal administrators to view and upload images, such as board previews and a company logo. |
| Groups          | `groups:write`                      | All            | For Solution Portal administrators to grant access to users.                                             |

Add the Solutions Portal admin users to an access group named `dc-system-admin`.
