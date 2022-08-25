---
pagination_next: null
pagination_prev: null
---

# Ingesting data into Cognite RAW

To ingest data to a table in Cognite RAW, using the Postgres Gateway and an ETL tool, you need to define the table structure in the PostgreSQL gateway before setting up the sink/destination in your ETL tool.

## Step 1: Manage tables in PostgreSQL gateway APIs

:::tip Tip

The [Cognite API](https://docs.cognite.com/api/v1/) will help create, retrieve, alter, and delete tables in the PostgreSQL gateway for a table in Cognite RAW.

:::

### Create a table

1. Sign in to [Postman](https://www.getpostman.com/). You can also use the web version of Postman if you haven't downloaded the tool.

1. In your workspace, create a new request and enter the request name **Create table**.

1. Select the request type as POST and enter your request URL - `https://skywarp.{cluster}.cognite.ai/user/{username}/tables`. Replace _{cluster}_ with your CDF cluster and _{username}_ with the username credentials. See [Setting up PostgreSQL](../../../integration/guides/interfaces/postgres_gateway#step-4-create-user-credentials-for-the-postgresql-gateway) for more information.

1. On the **Authorization** tab, select **OAuth 2.0** as the type of Authorization. To get your access token, see [How to get your access token in Postman](../../../integration/guides/interfaces/postgres_gateway#step-4-create-user-credentials-for-the-postgresql-gateway).

1. The **Body** tab allows you to specify the data you need to send with a request for every POST request. Inside the Body tab, click **raw** as the data model and select **JSON** from the dropdown as the data format and enter the below JSON:

   ```json
   {
     "items": [
       {
         "destination": "raw",
         "name": "movies",
         "columns": ["title", "year", "budget"],
         "options": {
           "primary_key": "title",
           "database": "my_database" /* my_database is your database name in CDF */,
           "table": "my_table" /* my_table is your table name in CDF */
         }
       }
     ]
   }
   ```

1. Click **Send** to fetch a response.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/create-a-table.png" alt="Creating a table" width="x%"/>

You have successfully created a new table.

:::note NOTE
When you've created a table in the PostgreSQL gateway, the corresponding table in Cognite RAW is created when the first row is ingested using the PostgreSQL gateway.
:::

### List tables

1. Create a new request and enter the request name **List tables**.

1. Select the request type as **GET** and enter your request URL as 

    `https://skywarp.{cluster}.cognite.ai//user/{username}/tables`.

1. Select Authorization type as **OAuth2.0**.

1. Click **Send** to fetch the response.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/retrieve-custom-table.png" alt="Listing custom table" width="x%"/>

You can view the list of all custom tables successfully. The **id** is a unique ID generated for your table.

### Alter a table

1. Create a new request and enter the request name **Update table**.

1. Select the request type as **POST** and enter your request URL as 

    `https://skywarp.{cluster}.cognite.ai/user/{username}/tables/update`.

1. Select Authorization type as **OAuth2.0**.

1. Inside the **Body** tab, click **raw** as the data mode, and select **JSON** as the data format. 

1. Enter this JSON:

   ```json
   {
     "items": [
       {
         "id": "123" /* the unique id of your table */,
         "update": {
           "name": {
             "set": "new_name"
           },
           "columns": {
             "add": ["another_column"]
           }
         }
       }
     ]
   }
   ```

1. Click **Send** to fetch the request response.

Your table is now updated with the new values.

:::info NOTE
You can only add new columns to the table. You cannot delete existing columns or modify the data types.
:::

### Delete a table

1. Create a new request and enter the request name **Delete table**.

1. Select the request type as **POST** and enter your request URL as 

    `https://skywarp.{cluster}.cognite.ai/user/{username}/tables/delete`.

1. Select Authorization type as **OAuth2.0**.

1. Inside the **Body** tab, click **raw** as the data model and select **JSON** as the data format.

1. Enter this JSON:

   ```json
   {
     "items": [{ "id": 123 }]
   }
   ```

1. Click **Send** to fetch the response.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/interfaces/delete-custom-table.png" alt="Deleting a custom table" width="x%"/>

`{}` in the response indicates you have successfully deleted the table.

:::tip
When you delete a table, it's also deleted in the PostgreSQL gateway, but not from Cognite RAW.
:::

## Step 2: Complete the connection in ETL

1. Verify that the table you created above is available as a foreign table in your ETL tool.

1. Configure your ETL pipeline between the source system and Cognite RAW.
