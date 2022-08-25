---
title: Identities, IdPs, and access control (5 mins)
---

# Identities, identity providers (IdPs), and access control

Watch this video for an introduction (2 mins) to identities, identity providers (IdPs), and access control. You can also follow along in the text below the video.

<iframe width="720" height="405" src="https://www.youtube.com/embed/4nz5tBE3i9c" title="Identities, identity providers (IdPs), and access control" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Learn more in the [**next video**](#the-web-application-acts-on-your-data-using-a-token) about how web applications act on your data using tokens._

At its core, the problem is straightforward: you navigate to an application living on a web page (for instance, the Cognite Data Fusion (CDF) portal application at [https://fusion.cognite.com/](https://fusion.cognite.com/)) and prove your **identity** (typically your email address) by using a password, a one-time code, or another way to verify that you are who you say you are.

The web page guides you through the process and, in the background, contacts a service that has a register of people (identities) who are allowed to access the application. This service is called the **identity provider**, or **IdP** for short. Typically, when you sign in to Facebook or another web application, you see no difference between the two. Facebook is its own identity provider.

When you work for an organization, your organization lets you sign in to many different applications and systems using the same username/email and password. You are **authenticating** using the same identity because all the applications and systems communicate and validate that you are who you say you are with the same identity provider across the organization.

This introduces another challenge: What if your organization wants to give _you_ access to an application but not your colleague? Determining which applications and data you have access to and what you can do with the data is what we refer to as **authorization**.

<!-- _[DIAGRAM here with Fusion and Infield, Identity Provider, and showing a user authenticating and being authorized]_ -->

Our customers want to control who should have access to which applications and data, and they want their employees to sign in using their organizational email. To enable that, we configure a Cognite Data Fusion (CDF) project to use the organization's identity provider (for instance, Azure Active Directory, AAD) to verify their users' identity.

We also want to allow organizations to control which employees can use the CDF portal application, the InField application, or other Cognite applications. And finally, we want customers to manage access for their extractors, dashboards, and their custom-built applications. Customers can handle all this in their identity provider!

This setup is very similar to a corporate access card. A central system controls which doors you are allowed to open, and you use the same card to open all doors, but some doors are closed to you unless a system administrator opens up access for you.

## The web application acts on your data using a token

Now you have a basic understanding of these key concepts:

- **Identity** - who to approve access for.
- **Identity provider** - the decision-maker verifying your identity and granting access.
- **Authentication** - the verification that you are the identity you claim to be.
- **Authorization** - giving you access to the application and data you want to access.

<iframe width="720" height="405" src="https://www.youtube.com/embed/hVqiCZeoAbU" title="Web apps and tokens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Learn more in the [**next video**](#key-cards-door-locks-and-trust) about how tokens are similar to hotel key cards._

There's one final and vital thing to understand: the application you access in your browser is an **intermediary** between you, the identity provider, and the resources you're accessing (data in CDF). So precisely what do you get access to? The application in your browser or the data in CDF in the cloud? Or both?

The key to understanding this is to know how web applications work. The application itself rarely acts standalone (unlike the trusty old Word application on your PC). The web application continuously communicates with a **cloud service**, and that is where all your data is.

When you sign in to a web application, let's say the CDF portal application, the identity provider grants access to your data, but you don't get access directly. It's the web application that interacts with the cloud service **as you**. The identity provider checks **both** your identity's access rights in the **CDF cloud service** and if you are allowed to use the **CDF portal application** itself. Somebody else, for example, might not be allowed to use the CDF portal application, but they may be allowed to use InField.

As long as you are using your browser, the browser application communicates with the cloud CDF services as if it's you. Practically, this happens in an elaborate process to provide the web application with a **token**. This token is a very targeted key to grant access to your data using your identity. The token expires quickly, so it has to be refreshed regularly (in the background). We say that the web application is a **client** and that the CDF cloud services are a **resource** that the client accesses.

In the case of running an extractor or making a Python application where you use the CDF services directly, the extractor or application could do the same as the CDF portal application and be a client that uses a token you authorize giving access to your data. However, since these applications may run over a longer time (and a token is short-lived) independently of you (or any other user) watching over them, it makes more sense to give them their own identity. We refer to this type of identity as a **service principal** to differentiate them from **people** identities.

## Key cards, door locks, and trust

<iframe width="720" height="405" src="https://www.youtube.com/embed/X7VtJqwHkHI" title="Key cards, door locks, and trust" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It is often easier to keep things straight if you can relate terms to something you already know, something physical. Let’s compare with a hotel room with a key card and lock. You have reserved a room (the resource, so this is the CDF services). You draw your credit card as a deposit at the front desk, and your **identity** is added to the hotel computer system. From here on, the hotel computer system acts as an **identity provider**.<sup>\*</sup>

<sup>_\*_</sup>_Side note: Outside this scenario, but entirely possible, is the hotel computer system requiring your driver’s license or passport to prove your identity. Your government is then the identity provider, and the hotel computer system is the "authorization system."_

You get a key card that will open the lock to the right door for a time-limited period (authorized by the hotel system). The key card is the **token** you use to get into the room. As you probably recognize, you are now acting as a **client**, you access your resource (the room) with your own **identity**, and you use a token made out to you.

You enter the room and find that the lights are not working. You return to the lobby and request that it’s fixed while you eat something in the restaurant. As this is a security-conscious hotel, they request you to authorize access to the room for their janitor the next hour. You approve, and the janitor’s key card is updated with access to the room. As you order your food, the janitor accesses the room, exactly like your web browser accesses CDF cloud services. You authorize both with time-limited access, but now the janitor (the **browser**) uses a key card (**token**) issued to him that gives access to the room (the **resource**). You used your identity to authorize the janitor to get the token (similar to logging in).

**Trust** is established and kept through these exchanges between you, the front desk, the hotel security system, the lock on the door, and loading tokens onto the key cards used to open the lock. Trust is essential to any computer system as various software components like the application in the browser, the CDF services, and the identity provider need to communicate and trust each other.

Very often, security issues arise as a result of weak ways of establishing trust. For example, if you used your passport to prove your identity to the hotel the first time, that may have been a **strong** trust. However, if you only have to say your name and swipe a credit card, and maybe there is no check to verify that the names match, the trust chain is broken because anybody can walk into the hotel and claim they are you. The security of the rest of the system does not matter anymore.

Note that in this case, the hotel security system is both the identity provider and the authorization system, but your identity may be **weak**. This is very similar to a Facebook or Google account; the email and password prove your identity, but in reality, it is not you, but your access to the email account that is verified. You may have created a fake email address.

Armed with understanding the basic building blocks and the interaction between them, let’s look [next](cdf_auth_idp.md) at how you can use a CDF project with an external identity provider.
