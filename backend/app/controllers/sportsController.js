
const { Sequelize } = require('sequelize');
const sequelize = require('../database.js');
const Op = Sequelize.Op;

const { Sport } = require('../models');
//const { distanceCalcul } = require('../selectors/distanceCalcul');

const sportsController = {

  getSports: async (req, res) => {
    console.log('----------> getSport');
    try {
      const sports = await Sport.findAll({
          /*
        where: {
          activity_status_id: 3,
        },
        include: ['activity_statut', 'sport', 'activity_place', 'creator'],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [['created_at', 'DESC']],
        */
      });

      if (!sports) {
        res.status(204).json("Error : can't find Sports");
      } else {
        //console.log('sports', sports);
        //formatedaActivities = formatActivities(activities);
        res.json(sports);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },


  getSportsByLocalisation: async (req, res) => {
    console.log('----------> getSportsByLocalisation');

    let lat = parseFloat(req.query.lat);
    let lng = parseFloat(req.query.lng);

    if (!lat || !lng) {
      res.status(404).json("Error : can't find Sports without Localisation");
    }

    console.log(lat, lng);

    const distanceCalculSQL = `(
      SELECT (
        SQRT(
          POW (
            (("lng" * pi() / 180) - ( ${lng} * pi() / 180))
              * COS((( "lat" * pi() / 180) + ( ${lat} * pi() / 180)) / 2), 2
            ) 
            + POW (
              ("lat" * pi() / 180) - ( ${lat} * pi() / 180), 2
            )
          ) * 6371
        )
        FROM activity_place
        WHERE activity_place_id = activity_place.id
      )`;

    try {
      const sports = await Sport.findAll({

        include: [
          {
            association: 'activities',
            attributes: ['id'],
            /*
            attributes: {
              include: [[ sequelize.literal(distanceCalculSQL), 'distance']],
            },
            */
            
            where: sequelize.where(
              sequelize.literal(distanceCalculSQL), {
                    [Op.lte]: 10
                }
            ),
            
          },
        ],

        /*
        where: {
          activity_status_id: 3,
        },
        include: ['activity_statut', 'sport', 'activity_place', 'creator'],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [['created_at', 'DESC']],
        */

        order: ['id'],
      });

      if (!sports) {
        res.status(204).json("Error : can't find Sports");
      } else {
        //console.log('sports', sports);
        //formatedaActivities = formatActivities(activities);
        res.json(sports);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = sportsController;
