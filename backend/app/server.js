const express = require('express');
const router = require('./router');
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT );
    });
};

module.exports = { start };