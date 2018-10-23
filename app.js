//app.js
const express = require("express");
const app = express();
const app = require("./src/server/api");

app.use("/api", api);

app.get("*", (req, res) => {
    res.send({ error: "no route defined"});
});

module.exports = app;