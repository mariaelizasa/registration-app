const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/registration");
});

router.get("/registration", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../../../frontend/" });
});

module.exports = router;
