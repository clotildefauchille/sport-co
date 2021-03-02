const express = require('express');
const { Router } = require('express');
const router = express.Router();

//const quizController = require('./controllers/quizController');

router.get('/', (req, res) => {
    res.send('hello');
});

/*
router.get('/quiz', quizController.getAllQuiz);
router.post('/quiz', quizController.createQuiz);
*/

router.use((req, res) => {
    res.status(404).send('Service does not exists here ...');
});

module.exports = router;

