---
pagination_next: null
pagination_prev: null
---

# About entity matching

Different data sources frequently use different naming standards to refer to the same object or **entity**. CDF's contextualization tools allow you to **match** entities originating from various source systems to the same entity in the CDF data model. The interactive tools combine machine learning, a powerful rules engine, and domain expertise to map and connect the information.

With the mapped information, you can build applications where users, for example, can click a component in a 3D model to see all the related time series data or ask for all the pressure readings along a flow line.

The entity matching model [detects potential matches](#detecting-matches) and [calculates a match score](#calculating-match-scores) by finding similarities between source and target fields. For instance, the model may suggest that the time series AA-_123-PS_-1B matches the asset name Y-_123-PS_-4D. If there are no similarities in the strings used for matching, a match is impossible. 

The entity matching model can only find matches when there are **some similarities between the strings** and will never return entities with no similarities as a suggested match, even with large amounts of training data.

You can match entities using the [CDF user interface](match_entities#match-entities), the [Cognite API](https://docs.cognite.com/api/v1/#tag/Entity-matching), or the [Cognite Python SDK](https://cognite-sdk-python.readthedocs-hosted.com/en/latest/cognite.html#fit-entity-matching-model).

:::tip TIP

To increase the speed and quality of the matching process, we recommend that you **clean the source data** before you start, for example, by removing universal substrings and unexpressive special characters.

:::

## Detecting matches

CDF uses **string tokenization** to break strings into **substrings**. We refer to these substrings as **tokens**. The tokens in the source and target entities are compared and used to calculate the similarity between two entities. By default, the model uses the `name` fields to find similarities, but you can configure the model to use any field in the CDF project. 

Suppose you select the [simple similarity scoring model](../contextualization/match_entities#step-3-set-up-the-matching-model-and-generate-suggested-matches) to match entities. In that case, the model uses the regular expression `\p{L}+|[0-9]+` to remove all punctuation or dash characters and split the string into tokens that consist of exclusively letters or numbers. For instance, the string `11-PDN-26540J-60` splits into the tokens `11`, `PDN`, `26540`, `J`, and `60`.

The Entity matching model calculates **similarity features** by comparing strings based on the similarities between tokens and their order.

For medium to large data sets, it is impossible to compare all source and target combinations. To reduce the number of comparisons, the model uses a **blocking** step to remove target entities that have no similarity with the source entity. 

:::tip
The model can only find matches if there are some similarities between the source and target strings. However, the entities may have **hidden** similarities, such as common abbreviations like _PT_ for _Pressure Transmitter_. Replacing the abbreviation with the spelled-out name or vice-versa makes it possible for the model to find additional matches.
:::

## Defining match scores

The entity matching model uses the [`featureType`](../../../../api/v1/operation/entityMatchingCreate.md) property to define the combination of **similarity features** created and used in the entity matching model.

Each feature produces one feature score between the source and target. A higher feature score means a more likely match but cannot be interpreted as a probability.

The model calculates all features specified from `featureType` for each pair of fields in the `matchField` property. For instance, if `featureType` entails _N_ individual features and `matchField` specifies _M_ pairs of fields, the model calculates _N x M_ features for each candidate match.

Be cautious about adding extra `matchFields` as they may impact performance if they contain little or no similarity information.

## Calculating match scores

An **unsupervised** model or a **supervised** model calculates the match score using the _N x M_ feature scores and uses the match score to decide whether a source and target entity is a match.

### Unsupervised model

Use the **unsupervised** entity matching model if you don't have any or only a few known matches as training data. The unsupervised model is the default model and creates similarity feature scores between the sources and targets to return a weighted average as the match score.

The model uses a simple average, i.e., it assigns the same weight to each feature. Therefore, it doesn't make sense to calculate many different features when using the unsupervised model, and `matchFields` should only include fields known to contain relevant similarities.

In addition, you should limit `featureType` to simple features such as **Simple** or **Bigram**.

:::tip Tip
An unsupervised model always outputs the same results when run on the same data. It's good practice to start with an unsupervised model for the first iterations to understand the data and get some first verified matches before you create a supervised model.

:::

### Supervised model

Use the **supervised entity matching model** when you have some known matches that can be used to decide which features to weigh up or down to calculate the match score from the feature scores.

The supervised model often performs better with good training data since it can weigh the different features into fine-tuned criteria to determine a similarity between the source and target entities. It also allows you to use more `matchFields` by automatically determining which `matchFields` to weigh as stronger or weaker.

:::tip Tip
If you have only a small number of known matches or your matches are all based on the same pattern, the model might put a lot of weight on features that follow the pattern (overfitting). **Overfitting** may result in poor generalization, i.e., the model performs poorly on slightly different data that does not follow the pattern. The more varied your training data is, the better the model will pick up different patterns and perform better.

:::

## Jupyter Notebook tutorials

- [Simple introduction, Entity matching with Cognite SDK demo](https://github.com/cognitedata/dshub-tutorials/blob/master/advanced/Entity%20Matching%20with%20Cognite%20SDK%20demo.ipynb)
- [Entity matching pipelines with SDK experimental demo](https://github.com/cognitedata/dshub-tutorials/blob/master/advanced/Entity%20Matching%20Pipelines%20with%20SDK-experimental%20demo.ipynb)
- [Comparing Entity matching models with Cognite SDK demo ](https://github.com/cognitedata/dshub-tutorials/blob/master/advanced/Comparing%20Entity%20Matching%20models%20with%20SDK%20demo.ipynb)
