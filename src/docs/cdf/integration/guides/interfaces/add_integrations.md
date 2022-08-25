---
pagination_next: null
pagination_prev: null
---

# Set up extraction pipelines

This article explains how you create extraction pipelines for all types of extractors you want to monitor via the [Extraction pipelines](../interfaces/monitor_integrations.md) page. You need to add data set, name, and external ID on the **Create extraction pipeline** page. You can add or edit additional information later on the **Extraction pipelines overview** page.

## Before you start

- A [data set](../../../data_governance/guides/datasets/create_data_sets.md) must exist for the data you want to add to an extraction pipeline.

- Navigate to **Manage & Configure** > **Manage access** and set any of these capabilities for users and extractors:

  | Capability          | Action  | Description                                                                                                | Best practice                                                                                                                                                                                                       |
  | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | extractionpipelines | `read`  | Gives access to list and view metadata of the pipeline.                                                    | Align access with users that have `read` access to the data set used by the extraction pipeline.                                                                                                                    |
  | extractionpipelines | `write` | Gives access to create and edit individual pipelines and edit notification settings.                       | Align access with users that have `write` access to the data set used by the extraction pipeline. `Write` access is intended for data engineers and data set owners, and you can scope this to a specific data set. |
  | extractionruns      | `read`  | Gives access to view extractor run history reported by the individual extraction pipeline runs.            | Align access with users that have `read` access to the data set which is populated by this extraction pipeline.                                                                                                     |
  | extractionruns      | `write` | Give this capability to extractors to allow for state and heartbeat reporting back to Cognite Data Fusion. | Scope access to the specific extraction pipeline ID which represents a particular extractor, ensuring that statuses and errors can be reported only by that specific extractor.                                     |

## Create extraction pipelines

1. Sign in to [Cognite Data Fusion](https://fusion.cognite.com/).

1. In the top menu, navigate to **Integrate** > **Monitor extraction pipelines**, or to **Manage and Configure** > **Create, view, and manage data sets**.

   Then select a data set and open the **Lineage** tab to add a pipeline to the **selected data set**.

1. Select **Create extraction pipeline**, where you will be requested to fill in the mandatory fields for creating a pipeline.

<!--1. In the **Extraction pipeline name** field, enter a unique and descriptive name for the pipeline.

1. In the **ExternalID** field, enter a unique identifier. Use this ID for setting up status and heartbeat reporting in the extractor you want to monitor.

1. Optionally, enter a short **description** of the pipeline. This text is displayed right below the pipeline name.-->

4. Select **Create** to open the **Extraction pipeline overview**. On this page, you can add additional information to give contexts and insights about the pipeline.

<!-- ## Add additional information about a pipeline

Add extended information about a pipeline for troubleshooting and monitoring the data flow. You can add this information now or edit the pipeline later.

1. Select **Add another contact** to insert **name**, **email**, and **role** for a team or person to contact if a pipeline fails or that will be affected by pipeline issues.

1. Select **On** or **Off** on the **Notification subscription** button to send email alerts to the contact if a pipeline fails.

1. In the **Schedule** field, select the schedule set up for the pipeline in the XX

1. Under the **Raw tables** field, select the CDF Raw database and tables the source data is ingested into.

1. Enter the **name** of the source system the data originates from.

1. In the **Documentation** field, enter context and insights about the pipeline that the XX will need for ??

1. Click **Save**.

<!-- ## Relation to data set -->

## Enable email notifications

Owners and other stakeholders can receive email notifications about the extraction pipelines. The notifications are triggered when:

- An extraction pipeline reports a failed run to CDF.
- An extraction pipeline with continuous data flow stops communicating with CDF. The notification is sent when a predefined time condition is reached.

In the **Contacts** section of the **Extraction pipeline** page, enter the email addresses that will be notified when you add **Owner** and other contacts for the extraction pipeline.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/email_notifications.png" alt="Set up email notifications" width="100%"/>

:::info note

Email notifications are only sent when an extraction pipeline status changes state or CDF has not registered any communication with the pipeline after a predefined time condition. This is to prevent multiple emails for ongoing incidents. 

For new incidents, emails are only sent for the first reported failed run and when the incident is resolved. Multiple reported failures in succession are ignored.

:::

## Best practice for documenting extraction pipelines

It is good practice to enter comprehensive information about a pipeline to simplify troubleshooting and administration of pipelines. The minimum information you need to record is **Data set**, **Name**, and **External ID**.

Monitor the pipeline status by setting up **email notifications** for failed and interrupted pipelines and add **contact details** for the pipeline owner and other stakeholders. You'll find the switch for activating email notifications when you add a contact.

Select the **schedule** set up in the extractor to document how often the extractor is expected to update the data in CDF and check the **Last connected** to make sure CDF and the extractor are communicating. It's useful to record the **source system name** and the **RAW database tables** to keep track of where your data is extracted from and ingested into.

Information specific to your organization can be added using the metadata fields with key/value pairs.

You can **enter all contexts and other insights** about the pipeline to **speed up troubleshooting issues**. Enter free text using the **Documentation** field for this purpose. This is displayed as a ReadMe section on the **Extraction pipeline overview** page. Make sure to keep this content updated at all times. You can format the text using [Markdown](https://www.markdownguide.org/cheat-sheet/).
