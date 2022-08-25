---
pagination_next: null
pagination_prev: null
---

# Trends

The settings listed below apply to data types connected to the CDF **time series** resource type.

In InField, the settings on the **Trends** tab are visible on the **Trends** page from the sidebar or on the **Overview** page.

Trends are identical to time series in CDF. Some tags may have many connected time series, but not all are equally important. In this section, you decide which time series to show as the default and which time series you want to filter out.

| Field                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                               | Default value |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Default visible trends                                                 | Enter a prioritized list of trend names to display on the **Trend** and **Overview** pages. Only one time series is visible at the time, and this list specifies the prioritized order. Use regular expressions to filter the list. If you don't enter any values, all time series display.                                                                                                                               | -             |
| Regex pattern to filter out unwanted matches of default visible trends | Enter a regular expression to filter out time series by the names remaining after the filter above. End-users are still able to select the trends. <p></p> For instance, if you want `21PT1019.PV` to be the default selected time series, and not 21PT1019`.SOMETHING.PV` or `21PT1019SOMETHING.PV`, enter `(^((?!@Ext[0-9]_).)_.PV\$)`.<p></p> If you don't specify a default visible trend, this filter does not apply. | -             |
| Hidden trends filer                                                    | Use regular expressions to hide trend names from the **Trends** page. Use only for trends that are not helpful to show, such as bit-coded values, strings, or binary values (examples: `STATUSWORD`, `ALARMBYTE`, `OS_ENABLED`).                                                                                                                                                                                          | -             |
