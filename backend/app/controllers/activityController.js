const { Activity, Sport, ActivityStatut, ActivityPlace } = require('../models');
const { formatActivities, formatActivitiesFilterByDistance } = require('../selectors/formatActivities');

//const Sequelize = require("sequelize");
const sequelize = require('../database.js');
const { QueryTypes } = require('sequelize');

const activityController = {
  defaultNumCardInPage: 12,
  defaultLimitDistance: 100, // en km

  getLastActivity: async (req, res) => {
    console.log('----------> getLastActivity');

    let page = parseInt(req.query.page);
    if (!page) {
      page = 1;
    }

    try {
      const activities = await Activity.findAll({
        where: {
          activity_status_id: 3,
        },
        include: ['activity_statut', 'sport', 'activity_place', 'creator'],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [['created_at', 'DESC']],
      });

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
      } else {
        formatedaActivities = formatActivities(activities);
        res.json(formatedaActivities);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },


  getActivitiesByUserLocalisation: async (req, res) => {
    console.log('----------> getActivitiesByUserLocalisation2');

    let lat = parseFloat(req.query.lat);
    let lng = parseFloat(req.query.lng);
    let page = parseInt(req.query.page);

    if (!lat || !lng) {
      res.status(404).json("Error : can't find Activity without Localisation");
    }
    if (!page) {
      page = 1;
    }

    try {
      /**
       * Formule mathématique pour le calcul de distance entre 2 points A et B sur terre avec lat et lng,
       * 6371 est le rayon de la terre en km :
       *
       * x = (lngB - lngA) * cos((latA + latB)/2)
       * y = latA - latB
       * distance = sqrt(pow(x) + pow(y)) * 6371
       *
       * mais /!\ il faut convertir et remplacer les lat et lng en radian :
       * latInRad = lat * pi() / 180
       * lngInRad = lng * pi() / 180
       *
       * besoin d'utiliser une sous requete avec alias pour calcul et recup la distance :
       * https://sql.sh/cours/sous-requete
       *
       * ADAPTATION SQL :
       */

      const distanceCalcul = sequelize.literal(`(
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
      )`);

      const activities = await Activity.findAll({
        where: {
          activity_status_id: 3,
        },
        include: [
          'activity_statut',
          'sport',
          'creator',
          {
            association: 'activity_place',
            attributes: {
              include: [[distanceCalcul, 'distance']],
            },
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [sequelize.literal(`"activity_place.distance"`)],
      });

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
        return;
      }

      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(404).json("Error : can't find Activity");
        return;
      }

      res.json(formatedaActivities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },


  getActivitesByUserLocalisationAndSport: async (req, res) => {
    console.log('----------> getActivitesByUserLocalisationAndSport');

    let lat = parseFloat(req.query.lat);
    let lng = parseFloat(req.query.lng);
    let page = parseInt(req.query.page);
    let sportId = parseInt(req.params.sportId);

    if (!lat || !lng) {
      res.status(404).json("Error : can't find Activity without Localisation");
    }
    if (!page) {
      page = 1;
    }
    
    console.log("sportId  ------> ", sportId);
    if (!sportId) {
      res
        .status(404)
        .json("Error : can't filter Activity by sport without sport");
      return;
    }

    try {
      const distanceCalcul = sequelize.literal(`(
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
      )`);

      const activities = await Activity.findAll({
        where: {
          activity_status_id: 3,
          sport_id: sportId,
        },
        include: [
          'activity_statut',
          'sport',
          'creator',
          {
            association: 'activity_place',
            attributes: {
              include: [[distanceCalcul, 'distance']],
            },
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [sequelize.literal(`"activity_place.distance"`)],
      });

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
        return;
      }

      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(404).json("Error : can't find Activity");
        return;
      }

      res.json(formatedaActivities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = activityController;
