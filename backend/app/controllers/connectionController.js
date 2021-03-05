const { User } = require("../models");

const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const connectionController = {
    getUser: async (req, res) => {
        const data = req.body;
        console.log(data.email); 
        const result = await User.findOne({
            where: {
                email: data.email,
            },
        });
        console.log(result);

        // Test pour voir si l'email est valide
        if (result === null) { 
            res.status(404).json("Votre adresse mail n'est pas valide");
        } 
        // Test pour voir si le mot de passe est correct
        else if(result.password != data.password) {        
            res.status(404).json("Le mot de passe est incorrect");
        } 
        else {
            res.json(
            {
                "firsname": `${result.firstname}`,
                "lastname": `${result.lastname}`,
                "pseudo": `${result.pseudo}`
            }
        )}
    },
};

module.exports = connectionController;