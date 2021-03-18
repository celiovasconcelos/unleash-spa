/* eslint-disable import/no-unresolved */

"use strict";

const unleash = require("unleash-server");
const auth = require("basic-auth");

function basicAuthentication(app) {
  app.use("/api/admin/", (req, res, next) => {
    const credentials = auth(req);

    if (
      credentials &&
      credentials.name == process.env.BASIC_AUTH_NAME &&
      credentials.pass == process.env.BASIC_AUTH_PASS
    ) {
      const user = new unleash.User({
        email: `${credentials.name}@someorganization.com`,
      });

      req.user = user;
      return next();
    }

    return res
      .status("401")
      .set({ "WWW-Authenticate": 'Basic realm="example"' })
      .end("access denied");
  });
}

module.exports = basicAuthentication;
