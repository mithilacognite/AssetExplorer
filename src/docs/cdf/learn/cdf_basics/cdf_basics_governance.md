---
title: Data governance (3 mins)
---

# Data governance

Before you start integrating and enhancing data in CDF, you should define and implement your **data governance** policies. Data governance is a set of principles and practices that ensure high quality through your data's lifecycle. It is a key part of **data operations** to continuously optimize your data management practices.

We recommend that you appoint a **CDF admin** who can work with the IT department to ensure that CDF follows your organization’s security practices. Also, connect CDF to your IdP (Identity Provider), and **use the existing IdP user identities** to manage access to CDF and the data stored in CDF. We currently support Microsoft's [Azure Active Directory (Azure AD)](../../access/guides/configure_cdf_azure_oidc.md).

This unit takes a look at the CDF tools and features you can use to make sure that your data conforms to your organization and users' expectations.

## Secure access management

To control access to data in CDF, you define what **capabilities** users or applications have to work with different resource types in CDF, for example, if they can _read a time series_ or _delete an asset_.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/group.png" alt="Groups " width="60%"/>

Instead of assigning capabilities to individual users and applications, you use **groups** in Cognite Data Fusion (CDF) to define what **capabilities** members (users or applications) have to work with different CDF resources. You **link** and synchronize the CDF groups to user groups in your indentity provider (IdP), for instance Azure Active Directory (AAD).

For example, if you want users or applications to _read_, but not _write_, time series data in CDF, you first create a group in your IdP to add the relevant users and applications. Next, you create a CDF group with the neccessary capabilities, and then link the CDF group and the IdP group.

This flexibility allows you to manage and update your data governance policies quickly and securely. You can continue to manage users and applications in your organization's IdP service outside of CDF.

## Data lineage and integrity

When you rely on data to make operational decisions, it is critical that you know when the data is reliable and that end-users know when they can depend on the data to make decisions. CDF has tools and features to ensure that your data conforms to organizational and user expectations.

### Data sets

**Data sets** let you document and track data lineage, ensure data integrity, and allow 3<sup>rd</sup> parties to write their insights securely back to your CDF project. We recommend that you organize **all data** in CDF in data sets to always know where data comes from and who is responsible for it.

Data sets group and track data by **its source**. For example, a data set can contain all work orders originating from SAP. Typically, an organization will have one data set for each of its data ingestion pipelines in CDF. Each data object in CDF can belong to only one data set.

A data set is a container for data objects and has metadata with information about the data it contains. For example, you can use the data set metadata to document who is responsible for the data, upload documentation files, describe the data lineage, and so on. In CDF, data sets are a separate resource type.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/dataset.png" alt="Dataset " width="80%"/>

Typically, you define programmatically in the data ingestion pipelines which data objects, for example, events, files, and time series, belong to a data set. Data objects can belong to only one data set so that you can unambiguously trace the data lineage for each data object.

### Data quality monitoring

:::info Beta

This feature is in **Beta**. Please contact your Cognite representative for further details.

:::

**Data quality monitoring** lets you track **time series** data quality for apps and models running on data from CDF. For example, a monitor can contain all the time series data that is being used in a data science model to monitor the health of an oil well.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/dqm.png" alt="Data quality monitoring " width="80%"/>

Use rule sets to specify data quality requirements for the monitor's data and continuously ensure that the data meet the requirements. Each data object in CDF can belong to multiple monitors.

You can set up alerts via email or a webhook URL to notify you whenever a data quality rule is broken and when the data quality is restored.

## More information

- [Data governance](../../../cdf/data_governance/index.md)
- [About access management](../../../cdf/access/index.md)
- [Getting started with data sets](../../../cdf/data_governance/concepts/datasets/index.md)
- [Getting started with data quality monitoring](../../../cdf/data_governance/concepts/data_quality_monitoring/index.md)
