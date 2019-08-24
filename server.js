const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

app = express();

const staticFileMiddleware = express.static(path.join(__dirname + "/build/"));

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);
app.use(staticFileMiddleware);

const port = process.env.PORT || 5000;
app.listen(port);

console.log("Server Started " + port);
