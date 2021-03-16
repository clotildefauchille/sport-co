const bcrypt = require('bcrypt');
const saltRounds = 10;

const { User, UserPlace } = require('../models');

const Sequelize = require('sequelize');
const sequelize = require('../database.js');
const { request } = require('express');

const registrationController = {
  addUser: async (req, res) => {
    const data = req.body;
    console.log(data);
    const emailChecker = await User.findOne({
      where: {
        email: data.email,
      },
    });
    const pseudoChecker = await User.findOne({
      where: {
        pseudo: data.pseudo,
      },
    });

    if (!emailChecker && !pseudoChecker) {
      const hashPassword = await bcrypt.hash(data.password, saltRounds);
      try {
        const newUser = await User.create(
          {
            pseudo: data.pseudo,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            password: hashPassword,
            avatar: '',
            reward_count: 0,
            admin: false,
            user_grade_id: 1,
            user_place: {
              city: data.place.city,
              address: `${data.place.number} ${data.place.street}`,
              department: data.place.region,
              region: '',
              google_place_key: '',
              zip_code: data.place.postal_code,
              lat: data.place.latitude,
              lng: data.place.longitude,
            },
          },
          {
            include: ['user_place'],
          },
        );
        res.status(200).json({
          result: 'Inscription effectuée!',
          user: {
            pseudo: newUser.pseudo,
            firsname: newUser.firstname,
            lastname: newUser.lastname,
            id: newUser.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else if (emailChecker) {
      res.status(409).json({
        error: 'mail',
      });
    } else {
      res.status(409).json({
        error: 'pseudo',
      });
    }
  },
};

module.exports = registrationController;
