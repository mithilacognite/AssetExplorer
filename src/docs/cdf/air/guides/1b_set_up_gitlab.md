---
pagination_next: null
pagination_prev: null
---

# GitLab: Set up a new project

This section shows the necessary steps to deploy a model in AIR using a template in GitLab.

## Step 1: Create a new project

<!-- 1. Create a new project from a template:
   ![Create a new project from Template](/images/cdf/air/air_gitlab_2.png)

2. Select the `Group` tab:
   ![Select Group tab](/images/cdf/air/air_gitlab_3.png)

3. Select the `air-template` by clicking "Use Template":
   ![Select air-template](/images/cdf/air/air_gitlab_4.png) -->

1. Enter the necessary fields as shown in the image below:

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/air_gitlab_5.png" alt=" " width="80%"/>

2. You have been given access to the Cognite GitLab repository - copy the files from there into your project folder.

## Step 2: Set up the GitLab project locally

1. When you have cloned the project locally, run `poetry install` and wait until all packages are installed. ([Read more about poetry](https://python-poetry.org/docs/).)

2. Run this command to use pre commit hooks: `poetry run pre-commit install` .

3. To be able to deploy the function, navigate to the functions folder and rename the **folder name** to the **name of the function** you are going to deploy in the `functions` folder.

## Step 3: Set up development and production tenants

1. Navigate to `.gitlab-ci.yml` and set your (`TEST_PROJECT`) and (`PROD_PROJECT`) variables to the names of the test and production tenants, respectively.

   ```yaml
   .variable_definitons: &variable_definitions
     variables:
       'FUNCTION_FOLDER': 'gapdetector' # name of function folder
       'TEST_PROJECT': 'my-dev-project' # name of test project - also define in repoconfig.yaml and set up secret in gitlab
       'PROD_PROJECT': 'my-prod-project' # name of prod project - also define in repoconfig.yaml and set up secret in gitlab
   ```

2. Change the input of the `FUNCTION_FOLDER` variable to the exact name you renamed your folder in step 2 above.

3. Navigate to the the `repoconfig.yaml` and add both your dev and prod projects as shown below:

   ```yaml
   Projectproperties:
     my-dev-project: ['https://api.cognitedata.com', 'MY_DEV_API_KEY']
     my-prod-project: ['https://api.cognitedata.com', 'MY_PROD_API_KEY']
   ```

The URL is determined by which cluster your project is on. If in doubt, keep the [default cluster URL](https://api.cognitedata.com).
The image above shows that the variables `MY_PROD_API_KEY` and `MY_DEV_API_KEY`are the names for the secrets for these projects. You can choose any name for these variables, but make sure that they are the same that you are going to set up in the next step.

## Step 4: Configure the GitLab repository to deploy models to AIR

The GitLab AIR repo requires secrets to be defined in order to deploy models to AIR. To do this, navigate to [defininitons of secrets in GitLab](https://docs.gitlab.com/ee/ci/variables/#project-cicd-variables) (Settings > CICD > Variables). As you create the secrets, make sure to deselect **Protect variable** option to ensure that these secrets are accessible to the CI/CD pipeline.

This is an example of secret definitions:

a) `MY_DEV_API_KEY`: This is your API key for the dev tenant.  
b) `MY_PROD_API_KEY`: This is your API key for the prod tenant.

Make sure to use the same names for the secret variables you have defined in the previous step.

Your `PROJECT_NAME_API_KEY` must have the permissions required to use **Cognite Functions** and **AIR**. The service account that the api key is a part of should have the group **AIR Data Manipulation** assigned to it. You or an administrator can check this in [CDF](https://fusion.cognite.com).
