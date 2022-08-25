---
pagination_next: null
pagination_prev: null
---

# About data extraction

Extractors connect to source systems and push data in its **original format** to Cognite Data Fusion (CDF) as part of the [data integration](../../index.md) workflow. You can extract data with prebuilt [Cognite extractors](#cognite-extractors) or create a [customer extractor](#custom-extractors) using Python and .NET utils packages and SDKs. 

The prebuilt extractors can **stream or extract data in batches** to the [CDF staging area](../../guides/extraction/raw_explorer.md) or directly to a [CDF service](../../../../dev/concepts/resource_types/index.md) with little or no data transformation.

:::info Note
The Cognite extractors only need read access to the source systems and never modify the original data.
:::

You can also ingest data into CDF using the [Cognite API]((/api/v1)) or integrate ETL tools with the [PostgreSQL gateway](../../guides/interfaces/ingest_into_raw.md) if your data is already in the cloud.  

<img className="illustration" src="../../../../images/cdf/integrations/extraction/extractors_architecture.png" alt="Integration architecture" width="100%"/>

<!--We divide **source systems** into three main types:

- **OT source systems** - for example, industrial control systems with time series data. Getting OT data into CDF can be time-critical (a few seconds), and the data often need to be extracted continuously.

- **IT source systems** - for example, ERP systems, file servers, and databases. IT data typically changes less frequently (minutes or hours) than OT data and can often be extracted in batch jobs.

- **ET source systems** - for example, engineering diagrams such as P&IDs and wiring diagrams, and 3D models, like CAD. -->

## Cognite extractors

| Extractor                                                 | Description                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cognite DB extractor](../../guides/extraction/db.md) | Connects to databases using ODBC, executes queries, and batch extracts data into the CDF staging area or directly to the CDF time series service. Make sure you have ODBC drivers for the databases you're connecting to. This extractor is available as both a Windows service and a standalone executable.                                                                                                                                                                          |
| Cognite Documentum extractor | Connects to OpenText Documentum and Documentum D2 and batch extracts documents via the Documentum Foundation Classes (DFC) library or the D2 REST API (recommended) into the CDF files service. It extracts metadata into the CDF staging area.                                                                                                        |
| [Cognite PI extractor](../../guides/extraction/pi.md) | Connects to the PI Data archive and streams time series into the CDF time series service. In parallel, the extractor ingests historical data (backfilling).|
| [Cognite OPC UA extractor](../../guides/extraction/opc_ua.md)| Connects to the open OPC UA protocol and streams time series into the CDF time series service and events into the CDF events service. It batch extracts the OPC UA node hierarchy into the CDF staging area or as CDF assets and relationships.| 
| Cognite PI AF extractor| Connects to the PI Asset Framework and batch extracts Asset Framework elements and all their attributes. The extractor then builds a tree for each element in the CDF staging area.|  

### Download installation files

1.  Navigate to [Cognite Data Fusion](https://fusion.cognite.com/), and select **Extract data**.
2.  Select the extractor best suited to your source system.
1.  Download the **Installation file** and, optionally, the PDF documentation.

    <img className="screenshot" src="../../../../images/cdf/integrations/extraction/download.png" alt="Extractor download page " width="80%"/>

## Custom extractors

If your source system cannot use any of the prebuilt extractors, you can create custom extractors. Select **Create a custom extractor** to find Python and .NET utils packages and SDKs to get started.

### Cognite Python extractor-utils SDK

Use the [Python extractor-utils SDK](https://github.com/cognitedata/python-extractor-utils), which is an extension of the [Cognite Python SDK](../../../../dev/guides/sdk/python), to develop extractors in Python. For more information, see the [Python extractor-utils SDK documentation](https://cognite-extractor-utils.readthedocs-hosted.com/en/latest/). 

### Cognite .NET extractor utils code

Use the [.NET extractor](https://github.com/cognitedata/dotnet-extractor-utils) to develop extractors in C#. For more information, see the [.NET utils documentation](https://cognitedata.github.io/dotnet-extractor-utils/tutorials/intro.html).