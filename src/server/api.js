// src/api.js
const express = require("express")
const router = express.Router()

router.get("/greeting/:name", (req, res) => {
    res.status = 200;
    req.params.name;
    res.send({ greeting: "Hello, " + req.params.name + "!" })
});

module.exports = router;