const express = require("express");
const { Router } = require("express");
const router = express.Router();

const test = require("./controllers/test");

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/test", test.getAllActivityWithPlace);

router.use((req, res) => {
  res.status(404).send("Service does not exists here ...");
});

module.exports = router;
