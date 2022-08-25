---
pagination_next: null
pagination_prev: null
---

# Create a function

:::info Note
**Cognite AIR** and **Cognite Functions** are not enabled by default. Contact [support@cognite.com](mailto:support@cognite.com) to enable them for your CDF project.
:::

Before you deploy a function, you must set up [GitHub](1a_set_up_github.md) and [GitLab](1b_set_up_gitlab.md).

1. For your function to be deployed correctly to Cognite Functions and the AIR backend, you must edit the configuration file: `config.yaml`. This file lets you set [many options](../concepts/configurationfile.md).

1. Add all the required packages for your function to the `requirements.txt` file. Cognite Functions uses this file to install the necessary packages to run your function.
1. Make sure to add the air-sdk library to the requirements file for every project and function you create.
1. You must also add the packages above to the Poetry environment.

1. Navigate to the repoconfig.yaml file in the root folder. Under the project properties tab, make sure to add a mapping value as follows:

   `PROJECT_NAME: [PROJECT_URL, "PROJECT_NAME_API_KEY"]`.

   Under the `ProjectFunctionMap`, write the name of the function that needs to be deployed and the project you wish to deploy to.

1. To test, use the test handler under the test folder in your `function_name` folder.

1. If you do not want to deploy the function, add the folder name to the `.ignore_models` file.
1. Create a function called **handle** under the `handler.py` in your functions folder. This handle function behaves as a `main()` function. Any code there will be run by Cognite Functions when you deploy your function.

1. When the function is ready, use the GitHub commands add, commit, and push your code to your remote repository. Then open a pull request. Merge the pull request to master, and your function is deployed to **Cognite Functions**.
