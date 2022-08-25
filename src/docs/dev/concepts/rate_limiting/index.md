---
pagination_next: null
pagination_prev: null
---

# Rate limiting

Cognite Data Fusion (CDF) returns an HTTP `429 Too many requests` response status code if a user sends too many requests in a given amount of time or issues conflicting requests concurrently ("rate limiting").

The capacity of all APIs scales up when the usage exceeds predefined limits over time, but there is a delay between the traffic increase and the capacity scale-up. In some situations, the **total load** from all users can exceed the full maximum capacity for the CDF project. Traffic from a single user or a specific project can never claim all capacity in a cluster.

Cognite recommends using a retry strategy based on [truncated exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) to handle sessions with HTTP response codes 429 (or 503). The strategy lets clients slow down the request frequency to maximize throughput without having to re-submit failing requests.

**Learn more** about exponential backoff:

- [Microsoft](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/implement-retries-exponential-backoff)
- [Google](https://cloud.google.com/storage/docs/retry-strategy)
