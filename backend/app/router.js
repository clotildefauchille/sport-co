const express = require("express");
const { Router } = require("express");
const router = express.Router();

// const test = require("./controllers/test");
const activityController = require ("./controllers/activityController")

router.get('/', (req, res) => {
  res.send("hello");
});

//homepage user not connected
router.get('/activities?', activityController.getLastActivity);

//homepage user not connected searched by any place (google map API)
router.get('/place?', activityController.getPlaceByUserLocalisation);

//homepage user not connected searched by department
router.get('/activities/:department?', activityController.getActivityByDepartment);


router.use((req, res) => {
  res.status(404).send("Service does not exists here ...");
});

module.exports = router;
