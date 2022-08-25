---
pagination_next: null
pagination_prev: null
---

# Documents

The settings listed below apply to data types connected to the CDF **Files** resource type.

In InField, the **Documents** tab setings are visible on **Documents** page from the sidebar and on the **Overview** page.

:::info Note 
To open and view documents from a mobile unit, make sure a file viewer for the document format is installed on the device.

:::


| Field                                            | Description                                                                                                                                                                  | Default value                                                                                               |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Documents name pattern<sup>1</sup>               | Use regular expressions to specify a document name pattern to distinguish documents from assets in interactive P&IDs.                                                        | `/^[0-9a-zA-Z]{4}-[0-9a-zA-Z]{2,6}-[0-9a-zA-Z]{1}-[0-9a-zA-Z]{2}-[0-9a-zA-Z]{4}(-[0-9a-zA-Z]{2})?(.\\*)/\$` |
| Supported documents format                       | Specify a list of document formats that will be available in InFiled. Enter the values as MIME types, for instance, `image/tiff`, `application/msword`                       | `pdf`, `application/pdf`, `svg` `image/svg`, and `xml`                                                      |
| Custom document format                           | Select to allow custom file formats for documents. The **Supported documents format** field appears below. Clear the field to use `application/pdf` and `image/svg`.         | -                                                                                                      |
| Red line markup on documents                     | Specify the metadata fields that contain the redline status.                                                                                                                 | `REV_STATUS`, `status`                                                                                      |
| Document name to show in list<sup>1</sup>        | Specify the metadata fields that contain the document name. Infield truncates the file name specified in the document name. For instance, 49FA0003.pdf will display as 49FA0003.| `DOC_NO`, `fi_orgfilename`                                                                                  |
| Document description to show in list<sup>1</sup> | Specify the metadata fields that contain the document description.                                                                                                           | `DOC_TITLE`, `title`, `DOC TITLE`, `document:title`                                                         |
| Document sequence number                         | Specify the metadata fields that contain the document sequence number.                                                                                                       | `rf_seqno`                                                                                                  |
| Document types<sup>1</sup>                       | Specify the metadata fields that contain the document type.                                                                                                                  | `DOC_TYPE`, `doc_type`                                                                                      |
| Create new document category<sup>1</sup>         | Click to add a key-value list with document categories and descriptions.                                                                                                     | -                                                                                                           |
| Override default document category priority list | Turn on to only show custom document type categories in the list below.                                                                                                      | `off`                                                                                                       |
| Document category priority list                  | Specify a prioritized list of document groups to add to the **Overview** page. Only one document from each group is visible at a time, and a maximum of 5 documents in total. | -                                                                                                           |

<p><sup>1</sup> required if the specific feature is enabled.</p>
