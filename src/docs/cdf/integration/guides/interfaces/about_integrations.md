---
pagination_next: null
pagination_prev: null
---

# About extraction pipelines

To make sure you have reliable and trustworthy data in Cognite Data Fusion (CDF) [data sets](../../../data_governance/guides/datasets/create_data_sets.md), set up **extraction pipelines to monitor the data flow**. By activating automatic email notifications, you'll quickly catch any extractor failures or data flow interruptions and can immediately start troubleshooting using the extraction pipeline documentation.

You can create and monitor extraction pipelines while you're already working with CDF data sets by opening Manage & Configure > **Create, view, and manage data sets**. You can also create and view pipelines across several data sets from Integrate > **Monitor extraction pipelines**.

On the **Extraction pipeline** page, you'll get an overview of successful and failed pipeline runs, see when an extractor last communicated with CDF, as well as the last data sync with CDF. You can easily contact the pipeline owner and other relevant stakeholders using the contact info added for a pipeline. The extraction pipelines documentation helps you keep track of the data set, source systems, target RAW database tables, and comprehensive free-text descriptions will guide you through the troubleshooting. On the **Extraction pipeline run history** page, you'll find all historical runs to understand past and present behavior of the pipeline.

You can set up extraction pipelines for all types of extractors, such as [data flows from Azure Data Factory](../../guides/interfaces/setup_data_factory.md#report_run_status_for_data_extractions) and Cognite extractors.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/extraction_pipelines.png" alt=" " width="100%"/>

## Get started

- [Add extraction pipelines](../interfaces/add_integrations.md)
- [Monitor extraction pipelines](monitor_integrations.md)
