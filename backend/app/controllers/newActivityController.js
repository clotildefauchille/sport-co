const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const { Activity, User } = require('../models');

const newActivityController = {
  createNewActivity: async (req, res) => {
    console.log('controller');
    try {
      const sport_id = parseInt(req.body.sport_id);
      const min_participant = parseInt(req.body.min_participant);

      const { title, description, creator_id, date, time, duration } = req.body;
      const dataPlace = req.body.place;
      console.log('---------->dataplace', dataPlace);
      console.log('------------------>zipcode', dataPlace.zip_code);
      console.log('------------>', sport_id);


      
      // On crée la nouvelle activité :
      const newActivity = await Activity.create(

        {
          title,
          description,
          date,
          time,
          duration,
          min_participant,
          creator_id,
          activity_status_id: 3,
          participant_count: 1,
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


      const user = await User.findByPk(creator_id);

      // console.log('---------->user', user.dataValues.reward_count);
      const new_reward_count = user.dataValues.reward_count + 100;
      // console.log('---------->new_reward_count', new_reward_count);
      user.reward_count = new_reward_count;
      await user.save();
      // console.log('------->user after', user)

      await newActivity.addUser(user);

      res.status(201).send('newActivity well created');
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = newActivityController;
