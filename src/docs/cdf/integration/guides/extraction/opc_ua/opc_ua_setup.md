---
pagination_next: null
pagination_prev: null
---

# Setting up the OPC UA extractor

Follow the steps below to set up the extractor at a new site.

:::info NOTE
The steps involve using the configuration tool, which makes a large number of calls to the OPC UA server. If you're not sure the server can handle the load, you can configure the extractor manually.
:::

1.  Check the [hardware](opc_ua_hw_requirements.md) and [server](opc_ua_server_requirements.md) requirements for the extractor.
1.  [Download the installer/installation files](../../../concepts/extraction/index.md#download-installation-files-and-documentation) for the extractor from CDF.
1.  Install the extractor:

    - **Windows**: Run the installer.
    - **Linux**: Extract the contents of the installation zip file to the desired location.
    <p></p>

    :::info NOTE
    If writing to the location requires administrator rights, the Extractor must be run as admin or granted access in another way. In general, we recommend that you don't run the extractor as an administrator.
    :::

1.  Run the configuration tool:

    `OpcuaExtractor tool -n -e [host] -u [username] -p [password] --auto-accept -o config/config.yml`

    This runs the configuration tool without a configuration file and connects to the host using the specified username and password (optional). The tool outputs the resulting configuration to `config/config.yml`. For more details, see [The configuration tool steps](#the-configuration-tool-steps).

    :::caution Warning
    When setting up an extractor against a new server, you should run the configuration tool to detect potential server issues and ensure a successful start to the configuration. If the configuration tool fails, the server may be non-compliant, have insufficient computing power, or scale poorly. You may still be able to run the extractor, but this will require manual configuration and debugging. If you choose not to run the configuration tool, we will not be able to offer any support. 
    :::

1.  Edit `config/config.yml` to fit your requirements.

    The most important elements are setting a suitable IdPrefix, and adding pushers, metrics, and logging as desired. This might also involve disabling some features that the configuration tool discovered, or adding ones that it didn’t.

    1. Optionally, edit the `opc.ua.extractor.Config.xml` file used for configuring the OPC UA SDK.

       For most users the default settings are suitable, but in some cases, you may need to change memory limits or similar.

1.  Start the extractor with just `OpcuaExtractor`, or `opcua-extractor` if installed on linux.

    This starts the Extractor with the default settings, loading the configuration from `config/config.yml`.

## The configuration tool steps

This section lists each action the configuration tool takes when testing the server.

In general, the configuration tool is designed to build on the existing configuration, and can update an existing configuration file. In most cases, it is ok to let it run with no configuration.

1. **Get endpoints**: Attempts to treat the given `endpointUrl` as a discovery server, and look for endpoints there. If there are more secure options available, it might suggest connecting to these. This should be cheap and quick.
1. **Identify Browse limits**: Issues have been found with some servers that return too few results with certain settings for the number of nodes browsed at a time, or the number of desired results. This section browses part of the node tree several times, trying different parts of the hierarchy and different configurations. It may also try to browse the server hierarchy if the main node tree is too small. If the number of nodes is very large, the smallest chunks are skipped.
   The root of browsing is by default the objects folder, but can be set using `RootNode` as described in [Configure the OPC UA extractor](opc_ua_configuration.md).
1. **Read custom types**: Looks through the datatype hierarchy, and identify any likely candidates for custom numeric datatypes, that we want to map to double in destination systems.
1. **Identify Read limits**: Tries to find a suitable limit for the `Read` service, reading attributes for as many nodes as possible at a time. Typically it starts at 1000, then 100 and 10 at a time.
1. **Identify data-type settings**: Using the retrieved attributes, looks for arrays and strings that you may want to push to CDF, then find suitable settings for the relevant configuration options.
1. **Get Subscription chunk sizes**: Tries to subscribe to as many nodes as possible at a time, again starting at 1000 and going down. It will also listen and see if it receives any data on any of the subscriptions.
1. **Get History Read config**: Tries to read history from nodes with **Historizing** set. If no such nodes exist, this step is skipped. The Extractor tries to read the first and last parts of history, and estimate the number of points in each. If the number is sufficiently large, the configuration tool will suggest enabling `Backfill`.
1. **Get Event config**: This consists of several steps:
   1. First look through the event type hierarchy and try to find custom events.
   1. Next look for `GeneratesEvent` references between nodes.
   1. Look at the `EventNotifier` property to supply information about which nodes are allowed to emit events. If both `GeneratesEvent` and `EventNotifiers` are used on the server, the intersection of the two are used to find emitters.
   1. Check if the auditing property on the server is set, if it is, enable auditing.
1. **Get namespace map**: Parses the namespace map to suggest a suitable shortening of each namespace in order to create compact external IDs.
1. Finally, output a configuration file.

## Sample configuration files

In the extractor installation folder, the `/config` subfolder contains sample complete and minimal configuration files.

### Minimal YAML configuration file

```yaml
# Template for the config file,
# Defaults to config.yml in ./config.
# The config tool defaults to config/config.config-tool.yml, and uses the same config
# options, though only EndpointURL and if needed username/password/secure are required.
# The values here are generally the default values, except for the contents of lists etc.
# Your config file can contain only a subset of these config options. Any extra options will
# cause the extractor to fail.

# This is a minimal example configuration for meaningful extraction from OPC-UA to CDF.
# It is recommended to run the config-tool in order to configure the extractor to
# extract all relevant information.

# By default this will extract the OPC-UA node hierarchy to the CDF asset hierarchy
# and stream live data to timeseries. With proper configuration the extractor can
# read string timeseries, events and historical data.

# Version of the config schema
version: 1

source:
  # The URL of the OPC-UA server to connect to
  endpoint-url: 'opc.tcp://localhost:4840'

cognite:
  # The project to connect to in the API, uses the environment variable COGNITE_PROJECT.
  project: '${COGNITE_PROJECT}'
  # Cognite authentication
  # This is for Microsoft as IdP. To use a different provider,
    # set implementation: Basic, and use token-url instead of tenant.
    # See the example config for the full list of options.
    idp-authentication:
        # Directory tenant
        tenant: ${COGNITE_TENANT_ID}
        # Application Id
        client-id: ${COGNITE_CLIENT_ID}
        # Client secret
        secret: ${COGNITE_CLIENT_SECRET}
        # List of resource scopes, ex:
        # scopes:
        #   - scopeA
        #   - scopeB
        scopes:
          - ${COGNITE_SCOPE}


extraction:
  # Global prefix for externalId in destinations. Should be unique to prevent name conflicts.
  id-prefix: 'gp:'
  # Map OPC-UA namespaces to prefixes in CDF. If not mapped, the full namespace URI is used.
  # Saves space compared to using the full URL. Using the ns index is not safe as the order can change on the server.
  # It is recommended to set this before extracting the node hierarchy.
  # For example:
  # NamespaceMap:
  #   "urn:cognite:net:server": cns
  #   "urn:freeopcua:python:server": fps
  #   "http://examples.freeopcua.github.io": efg
```
