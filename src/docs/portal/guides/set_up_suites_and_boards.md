---
pagination_next: null
pagination_prev: null
---

# Set up suites and boards

Follow the steps below to **create** and **maintain** suites according to the needs and workflows of your organization.

:::info NOTE
You need to be a [Solutions Portal administrator](set_up_access_and_portal_admins.md#designate-solution-portal-admins) to create and maintain suites.
:::

## Working with suites

Suites are shared spaces that contain links to applications, dashboards from analytics and visualization tools, and other helpful links.

### Create a suite

1. On the home page, under **Company Suites** section select **New suite**
2. Give your suite a name, select a color, and add a description. The description helps your colleagues understand what the suite contains.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/create_suite_2.png" alt=" " width="33%"/>

3. Select **Add boards** to [populate your suite](#add-a-board-to-a-suite) with content, or select **Create** to save the suite and add boards later.

### Rearrange suites

On the left-hand sidebar, select and drag a suite to reorder it.

### Add sub-suites

You can create sub-suites to organize your workspace with nested sub-suites. On a suite, select **Add subsuite** in the top right corner.

### Delete a suite

1. On the suite you want to delete, select **More options** (**...**) > **Delete suite**.
2. Confirm that you want to delete the suite.

## Working with boards

Boards are the content of a suite. A board can be a dashboard, an application, or a link with relevant information for your organization. You can choose to see live data from reports, such as [Grafana](#add-a-link-to-a-grafana-report) and [Power BI](#add-a-link-to-a-power-bi-report) dashboards. Users can hover over a board to see more details or select the board to open it in a separate tab.

On a suite page, boards with embedded dashboards (Grafana, Power BI, etc.) load sequentially (one-by-one) to ensure that the dashboards load correctly.

### Add a board to a suite

1. In the Solutions Portal, select the suite you want to add a board to, and then select **Add board**.

1. In the **Add board to suite** dialog box, enter a **title** for your board.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/add_board_suite.png" alt=" " width="40%"/>

2. Choose the **type** of board you want to add.

3. Create a **link** to your board. This URL links your dashboard, application, or other relevant items to your suite.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/link.png" alt=" " width="60%"/>

   If you add a dashboard, you can **add embedded tags** to show live data directly in the suite, for example, from [Grafana](#add-a-link-to-a-grafana-report) and [Power BI](#add-a-link-to-a-power-bi-report).

4. Select **Manage access to board** to decide which groups should have access to the board. Type to search or scroll through the list of groups

   :::info Tip
   Leave the field blank if you want only admins to access the board, for example, to test new suites and boards before making them available to users.
   :::

5. Select **Add board**, and continue to add more boards.
6. Select **Save**.

### Add a link to a Grafana report

1. In **Grafana**, select the dashboard you want to add to a board and select **Share**.

   Grafana displays the **Share panel**:

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/embed.png" alt=" " width="66%"/>

2. On the **Link** tab, copy the URL and paste it into the **Add link to board** on the **Board form** in Solutions Portal.

3. On the **Embed** tag in Grafana, turn off **Current time range** if you want live data (recommended).

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/copy_html.png" alt=" " width="66%"/>

4. Copy the code and paste it into **Add embedded tag** on the **Board form** in Solutions Portal:

### Add a link to a Power BI report

1.  In Power BI, select the dashboard you want to add to a board and select **File** > **Embed report** > **Website or portal**.

    Power BI displays the **Securely embed this report in a website or portal** dialog box:

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/secure_embed.png" alt=" " width="66%"/>

2.  Copy the **URL** link and paste it into **Add link to board** on the **Board form** in Solutions Portal.
3.  Copy the **HTML** link and paste it into **Add embedded tag for board**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/add_link_to_board.png" alt=" " width="66%"/>

4.  If you're adding an application or a dashboard that doesn't provide an embedded link, you can upload an image by selecting **Upload image**. The maximum size for the image is 1 MB.

    :::info TIP
    Use [tinypng](https://tinypng.com) to compress your .png or .jpeg file.
    :::

### Edit a board

1. To edit a board, select **More options** (**...**) > **Edit board**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/more_options_board.png" alt=" " width="66%"/>

1. Select **Update board** and then **Save**.

### Rearrange boards

1. On the suite, select **Edit layout** in the top right corner.
2. Drag a board to the desired position.
3. Use the drag handle at the bottom right of a board to resize a board.
4. Select **Save layout** to save changes.

### Move a board to another suite

1. Select **More options** (**...**) > **Move to...**.
2. Select the target suite.
3. Save the changes.

### Remove a board

1. Select **More options** (**...**) > **Remove board**.
2. Select **Remove board**.

## See which suites and boards a group can access

As a Solutions Portal administrator, you can see which suites and boards different groups have access to:

1. Select the **Users** icon and then the group you want to see access information for.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/access_icon.png" alt=" " width="40%"/>

1. Select **Clear view** to go back to admin mode.

:::info NOTE
You cannot edit when you are in group view.
:::

## Change configuration for fetching user groups

The Solutions Portal uses a list of groups to detect which boards a user has access to. By default, it fetches only CDF groups that are linked to external groups from the IdP system (Azure AD, for example).

To fetch all CDF groups (linked and not linked) that a user belongs to:

1. On the user menu, select **Change configuration**.
1. Turn on **Use all user groups**.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/change_configuration.png" alt=" " width="40%"/>

To see the changes, view the list of groups in the [Select group access](#see-which-suites-and-boards-a-group-can-access) menu.
