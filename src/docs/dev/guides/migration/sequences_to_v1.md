# Migrating sequences from API 0.6 to v1

If you have been using sequences in **API 0.6**, the information in this article helps you migrate to **API v1**.

## Compatibility between sequences in API 0.6 and API v1

In **API 0.6** (experimental) you can use two methods to reference a column within a sequence:

- Server-generated identifier: `id`
- User-selected string identifier: `externalId`

`externalId` is **optional** as it is a secondary method for selecting a specific column.

In **API v1**, we have simplified the interface and removed the support for server-generated numeric identifiers for individual columns. Instead, `externalId` is the only method of referring to a column, and it's **required** to set `externalId` when the column is created.

All sequences that have been populated through API 0.6, are visible and accessible through API v1. For sequences that contain columns that do **not** have `externalId` set, there are some limitations when they are accessed through API v1:

- When reading sequence rows, you can not reference columns that do not have a value for `externalId` when you are using the `columns` filter to narrow down the results to a few specified columns. The `externalIds` of the columns are the input to the filter. Instead, do not set the `columns` filter to include all available columns, including the ones that do not have an `externalId`.

- You can not write new values to columns that do not have `externalId` specified.

You can remove the above limitations by adding missing `externalIds` for the columns through the API 0.6 update functionality.

## Populating missing externalIds

To help you migrate sequences from API 0.6 to API v1, we have created a script to populate missing `externalId` values for the columns. The script iterates through all existing sequences in the project and populates columns that do not have an `externalId` value based on the following logic:

- The value of the `name` field in the column if set, and is unique within that sequence will be used as new value of externalId.
- In cases where this is not possible, `externalId` is set to a string representation of the `id` field in the column ('2097989012658435').

:::warning
API 0.6 is available until it's [**end-of-life**](../../API_versioning.md#end-of-life-for-api-versions). Until then you can create new sequences without `externalId` and remove `externalId` from columns through updates. Please upgrade your application to API v1 before migrating.
:::

Requires:

- Python 3.6+ installed
- API key with write permissions

Install and execute following the script (linux/osx):

```bash
pip3 install cognite-sdk --upgrade

export CDF_API_KEY='service_account_key'
export CDF_CLUSTER='https://api.cognitedata.com'
export CDF_PROJECT='project_name'

wget https://raw.githubusercontent.com/cognitedata/misc-scripts/master/migration_scripts/sequences_externalId.py && (python3 sequences_externalId.py)
```

Example script output:

```bash
id: 2720292949875996, externalid: my_sequence_1
MIGRATED EXTERNAL IDS.
Old: [None, None]
New: ['2097989012658435', '2656409469663491']

id: 3520439212334506, externalid: my_sequence_2
NO CHANGE
Old: ['1', '2']
New: ['1', '2']

id: 3561998335932037, externalid: my_sequence_3
MIGRATED EXTERNAL IDS.
Old: [None, '1']
New: ['7138246020156091', '1']

id: 5925823286705379, externalid: my_sequence_4
MIGRATED EXTERNAL IDS.
Old: [None, None]
New: ['1', '2']

id: 6867380525453381, externalid: my_sequence_5
MIGRATED EXTERNAL IDS.
Old: [None, None]
New: ['5630460103221073', '6609088840271556']
```

Note: Script is also available through [GitHub repository.](https://github.com/cognitedata/misc-scripts/blob/master/migration_scripts/sequences_externalId.py)
