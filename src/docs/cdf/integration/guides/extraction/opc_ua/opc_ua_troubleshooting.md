---
pagination_next: null
pagination_prev: null
---

# Troubleshooting

This page contains solutions and instructions for troubleshooting common problems when setting up the OPC UA extractor to push. We recommend accessing the server through the [UAExpert](https://www.unified-automation.com/products/development-tools/uaexpert.html) tool.

This assumes that you have first run the config tool as described in [the configuration file](opc_ua_configuration.md).

## Unable to connect to the server

If the extractor is not able to connect to the OPC UA server, try these solutions.

### Unable to connect to discovery server

If you get the error message "`Unable to connect to discovery server`", make sure that you have specified the correct **endpoint-url** in [the configuration file](opc_ua_configuration.md) and that it is possible to connect to the server from where the extractor is running.

Also, try connecting with [UAExpert](https://www.unified-automation.com/products/development-tools/uaexpert.html) to verify that you can connect to the server.

### Identity token rejected

If you get the error message "`Identity token rejected`" when starting the extractor, verify that you have specified the correct username/password.

### Certificate untrusted

If you get the error message "`Identity token rejected`" when starting the extractor, try setting **source.auto-accept** to `true` to resolve the issue.

OPC UA uses a system of server/client certificates. This error messages means that the server does not trust the client certificate. The server software typically has a system to accept incoming connections, but the system is application specific.

Similar errors are also produced if the extractor rejects the server.

### The extractor hangs during startup, then loses connection

This is typically caused by the server not being able to handle the high load. Try to inspect what the extractor was doing as it crashed, then reduce **source/browse-nodes-chunk**, **source/browse-chunk**, **source/attributes-chunk** or **source/subscription-chunk** in [the configuration file](opc_ua_configuration.md).

Alternatively, increase **source/keep-alive-interval**.

### There was an issue with the certificate or SHA1 signed certificates are not trusted

This is an issue with the server certificate, unless a custom client certificate is being used.

By default, SHA1 server certificates are considered insecure. As a workaround you can set `<RejectSHA1SignedCertificates>false</RejectSHA1SignedCertificates>` under `SecurityConfiguration` in `opc.ua.extractor.Config.xml`.

You can also set the `source.ignore-certificate-issues` option to `true`.

### Certificate doesn't meet the minimum key length requirement

This is an issue with the server certificate, unless a custom client certificate is being used.

Either increase the key length of the server certificate, or adjust `MinimumCertificateKeySize` under `SecurityConfiguration` in `opc.ua.extractor.Config.xml`.

You can also set the `source.ignore-certificate-issues` option to `true`.

### Usage of certificate is not allowed

This is an issue with the server certificate, unless a custom client certificate is being used.

The server certificate lacks the data-encipherment usage flag. This is required by the OPC UA standard.

As a workaround, you can set the `source.ignore-certificate-issues` option to `true`.

## Bad or missing data

If the extractor is not able to retrieve all data or receives data in the wrong format from the OPC UA server, try these solutions.

### I don’t get any time series

First, make sure that the server has variables that can be mapped to time series. In [UAExpert](https://www.unified-automation.com/products/development-tools/uaexpert.html), these show up as green labels.

Next, try to set **extraction**/**data-types**/**allow-string-variables** to `true`. This may cause time series you would rather have as numeric to appear as string. See [My time series are string-valued but should be numerical](#time-series-are-string-valued-but-should-be-numerical).

If the time series are still missing, the issue is most likely related to their dimensions. By default, the extractor requires that variables are either Scalar or OneDimensional. If you have arrays in your server, they must be fixed size and define the `ArrayDimensions` attribute. Try setting the **extraction/data-types/unknown-as-scalar** configuration option to `true`. This will help if the variables have `ValueRank` equal to `Any` or `OneOrMoreDimensions`, in which case they will be treated as scalar.

If variables are still not appearing, check to make sure you have not filtered them out in any way.

### Time series are string-valued but should be numerical

This is generally a question of their OPC UA data type. The extractor tries to guess which mapping makes the most sense, but does not always succeed.

First, try setting **extraction/data-types/auto-identify-types** to `true`.

Next, try setting **extraction/data-types/null-as-numeric** to `true`. This will treat variables with null DataType as numeric variables. Do this only if you are sure none of these should be string valued. If this is the case, either filter these out, or contact the server administrator. Unknown data types are not supported by the extractor, except with this workaround.

You can find the data type in [UAExpert](https://www.unified-automation.com/products/development-tools/uaexpert.html) on the right hand side after selecting a variable.

### Some metadata appears as time series

Variables in OPC UA are mapped to time series, while properties are mapped to metadata. Sometimes the server will have variables that really represent metadata. To map these over, you can use the **extraction/transformations** option to select the nodes you want as metadata.
