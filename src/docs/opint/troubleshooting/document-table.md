---
pagination_next: null
pagination_prev: null
---

# Document table

Asset Data Insight displays all documentation associated with an item in the asset hierarchy.
To make it easier to navigate the documents, Asset Data Insight automatically groups them into categories.

<img src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/opint/asset-document-table.png" alt=" " width="80%"/>

The sections below describe how Asset Data Insight determines the categorization and the document names to display.
If you need help changing the grouping, contact [support@cognite.com](mailto:support@cognite.com).

## Categories

This is how Asset Data Insight groups the documents into categories:

1. First, check for a `doc_type` metadata field.

   If the field exists and the field value is specified in accordance with the Document Type Codes in the [NORSOK Z-DP-002] standard, Asset Data Insight uses the value as the document's type category.

2. Next, attempt to parse the filename by the [NORSOK Z-DP-002] standard.

   If Asset Data Insight can parse the filename, it extracts the document category from the filename.

3. Otherwise, the category is unknown.

### Category titles

This is how Asset Data Insight determines the titles of the categories:

1. Check if the value is specified by the Document Type Codes in the [NORSOK Z-DP-002] standard.

   - If the value is specified in the [NORSOK Z-DP-002] standard, map to the specified value. For example, `doc_type: XB` is categorized as "P&ID".
   - Otherwise, Asset Data Insight uses the value as the category title. For example, `doc_type: Sketch` is categorized as "Sketch".

### Category order

Asset Data Insight displays the categories in alphabetic order.

## Document name

This is how Asset Data Insight determines the document name to display:

1. First, check for a `doc_title` metadata field.

   If the field exists, use the value as the document name.

2. Next, check for a `title` metadata field.

   If the field exists, use the value as the document name.

3. Otherwise, use the filename as the document name.

[norsok z-dp-002]: https://www.standard.no/en/webshop/ProductCatalog/ProductPresentation/?ProductID=150800

## The NORSOK Z-DP-002 Standard

Below is the full list of Document Type Codes and related Categories as defined by the [NORSOK Z-DP-002] standard.

| Document Type Code | Document Type Category                                                                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AA                 | Accounting                                                                                                                                                                                           |
| AB                 | Administration (Project management)                                                                                                                                                                  |
| AF                 | Templates – used by contractor (not economic documentation)                                                                                                                                          |
| CA                 | Analysis tests and calculations                                                                                                                                                                      |
| DS                 | Data sheets                                                                                                                                                                                          |
| FA                 | Project manual e.g. principal decisions                                                                                                                                                              |
| FB                 | Project strategy                                                                                                                                                                                     |
| FD                 | Project design criteria                                                                                                                                                                              |
| FE                 | Engineering query                                                                                                                                                                                    |
| FQ                 | Concession requests                                                                                                                                                                                  |
| GA                 | Authorities documentation                                                                                                                                                                            |
| HA                 | Hazop actions.                                                                                                                                                                                       |
| IR                 | Interface report                                                                                                                                                                                     |
| KA                 | Procedures                                                                                                                                                                                           |
| KH                 | Commissioning procedures                                                                                                                                                                             |
| KY                 | System operation procedures                                                                                                                                                                          |
| KZ                 | System description                                                                                                                                                                                   |
| LA                 | Lists registers and indexes                                                                                                                                                                          |
| LC                 | User manual content lists                                                                                                                                                                            |
| LD                 | Supplier master document/information registers                                                                                                                                                       |
| LF                 | Legends and typical                                                                                                                                                                                  |
| MA                 | Equipment user manual including technical descriptions                                                                                                                                               |
| MB                 | Operation and maintenance instructions/manuals                                                                                                                                                       |
| MC                 | Parts and Spare parts lists                                                                                                                                                                          |
| MG                 | Equipment handling instructions                                                                                                                                                                      |
| MH                 | Lubrication schedules                                                                                                                                                                                |
| MZ                 | Overall Life Cycle Information (LCI)                                                                                                                                                                 |
| OT                 | Training Documentation Course Material                                                                                                                                                               |
| QA                 | Technical Query                                                                                                                                                                                      |
| SI                 | Site instructions                                                                                                                                                                                    |
| SQ                 | Site Query                                                                                                                                                                                           |
| PA                 | Purchase order                                                                                                                                                                                       |
| PB                 | Blanket order and frame agreements                                                                                                                                                                   |
| PC                 | Call off orders                                                                                                                                                                                      |
| PD                 | Contracts                                                                                                                                                                                            |
| PJ                 | Material handling reports                                                                                                                                                                            |
| PE                 | Commercial Bid Evaluation for Budget Inquiry                                                                                                                                                         |
| PK                 | Over shortage and damage reports                                                                                                                                                                     |
| PG                 | (Hold) Appendix E Technical Requisition                                                                                                                                                              |
| PH                 | Technical Bid Evaluation                                                                                                                                                                             |
| PM                 | Evaluation Matrix                                                                                                                                                                                    |
| PN                 | Inquiry Documents (Procurement)                                                                                                                                                                      |
| PO                 | Bid Opening and Shortlisting Report                                                                                                                                                                  |
| PR                 | Recommendation for Award                                                                                                                                                                             |
| PS                 | Package Procurement Strategy                                                                                                                                                                         |
| PT                 | Screening                                                                                                                                                                                            |
| PV                 | Pre-Qualification Questionnaire                                                                                                                                                                      |
| PQ                 | Invitation to Tender (Budget)                                                                                                                                                                        |
| PX                 | Budget Inquiry                                                                                                                                                                                       |
| PZ                 | Technical Bid Evaluation for Budget Inquiry                                                                                                                                                          |
| PL                 | Disputed variation order                                                                                                                                                                             |
| RA                 | Reports – not covered by other codes                                                                                                                                                                 |
| RB                 | Risk analysis reports                                                                                                                                                                                |
| RC                 | Non-conformance reports                                                                                                                                                                              |
| RD                 | System and design reports                                                                                                                                                                            |
| RE                 | Design Fabrication Installation-resumes                                                                                                                                                              |
| RF                 | Verification reports                                                                                                                                                                                 |
| RG                 | Application for Deviation                                                                                                                                                                            |
| RH                 | Deviation report                                                                                                                                                                                     |
| RK                 | Application for Exemption (Deviation require authority approval)                                                                                                                                     |
| RS                 | Studies Reports                                                                                                                                                                                      |
| SA                 | Standards (amendment to Norsok)                                                                                                                                                                      |
| SP                 | Specifications - not covered by other codes                                                                                                                                                          |
| TA                 | Plans and schedules                                                                                                                                                                                  |
| TB                 | Work plans                                                                                                                                                                                           |
| TD                 | Cable and cable transit schedules                                                                                                                                                                    |
| TE                 | Estimates                                                                                                                                                                                            |
| TF                 | Work packages                                                                                                                                                                                        |
| TG                 | Spring schedules                                                                                                                                                                                     |
| TR                 | Transmittal                                                                                                                                                                                          |
| VA                 | Manufacturing and verifying document including material traceability weld and Non- Destructive Examination (NDE) doc third party verification and also photos of submerged structures and equipment. |
| VD                 | Fabrication records (see DN02-DN-Z-KA-0003 ch 5.152)                                                                                                                                                 |
| VB                 | Certificates                                                                                                                                                                                         |
| VM                 | Mechanical completion and commissioning dossiers                                                                                                                                                     |
| WM                 | Inspection and maintenance isometrics                                                                                                                                                                |
| WN                 | Inspection videos                                                                                                                                                                                    |
| XA                 | Flow diagrams                                                                                                                                                                                        |
| XB                 | P&ID                                                                                                                                                                                                 |
| XC                 | D&ID                                                                                                                                                                                                 |
| XD                 | General arrangements                                                                                                                                                                                 |
| XE                 | Layout drawings                                                                                                                                                                                      |
| XF                 | Location drawings and plot plans                                                                                                                                                                     |
| XG                 | Structural information including main structural steel second/outfitting steel structural fire protection and acoustic/thermal insulation and fire protection                                        |
| XH                 | Free span calculations structural information secondary steel                                                                                                                                        |
| XI                 | System topology block diagrams and SCD                                                                                                                                                               |
| XJ                 | Single line diagrams                                                                                                                                                                                 |
| XK                 | Circuit diagrams                                                                                                                                                                                     |
| XL                 | Logic diagrams                                                                                                                                                                                       |
| XM                 | Level diagrams                                                                                                                                                                                       |
| XN                 | Isometric drawings including fabrication heat tracing. NOTE: This code is replaced by codes starting with "Y". Drawings already issued with code "XN" may not be reissued.                           |
| XO                 | Pipe supports                                                                                                                                                                                        |
| XP                 | Termination drawings for external connections                                                                                                                                                        |
| XQ                 | Pneumatic/hydraulic connection drawings                                                                                                                                                              |
| XR                 | Cause and effects                                                                                                                                                                                    |
| XS                 | Detail cross sectional drawings                                                                                                                                                                      |
| XT                 | Wiring diagrams                                                                                                                                                                                      |
| XU                 | Loop diagrams                                                                                                                                                                                        |
| XV                 | Structural information outfitting steel                                                                                                                                                              |
| XW                 | Stress isometric                                                                                                                                                                                     |
| XX                 | Miscellaneous drawings                                                                                                                                                                               |
| XY                 | Hook up drawings                                                                                                                                                                                     |
| XZ                 | Material Selection Datasheet (MSD)                                                                                                                                                                   |
| YA                 | Design isometric                                                                                                                                                                                     |
| YB                 | Fabrication isometric                                                                                                                                                                                |
| YC                 | Heat trace isometric                                                                                                                                                                                 |
| YD                 | Nodal diagram                                                                                                                                                                                        |
| ZA                 | EDP-documentation general                                                                                                                                                                            |
| ZB                 | Software documentation                                                                                                                                                                               |
| ZC                 | System documentation                                                                                                                                                                                 |
| ZD                 | VDU-pictures                                                                                                                                                                                         |
| ZE                 | Graphical reports from 3D Computer Aided Design (CAD) models                                                                                                                                         |
| ZF                 | 3D CAD view models                                                                                                                                                                                   |
