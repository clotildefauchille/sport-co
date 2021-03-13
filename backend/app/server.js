const express = require('express');
const router = require('./router');
const cookieParser = require('cookie-parser');

const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());

// https://expressjs.com/en/resources/middleware/cors.html
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

// idem en node :
/*
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', '*');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  
  // response to preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
  next();
 });
 */
 

/*
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    getToken: req => req.cookies.token
  })
);
*/

app.use(router);

const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT );
    });
};

module.exports = { start };