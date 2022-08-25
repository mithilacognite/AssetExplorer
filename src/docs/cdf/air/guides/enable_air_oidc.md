---
pagination_next: null
pagination_prev: null
---

# Register AIR with OpenID Connect

AIR supports both Google Cloud and Microsoft Azure for onboarding and use.
Follow the steps below to register AIR in Azure AD.

## Step 1: Register an app in Azure AD to use with Cognite AIR

1.  Sign in to the [Azure portal](https://portal.azure.com/) as an admin.

1.  If you have access to multiple tenants, use the Directory + subscription filter <img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/access/azure-portal-directory-subscription-filter.png" alt=" " /> in the top menu to select the tenant in which you want to register an application.

1.  Search for and select **Azure Active Directory**.

1.  Under **Manage**, select **App registrations** > **New registrations**.

1.  In the **Register an application** window, enter the app name, and then select **New registration**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/oidc_1.png" alt=" " width="80%"/>

1.  In the name field, enter **Cognite AIR** and set **Supported account types** to **Accounts in this organizational directory only** (**Tenant name** - **Single tenant**).

1.  Leave **Redirect URI** blank.
1.  Click **Register**.

      <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/oidc_2.png" alt=" " width="80%"/>

1.  On the application page for the new **Cognite AIR** application, note down the application’s Client ID. You will need this later.

## Step 2: Create a secret for Cognite AIR

1. Go back to app registration and select **All applications**.
1. Under the display for **Cognite AIR**, go to **Certificates and secrets** and click **New client secret**.
1. In the **Description** field, enter **new client secret**.
1. In **Expires**, choose **Custom**.
1. In **Start**, choose the current date.
1. In **End**, choose the max allowed value which is two years after the start date.
1. Click **Add**.
1. Make sure you copy this value now. This value will be hidden after you leave this page, and you will need it at a later stage.

  <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/oidc_6.png" alt=" " width="80%"/>

## Step 3: Create AD group for the Cognite AIR

1.  From the home page of your Azure AD tenant, click on **Azure Active Directory**, go to **Groups** and click **New group**.

2.  Give the new group the following properties:

    - Group type: **Security**
    - Group name: **cognite-air-infra**
    - Group description: **Security group for Cognite AIR infrastructure**

3.  Click **No members selected**, and add the **Cognite AIR** application you created earlier as a member of this group.

4.  Click **Create**.

    <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/oidc_4.png" alt=" " width="80%"/>

    :::info NOTE
    Note the **Object ID** of the group as you will need to link it to a group in CDF later.
    :::

## Step 4: Configure AIR in your CDF project

:::info Note
This step requires you to be an admin on the CDF project you are setting up AIR for.
:::

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com).
1. Sign in with your CDF project name and credentials.
1. Select **Configure AIR** in the menu.
1. Complete the steps to trigger the confirmation e-mail. <!--(Arun checks this)-->

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/fusion_onboard.png" alt=" " width="80%"/>

## Step 5: Provide information

Reply to the confirmation e-mail with the following information included so the AIR team can authenticate against your AD tenant:

- The CDF project name and the cluster it runs on.
- The client ID of the **Cognite AIR** application you created in step 1.
- The secret that you created in step 2.
- Tenant ID of the Azure AD tenant used by the CDF project.

Copy all the data into [yopass.cognite.ai](https://yopass.cognite.ai) and send it to [air-team@cognite.com](mailto:air-team@cognite.com). We will get back to you shortly.

## Step 6: AIR team configures the backend services and functions

Please wait for AIR team to complete the configuration before you start to use AIR on your project.

## Step 7: Give permission to the AIR application

The user who is the admin of the Azure AD tenant needs to give permission to the whole organization.

Navigate to [AIR](https://air.cogniteapp.com) and sign in. You will then be asked to give other users permission to the AIR application.

Make sure to select **Give access to whole organization**.

You should now be ready to use AIR!
