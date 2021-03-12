const express = require('express');
const router = require('./router');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require("cors");

const jwtSecret = process.env.JWT_SECRET;

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/jwt', (req, res) => {
    res.json({
      token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
    });
});

//app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));




app.use(router);

const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT );
    });
};

module.exports = { start };