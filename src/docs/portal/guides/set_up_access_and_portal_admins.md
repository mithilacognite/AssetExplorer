---
pagination_next: null
pagination_prev: null
---

# Set up access and admin users

Follow the steps below to grant users **access** to the Solutions Portal and designate Solutions Portal **admin user(s)**.

:::info NOTE
You need to have CDF administrator rights to set up access to the Solutions Portal.
:::

## Grant user access and designate Solutions Portal admins

The Solutions Portal uses the Cognite Data Fusion (CDF) access management system to grant access to suites and boards.

### Before you start

Make sure you have [registered the Cognite API and the CDF portal application in Azure AD](../../cdf/access/guides/configure_cdf_azure_oidc.md) and [set up Azure AD and CDF groups to control access to CDF data](../../cdf/access/guides/create_groups_oidc.md).

### Grant standard user access

All Solutions Portal users must have these capabilities via any of their group memberships:

- `groups:list(current-user)`
- `files:read`

If necessary, add users to an existing group with the required capabilities, or follow the steps in [set up Azure AD and CDF groups to control access to CDF data](../../cdf/access/guides/create_groups_oidc.md) to create a CDF group and link it to a group in Azure AD.

### Designate Solutions Portal admins

1. If the group doesn't already exist, create a CDF group named `dc-system-admin`.

1. Grant these capabilities to the group:

   - `groups:list(all)`
   - `files:read`, `files:write`
   - `dataset:read`, `dataset:write`

1. Add the users you want to be **Solutions Portal admin users** to the `dc-system-admin` group.

## Allowlist the Solutions Portal domain names (legacy)

:::info NOTE
This is a legacy option for older CDF projects.
:::

Navigate to the _Access management_ section in [Cognite Data Fusion](https://fusion.cognite.com) to allowlist the Solutions Portal domain(s) for your CDF project. To access the Solutions Portal in CDF projects, add `cogniteapp.com` to the _Allowed application domains_ list.

## Create a data set for image files (optional)

The first time a Solutions Portal admin logs in to the app, the Solutions Portal automatically creates a data set to store image files, such as board previews and a company logo.

You can also create the data set manually to restrict the `files:write` and `files:read` capabilities to the **dc-system-admin** group, or set other configuration options for the data set. Make sure that you set the **externalId** for the data set to `dc_img_preview_storage`.

## Upload your organization's logo

1. On the user menu, select **Upload customer logo**.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/portal/user_menu_upload_logo.png" alt=" " width="33%"/>

2. Choose the logo file you want to upload, and then select **Upload customer logo**. The maximum image size is 1 MB.