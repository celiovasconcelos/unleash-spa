## Motivation

The [Unleash](https://github.com/Unleash/unleash) feature flag project has no free JS client.

There is a [JS client](https://github.com/unleash-hosted/unleash-proxy-client-js) that works only with [Unleash Hosted Proxy](https://www.unleash-hosted.com/articles/the-unleash-proxy).

This project uses the standard API to enable feature flags to JS.

## Server

- CORS was enabled
- The admin API as secured

```bash
docker build -t unleash-spa .
```

```bash
docker run -d -p 4242:4242 -e BASIC_AUTH_NAME=celio -e BASIC_AUTH_PASS=123 -e DATABASE_URL=postgres://user:pass@host:5432/unleash unleash-spa
```

## JS Client

Take a look at the [index.html](index.html) file to see a sample implementation for the **applicationHostname** strategy.
