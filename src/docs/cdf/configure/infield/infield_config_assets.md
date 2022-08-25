---
pagination_next: null
pagination_prev: null
title: Tags, properties, checklists, scanner
---

# Tags, properties, checklists, and scanner

The settings below apply to data types connected to the CDF **Asset** resource type.

## Tags

The settings on the **Tags** tab are visible as tab metadata across InField, such as in checklists, 3D views, search results, and in the top bar.

| Field                       | Description                                                                                            | Default value |
| --------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| Tag description<sup>1</sup> | Specify the metadata field that contains a tag description that a person easily reads.            | -             |
| Tag area                    | Specify the metadata field that contains the tag area name. The area name is displayed in the top bar, on the **3D** page, and to group checklist items per area. | -             |
| Outdated tags               | Enter any outdated tags. A banner will notify users that the tag is outdated.                          | -             |

<p><sup>1</sup> required to visualize the data in the user interface.</p>

## Properties

In InField, the settings on the **Properties** tab are visible to users on the **Properties** page from the sidebar or on the **Overview** page.

| Field                          | Description                                                                                                         | Default value |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ------------- |
| Properties with tag links      | Specify the metadata field that contains links to other tags.                                                       | -             |
| List of prioritized properties | Specify the metadata field that contains properties to display on the **Properties** card on the **Overview** page. | -             |
| List of lube oil properties    | Specify the metadata field that contains lube oil properties to group these properties on the **Properties** page.            | -             |

## Checklists

The settings on the **Checklists** tab are visible when users work with checklists in InField.

Users can copy and paste tags from external sources, such as work management systems and Excel sheets. You can set up how InField handles any prefixes, postfixes, and special characters in the tag name to separate the tags. For
instance, `"(\*).A[0.9]` filters out `"IAA\_"` as a prefix if this is used in a plant name, such as `IAA_21PT1019`.

| Field                                                  | Description                                                                                                                                                       | Default value |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Prefix tag filter                                      | Enter regular expressions to filter out prefixes from tag names.                                                                                                  | -             |
| Postfix tag filter                                     | Enter regular expressions to filter out postfixes from tag names.                                                                                                 | -             |
| Items split pattern                                    | Specify characters that will split checklist items and add a new line when items are pasted into a checklist.                                                     | -             |
| Notify to evaluate the need of creating an observation | Turn on to display a pop-up with **Consider creating a notification in SAP** when a checklist element is set to **Not OK**. | -             |
| Checklist approval| Turn on to enable users to approve checklists on behalf of co-workers. This is typically useful for discipline leads or production managers that want to verify that all checklist tasks are completed. The section **Checklists for approval** appears on the **Checklist** page in InField.| Off|

## Scanner

The settings on the **Scanner** tab apply to the scanning of tag IDs on an asset with a mobile unit.

| Name                         | Description                                                  | Default value |
| ---------------------------- | ------------------------------------------------------------ | ------------- |
| Extra filtering for scanning | Select to limit the number of wrong results during scanning. | `OCR/DEFAULT` |
| Scanner cropping area        | Turn on to enable the cropping area while scanning.          | False         |
