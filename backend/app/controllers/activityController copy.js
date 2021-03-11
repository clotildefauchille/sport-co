const { Activity, Sport, ActivityStatut, ActivityPlace } = require('../models');
const { formatActivities, formatActivitiesFilterByDistance } = require('../selectors/formatActivities');
const { distanceCalculSQL } = require('../selectors/distanceCalculSQL');

const Sequelize = require("sequelize");
const sequelize = require('../database.js');
const Op = Sequelize.Op;

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
        res.status(204).json("Error : can't find Activity");
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
              include: [[sequelize.literal(distanceCalculSQL(lat, lng)), 'distance']],
            },
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [sequelize.literal(`"activity_place.distance"`)],
      });

      if (!activities) {
        res.status(204).json("Error : can't find Activity");
        return;
      }

      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(204).json("Error : can't find Activity");
        return;
      }

      res.json(formatedaActivities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }, 





  getActivitesByUserLocalisationAndSports: async (req, res) => {
    console.log('----------> getActivitesByUserLocalisationAndSports');

    let lat = parseFloat(req.query.lat);
    let lng = parseFloat(req.query.lng);
    let page = parseInt(req.query.page);
    let sports = req.query.sports.split(',');

    sports.map(sport => parseInt(sport));

    console.log('sports2', sports);

    if (!lat || !lng) {
      res.status(404).json("Error : can't find Activity without Localisation");
    }
    if (!page) {
      page = 1;
    }

    try {
      const activities = await Activity.findAll({
        where: {
          activity_status_id: 3,
        },
        include: [
          'activity_statut',
          'creator',
          {
            association: 'sport',
            where: {
              id: {
                [Op.or]: sports
              }
            } 
          },
          {
            association: 'activity_place',
            attributes: {
              include: [[sequelize.literal(distanceCalculSQL(lat, lng)), 'distance']],
            },
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [sequelize.literal(`"activity_place.distance"`)],
      });

      if (!activities) {
        res.status(204).json("Error : can't find Activity");
        return;
      }

      
      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(204).json("Error : can't find Activity");
        return;
      }
      
      res.json(formatedaActivities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }, 





  









/*

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
        res.status(204).json("Error : can't find Activity");
        return;
      }

      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(204).json("Error : can't find Activity");
        return;
      }

      res.json(formatedaActivities);
      
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
  */

};

module.exports = activityController;
