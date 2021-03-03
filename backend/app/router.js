const express = require("express");
const { Router } = require("express");
const router = express.Router();

// const test = require("./controllers/test");
const activityController= require ("./controllers/activityController")

router.get('/', (req, res) => {
  res.send("hello");
});

router.get('/activities?', activityController.getLastActivity);

router.use((req, res) => {
  res.status(404).send("Service does not exists here ...");
});

module.exports = router;
