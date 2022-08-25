---
title: CDF and identity providers (3 mins)
---

# CDF and identity providers (IdPs)

With Cognite Data Fusion (CDF), you can use identity providers that supports **[OAuth 2.0](https://oauth.net/2/)** and **[OpenID Connect](https://openid.net/connect/)**, the two standards used in establishing the trust between the CDF services, the front-end CDF portal application, and the identity provider. In this unit, we use Azure Active Directory (AAD) as the identity provider.

To configure an identity provider for CDF, you need to be the administrator both for the identity provider (AAD in this case) and CDF and complete these configuration tasks:

1. **Establish a two-way trust** between the instance of AAD that you want to use and CDF. This sets up the trust CDF needs to verify tokens presented against AAD and make the CDF service an approved AAD service. This is required to authenticate an identity and let users sign in to CDF.

2. As a minimum, **approve the CDF portal application** and allow it to act as a client. By default, you approve the application for all users in the AAD instance, but you can also constrain this.

3. **Give users in AAD access to CDF** by configuring groups in the CDF portal application with granular access to different functionality and data. You can map users in AAD to these groups in various ways, but the default is to map a CDF group to an AAD group.

## Step 1: Establish trust between CDF and AAD

In step 1, AAD is the hotel security system where you can find the guests' identities. As each Cognite customer uses its own AAD, this step is similar to introducing a new hotel security system, and you need to connect the new security system to the door locks. Luckily, you don't need to make the instance of AAD trust each individual lock (or project). It is sufficient to do it once per **CDF cluster**.

However, you need to configure each **CDF project** individually and point it to the AAD instance it should trust. If not, this would be similar to each door lock trusting multiple hotel security systems, which could quickly result in multiple guests in the same room on the same day!

The CDF project configuration needs to point to the service issuing tokens in the customer's AAD instance (to know where to contact the AAD instance). You must specify the exact CDF cluster's identity (**audience**) and the identity of the customer's instance of AAD (**issuer**). The two systems can establish their trust relationship through this and the AAD's initial trust of the CDF cluster above.

## Step 2: Approve the CDF portal application in AAD

In step 2, you need to introduce the application (let's say the CDF portal application) to the AAD instance. Like hotels typically authorize janitors to access all rooms without the approval of individual guests, AAD has the concept of **multi-tenant app registrations**. Cognite has used this feature to create a CDF portal application registration that any organization using AAD can reuse. Once AAD recognizes the CDF cluster, the admin can sign in to the CDF portal application and approve the application for the entire organization at the approval prompt.

A neat thing about the multi-tenant app registration is that AAD **automatically** creates a new identity for the CDF portal application in the customer's AAD. The admin can configure this service principal identity to give only some people access to the CDF portal application. (By default, all users are allowed to log in).

## Step 3: Authorize users' access to CDF using claims in the token

When AAD has authenticated an identity like a user, it issues a **token**. This token contains information about the user and many other things. But one thing is still missing! What should this token give access to in CDF? The final step is to provide CDF with the ability to identify which **group(s)** configured in CDF to use for a given token.

So far, we have talked about the token similar to the key card that opens the hotel room lock. If you remember the janitor's key card, it had to be updated with information to allow temporary access to the hotel room. The key card would probably have to allow access to many hotel rooms and is not equivalent to a single token. It can carry one or more tokens.

Inside the token (a JWT, JSON Web Token), there is information about the identity provider (or **who issues the token**), as well as who this token is about (**the subject**, i.e., a user or an extractor), and where this token is applicable (**the audience**, i.e., the CDF cluster).

Finally, the token contains **claims**, statements about what the token can give access to, how long it lasts, and many other things. It also lists the relevant groups in AAD that this user (or service principal in the case of an extractor or application) is a member of. If one or more of these groups exist in the CDF project, the CDF services can determine what functionality and data this token should allow access to.

Now that you have set up the core applications and groups and verified that users can sign in with their organizational IDs, let's look [next](cdf_auth_idp_local_apps.md) at how you register and configure apps and components to set up your data integration pipelines, contextualization flows, and data dashboards and start developing solutions.

## More information

- [Register core Cognite apps in Azure AD](../../access/guides/configure_cdf_azure_oidc.md)
- [Set up Azure AD and CDF groups to control access](../../access/guides/create_groups_oidc.md)
