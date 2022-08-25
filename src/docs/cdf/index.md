---
pagination_next: null
pagination_prev: null
---

# About Cognite Data Fusion (CDF)

Cognite is a SaaS provider, and **Cognite Data Fusion** (**CDF**) is our **industrial DataOps** platform product. We also offer subscription-based access to configurable business applications.

<img className="media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/learn/cdf_resource_types.png" alt="The CDF Data model" width="40%" />

Cognite Data Fusion streams your data into [the CDF data model](learn/cdf_basics/cdf_basics_datamodel.md) where the data is normalized and enriched by adding connections between data resources of different types and stored in a graph index in the cloud. With your data in the cloud, you can use the CDF services and tools to build solutions and applications to meet your business needs.

With Cognite, **you** are the owner of your data. We use your data only to provide agreed-upon services. We handle your data [**securely**](./trust/security/index.md), and we comply with **privacy** and **legal regulations**. If you leave our services, we make sure that you continue to have ownership of your data.

You can interact with your data through the [**CDF portal application**](#the-cdf-portal-application), or work with the data with our [**API and SDKs**](#api-and-sdks).

## Subscribe to Cognite Data Fusion (CDF)

To subscribe to Cognite Data Fusion (CDF) and connect to and use our cloud-based apps and services, contact us [here](https://www.cognite.com/request-demo).

As a Cognite tenant, you'll manage one or more **CDF projects**. The data in one CDF project is **completely isolated** from data in other CDF projects. Depending on your existing infrastructure and needs, you can choose to run your CDF projects in a **multi-tenant** or a **dedicated** cluster:

- In a **multi-tenant** cluster, you share cloud storage and computing resources with other Cognite tenants.

- In a **dedicated** cluster, the cloud storage and computing resources are used exclusively by your organization.

We currently support Microsoft Azure and Google Cloud Platform as our **cloud providers**.

For **identity and access management**, you can use identity providers (IdPs) that support [OAuth 2.0](https://oauth.net/2/) and [OpenID Connect](https://openid.net/connect/), for example, **Azure Active Directory** (Azure AD). If you want to use another IdP than Azure AD, please review [the minimum IdP requirements](access/concepts/minimum_idp_requirements.md) and reach out to us with your preferences.

### Set up CDF with Azure AD

To set up your secure CDF subscription with Azure AD, we need to know [the ID of your Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant). We'll link the CDF subscription to your Azure AD tenant so that you're always in control of who gets access to your data in CDF.

We also need you to [create a **security** group in Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal) to manage administrator access to CDF and **share that group's object ID** with us. We'll link this Azure AD group to the default administrator group in CDF.

## The CDF portal application

To open the CDF portal application, navigate to [fusion.cognite.com](https://fusion.cognite.com) and sign in to your organization's CDF project with your user credentials.

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/images/cdf_home.png" alt="The CDF portal application" />

The **CDF portal application** allows you to control, understand, and customize your experience. From **a single, scalable interface**, you can access all the tools and resources you need to work with your industrial data. The application makes it easy to use and administer Cognite Data Fusion **without writing any code**.

## API and SDKs

Our **RESTful web API** lets you access and manage resources in Cognite Data Fusion. See our [developer documentation](../dev/) and [API reference documentation](../api/v1/) to learn more.

To help you speed up your software development process, we provide official SDKs for [Python](../dev/guides/sdk/python/) and [JavaScript](../dev/guides/sdk/js/). We also offer community SDKs for [Scala](https://github.com/cognitedata/cognite-sdk-scala) and [.Net](https://github.com/cognitedata/cognite-sdk-dotnet).