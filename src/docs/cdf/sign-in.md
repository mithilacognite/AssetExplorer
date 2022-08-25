---
pagination_next: null
pagination_prev: null
---

# Sign in to CDF and Cognite applications

To sign in to Cognite Data Fusion (CDF) and Cognite applications, you need to provide your organization's domain name, enter your credentials, and specify which CDF project you are signing in to.

<!-- trigger build -->

If you don't know what values to enter to sign in, contact your internal help desk or the **CDF admin** for help. The CDF admin is often the person who gave you the link to sign in to CDF or the Cognite application. If you can't find out who the CDF admin is in your organization, contact [support@cognite.com](mailto:support@cognite.com).

## Sign in to Cognite Data Fusion (CDF)

<img className="screenshot media-right" src="/images/shared/cdf_signing_in.png" alt="Sign in to CDF " width="24%"/>

To sign in to Cognite Data Fusion (CDF) with your **work account**:

  1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
  1. Enter your **organization name**. This is usually your company name without spaces or an abbreviation of your company name. 
  1. Click **Enter** and select the **Sign in** button.
  1. Sign in with the credentials for your work account.
  1. Select the **CDF project name** for your organization's CDF instance.

### Sign in with a project name

Signing in with a **project name** is a legacy option for some older projects:

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/shared/cdf_legacy_signing_in.png" alt="Sign in with project name " width="24%"/>

  1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
  1. Enter your company **organization name**. This is usually your company name without spaces or an abbreviation of your company name. 
  1. Click **Enter** and select the **CDF project name** for your organization's CDF instance.
  1. Sign in with the credentials for your work account.

If you don't know what values to enter to sign in, contact your internal help desk or the **CDF admin** for help. The CDF admin is often the person who gave you the link to sign in to CDF. If you can't find out who the CDF admin is in your organization, contact [support@cognite.com](mailto:support@cognite.com).

## Sign in to Cognite applications

How you sign in to a Cognite application, for example InField, depends on the setup for your organization. You can:

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/shared/app_signing_in.png" alt=" " width="24%"/>

- Sign in with Microsoft Azure AD and your **work account**:

  1. Navigate to the app sign-in page, for example [https://infield.cogniteapp.com/](https://infield.cogniteapp.com).
  1. Select **Login with Microsoft Azure**.
  1. Sign in with the credentials for your work account.

**OR**

- Sign in with a **project name**:

  1. Navigate to the app sign-in page, for example [https://infield.cogniteapp.com/](https://infield.cogniteapp.com).
  1. Specify the **Company ID** for your company/organization.
  1. Select **Continue** and sign in with your user credentials.

     :::info NOTE
     For some organizations, you need to specify the CDF **cluster** before you select **Continue**.
     :::

If you don't know what values to enter to sign in, contact your internal help desk or the **CDF admin** for help. The CDF admin is often the person who gave you the link to sign in to the Cognite application. If you can't find out who the CDF admin is in your organization, contact [support@cognite.com](mailto:support@cognite.com).

## Problems signing in?

If you have checked that you have entered the correct information but are still not able to sign in, try these tips before you contact [support@cognite.com](mailto:support@cognite.com):

### Restart the browser

A previous signed-in session may still be active on the browser. To deactivate this session, you must quit and restart the browser. Then navigate to the application where you want to sign in.

### Clear the browser cache

The browser may have cached an older version of the application. To force a new version to be loaded:

1. Navigate to the application.
1. Reload the current page, ignoring cached content:
   - Windows: `Ctrl + Shift + R`
   - macOS: `Cmd + Shift + R`
1. Proceed to sign in.

### Clear browser cookies

Sometimes the cookies set by the identity provider (for example, Microsoft, Google) are stale or cannot be read. Follow the steps for your browser to clear the cookies:

- [Google Chrome](https://google.com/chrome)
  - [Windows / macOS](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en)
  - [Android](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en)
  - [iOS](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en)
- [Safari](https://www.apple.com/safari/)
  - [macOS](https://support.apple.com/en-gb/guide/safari/sfri11471/mac)
  - [iOS](https://support.apple.com/en-us/HT201265)
- [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)
  - [Windows](https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies)
