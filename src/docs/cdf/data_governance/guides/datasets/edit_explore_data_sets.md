---
pagination_next: null
pagination_prev: null
---

# Edit and explore data sets

When you or someone else in your organization has [created data sets and added data](create_data_sets.md) to them, you can:

- Explore the data sets to trace the **data lineage** to understand where data originates from and be confident of the **data integrity** and the **data quality**.

- Set the governance status to **make the data available** as input to the use cases your organization is looking to solve.

You can also edit the data sets to add more documentation to them, or to **write-protect** them to provide an extra layer of protection to production-critical data. By **archiving** data sets, you can hide data sets that are no longer used.

## Edit data sets

Data sets evolve over time as you ingest more data, update a data ingestion pipeline, or take steps to increase the quality of the data in the data set.

By adding information and documentation about your data set, you provide a shared understanding in your organization about the data in the data set.

**To edit a data set:**

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
2. Sign in with your CDF project name and credentials.
3. In the menu, select **Data sets**.
4. Click to open the data set you want to edit.
5. Click **Edit**.
6. Use the data set wizard to update the information about the data set. For example, you can:

   - Edit the **name**, **description**, **owner**, and other details of the data set. This makes it easy for others to understand what the data set is about.

   - Set **labels** for data sets. This helps make the data set easier to discover by others. For example, you may specify the type of data, geographic region, or business unit, in the labels.

   - Set the **governance status**. If a data set has a defined owner and follows the governance processes for data in your organization, we recommend that you mark the data set as **governed**. If the data set is not maintained, lacks a clear owner, or otherwise lacks the necessary governance, you should mark the data set as **ungoverned**.

   - Upload additional **documentation files** or specify **links** to further information about the data set. We recommend that you upload documentation about the data ingestion process. For example, the documentation could include instructions about how to sign in to a computer where an extractor is running and/or describe the type of data processing that has been done.

   - **Write-protect** data sets that contain production-critical data to preserve the integrity of the data. Only members of groups that you explicitly grant access, can write data to a write-protected data set.

   - **Archive** data sets to hide them from the UI and make the data set unavailable to users. The data set and the data it contains is not deleted, and you can always restore archived data sets later.

## Explore data sets

**To browse and explore data sets:**

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/data_governance/filter_dataset_by_label.png" alt="Filter data set by label" width="23%"/>

2. Sign in with your CDF project name and credentials.
3. In the menu, select **Data sets**.
4. To find the data set(s) you want to explore, you can **filter** data sets by label or **search** for data sets by their name or description.
5. Select the data set you want to see more details about.

   In the **Basic information** section you can see key information about the data set, for example:

   - The **data set ID**. This is the internal Cognite Data Fusion ID for the data set. You need to use this ID to add data objects to the data set.
   - The **name** and **description**. A small padlock in front of the name indicates that the data set is write-protected.
   - The **Governance status**. "Governed" indicates that the data set has a designated owner and follow the governance processes for data in your organization.
   - Who **created** the data set.
   - The **owner** of the data set.
   - When the data set as last updated.

   Select the different **tabs** to see more detailed information about the data set:

   - **Explore data** - see how many data objects of each resource type the data set contains. Select a data object to view more details.
   - **Lineage** - understand where data originates from and be confident of the **data integrity** and the **data quality**.
   - **Documentation** - access any uploaded files or documentation links for the data set.
   - **Access control** - see who has their read or write access scoped to the data set.
