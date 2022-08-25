---
title: "What's new?"
pagination_next: null
pagination_prev: null
---

# What's new in Cognite Data Fusion?

This article documents the ongoing releases of Cognite Data Fusion (CDF) features.

## August 2022

**Cognite Data Fusion (CDF) makes data do more**. This release focuses on rapid, reusable, and scalable industrial data science by introducing new code and non-code solutions. With **Cognite Functions**, you can deploy and host Python code for additional calculations and models using the data in CDF. **Cognite Charts** offers a guided user interface to perform industrial data analytics, troubleshooting, and root cause analysis. 

Read more about this, how we've polished up the CDF user interface, and other improvements below. 

#### Cognite Charts 

Cognite Charts is a graphical user interface that lets domain experts explore data and trends and perform troubleshooting and root cause analysis. No programming skills are required to use Cognite Charts. [Read more](../cdf/charts/index.md).

#### Cognite Functions

Cognite Functions offers Python functions as a service, reducing the effort and expertise needed to deploy solutions using CDF data. Model data in your programming language and according to your company or industry standards, then call the code on demand or schedule regular runs. [Read more](../cdf/functions/index.md).

You can deploy Cognite Functions using the [Cognite API](https://docs.cognite.com/api/v1/#tag/Functions), the [Cognite Python SDK](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#functions), and the [CDF user interface](../cdf/functions/index.md).

#### Improved Transform data page

**CDF Transformations** has a new user interface to guide you through the process of transforming data from the CDF staging area to the CDF data model. The new interface is fully backward compatible with existing transformations. [Read more](../cdf/integration/guides/transformation/transformations.md).

<img class="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/transformations_ui.png" alt="Transformations user interface" width="100%"/>

### Improved Extract data page

The improved **Extract data** page makes it easy to find your best fit extractor and the installation files. You'll also find links to the Cognite Python and .NET utils packages and SDKs to get started creating a custom extractor. [Read more](../cdf/integration/concepts/extraction/index.md).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/download.png" alt="Extractor download page " width="100%"/>

#### Improved Explore data page

- Files are grouped by their document type on the **Files** tab.  
- The search bar is moved to the top of the page and displays the search results count on resource types.
- You can reset your filters, and a red badge indicates that filters are applied. You can also collapse the **More filters** section.
- We've improved the navigation when you search for a tag in an engineering diagram, such as a P&ID.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/explorer.png" alt="Explore data page " width="100%"/>

#### New Annotations API

CDF can detect references to tags and assets in engineering diagrams, documents, and images. The detections are often called annotations. The new Annotations API introduces strict schema validation to avoid invalid annotations and a well-defined flow for suggesting, accepting, and rejecting annotations. The API also enables third-party applications to enrich documents in CDF with custom annotations. [Read more](https://docs.cognite.com/api/v1/#tag/Annotations).

#### Ensure geospatial data integrity using data sets

The geospatial endpoint is the entry point for resource types enabling storing and querying item collections with a geospatial nature. You can now use [data sets](../cdf/data_governance/concepts/datasets/index.md) to document and track data lineage for the geospatial features and feature types. [Read more](../dev/concepts/resource_types/geospatial.md).

#### 3D models

You can now upload 3D models in **IFC open file format** to enable CDF to process and host Building Information Models (BIM).

## June, 2022

This June release has several improvements for the end-user and the developer.

#### View more details in complex CAD models

To see more details and better understand the facility, we've improved the visual quality when you view large and complex 3D models.

Also, we have improved the 3D processing pipeline and the load performance so that you can load geometry while the camera is moving.
Note! To take full advantage of the improvements, you need to re-upload any 3D models processed before March 2022.

#### A better user experience signing in to CDF

Signing in to the CDF user interface can be cumbersome if you don't know the authentication setup in your organization. With the new CDF sign-in flow, you only need to enter your organization's domain name and specify which CDF project you are signing in to. Your organization domain name is usually your company name spelled without spaces or an abbreviation of the name.

Add your customer logo to the sign-in dialogs for a more personalized experience.

#### Authenticate your CDF solutions

To allow the developer to focus on solution development instead of setting up authentication infrastructure, it's now possible to authenticate for solutions built on top of CDF without writing multiple lines of code. The @cognite/auth-wrapper is an OpenID Connect/OAuth 2.0 wrapper library written in JavaScript. It helps you retrieve an access token from any IdP that meets the OpenID standard, making it easy to sign in with our JavaScript SDK.
Features in the authentication wrapper SDK include:

- NPM supported auth package
- Support for multiple auth flows
- Detailed documentation on how to use the package
- Detailed documentation on how to navigate key IdPs (i.e., Azure AD)
  
#### Search, filter, and sort data in the CDF Data explorer

We've polished up the CDF Data explorer to make it easier to find the data you are looking for:

- You can reuse any **Search** and **Filters** you have defined. Simply copy the URL and share it with your co-workers.
- The search criteria you enter in the **Search bar** are now kept when you toggle between the different tabs in the explorer.
- On the **Files** > **File details** tab, you can scroll up and down the list of metadata to find what you're looking for.
- We've added a notification to let you know that you cannot upload files greater than 5GB.
- You can now sort in the metadata tables.
- We've fixed reported bugs and general styling issues.

#### Increased number of columns for sequences​

Sequences now support up to 400 numeric columns (up from 200) and 200 string columns.
[Read more](https://docs.cognite.com/api/v1/#operation/createSequence).

#### DirectQuery support for Power BI (Early adopter)​

DirectQuery is a feature in Power BI that enables you to fetch data on demand and build Power BI dashboards with hundreds of time series and thousands of data points.
With DirectQuery, no data is imported or copied into Power BI Desktop. Instead, Power BI queries CDF for the data every time you interact with the dashboard.

#### Cognite Data Source for Grafana

The Cognite Data Source for Grafana now supports the [CDF relationships resource type](https://docs.cognite.com/dev/concepts/resource_types/relationships).
You can fetch time series based on relationships in the **Time series from asset** tab and filter the relationships on data set, labels, and active relationships based on the time filter selected in Grafana.
The new **Relationships** tab allows you to use Grafana's Node Graph visualization plugin or the new (alpha) custom visualization plugin available at [cognite-grafana-relationships-visualization](https://github.com/cognitedata/cognite-grafana-relationships-visualization).

#### Templates support (Early adopter)

We've added a new **Templates** tab to support the CDF Templates feature. Using templates with Grafana allows you to scale your dashboards dynamically when you add equipment. You can enable this feature in the data source settings.

[Read more about Templates](https://docs.cognite.com/dev/concepts/resource_types/templates) and [Early adopter](https://hub.cognite.com/groups/flexible-data-modeling-early-adopter-208).

## April, 2022

Data governance is key to ensuring high quality throughout your data's lifecycle, and Cognite Data Fusion (CDF) has the tools and features to secure that the data meet your expectations. This release optimizes data management by introducing more granular access to data transformations using **data sets**.

Read more about this and the other improvements for the CDF April 2022 release below.

#### Scope transformation access to data sets

Protect access to CDF SQL transformations from ungoverned actions and visibility by associating a transformation to a data set. Users will only be able to see and run the transformations associated with the data sets they have access to.

- As a project admin granting users access to transformations, select the data sets a user can see and run transformations for under **Scope** in the **Transformations capability** dialog:

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/scope_transformations.png" alt="Scope transformations" width="50%"/>

- As a user creating a transformation, select the data set you want to associate to a transformation in the **Create new transformation** dialog. Only users with transformation access to this data set can see and run the transformation.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/associate_dataset_transformations.png" alt="Associate data sets to transformations" width="50%"/>

This feature is also available in the CDF API, Python SDK, and Transformations CLI. [Read more about transformations](../cdf/integration/guides/transformation/transformations.md).

#### Ingest data into sequence rows

You’ll now find **Sequence Rows** as an option in the **Destination type** field on the **Transformations** page in the CDF user interface and no longer need to use other developer tools like APIs and SDKs to ingest sequence rows into the **Sequence** resource type in CDF.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/sequence_rows.png" alt="Sequence rows" width="80%"/>

#### Develop applications using Java

Already, you can build solutions using Cognite's SDKs. Now, we introduce the **Cognite Java SDK** to interact with the CDF v1 APIs. The Java SDK is optimized for data publishing and allows you to write data efficiently with the `upsert` function. The Java SDK covers core CDF functionality, such as contextualization and data extraction. You’ll find all the info you need in the [cdf-sdk-java repo](https://github.com/cognitedata/cdf-sdk-java), and we have updated the [Cognite API documentation](../api/v1/) with code samples on how to perform tasks with the Java SDK.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/java_sdk_example.png" alt="Example using Java SDK" width="80%"/>

#### Change isStep setting for ingesting time series to CDF

When you stream time series data points into the CDF data model, the interpolation between the data points is controlled by the `isStep` property on the time series object. You can now change the `isStep` property value without recreating and re-ingesting the entire time series.

## February, 2022

Cognite Data Fusion (CDF) streams data into the CDF data model, where the data is normalized and enriched by adding connections between data resources of different types to provide better business decisions. With this release, you can ingest **geospatial data** into CDF to contextualize and map with other CDF resource types to deliver accurate spatial analysis and statistics.

Read more on this and all the other improvements for the CDF February 2022 release below.

#### Geospatial data

Work with geospatial data using the [Geospatial API](https://docs.cognite.com/api/v1/#tag/Geospatial) and [Python & JavaScript SDKs](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#geospatial) to handle the positioning and geometry of CDF data. We currently support a multitude of coordinate reference systems (CRS), but you can add other entries from the European Petroleum Survey Group (EPSG) as a custom CRS. You can also transform an input CRS to the defined CRS to improve the search in geometrics. [Read more](https://docs.cognite.com/dev/concepts/resource_types/geospatial.html).

#### Ingest PI Asset Framework data to CDF

The new **Cognite PI Asset Framework** (AF) extractor is considered an extension to the Cognite PI extractor. The Cognite PI AF extractor retrieves a dump of the asset hierarchy from the Asset Framework on the PI Server and ingests this into Cognite RAW. Subsequently, the extractor regularly checks for updates in the PI asset framework and ingests any changes into CDF.

#### Delete asset hierarchies using CDF Transformations

You can now delete asset hierarchies in CDF using **CDF Transformations**. Items are deleted by their internal ID, and non-existing IDs are ignored. Read more about [CDF Transformations](/cdf/integration/guides/transformation/transformations.md).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/delete_sql_transformations.png" alt="Delete SQL transformations" width="100%"/>

#### Ingest data into CDF Relationships using PostgreSQL gateway

We're rolling out the option to use the PostgreSQL gateway and Azure Data Factory (ADF) to ingest data directly into CDF Relationships. Select the **public.relationships** table in your ADF sink. Learn how [here](/cdf/integration/guides/interfaces/setup_data_factory.md).

#### Ingest time series data points directly into CDF Data points using the Cognite DB extractor

The Cognite DB extractor, version 2.4.1, provides a new option to ingest data points directly into **CDF Data points** instead of Cognite RAW. Set destination type as **TIME_SERIES** in your configuration file.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/db_extractor_destination.png" alt="Destination type in DB extractor" width="40%"/>

#### Early adopter programs

Cognite offers several **Early adopter programs** to our users. We encourage you to take this opportunity to learn about and test our features currently in the making. Navigate to [Cognite Hub](https://hub.cognite.com/), open the **Group** tab, and select **Request to join** to become an Early adopter candidate.

## December, 2021

**Trusting** the data in Cognite Data Fusion (CDF) is the core of managing, building, and using the Cognite product suite. Data engineers need sufficient insight into the staged data to take the next step on the ingestion journey and the new **data profiling** report on staged data in Cognite RAW caters for this.

This CDF release also introduces the new [Cognite Solutions Portal](https://cogniteapp.com/). The Cognite Solutions Portal collects applications, use cases, and other helpful links to solutions your organization has built on top of CDF. Users no longer have to keep track of many different URLs to access the information they need in their daily work.

Read more about this and all the other improvements for the CDF December release below.

#### Data profiling on staged data

To get in-depth knowledge about the data quality, discover patterns, outliers, and see other statistics in the new standard profiling report available on the **Profile** tab in **Cognite RAW**. Report your findings to the data owners and use this as a trigger to discuss topics such as the best fit for the primary key column and contextualization and to provide the best support for the end-users of the data. Keep iterating on the data integrations to improve the data quality and prepare the data transformation into the CDF data model. Read more [here](integration/guides/extraction/raw_explorer.md).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/extraction/data_profiling.png" alt=" " width="100%"/>

#### Get notified about interrupted data flow into CDF

Catch any issues that **interrupt** the data flow into CDF by setting up email notifications on the **Extraction pipeline** page. You can define the time condition for triggering the email. Learn how to set it up in [this article](integration/guides/interfaces/add_integrations.md#enable-email-notifications).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/email_notifications.png" alt=" " width="60%"/>
<p></p>

#### New Transformations CLI

The new Transformations CLI replaces the old Jetfire CLI offering a better developer experience. Now, you can easily declare and manage variables in the configuration file without any hard-code. You install the CLI using the Python pip package manager.

Read more [here](https://github.com/cognitedata/transformations-cli).

#### APIs and Python SDK for Transformations

The Transformations APIs and Python SDK are promoted to Version 1. Using the APIs/SDK, data engineers can orchestrate transformations sequentially, making it more reliable and quick. Check out the [API docs](../api/v1/#tag/Transformations) and [SDK docs](https://cognite-sdk-experimental.readthedocs-hosted.com/en/latest/cognite.html#transformations) for more information.

#### Access management for SQL Transformations

You can now manage access to SQL Transformations using the new `transformations:read` and `transformations:write` capabilities in your CDF group.

We still support transformation access using the `transformations` or `jetfire` groups for existing users to ensure backward compatibility. However, we recommend that you switch to managing access to Transformations using the new capabilities.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/transformation_capability.png" alt=" " width="60%"/>

#### Introducing the Cognite Solutions Portal

As companies ramp up their digitalization and transformation efforts, the number of applications, dashboards, and use cases increases rapidly. As a result, end-users have to keep track of many different URLs to access the information they need. This is the problem [Cognite Solutions Portal](../portal/) sets out to solve. It gathers all your CDF-enabled solutions in one place.

Use the Cognite Solutions Portal to add applications, dashboards from analytics and visualization tools, and helpful links into shared spaces.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/home.png" alt=" " width="100%"/>

#### Explore data in 3D

The CDF Data explorer already helps solution builders and data scientists find, validate, and learn about the data in CDF. Get the full experience by navigating and searching for assets and viewing the details in 3D models on the new 3D tab in the CDF Data explorer.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/explorer_3d.png" alt=" " width="100%"/>

#### Cognite Charts

Cognite Charts runs on top of CDF and is a powerful tool for engineers and domain experts to explore, trend, and analyze industrial data. For more information, visit the [Charts Early Adopter Group](https://hub.cognite.com/groups/charts-early-adopter-164) on the Cognite Hub.

This release has the following improvements:

#### Automatic data alignment

Charts now automatically handle data alignment in your calculations. Time series data often have different sampling frequencies and time stamps, and it can be hard to do even the simplest calculations (e.g. timeseries_1 + timeseries_2), especially if you’re not proficient in Python. Calculation results will be inaccurate and untrustworthy without properly accounting for data alignment.

<!-- comments -->

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/charts/align.png" alt=" " width="100%"/>

#### A new and improved no-code calculation builder experience

The no-code calculation builder has been redesigned and rebuilt on a new, powerful library.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/no_code_calculations.png" alt=" " width="100%"/>

## October 2021

This release of Cognite Data Fusion (CDF) contains enhancements to all capabilities for ingesting, managing & building trustworthy industrial data products to be used for data-driven decisions.

**Data engineers** need observability to inspect, monitor, and debug solutions in production. Therefore, we’re introducing **Extraction pipelines** where you can **monitor the status of data ingestions** to make sure reliable and trustworthy data are flowing into the CDF data sets. When you set up extraction pipelines, you can add comprehensive documentation and email alerts. You’ll be instantly notified, can quickly start troubleshooting, and have on-the-spot contact info to data set owners and other stakeholders if ingestion issues occur. You create and view these pipelines either from the **Data set lineage** page while you are already working with a particular data set, or you can get a bird’s eye view across several data sets via the **Monitor extraction pipeline** page. [Read more](integration/concepts/extraction/index.md).

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/extraction_pipelines.png" alt=" " width="100%"/>

If you’re using the PostgreSQL gateway, you can add status reporting to your Azure Data Factory pipeline. If you prefer working more programmatically, the new version of the [Python Extractor Utils](https://cognite-extractor-utils.readthedocs-hosted.com/en/latest/) allows building extractors with status reporting, or you can use the REST API or Python SDK. The Cognite Extractors support status reporting from our next release.

**Running SQL transformations using APIs and the Python SDK** significantly improves the developer experience as data engineers can manage transformations programmatically. Using the APIs/SDK, data engineers can orchestrate transformations sequentially, making it more reliable and quick. Check out the [API docs](../api/v1) and [SDK docs](https://cognite-sdk-experimental.readthedocs-hosted.com/en/latest/cognite.html#transformations) for more information. Note that the Transformations APIs and Python SDK are in public preview and will be promoted to V1 (production use) in November 2021.

**Data discovery by contextualizing engineering diagrams**, typically P&IDs, has already shown its value in the market. In this release, we’ve redesigned and enhanced the **Create interactive engineering diagrams** process to give a delightful user experience. The new sidebar navigation guides you carefully through each step in finding, extracting, and matching tags and linking these to the asset hierarchy and other associated resource groups. New actions that **improve the quality** of the diagrams include approving and rejecting automatically detected tags, clearing all tags on a diagram, and better name-mapping and use of synonyms in tag detection. When you’re done creating interactive diagrams, you can convert the approved PDF files to SVG if this is your preferred format. [Read the How-to guides](integration/guides/contextualization/interactive_diagrams.md).

The **solution builders and data scientists** need transparent and easily accessible documentation and information about data science scripts and models to make correct and informed operational decisions. You’ll find it all in the [Cognite Industrial Data Science Library](https://indsl.docs.cognite.com/).

Industrial data analytics must be of high quality and **Cognite Charts** is focused on the nitty-gritty details and to give you a smooth charting experience. You’ll find **function descriptions** by clicking the Information icon located next to a function. Notice also that **named inputs/outputs** in Cognite Charts make it clear to see which are required for a function. When you zoom in to a specific point on a time series, the aggregated values automatically switch to showing the **raw data**. In addition, **all** measurement units stored on time series in CDF are now displayed in Cognite Charts.

For the **solution builders**, we’ve enabled **client credentials grant flow in Grafana**. In some cases, for example, if you're using the Grafana free tier, you can not set up an identity provider for the whole Grafana instance. Instead, you need to set up a client credentials grant flow for each instance of the Cognite Data Source. You’ll find all the information you need to set this up in [this article](dashboards/guides/grafana/admin_oidc.md#set-up-a-client-credentials-grant-flow).

For the **CDF administrators**, we’re introducing a new **token session service** for managing internal sessions and exposing internal and external endpoints for interacting with them. The token session API service allows users and service principals outside the API to run jobs within the API. External principals can use the sessions API to delegate their access to functionality in CDF. You can use this functionality to set up and manage long-lived or timed access for internal services. The access is rooted in the respective principal's external identity provider (IdP), from where it can be controlled or terminated. For example, a user can specify a function to be run on their behalf and terminated if their user account is deleted.

## August 2021

Today, we are happy to announce the release of the following improvements to Cognite Data Fusion (CDF).

#### Manage RAW foreign table in the Postgres Gateway

You can now manage the RAW foreign table in the Postgres Gateway using APIs and don’t have to rely on external tools such as pgAdmin or psql CLI to create, list, update or delete the RAW foreign tables.

#### Update labels on assets

To make it easier to update labels on assets, we have added a set method in the [updateAssets operation](../api/v1/#operation/updateAssets). The operation accepts a list of labels to set or replace for the resource.

#### Update sequence configuration

With the availability of [mutable sequences](../api/v1/#operation/updateSequences), you can now update an existing sequence configuration. In addition to adding, removing and updating columns in your sequence, you can also update or clear the assetId, externalId, metadata, and the dataSetId for a sequence. To update a sequence, you need `sequencesAcl:WRITE` capabilities.

#### Group limits

To support authentication for users who are members of a **large number of Azure AD groups** we have increased the default group limit token configuration to 1.000 for new CDF projects with AAD as the IdP from now on.

#### Interactive engineering diagrams

We’re hard at work putting the final touches on our new user experience for working with interactive engineering diagrams. Stay tuned for the upcoming release.

#### Cognite Charts

The main new features in this Cognite Charts release are:

- Search for time series data by time series ID
- Highlights matches in search results
- Recently viewed tags and time series are displayed in the search panel
- Merge y-axes with the same units
- Show/hide min/max bands
- Show/hide gridlines
- Backend performance improvements
- Bug fixes & UI/UX improvements

#### Search for time series data by time series ID

We have added a tab in the search panel to search for “Time series ID,” specifically. This tab should be used when you know the name of the _time series_ you are searching for (e.g. `VAL_21_PT_1019_04:Z.X.Value`), while the “Tag number” tab should be used to search for the asset tag to which the time series of interest is related (e.g. `21PT1019`). You will also notice that search results that match your query are now highlighted to make direct matches easy to see.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/search_by_time_series_id.png" alt=" " width="100%"/>

You’ll also see the tags (assets) and time series you have recently viewed (added and/or removed from your chart) in the search panel, if you have not begun to type a search query.
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/recently_viewed_time_series.png" alt=" " width="100%"/>

#### Basic Statistics & Tag Metadata

Users can view additional basic statistics (mean, std. dev., etc.) for the a given time series for the time range they’re currently viewing in the chart by clicking on the corresponding information icon. By clicking on the “Metadata” tab in this panel on the right-hand side of the screen, can view the metadata information.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/basic_statistics.png" alt=" " width="100%"/>

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/metadata.png" alt=" " width="100%"/>

#### Merge y-axes with same units

It’s now possible to easily compare the values of two or more time series or calculations that have the same unit, without needing to manually match and align the axes individually. Simply click the y-axis button found just above your chart and select the “Merge units” toggle. In order for this feature to work, you must have already assigned the input and output units on the time series or calculation(s) of interest.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/merge_y-axes.gif" alt=" " width="60%"/>

#### Show/hide min/max bands

While looking at a wider range of time, Charts will show the aggregated values for a given time series. With the min/max bands, it’s possible to visually display the min and max range for a time series.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/show_hide_min-max.png" alt=" " width="100%"/>

#### Show/hide gridlines

Gridlines can be a valuable way to visually identify time series values, but they could also get in the way and be confusing when you have a lot of time series data on your Chart. Use the show/hide gridlines toggle to decide for yourself whether or not you want them displayed on your chart.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/show_hide_min-max.gif" alt=" " width="100%"/>

## June 2021

In his release we are adding a PostgreSQL gateway to stream data into CDF from your existing ETL solutions or push data directly to the gateway from extractors that support Postgres.

<!-- >

#### Charts

Use Charts to explore, trend, and analyze industrial data. Find, understand, and
troubleshoot for actionable insights from time series and contextualized engineering diagrams already in the CDF portal application or other Cognite applications, then share the chart for collaboration. Charts runs securely with a single, secure sign-in.

**Learn more** in the Charts [**documentation**](../cdf/charts/index.md), and join the conversation in the Charts [**community**](https://hub.cognite.com/groups/charts-159) on Cognite Hub.
-->

#### CDF Transformations now support OpenID Connect

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/transformations/api_oidc.png" alt=" " width="40%"/>

You can now use OpenID Connect and your existing identity provider (IdP) framework to manage access to **CDF Transformations** securely. We currently support Azure AD, Microsoft's cloud-based identity and access management service.

When you have registered **CDF Transformations** in Azure AD, users can sign in with their organizational ID to transform data in a CDF project.

You can update existing transformations that are currently using API keys to use OIDC client credentials instead.

**NOTE**: CDF projects running in Google Cloud Platform need to be added to an allowlist (sometimes called a _whitelist_) to support scheduling of transformations using OpenID Connect. Contact your Cognite representative to be added to the allowlist.

**Learn more** in [Setup and administration with OpenID Connect](../cdf/integration/guides/transformation/admin_oidc.md).

#### PostgreSQL gateway

Use the **PostgreSQL** gateway to ingest data into CDF from popular ETL solutions. The CDF resource types appear as tables in the PostgreSQL database and you can ingest data directly into CDF resources like assets, events and datapoints and to Cognite RAW.

- We currently support Azure Data Factory as the ETL tool.
- The PostgreSQL Gateway is intended for ingestion only. We do not support querying data from CDF using the gateway.

#### Grafana - nested variables

In Grafana, you can now link variables and use the value of one variable as input to another.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dashboards/grafana/nested_variables_0.png" alt=" " width="100%"/>

**Learn more**: [Nested (chained) variables](../cdf/dashboards/guides/grafana/variables.md#nested-chained-variables)

#### Sneak peek at the new interactive diagrams experience

We’re excited to give you a sneak peek of the latest redesign and enhancements to the interactive diagrams experience before it’s released publicly. We encourage all customers to try out the new features and [give us feedback](https://hub.cognite.com/contextualizition-beta-features-162/beta-interactive-engineering-diagram-flow-feedback-channel-490) to help us make them better!

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/new_flow.png" alt=" " width="100%"/>

#### Power BI - templates

We have added support for Templates in Power BI to early adopters. Contact your Cognite representative to give it a try and share your feedback!

## April 2021

This release of Cognite Data Fusion (CDF) focuses on the end-to-end data journey with fast and secure authentication to all Cognite applications using your organization's IdP. We currently support Microsoft'sAzure Active Directory (Azure AD). Speed up the time spent getting value for operations using a new sample function for contextualization and add events to a Grafana dashboard for visualizing and analyzing your CDF data.

#### Manage access with OpenID Connect

Register the CDF portal application and other Cognite applications in your IdP (Identity Provider) and use **OpenID Connect** and your **IdP framework** to manage **user** and **service principal** (app) identities securely. We currently support Microsoft's **Azure Active Directory (Azure AD)**.

Visit the [**Manage access to CDF**](/cdf/learn/cdf_auth/cdf_auth_intro.md) **getting started course** to learn more about the basic authentication concepts and terminology, secure access to CDF, and the different ways an application can access CDF data. Explore the [docs](/cdf/access/) for the technical details.

:::info NOTE
With the introduction of OpenID Connect and the IdP framework to manage CDF access securely, we strongly encourage customers to adopt the new authentication flows as soon as possible.
:::

#### SQL Transformations CLI and Cognite Extractors support OpenID Connect authentication

Transformations CLI users, scheduled transformation jobs, and Cognite extractors can now authenticate using OpenID Connect and Azure AD.

#### Accelerate data set contextualization

Speed up your contextualization with the `entity_matching.suggest.fields` function. Supply the function with data samples to return suggested fields you can use for entity matching in the API, SDK, or UI. Learn more [here](../../api/playground/#operation/suggestFields).

Use existing matches to automatically generate matching rules to apply to all your data. Learn more [here](../../api/playground/#operation/suggestMatchRules).

Add input naming variations to the entity matching model to improve the suggested matches, for example, _pmp_ for _pump_ and _bhp_ for _bottom hole pressure_. To create a list of synonyms, use `replacements` in the API. Learn more [here](../../api/playground/#operation/entityMatchingCreate).

#### Visualize, track, and analyze events in Grafana

Boost your insights by adding the CDF **events** resource type to your Grafana dashboard. To visualize events, you can customize the time range and events to display and rename and organize columns according to your needs.

By default, the `events` annotation query returns events that are active within a time range, but you can customize the query with additional time filters.

**Learn more**: [Visualize events](../cdf/dashboards/guides/grafana/annotations.md)

#### Templates (Early adopter program)

With Templates, you build **your** view of the data you have available in CDF and simplify the applications and solutions you are working on by accessing data through templates. Templates remove the gap between the application’s data model and the preexisting structure of the relevant data. It is easy to scale your solution across more data without changing or redeploying your application code or configuration. Instead, you can work with your template in CDF, and use the tooling available to scale to more data with governance.

**Learn more**: [Manage templates](../cdf/templates/index.md)

#### Charts (Early adopter program)

Use Charts to **explore**, **trend**, and **analyze** industrial data. Find, understand, and troubleshoot for actionable insights from time series and contextualized P&IDs already in the CDF portal application or other Cognite applications then share the chart for collaboration. Charts runs securely with a single, secure sign-in.

**Learn more**: [Get started with Charts](../cdf/charts/index.md)

:::info
To join an Early Adopter program, contact your Cognite representative.
:::

## February 2021

This release of Cognite Data Fusion (CDF) focuses on on usability improvements across CDF as well as laying the foundation for existing future features. We are also very proud of our Cognite Power BI Connector, which is now certified by Microsoft.

#### The Cognite Power BI Connector is out of Beta

We're excited to announce that Microsoft has certified the **Cognite Power BI Connector** and that the connector is now **out of Beta**. The Cognite Power BI Connector enables data consumers to easily **read**, **analyze**, and **present** data from Cognite Data Fusion (CDF) in compelling visualizations in Power BI Desktop and the Power BI service.

You can find the connector in the Other category of the Get Data dialog in Power BI. Learn more in our [**in-depth article**](/cdf/dashboards/guides/powerbi/getting_started.md).

#### Enrich contextualized assets with 3D models

Increase the value outtake of contextualization by **connecting assets to a 3D model** with the new easy-to-use option under **Match entities** in the CDF user interface. Visually inspect assets and zoom into details to get tangible information.

Learn more: [3D contextualization](../cdf/integration/guides/contextualization/matching.md)

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/3D_contextualization.png" alt=" " width="100%"/>

#### Accelerate finding and filtering relevant data

Finding the data you need is now even easier in the **CDF Data explorer**. Navigate between different parts of CDF with the new **drop-down navigation in the top bar** and shift between multiple CDF resources with **more descriptive tab names**.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/new_navigation.gif" alt=" " width="100%"/>

Use the new **Quick search** in the top navigation to search for the [resource](../cdf/learn/cdf_basics/cdf_basics_datamodel.md) names and explore data from anywhere in CDF. Filter on metadata and **hide the empty fields for any resource** and **show aggregated values of metadata keys for assets** to get unique values ordered by frequency (if enabled in the API). You'll also notice that **date points are added to the time series sparkline** to better visualize missing data for a given range.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/quick_search.gif" alt=" " width="100%"/>

Learn more: [Data explorer](../cdf/integration/guides/exploration/data_explorer.md)

#### Labels and relationships in SQL transformations

Create and delete data related to the `Relationships` and `Labels` resource types when you use SQL queries in **CDF Transformations** to transform data from the CDF staging area into the CDF data model.

Learn more: [CDF Transformations](../cdf/integration/guides/transformation/transformations.md)

#### Enhanced results page for entity matching pipelines

**Get more information about the results, rules, and rule conflicts** for matches from your **Entity matching pipelines** in CDF and improve rule predictions by selecting particular matches to CDF.

Learn more: [Entity matching](../cdf/integration/guides/contextualization/matching.md)

## December 2020

This release focuses on improving **access** and **discoverability** of data and **workflow automation**. Cut down on time you spend trying to find data, make sense of it, and then deploy and monitor it. We deliver tools to speed up this process and allow you, the user, to compound the value of your work. Improved performance and capabilities for your digital teams means a faster time to value for operations.

#### Explore and discover the right data for your solutions

Use the CDF Data Explorer to **find**, **validate**, and **learn** about the data you need to build solutions. Browse through all the available [resource types](../cdf/learn/cdf_basics/cdf_basics_datamodel.md) in your CDF project and drill into details and linked resources, for example, assets and time series with live data, interactive P&IDs, and mapped events.

Learn more: [CDF Data Explorer](../cdf/integration/guides/exploration/data_explorer.md)

#### Configure and rerun contextualization pipelines

Create a pipeline to re-run matching models on data sets. If the data set receives new data, you can re-run the pipeline to find additional matches.

Learn more: [Entity matching](../cdf/integration/guides/contextualization/matching.md)

#### Enrich files with geographic location

The new `geoLocation` field for the Files resource type lets you contextualize and find documents or files related to geographic locations. For example, find seismic reports for an area or drone survey photos from a yard section.

Learn more: [Geographic location of files](../dev/concepts/resource_types/files.md##geographic-location-of-files)

#### CDF getting started guides

Visit our new getting started guides to learn about our [best practices for implementing CDF](learn/cdf_plan/cdf_plan_intro.md) and quickly get up to speed on the [CDF architecture, data model, and data flow](learn/cdf_basics/cdf_basics_intro.md).

#### Monitor your SQL transformations

Subscribe to email notifications to [monitor the transformation process](../cdf/integration/guides/transformation/transformations.md#monitor-scheduled-transformations) and solve any issues before they reach the data consumer. You can add up to 5 email addresses, either to groups or to specific people.

#### Flexible data modeling with relationships

This release sees the [relationships](../dev/concepts/resource_types/relationships.md) resource type moving from Beta to [API v1](../api/v1/#tag/Relationships).

While you can use the assets resource type to model equipment relations as a **tree**, relationships let you model data in additional **graph** structures meaningful for your organization.

Data engineers can use relationships to organize assets into multiple structures. For example, you can order assets by the _process flow_ or the physical connectivity in a grid structure to let users efficiently locate data for nearby equipment.

Some users in your organization may find it useful and efficient to organize the equipment by its function in a _maintenance hierarchy_. Others may benefit from having the equipment organized by physical location in a _location-based_ hierarchy:

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/location_hierarchy.png" alt=" " width="50%"/>

See [Modeling asset structures with relationships](../cdf/concepts/model_asset_structures.md) for more examples.

Beyond structuring assets, you can use relationships to create richer connections between data elements and build a knowledge graph on top of the existing data.

To learn more about how relationships can represent industrial reality, we recommend reading the ["Building a contextualized power system network model"](https://f.hubspotusercontent10.net/hubfs/6407318/Building%20a%20Contextualized%20Power%20System%20Network%20Model.pdf) whitepaper.
