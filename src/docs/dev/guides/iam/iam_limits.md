---
pagination_next: null
pagination_prev: null
---

# Limitations on IAM resources

Cognite Data Fusion (CDF) limits the number of IAM (Identity and Access Management) resources you can create. If you exceed the limits, you need to remove existing resources before you can create new ones.

| Resource                                     | Limit | Comment                                                            |
| -------------------------------------------- | ----- | ------------------------------------------------------------------ |
| **API keys** (per&nbsp;service&nbsp;account) | 2     |                                                                    |
| **Service accounts** (per&nbsp;project)      | 700   | Different applications should not share the same service accounts. |
| **Groups** (per&nbsp;project)                | 50    |                                                                    |
| **Groups** (per&nbsp;principal)              | 20    |                                                                    |
| **Security categories** (per&nbsp;project)   | 1000  |                                                                    |
