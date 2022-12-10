---
pagination_next: null
pagination_prev: null
---
#test4       
   


Scopes are a part of the **[OAuth 2 framework](https://oauth.net/2/)** and allow you to expand or restrict the access granted by the CDF groups a user or app is a member of. 

Except for the `IDENTITY` scope, scopes don't grant access beyond the access granted by the group memberships. Instead, scopes act as filters to the capabilities in the groups. The access granted by scopes is additive, and if there are multiple scopes in an access token, the access granted is the union of the access granted by each scope.

The scope parameter value is a list of space-delimited, case-sensitive strings defined by the Identity provider (IdP). For example, to request the `user_impersonation` scope in the `my_cluster` cluster, add `scope='https://my_cluster.cognitedata.com/user_impersonation` in the request to your IdPs token endpoint.

The scopes defined by CDF:

### DATA.VIEW

The data view scope grants read-only access to data in CDF, for example, to view files, time series, RAW, and other CDF resources.

### DATA.CHANGE

The data change scope grants the ability to write or update data in CDF, for example, to create and update assets, 3D models, time series, and other CDF resources.

### COMPUTE.VIEW

The compute view scopes grants read-only access to computational tasks in CDF, for example to list sessions, view document pipeline configurations, view functions, and view properties associated with other computational tasks.

### COMPUTE.CHANGE

The compute change scope grants the ability to execute computational tasks in CDF, for example to create and update function schedules, run document pipelines, and create, modify or execute other computational tasks.

### ADMIN

The admin scope grants the ability to perform administrative operations in CDF. The scope grants full privileges to the access management module of CDF.

### user_impersonation

The user impersonation scope grants all capabilities associated with all groups the principal is a member of.

### IDENTITY

The scopes above **filter** the access the principal has. In contrast, the identity scope **adds** the ability to use the [token inspection endpoint](../../../../api/v1/#operation/inspectToken).
