const express = require('express');
const { Router } = require('express');
const router = express.Router();

// const test = require("./controllers/test");
const activityController = require("./controllers/activityController");
const connectionController = require("./controllers/connectionController");
const sportsController = require("./controllers/sportsController");
const newActivityController = require('./controllers/newActivityController');
const registrationController = require("./controllers/registrationController");
const messageController = require("./controllers/messageController");

router.get('/', (req, res) => {
  res.send('hello');
});
router.post("/api/registration", registrationController.addUser);
router.post("/api/connexion", connectionController.getUser);

router.post('/api/newactivity', newActivityController.createNewActivity);

//homepage user not connected
router.get('/api/activities?', activityController.getLastActivities);
router.get('/api/activity/:id', activityController.getOneActivity); 

//homepage user not connected searched by any place (google map API)
router.get('/api/place?', activityController.getActivitiesByUserLocalisation);
router.get('/api/activities/user/:id', activityController.getActivitiesByUser);

router.get('/api/sports', sportsController.getSports);
router.get('/api/sports/localisation?', sportsController.getSportsByLocalisation); 

router.get('/api/activities/sports?', activityController.getActivitesByUserLocalisationAndSports);

router.post('/api/activity/:id/messages/', messageController.addMessageToActivity);
router.get('/api/activity/:id/messages/', messageController.getMessageByActivity);

//homepage user not connected searched by department
// router.get(
//   "/activities/:department?",
//   activityController.getActivityByDepartment
// );

//homepage user not connected searched by any place (google map API) and by sport
// router.get(
//   '/activities/sport/:sportId?',
//   activityController.getActivitesByUserLocalisationAndSport,
// );

router.use((req, res) => {
  res.status(404).send('Service does not exists here ...');
});

module.exports = router;