---
pagination_next: null
pagination_prev: null
---

# Know your capacity    

**BestDay's data-driven capacity estimation** gives you an accurate understanding of the current maximum achievable production. Use this as a capacity baseline to **compare actual production** and **identify optimization potentials**. BestDay evaluates current constraints to ensure a valid capacity baseline.

The BestDay maximum production capacity is calculated using the input of **historical actual production**, **experienced deferments**, and **production constraints**, such as regulatory limits for the concentration of oil in disposed water or the power consumption per produced barrel.

The historical **evaluation window span**, **production constraints**, and **outlier threshold** is defined per client in the [BestDay configuration](#configuring-bestday).

## View BestDay capacity

You'll find the estimated BestDay capacity on the **Deep dive** and **Well summary** pages. On the **BestDay Inspector** side panel, you'll find the capacity calculation details.

<img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/know_your_capacity.png" width="100%" alt="Know Your Capacity"/>


## The BestDay data science model

The BestDay capacity estimation is based on the BestDay data science model. The purpose of the BestDay data science model is to estimate a Best Day capacity target using linear extrapolation of **recent historical production** and **deferment data** for any given asset.

### Configuring BestDay

The BestDay data science model can be configured to match client requirements. These are the configurable parameters:

- The **Local Evaluation** window defines the rolling time-range where the regression analysis is carried out. Changing this parameter influences how conservative the capacity estimation becomes.

  <img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/evaluation_window.jpg" width="80%" alt="Evaluation Window"/>

- The **Statistical Outlier Detection parameter**  is used to discard days violating defined statistical metrics. The sensitivity of the outlier detection is configurable.

- **Production constraints** are configured to ensure the BestDay capacity is not violating safe, reliable, and high-quality production. You can set these constraints according to your production hub. Dates where production constraints are violated, are disqualified from being input to the BestDay data science model. 

    <img className="illustration" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/bestday/outliers_production_constraints.jpg" width="80%" alt="Outliers and Production Contraints Graph"/>

### Predicting BestDay capacity

The BestDay data science model uses linear regression as a basis. Additionally, the model ensures that the most recent historical data gets higher importance during training and that the predicted capacity values become an estimate of capacity at the highest performance instead of expected standard production. Predictions of BestDay capacity are made daily for the capacity of the following day for every node in the production hierarchy.

