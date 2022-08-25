---
pagination_next: null
pagination_prev: null
---

# FAQs

## How can I find information about a tag?

Click the **scan** button to take a picture of the tag nameplate and show all information about the tag.

You can also use the **search** button to type in a tag name or description.

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/find_a_tag.png" alt="Find info about a tag" width="100%"/>

## What kind of information can I find?

We are continuously adding data from different source systems into InField. Currently, you can find:

- Work order data
- Equipment details
- Documents
- Trends
- Pictures and comments stored directly in the Cognite Data Fusion
- 3D models

## Can I store pictures on a tag?

Yes, you can take pictures and add comments to a tag. You can, for example, store photos and comments about a tag for future reference; equipment faults, leakages, access to equipment, etc.

## What are the checklists for, and how can I use them?

You can use [checklists](guides/checklists.md) for simple to-do lists for your field execution tasks. Checklists can be created from the object list on a work order, or be based on a template for routine rounds. You can also manually create a checklist to keep track of your own to-dos. You can see the checklist items both in 3D and in [interactive P&IDs](guides/docs.md) if they are available.

## Why are my changes to a checklist template not displayed?

If a checklist is created from a template, no template updates are displayed in this checklist. These will only be visible in the checklist created in the first calendar week following the template update.

## Which browsers do you support?

Currently, we recommend Google Chrome, Microsoft Edge or Safari. You can use other browsers, but all content may not be displayed correctly.

## Are the trends realtime, or is there a time delay?

The time series are typically integrated to Cognite Data Fusion from your plant historian. The freshness of the data in InField depends on the update frequency and performance of your plant historian plus a small transmission lag (typically 0.5 - 1 sec). The time delay is always visible in the display, as illustrated [here](guides/trends.md).

For use cases where you depend on high-frequency or realtime data from a sensor, you should consult your control system operators.

## Can I activate or deactivate a work permit from here?

No, there is currently no way for you to activate or deactivate work permits from within InField.

<!--## Can I see list of active work orders here?

For some projects, yes. We are working on bringing that feature to all projects, so stay tuned!-->

## How do I navigate in a 3D model?

Use these keyboard shortcuts to navigate in the 3D model on **desktop**:

| Press this key | To do this     |
| -------------- | -------------- |
| W              | Move forward   |
| S              | Move backward  |
| A              | Move left      |
| D              | Move right     |
| Arrow up       | Look upwards   |
| Arrow down     | Look downwards |
| Arrow right    | Look right     |
| Arrow left     | Look left      |

Use these mouse shortcuts to navigate in the 3D model on a **mobile device**:

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/mobile_navigation.png" alt="Mobile navigation" width="100%"/>

## Why are there many highlighted objects in an interactive P&ID file?

You can click all of the highlighted objects in the interactive P&ID files to get more information. These are different types of links:

<img className="media-centre" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/infield/p&ID_colors.png" alt="Colors on P&IDs" width="100%"/>

## Why is the 3D view greyed out on some tags?

A greyed-out 3D view means that the tag is not available as a separate object in the 3D model. Possible reasons:

- The tag is not included in the 3D model.

- The containing skid is modeled as one object, with no indication of individual equipment (can typically occur with 3rd party skids/packages).

- The contextualization has not matched 3D objects with assets.

If you suspect the last option is the reason, do not hesitate to contact us through the chat icon in the bottom right corner of this screen, or through the "feedback" menu item in InField.

## What should I do if I find information that is wrong or missing?

Send us a link to the page where you think information is missing (for example, missing documents and time series) and a brief description. To get in touch with us, click Chat with us located in the top-right corner of InField. You can also contact [support@cognite.com](mailto:support@cognite.com), who are available 24/7.

<!--## Why are there two different ways to access equipment history?

## How fresh is the work order data from Workmate?

## WHAT IS THE ROADMAP FOR OPERATION SUPPORT?  ## HOW OFTEN ARE THE DOCUMENTS UPDATED? ## DOES THE SAP WORK ORDER UPDATE WHEN I CHECK THE CHECKLIST ITEM?   -->
