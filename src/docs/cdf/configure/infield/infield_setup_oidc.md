---
pagination_next: null
pagination_prev: null
---

# Set up access and designate admin users

Follow the steps below to grant users **access** to InField and designate InField **admin user(s)**.

:::info NOTE
You need to have CDF administrator rights to set up access to InField.
:::

### Before you start

Make sure you have [registered the Cognite API and the CDF portal application in Azure AD](../../cdf/access/guides/configure_cdf_azure_oidc.md) and [set up Azure AD and CDF groups to control access to CDF data](../../cdf/access/guides/create_groups_oidc.md).

### Grant standard user access

All InField users must have these capabilities via any of their group memberships:

- `groups:list(current-user)`
- `projects:list`
- `files:write` to allow users to upload images to InField
- `timeseries:read`to allow users to upload measurement readings to InField

If necessary, add users to an existing group with the required capabilities, or follow the steps in [set up Azure AD and CDF groups to control access to CDF data](../../cdf/access/guides/create_groups_oidc.md) to create a CDF group and link it to a group in Azure AD.

### Designate InField admins

1. If the group doesn't already exist, create a CDF group named `applications-configuration`.

1. Grant these capabilities to the group:

   - `groups:list(all)`
   - `groups:read`
   - `assets:read`
   - `3D:read`

1. [Link](../../access/guides/create_groups_oidc.md) the `applications-configuration` group to a group in Azure AD.
1. Add the users you want to be **InField admin users** to the linked Azure AD group.
