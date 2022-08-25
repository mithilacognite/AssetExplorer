---
pagination_next: null
pagination_prev: null
---

# Cognite DB Extractor

The **Cognite DB Extractor** is a general database extractor that connects to one or more databases, executes queries, and sends the results to the staging area in Cognite Data Fusion (CDF).

The extractor connects to databases using ODBC, and you need ODBC drivers for the databases you're connecting to. Typically, the database vendors provide the necessary ODBC drivers for their databases.

The extractor is available as:

- A native Windows application.
- A Docker image for Unix-based systems (for example, Mac OS and Linux).

## Server requirements

You can install the extractor on a physical server or on a virtual machine
on-premises or in the cloud.

| Hardware requirements                                                                                                                | Software requirements (for Windows version)                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| The **minimum** requirements are: <ul><li>At least a 2 core CPU</li><li>1 GB RAM\*</li><li>1 GB HD for logging and storage</li></ul> | <ul> <li>Windows 10</li><li>ODBC driver(s) for your database(s)</li></ul> |

\* _You can adjust the configuration the reduce the memory usage. The minimum requirement if for the recommended default values._

## Running as a Docker container

To run the DB extractor as a Docker container, you must first create a Docker image containing the ODBC drivers for the database system(s) you wish to extract from.

As an example, we will create an image to use with PostgreSql databases. First create a dockerfile:

`FROM eu.gcr.io/cognite-registry/db-extractor-base:2`

` # Install your ODBC drivers here. For example, for PostgreSql:`

`RUN apt-get install odbc-postgresql `

In this example, we have saved it as `postgres.Dockerfile`, but you can call it whatever is suited for your application. Now build the docker image:

`docker build -f postgres.Dockerfile -t db-extractor-postgres .`

Replace `postgres.Dockerfile` with the name of the dockerfile you created earlier, and `db-extractor-postgres` with the tag you want to refer to this docker image as. You can now create a docker container running this image:

`docker run <other options in here, such as volume sharing and network config> db-extractor-postgres`

Again, replace `db-extractor-postgres` with the tag you chose in the previous step.

## Prerequisites

To configure and deploy the Cognite DB Extractor, you also need:

- **Network access** to the database and the CDF project (firewall openings).
- **User credential** providing the necessary access to the database.
- **An API-key** for the CDF project with the following capabilities:
  - `raw:read`
  - `raw:write`
  - `raw:list`

## Incremental load

The Cognite DB Extractor supports incremental load (processing only changes since the previous run) if it can use a table column to determine when a row was added or changed. Examples are a timestamp for the last edit of the row, a row index (assuming immutable rows), or similar.
