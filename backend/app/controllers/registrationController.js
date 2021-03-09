const bcrypt = require("bcrypt");

const { User } = require("../models");

const Sequelize = require("sequelize");
const sequelize = require("../database.js");
const { request } = require("express");

const registrationController = {
    addUser: async (req, res) => {
        const data = req.body;
        console.log(data);
    },
};

module.exports = registrationController;
