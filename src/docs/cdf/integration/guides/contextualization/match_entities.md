---
pagination_next: null
pagination_prev: null
---

# Match entities

Select one of these options for matching CDF resources to assets:

- Create a pipeline to **rerun matching models** on **data sets** to improve the results based on confirmed matches over time. If the data set receives new data, you can rerun the pipeline to find additional matches.

- Run a **quick match** for one-time matching of individual resources, or groups of resources, to assets. The matching model is not stored, and you cannot reuse it or improve it over time.

- Match the nodes in a **3D model** to assets.


## Prerequisites

To match entities, you need the capabilities listed [here](../../../data_governance/guides/capabilities#match-entities).

## Step 1: Select matching process

1. Navigate to [fusion.cognite.com](https://fusion.cognite.com) and select **Contextualize** > **Match entities**.
1. Select:
   - **Quick match** for one-time matching processes.
   - **Create pipeline** to create an entity matching pipeline that you can rerun and add matches and rules.
   - **Match 3D models** to match 3D nodes to assets.

## Step 2: Select entities and assets to match

1. Under **Select entities**, select the resource types you want to match from. Then select one or more data sets if you are creating a pipeline or individual entities if you are running a quick match.
2. Under **Select assets**, select assets if you are running a quick match or one or more data sets if you are creating a pipeline.

## Step 3: Set up the matching model and generate suggested matches

1. **Select the fields for matching entities**

    By default, the model uses the similarity between the `name` fields when it searches for matches. You can select different fields or add additional fields using the dropdown menus and selecting **Add fields**. 

    :::info Note
    Make sure you only select fields with some similarities to help the model find correct matches.
    :::

1. **Train the matching model**

   By default, an [unsupervised model](matching#unsupervised-model) is used to generate suggested matches. If you have manually confirmed one or more matches, these are used to improve the model's match suggestions for pipelines. 
   However, the model can also use matches already in CDF to **learn**. Select the checkbox **Use matched resources as training data** to allow the model to [train on existing matches](matching#supervised-model) in CDF.

1. **Select the similarity scoring model**

   - **Simple**: Calculates a similarity score based on identical letter or digit sequences, hereafter referred to as [tokens](matching#detecting-matches), for each pair of fields defined above. This is the **fastest** option.
   - **Insensitive**: Similar to **simple**, but ignores lowercase/uppercase differences.

     **Advanced methods**

   - **Bigram**: Similar to simple, but adds similarity score based on bigrams of the tokens (two adjacent tokens). For instance, would _AA-11-BB_ be considered more similar to _AA-11-CC_ than _AA-00-BB_, while **Simple** would see them as equally similar.
   - **Frequency weighted bigram**: Similar to **bigram** but gives higher weights to less commonly occurring tokens.
   - **Bigram extra tokenizers**: Similar to bigram, but the model learns that leading zeros, spaces, and lowercase/uppercase should be ignored in matching.
   - **Bigram combo**: Calculates all of the above options, relying on the machine learning model to determine the appropriate features to use. Hence, this is an appropriate choice if there already exists some matches the model can train on (see option below). This is the **slowest** option.

   The different feature types are created to improve the model's accuracy for different types of input data. Hence, which feature type that works best for your model will vary based on your data.

<!-- 4. **Select the matching scope**

   - **Unmatched only**: This option filters the entities to only include entities without an asset ID in CDF. Entities with an asset ID are already matched to an asset and will not get a new suggestion with this option.
   - **All resources**: This option creates suggestions for all available data, which allows you to see whether there is a different and better match result to an entity than the current match.
     media-right screenshot -->

4. Select **Generate rules** if you want the model to generate regular expression rules. These rules can be used to demonstrate similarities between matches and to group matches based on patterns. In the next step, you can confirm a rule, and it will be saved with the pipeline. If new data is added to the pipeline data set and it complies with the rule, the data is automatically matched the next time the pipeline is run.  Clear this option if you don't want the rules to be generated.

5. Click **Run pipeline** to train the matching model on the selected data and to generate suggested matches.

## Step 4: Validate suggested matches and update CDF

For pipelines, the entity matching model suggests matches in this order:

- **Confirmed matches** - for pipeline: already confirmed matched entity and asset.
- **Confirmed patterns** - matches created by one of the already confirmed patterns.
- **Predictions** from the entity matching model.

1. Use the **Type** dropdown list to select the entities you want to work with:

   - **All**: Show all the entities you have selected for matching.
   - **Matched**: Show entities that have already been matched to an asset. Select this option to **change the existing matching** for entities.
   - **Unmatched entities**: Show entities that have not yet been matched to an asset. Select this option to **validate the suggestions** and to match individual entities or groups of entities to assets.
   - **Different recommendation**: Show entities that have already been matched to an asset but where the model recommends a new match. Select this option to **change the existing matching** for entities.

2. Select **Group by pattern** to match individual entities that fit the same pattern.
3. For each entity (or group of entities), you can see the suggested asset matching and **search for an asset** to match the entity to. Select the checkmark to **confirm the matching** and move the entity to the draft matches section.

  <!-- <img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/matching_confirm.png" alt="Confirm " width="60%"/> -->

4. Review all the draft matches, and move matches out of the draft matches, if necessary.
5. If you are creating a pipeline, click **Save this pipeline** to use this matching model when new data is ingested into the selected data sets.
6. Select **Save to CDF** to update CDF with the matches.

## Step 5: Rerun a matching model in existing pipelines

If a data set receives new data, you can click **Rerun pipeline** on the overview page to find additional matches. To adjust the matching model, select **Open** on the **More options** button.
<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/integrations/contextualization/rerun_model.png" alt="Rerun model " width="80%"/>

## Step 6: Match the nodes in a 3D model to an asset

Contextualize your 3D models so you can see them related to the asset. You can also see the models in the apps (InField, Maintain, and Remote).

:::info NOTE
Loading the 3D model can take time.
:::

1.  Select 3D model revision. The revision number is the version of the model. All the available 3D models in your project are listed.

1.  Select the asset you want to match to the 3D model. You can either group assets by data sets or by root asset.

1.  Click **Next**.

1. Select the fields for matching 3D nodes to assets. The model uses the similarity between the `name` and `description` fields when it searches for matches. If you want to select other fields for matching, use the dropdown menus and click **Add fields**.

1.  Select the model type:
    - **PDMS** - improves response time by filtering out nodes that do not need to be mapped to assets based on keywords in the name.
    - **Unfiltered** - all nodes in the 3D model are used to match assets.

1.  Click **Next** to see the asset mapping results. The asset mapping result states how many nodes have been contextualized.

1. Click a node in the 3D model to see its contextualizations and use **Confidence threshold** to see different results.
1.  Click **Save () matches to CDF** if you approve the result.

See also: [Supported 3D file formats](../../../3d/index.md)