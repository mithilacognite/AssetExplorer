---
pagination_next: null
pagination_prev: null
---

# Synthetic time series

<!-- Write an intro + get content from playground -->

Combine multiple time series, constants, and operators to create new synthetic time series.

For example, use the expression `3.6 * TS{externalId='wind-speed'}` to convert units from m/s to k/h.

Also, you can **combine** time series: `TS{id=123} + TS{externalId='my_external_id'}`, use **functions** with time series `sin(pow(TS{id=123}, 2))`, and **aggregate** time series `TS{id=123, aggregate='average', granularity='1h'}+TS{id=456}`. See below for a list of supported functions and aggregates.

:::info tip
See the [synthetic time series API documentation](/api/v1/#tag/Synthetic-Time-Series) for more information about how to work with synthetic time series.
:::

## Functions

Synthetic time series support these functions:

- Inputs with internal or external ID. The external ID must be surrounded by quotes (single or double).
- Mathematical operators +,-,\*,/.
- Grouping with brackets ().
- Trigonometrics. sin(x), cos(x) and pi().
- ln(x), pow(base, exponent), sqrt(x), exp(x), abs(x).
- Variable length functions. max(x1, x2, ...), min(...), avg(...).
- round(x, decimals) (-10<decimals<10).
- `on_error(expression, default)`, for handling errors like overflow or division by zero.
- `map(expression, [list of strings to map from], [list of values to map to], default)`.

### Convert string time series to doubles

The `map()` function can handle time series of type _string_ and convert strings to doubles. If, for example, a time series for a valve can have the values `"OPEN"` or `"CLOSED"`, you can convert it to a number with:

```
map(TS{externalId='stringstate'}, ['OPEN', 'CLOSED'], [1, 0], -1)
```

`"OPEN"` is mapped to 1, `"CLOSED"` to 0, and everything else to -1.

Aggregates on string time series are currently not supported. All string time series are considered to be stepped time series.

### Error handling: on_error()

There are three possible errors:

- **TYPE_ERROR**: You're using an invalid type as input. For example, a string time series with the division operator.
- **BAD_DOMAIN**: You're using invalid input ranges. For example, division by zero, or sqrt of a negative number.
- **OVERFLOW**: The result is more than 10^100 in absolute value.

Instead of returning a value for these cases, CDF returns an error field with an error message. To avoid these, you can wrap the (sub)expression in the `on_error()` function, for example. `on_error(1/TS{externalId='canBeZero'}, 0)`. Note that, because of interpolation, this can happen even if none of the raw data points are zero.

## Aggregation

You define aggregates similar to time series inputs, but aggregates have extra parameters: `aggregate`, `granularity`, and (optionally) `alignment`. Aggregate must be one of **interpolation**, **stepinterpolation**, or **average**.

You must enclose the value of aggregate and granularity in quotes.

```
ts{id=12356, aggregate="average", granularity="2h", alignment=3600000}
```

See also: [Aggregating time series data](/dev/concepts/aggregation/).

### Granularity

The granularity decides the length of the intervals CDF takes the aggregate over. They are specified as a number plus a granularity unit, like `120s`, `15m`, `48h`, or `365d`.

Intervals are half-open, including the start time and excluding the end time. `[start, start+granularity)`

Granularity must be on the form NG where N is a number, and G is _s_, _m_, _h_, or _d_. (second, minute, hour, day). The maximum number you can specify is 120, 120, 100.000, and 100.000 for seconds, minutes, hours, and days, respectively.

### Output granularity

We return data points at any point in time where:

- Any input time series has an input.
- All time series are defined (between the first and last data point, inclusive)

For example, if time series A has data at time 15, 30, 45, 60, and time series B has data at times 30, 40, 50, A+B will have data at 30, 40, 45, and 50.

:::info TIP
Aggregates have data at every _granularity_ time, rounded to multiples of _granularity_ since epoch. For example, `60m` aggregates have data points at `00.00`, `01.00`, and so on, even if the start time is `00.15`. This **differs from retrieving aggregate data points from the non-synthetic endpoint**, where CDF rounds to multiples of the granularity _unit_ and uses an arbitrary offset.
:::

### Interpolation

If there is no input data, CDF interpolates. As a general rule, CDF uses **linear** interpolation: finds the previous and next data point and draws a straight line between these. The other case is **step** interpolation: CDF uses the value of the previous data point.

CDF interpolates _any_ interval. If there are data points in 1971 and 2050, CDF defines the time series for all timestamps in between.

Most aggregates are constant for the whole duration of _granularity_. The only exception is the _interpolation_ aggregate on non-step time series.

### Alignment

The alignment decides the start of the intervals and is specified in milliseconds.

The `alignment` parameter allows you to align weekly aggregates to start on specific days of the week, for example Saturday, or Monday. By default, aggregation with synthetic time series is aligned to _Thursday 00:00:00 UTC, 1 January 1970_ e.g., `alignment=0`.

You can also use alignment to create aggregates that are aligned to different time zones. For example, the chart below shows the [daily average chlorine indicator for city water](https://fusion.cognite.com/publicdata/explore/timeseries/5597549712998494) aligned to two different time zones: GMT+0 and GMT+3.

- To align to UTC/GMT+0 (aligned to: Sep 09 2020 00:00:00 UTC)

  `ts{externalId='houston.ro.REMOTE_AI[34]', alignment=1599609600000, aggregate='average', granularity='24h'}`

- To align to UTC/GMT+3 (aligned to: Sep 09 2020 03:00:00 UTC)

  `ts{externalId='houston.ro.REMOTE_AI[34]', alignment=1599620400000, aggregate='average', granularity='24h'}`

<img className="screenshot" src="https://apps-cdn.cogniteapp.com/@cognite/docs-portal-images/1.0.0/images/cdf/dev/concepts/resource_types/chlorine_alignment.png" alt="Alignment" width="x%"/>

:::info TIP
The alignment must be a multiple of the granularity unit. In the example above, the alignment needs to be a multiple of a whole hour, since the granularity is 24h.
:::

All intervals are on the form `(N*granularity + alignment, (N+1)*granularity + alignment)`, where `N` is an integer.

## Limits

In a single request, you can ask for:

- 10 expressions (10 synthetic time series).
- 10.000 data points, summed over all expressions.
- 100 input time series referrals, summed over all expressions.
- 2000 tokens in each expression. Similar to 2000 characters, except that words and numbers are counted as a single character.

If you use time series aggregates as inputs, and you get slow responses or a 503 error code, try again or reduce the limit. This is the expected behavior when you have recently updated the data points, and CDF needs to recalculate aggregates.
