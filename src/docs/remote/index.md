---
pagination_next: null
pagination_prev: null
---

# About Cognite Remote

Cognite Remote is a highly configurable application, powered by Cognite Data Fusion (CDF) and a dynamic 3D digital twin. It provides a secure environment to locate, navigate and understand contextualized data from multiple sources and conduct industrial inspections and asset integrity management at scale.

<!-- :::info NOTE
The articles in this section cover how to **use** the Cognite Remote application. To learn how to **configure** Cognite Remote, visit [**the configuration articles**](#) [!_remove link for now_!].
::: -->

You can install and run Remote as a **local application** on your PC, or you can run the **cloud version** in a web browser:

- We recommend running Remote as a **local application** on a PC if you use Remote **daily**. Your PC needs a modern dedicated graphics card, such as a 20 or 30 series graphics card from NVIDIA.

  Contact your Cognite representative to get a download link for the Remote application, and then follow the instructions in [this article](guides/install.md) to install it on your PC.

- If you use Remote **infrequently**, we recommend that you use **the cloud version**. It has the same features as the PC version but uses server-side rendering and runs well also on a less powerful computer.

  If necessary, contact [support@cognite.com](mailto:support@cognite.com) to enable the cloud version of Remote for your CDF project.

When you have signed in, you'll see a gallery of the twins you have access to. Click one of the twins to open it. You can switch between the available twins using a drop-down in the top bar.

<!-- <img className="screenshot media-right" src="/images/remote/select_twin.png" alt="select twin" width="100%"/> -->

<img className="screenshot media-right" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/remote/select_twin.png" alt="Select Twin"/>


When interacting with a twin, you can select between different **modes**. Which modes are available for a twin, depends on the twin configuration. Use the top bar to switch between the available modes:

- [Explore](guides/explore.md) - to navigate a 3D digital representation of an asset (CAD models, point cloud data, 360 images) and to access detailed information about equipment, including access to real-time sensors. This mode is available in all twins by default.

- [Plan](guides/plan.md) - to create plans, allocate work orders, and interactively enrich the plan with markups.

- [Contextualize](guides/contextualize.md) - to link 3D objects to equipment and make the twin "smarter" and more interactive.
