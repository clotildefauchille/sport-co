const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const { Activity } = require('../models');

const newActivity = {
  createNewActivity: async (req, res) => {
    try {
      const {
        title,
        description,
        creator_id,
        date,
        time,
        duration,
        min_participant,
      } = req.body;
      console.log('------------>', date);
      let newActivity = await Activity.create({
        title,
        description,
        date,
        time,
        duration,
        min_participant,
        creator_id,
        activity_place_id: 1,
        activity_status_id: 3,
        sport_id: 1,
      }, {
        include: ["activity_place"]
      });
      res.json(newActivity);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = newActivity;
