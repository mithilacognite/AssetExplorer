---
pagination_next: null
pagination_prev: null
---

# Monitor extraction pipelines

Improve data quality management and make sure the data integration into Cognite Data Fusion (CDF) [data sets](../../../data_governance/concepts/datasets/index.md) is reliable by monitoring extraction pipelines. If any data integration issues occur, you can be quickly notified, start troubleshooting, and contact the pipeline owner and other stakeholders.

## View extraction pipeline details

1. Sign in to [CDF](https://fusion.cognite.com/).

1. In the top menu:

   - To view all extraction pipelines across data sets in a CDF project and their latest status, navigate to **Integrate** > **Monitor extraction pipelines**.
   - To view extraction pipelines for the **selected data set**, navigate to **Manage and Configure** > **Create, view, and manage data sets**. Then select a data set, and open the **Lineage** tab.

1. Click the pipeline name in the list to open the **Extraction pipeline overview** and **Extraction pipeline run history** tabs.

## Troubleshoot failed integrations

If an extraction pipeline fails or a continuous data flow into CDF is interrupted, you'll get an email from the system (if activated in setup). Click the email link to open the **Extraction pipeline overview**. On this page, the **Last status** column indicates successful and failed critical operations. Click the **Failure** flag to see the error message from the extractor. The **Last connected** column shows when an extractor last communicated with CDF, and the **Schedule** field shows when the extractor is expected to run.

Click the pipeline name to open the **Extraction pipeline overview** tab to find all documentation and key properties for a pipeline. The documentation added should give you context and insights useful for troubleshooting the pipeline, and the names in the **Owner** and **Contacts** fields let you know who to inform about the failure.

Switch to the **Extraction pipeline run history** tab to find historical runs that will help you understand past and present behavior of the pipeline. You can filter on time, run status and search messages to get broader knowledge about how the extraction process have performed over time.

When you have located and corrected the failure, make sure to update the documentation with any lessons learned.
