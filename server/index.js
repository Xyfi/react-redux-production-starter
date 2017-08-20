const express = require("express");
const fallback = require("express-history-api-fallback")
const path = require("path");

const config = require("./config");

const app = express();

app.use(express.static(config.public));

app.use(fallback("index.html", { root: config.public }));

app.listen(config.port, function () {
  console.log(`Production build is being served from http://localhost:${config.port}`);
})
