---
pagination_next: null
pagination_prev: null
title: Manage access with API keys (apps and services)
---

# Manage access for apps and services with API keys

Apps and services, for example extractors and machine learning models, need a **service account** with an associated **API key** to interact with Cognite Data Fusion through the [API](../../../dev/use_the_API.md) or one of our [SDKs](../../../dev/quickstart/quickstart.md#step-3-install-a-software-development-kit-sdk).

For information about how to authenticate an application or service with CDF, see [Authenticate an external application](../../../dev/guides/iam/external-application.md).

## Add application to whitelisted application domains

If an application needs to integrate with the identity provider to allow users to sign in, the domain the application is hosted on needs to be whitelisted as a valid application domain for the project.

**To whitelist an application domain:**

1. In the left-hand bar, select **Access Management**.
2. Select **Identity provider configuration**.
3. Add the application's domain to **Whitelisted application domains**.
4. Click **Save configuration** to save.

## Create a service account for an app or service

**To create a service account:**

1. In the left hand bar, select **Access Management**.
2. Select **Service Accounts**.
3. Click **Create new service account** and enter a unique **Name** for the service account. The name should reflect the purpose of the service account. If the service account is for a user, we recommend that you use the user's email address as the name.
4. Select the **group(s)** that have the **capabilities** you want to assign to the service account.

   We recommend that you give the service account the **minimum capabilities** it needs to perform its functions.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/assign_groups.png" alt="Assign groups to a service account " width="80%"/>

5. **If a group with the desired capabilities does not exist, then create a group**.

- If you are granting access to read/write to RAW, then create a group with access scoped only to the specific table(s) that the service needs to read/write to.
- If you are granting access to read/write directly to the CDF assets, events, files, sequences, or time series, then create a group with access to the relevant resource type.
- As each service should have only the access rights it needs to perform its job, you should avoid patterns such as creating one single group for all extractors.

## Generate an API key for a service account

An API key is a secret string that grants access to a project in Cognite Data Fusion. Each API key connects one service to one project. API keys should **never** be shared, except if you're creating one for someone who can't create their own.

**To create an API key for a service account:**

1. In the left hand bar, select **Access Management**.
2. Select **Service Accounts**.
3. Select the service account and click **Generate new key**.
4. **Copy** the generated API key and use a **secure method** to share the API key with the recipient, typically the programmer developing the service.

   Yopass and password manager tools like LastPass are examples of tools you can use to share the API key securely with the person or service you are creating it for.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/generate_api_key.png" alt="Generate an API key for the service account " width="80%"/>
