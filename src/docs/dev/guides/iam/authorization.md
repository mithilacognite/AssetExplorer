---
pagination_next: null
pagination_prev: null
---

# Authorization

:::caution note
We are [deprecating](../../changelog.md#_2021-04-06) authentication via CDF service accounts and API keys, and user sign-in via `/login`, in favor of registering applications and services with your IdP (identity provider) and [using OpenID Connect](../../../cdf/access/index.md) and the IdP framework to manage CDF access securely. We strongly encourage customers to adopt [the new authentication flows](../../../cdf/access/index.md) as soon as possible.
:::

Access to resources in Cognite Data Fusion is governed by role based access control. Principals are members of groups ([IAM](index.md)), which confer capabilities. It is these capabilities which are used to determine if an action should succeed or fail.

## Group membership

A principal is associated with, or determined to be a member of, one or more group in three different flows.

### Services

Services have their group memberships managed in Cognite Data Fusion. The following flow describes how a service (authenticating with an API key) is associated with groups.

1. A service account with an API key is created in Cognite Data Fusion.
2. Prior to a request, a service account is [assigned the appropriate group memberships](/api/v1/#operation/addServiceAccountsToGroup).
3. A service make a request against Cognite Data Fusion and sends along its API key. Cognite Data Fusion authenticates the service based on the API key.
4. The principal object in Cognite Data Fusion is resolved.
5. The groups the service account is in are looked up in Cognite Data Fusion.
6. If the service is not a member of any other groups, they are associated with the project’s default group.

### Users with their group memberships managed in CDF

The following flow describes how the user existing in a configured Identity Provider is granted capabilities in the case where his group memberships are managed in Cognite Data Fusion (this is flow takes precedence over group memberships derived from the Identity Provider).

1. Administrators manage users in their identity provider (Azure AD or Google IAM).
2. A service account with a unique name matching the user’s username in their identity provider is created in Cognite Data Fusion.
3. The service account is assigned appropriate group memberships.
4. A user makes a request against Cognite Data Fusion, the user is authenticated against the identity provider, and then:
   - The service account in Cognite Data Fusion matching the username is identified.
   - The groups are resolved in Cognite Data Fusion from the service account’s group memberships.
   - If the service is not a member of any other groups, they are associated with the project’s default group.

### Users with their group memberships managed in Azure AD

The following flow describes how the user is associated with a group in the case where the user does not share a unique name from Azure AD (or another IdP) with a service account. His group memberships are managed in Azure AD:

1. Administrators manage users, groups, and users’ group membership in their Azure AD instance.
2. In Cognite Data Fusion, administrators have created a group with a sourceId matching the Azure AD GUID of each Azure AD group intended to provide a user with access in Cognite Data Fusion.
3. A user makes a request against Cognite Data Fusion, the user is authenticated against Azure AD, and then:
   - Existence of a service account with the same username is checked, to distinguish this flow from the [Users with their group memberships managed in CDF](#users-with-their-group-memberships-managed-in-cdf) flow.
   - Azure AD is queried for which groups the user is currently member of.
   - The groups are resolved against groups in Cognite Data Fusion. Usually not all groups the user is member of will be in Cognite Data Fusion, only those relevant for Cognite Data Fusion access control.
   - The user will be recognized as a member of any Cognite Data Fusion group whose sourceId matches the a GUID of a group they are in in Azure AD.
   - If the user is not a member of any groups, they are associated with the project’s default group.

Note that if there exist a user object for the user in Cognite Data Fusion, Cognite Data Fusion will resolve the user´s capabilities based only on group memberships of the user that exist in Cognite Data Fusion.

## The default group

As noted in each of the three flows for determining a principal’s group membership, if the principal is not explicitly in any group, they will implicitly be associated with the project’s default group. Each project in Cognite Data Fusion has a default group configured.

This allows for specifying what the default access authenticated user’s should have in Cognite Data Fusion, without setting up any group memberships for all users in the organization. Any user that does have one or more group memberships in Azure AD, where any of those groups have been synchronized to Cognite Data Fusion too, or have a group membership in Cognite Data Fusion, such users will not be considered as member of the default group.

A service is considered part of the default group if it has no other group memberships configured in Cognite Data Fusion.

## Capabilities

It is through capabilities that users and services are granted access to perform a particular operation on some data, for example to read a time series, or delete an asset. A capability is defined by a resource type, actions, and a scope. The resource type and scope defines **what data** the capability is for, while the action defines **which operations** are allowed.

The capabilities of a user allows for zero or more operations in Cognite Data Fusion. A user with zero capabilities will only be able to call those API endpoints that do not require particular access, such as perform login, and check login status.

- **Resource Type** - Access is granted to a particular resource type, such as events, assets, or groups.

- **Action** - Access is granted to perform a particular operation, such as READ, LIST or WRITE. The meaning of the action is specific to the resource type.

- **Scope** -Access is granted to a specific set of resources of the given type. The means of specifying the subset vary by resource type, but include:

  - All - All resources within the resource-type.
  - Scoping by asset subtree - Access is granted to resources associated with a particular sub-tree of the asset hierarchy. For example, the data points of a time series is only available when linked to an asset in the relevant asset subtree the user has access to. **Note:** This is currently only available for time series data points.

### Security Categories

Some resource types allow requiring an additional access level above and beyond normal capabilities on resource by resource basis. These resources are tagged with Security Categories. A user must have the capability of accessing the particular security category a resource is tagged with, AND have the correct resource type capability providing access to that resource otherwise, in order to access that resource. A user that does not have a specific security category in the set of capabilities, will not be able to perform any operations on resources that are tagged with that specific security category.

### Example

**Data setup:**

- Some files (such as file 44), assets, etc exist
- Time series 123 is associated with asset 555, and is labeled with security category 36.
- Time series 456 is associated with asset 555, and not labeled with a security category.

**Group setup:**

- Group A: {capabilities: [read on time series associated with asset subtrees 555 or 55,...]}
- Hypothetical Group A.2: {capabilities: [write on time series 123,...]}
- Group B: {capabilities: [member of security category 36,...]}
- Group C: capabilities: [read on time series 456,...]}

**User setup:**

- Jonny is member of groups A and B only.
- Bobby is a member of A only.
- Carl is a member of group B only.
- No one is a member of group C.

**Request and response consequences:**

- Jonny tries to read time series 123, and succeeds.
  - Jonny has a capability designating him a member of security category 36 AND read on the time series (it is associated with asset 555, which he has read access to).
- Jonny tries to read time series 456, and succeeds.
  - Jonny does have a capability with read access covering the time series
- Jonny tries to read File 44, and fails.
  - Jonny has no capability providing access to files, whether associated with asset sub-trees 55, 555, or not; or whether the file has a security category or not.
- Bobby is a member of group A, and cannot read time series 123.
  - Bobby has read access that would normally cover the time series via group A, but it also carries a security category designation which he does not have. Denied!
- Carl is a member of group B, and cannot read time series 123.
  - Carl does carry the security category designation Bobby lacks in (III), but doesn’t have read access to the time series normally. Denied!
  - If Carl was a member of group A.2 that offered write on that time series, he would be able to write to it, without being able to read from it, without it affecting the permissions of any of the other users heretofore described.
