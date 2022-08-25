---
title: Register local applications (2 mins)
---

# Register local applications

In the [previous units](cdf_auth_idp.md), we have talked about **users** as identities, and we have touched on how a **global** application like CDF creates a **service principal** identity in Azure Active Directory (AAD). Also, we have mentioned that extractors or Python apps that run over a long time should have their own identity and not use a user’s identity. What then about **applications** that have been developed for a specific organization?

Any application or client you want to connect to only one specific organization's AAD follows the same pattern: create a new, AAD-specific (not global or federated) app registration in the AAD of the organization.

This is what you need to create a **local** (AAD-specific) app registration:

- The AAD instance needs to trust the CDF cluster.
- The CDF project needs to trust the AAD instance.
- The AAD users needs to belong to a group that matches a group in the CDF project.

The **final** thing you need is the **identity** of the client or application that will connect to CDF. This is a **service principal** identity, often referred to as an **app registration**. For CDF and other globally shared applications, you can reuse a **global** app registration.

However, for organization-specific apps, scripts, extractors, and even dashboarding tools like Grafana and PlotlyDash, you need a **local** app registration in the organization’s AAD.

Think about the hotel room analogy. For the janitor to access your room:

- The lock needs to trust the hotel security system.
- The hotel security system needs to trust the locks.
- There needs to be an "app registration" (or identity) in the hotel security system for the janitor.
- Your identity needs to be in the hotel security system with a registered "group access" to the hotel room.

And all these things need to be in place before you can grant the janitor access to the room for a time-limited period.

### More information

- [Register and configure components and applications](../../access/guides/configure_apps_oidc.md)
- [Design principles and best practices for authentication and authorization](../../access/concepts/best_practices_oidc.md)
