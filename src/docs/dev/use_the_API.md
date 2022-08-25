---
pagination_next: null
pagination_prev: null
---

# Using the API

## RESTful web API

Our RESTful web API enables you to access resources in Cognite Data Fusion. To read or write to a resource, you construct requests that look like this:

```http
https://api.cognitedata.com/api/{version}/projects/{project}/{resource}?query-parameters/
```

Where:

- [HTTP method](#http-methods) - The HTTP method used on the request to Cognite Data Fusion.
- [{version}](#version) - The version of the API your application is using.
- [{project}](#project) - The project identifier for the resources in Cognite Data Fusion that you're referencing.
- [{resource}](#resources) - The resource in Cognite Data Fusion that you're referencing.
- query-parameters - An optional set of parameters to modify the request or response.

When you make a request, Cognite Data Fusion returns a response that includes:

- Status code - An HTTP status code that indicates success or failure.
- Response message - The data that you requested or the result of the operation. The response message can be empty for some operations.
- Pagination - If your request returns a lot of data, you need to page through it by passing the value of `nextCursor` as the cursor to get the next page of limit results. For details, see [Paging](./concepts/pagination/).

## HTTP methods

Cognite Data Fusion uses the HTTP method on your request to determine what your request is doing. The API supports the following methods.

| Method | Description                              |
| ------ | ---------------------------------------- |
| GET    | Read data from a resource.               |
| POST   | Create a resource, or perform an action. |
| DELETE | Remove a resource.                       |
| PUT    | Replace a resource with a new one.       |

| Standard Method | HTTP Mapping                  | Required | HTTP Request Body        | HTTP Response Body |
| --------------- | ----------------------------- | -------- | ------------------------ | ------------------ |
| Create          | POST <collection URL\>        | Yes      | Resource list            | Resource list      |
| List            | GET <collection URL\>         | Yes      | N/A                      | Resource list      |
| Filter          | POST <collection URL\>/list   | No       | Filter object            | Resource list      |
| Search          | POST <collection URL\>/search | No       | Fuzzy search for objects | Resource list      |
| Get             | GET <collection URL\>/:id     | No       | N/A                      | Resource           |
| Retrieve        | POST <collection URL\>/byids  | No       | List of IDs              | Resource list      |
| Update          | POST <collection URL\>/update | No       | Resource list            | Resource list      |
| Delete          | POST <collection URL\>/delete | Yes      | List of IDs              | N/A                |

## Version

See [API versioning](API_versioning.md) to learn more about supported API versions, our policy for backwards compatibility, and the end-of-life schedule for our APIs.

## Project

Projects are used to separate customer environments from one another, and all resources in Cognite Data Fusion are linked to a project. A customer can have one or more projects. The project object contains configuration for how to authenticate users.

Automatically assigned object ids are **unique only within each project**.

## Resources

Your URL will include the resource or resources you are interacting with in the request, such as `assets`, `files`, `events`, and `timeseries`.

For more information about resource types, see [About resource types](./concepts/resource_types/index.md) and the resource reference topics.

<!--
## Query parameters
-->

## IP addresses for the API

The IP addresses for our APIs are not static and will change as we evolve our architecture and extend our service offerings. We will do our best to keep the changes to a minimum.

If you want to limit outbound traffic to Cognite Data Fusion only, the IP addresses for the current multi-tenant Cognite Data Fusion clusters are:

| Cluster              | URL                          | IP addresses                  |
|----------------------|------------------------------|-------------------------------|
| Europe-west1-1 (GCP) | `api.cognitedata.com`          | `35.187.184.117, 34.76.254.249` |
| Westeurope-1 (Azure) | `westeurope-1.cognitedata.com` | `20.73.203.191`                 |
| Eastus-1 (Azure)     | `az-eastus-1.cognitedata.com`  | `52.151.200.252`                |
| Asia-Northeast1-1 (GCP) | `asia-northeast1-1.cognitedata.com`  | `35.200.31.145`        |

For the IP addresses of dedicated Cognite Data Fusion clusters, contact [Cognite Support](mailto:support@cognite.com).
