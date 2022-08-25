---
pagination_next: null
pagination_prev: null
---

# About identity and access management

:::caution note
We are [deprecating](../../changelog.md#_2021-04-06) authentication via CDF service accounts and API keys, and user sign-in via `/login`, in favor of registering applications and services with your IdP (identity provider) and [using OpenID Connect](../../../cdf/access/index.md) and the IdP framework to manage CDF access securely. We strongly encourage customers to adopt [the new authentication flows](../../../cdf/access/index.md) as soon as possible.
:::

Identity and access management is a framework that allows you to control which users and applications have access to data in Cognite Data Fusion.

See also [authentication](authentication.md) and [authorization](authorization.md) for more details.

## Terms

- Principal:
  A principal is a user or service that is recognizable by the system as a individual entity. Each entity has a unique identity that makes the system able to distinguish between individual principals.

- Request:
  A request is carrying an operation a particular principal wants to execute against Cognite Data Fusion. Each request contains information about what operation, such as read or update, which principal is requesting to have the operation carried out, and on which resource. A resource could for example be a particular file.

- Authentication:
  When a principal sends a request to Cognite Data Fusion, the claimed principal must be checked so that Cognite Data Fusion knows which principal the request is from. Users are authenticated directly or indirectly through an identity provider (such as Azure AD or Google). Services are authenticated by presenting an API key. Requests from principals that cannot be authenticated are denied. See [authentication](authentication.md) for more details.

- Authorization:
  After the principal of the request is authenticated, Cognite Data Fusion will assess whether the principal has access to perform the requested operation and allow or deny the request accordingly. Based on the identity of the principal, the relevant capabilities will be resolved and evaluated against the operation in the request and the applicable resources. See [authorization](authorization.md) for more details.

- Identity provider:
  An identity provider is a service that can be used to authenticate users. This is also the service where organizations typically manage the users of their organization. The most common identity provider is Azure Active Directory (Azure AD).

## Projects

Identity management allows you to manage which users and services are able to connect to your project in Cognite Data Fusion. In other words, which principals Cognite Data Fusion will be able to authenticate. Only authenticated principals will be able to interact with Cognite Data Fusion to retrieve or store data there.

## Identity Provider

Cognite Data Fusion authenticates users against the organization's Identity Provider, and the organization controls which users are authenticated. Any user they for example disable in Azure AD, will not be able to sign in to applications and see data from Cognite Data Fusion. They can also create guest users in the identity provider, to allow for users from other organizations to be authenticated.

## Valid user domains

As part of the authentication flow, Cognite Data Fusion checks each user against a set of valid user domains. If any valid domains are configured in Cognite Data Fusion, only users who have been authenticated by the identity provider, and who are from the configured domain, are considered authenticated.

A user is considered to be from a valid domain if the username/email reported by the identity provider to CDF ends with an `@` followed by a valid domain.

Configuring valid domains is done as part of configuring the identity provider for a project in Cognite Data Fusion.

## Application domains

As part of the authentication flow, Cognite Data Fusion checks the domain of the application against a set of valid application domains. If the application is not on the project's list of valid application domains, the user can not sign in to the project through that application.

You configure application domains when you configure the identity provider for a project in Cognite Data Fusion.

## Users

Users are managed in the existing identity provider of the organization, typically this will be Microsoft’s Azure Active Directory (Azure AD). To start using Cognite Data Fusion, you need to configure the connection to the identity provider, so that Cognite Data Fusion can authenticate all the users from that identity provider. The identity provider configuration consist of which service instance to talk to, and optionally which domains the user need to belong to in order to be authenticated.

Cognite Data Fusion must successfully authenticate the user against the identity provider before the user is allowed to access Cognite Data Fusion. This requires that the application the user is leveraging has implemented the required authentication flow. The Asset Data Insight application is an application that implements the required authentication flow. This makes users of the Asset Data Insight application interact with Cognite Data Fusion, with their own principal, and therefore able to see all the data they have access to from Cognite Data Fusion in the application.

## Service Accounts

A service that needs its own identity can for example be an extractor that ingest data into Cognite Data Fusion, or a machine learning model predicting the chance of equipment failures. These are examples of services that interacts with Cognite Data Fusion on its own behalf and, not on behalf of a particular user.

Service identities are managed within Cognite Data Fusion through API keys. Each API key should be used by a single service. When Cognite Data Fusion receives a request that carry an API key, Cognite Data Fusion will authenticate the sender as a service principal. Authentication is done in Cognite Data Fusion in this case with no involvement of the Identity Provider.

## Groups

Groups are defined per project and provide additional information about the principals in a group. They are primarily used for authorization, as they include a set of capabilities that principals in the group are provided. Group membership can be stored in Cognite Data Fusion for service accounts, or may be dynamically determined from Azure AD group memberships, if the `sourceId` for a Cognite Data Fusion group matches the `GUID` of a group in Azure.
