const unleash = require("unleash-server");
const cors = require("cors");
const basicAuth = require("./basic-auth-hook.js");
const crossOriginMiddleware = (app) => app.use(cors());

unleash
  .start({
    databaseUrl: process.env.DATABASE_URL,
    port: 4242,
    preHook: crossOriginMiddleware,
    adminAuthentication: "custom",
    preRouterHook: basicAuth,
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get("port")}`
    );
  });
