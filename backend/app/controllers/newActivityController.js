const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const { Activity } = require('../models');

const newActivityController = {
  createNewActivity: async (req, res) => {
    console.log('controller');
    try {
      const sport_id = parseInt(req.body.sport_id);
      const min_participant = parseInt(req.body.min_participant);

      const { title, description, creator_id, date, time, duration } = req.body;
      const dataPlace = req.body.place;
      console.log('---------->dataplace',dataPlace);
      console.log('------------------>zipcode', dataPlace.zip_code);
      console.log('------------>', sport_id);
      
      let newActivity = await Activity.create(
        {
          title,
          description,
          date,
          time,
          duration,
          min_participant,
          creator_id,
          activity_place_id: 1,
          activity_status_id: 3,
          sport_id,
          activity_place: {
            adress: `${dataPlace.number} ${dataPlace.street}`,
            city: dataPlace.city,
            zip_code: dataPlace.zip_code,
            region: dataPlace.region,
            lat: dataPlace.latitude,
            lng: dataPlace.longitude,
            private: false,
            indoor: false,
          },
        },
        { include: ['activity_place'] },
      );
      res.status(201).send('newActivity well created');
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = newActivityController;
