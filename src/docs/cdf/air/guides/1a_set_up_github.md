---
pagination_next: null
pagination_prev: null
---

# GitHub: Set up a new repository

This section shows the necessary steps to deploy a model in AIR.

:::info Note
Make sure that AIR has been enabled. [Read more](enable_air_oidc.md).
:::

## Step 1: Create a new repository to use the AIR template

1. Create a new repository in the `cognitedata` organization in GitHub and under the **Repository template** option select the AIR template.

   <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/air/air_template.png" alt=" " width="80%"/>

2. When the repository has been created, use the `git clone` command to clone the new repo locally.
3. Then use the `cd` command and swich into the project folder.

## Step 2: Create a new development branc

1. When the repository is created, use the command `git checkout -b your_branch_name` to create a new development branch.

## Step 3: Deploy your model to your project

1. Navigate to the repoconfig.yaml file in the root folder to set the correct values.
1. Navigate to the project properties, and add a mapping with these values: `PROJECT_NAME: ["PROJECT_URL", "PROJECT_NAME_API_KEY"]`.
1. Under the `ProjectFunctionMap` write the name of the **function** that needs to be deployed and the project you wish to deploy the function to.

:::info Note
The `PROJECT_NAME_API_KEY` must be the same name as used in the secrets for your web-based Git repositories.
:::

```yaml
Projectproperties:
  my-project: ['https://api.cognitedata.com', 'MY_PROJECT_API_KEY']
ProjectFunctionMap:
  my_function:
    - my-project
```

You are now ready to create your first function! Read more about [functions](create_function.md).
