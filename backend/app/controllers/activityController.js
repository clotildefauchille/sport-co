const { Activity, Sport, ActivityStatut, ActivityPlace } = require('../models');

const { distanceCalculSQL } = require('../selectors/distanceCalculSQL');
const { formatActivities, formatActivity, formatActivitiesFilterByDistance } = require('../selectors/formatActivities');

const Sequelize = require("sequelize");
const sequelize = require('../database.js');
const Op = Sequelize.Op;

const activityController = {
  defaultNumCardInPage: 8,
  defaultLimitDistance: 100, // en km

  getLastActivities: async (req, res) => {
    console.log('----------> getLastActivity');

    let page = parseInt(req.query.page);

    if (!page) {
      page = 1;
    }
    try {
      const activities = await Activity.findAndCountAll({
        where: {
          activity_status_id: 3,
        },
        attributes: {
          exclude: [
            'activity_status_id',
            'activity_place_id',
            'sport_id',
            'creator_id',
          ],
        },
        include: [
          {
            association: 'sport',
            attributes: ['name', 'icon'],
          },
          {
            association: 'activity_statut',
            attributes: {
              exclude: ['id'],
            },
          },
          {
            association: 'activity_place',
            attributes: ['city'],
          },
          {
            association: 'creator',
            attributes: ['pseudo'],
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [['created_at', 'DESC']],
      });
      if (!activities) {
        res.status(204).json("Error : can't find Activity");
      } else {
        formatedaActivities = formatActivities(activities.rows);
        if(formatedaActivities.length < 1) {
          res.status(204).json("Error : can't find Activity");
          return;
        }
        res.json({activities: formatedaActivities, count: activities.count});
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },


  
  getOneActivity: async (req, res) => {
    console.log('----------> getOneActivity');

    let id = parseInt(req.params.id);

    try {
      const activity = await Activity.findOne({
        where: {
          id: id,
        },
        attributes: { 
          exclude: ['activity_status_id','activity_place_id','sport_id','creator_id'] 
        },
        include: [
          {
            association: 'activity_statut',
            attributes: {
              exclude: ['id']
            },
          },
          {
            association: 'sport',
            attributes: ['name','icon']
          },
          {
            association: 'activity_place',
            attributes: { 
              exclude: ['id','google_place_key','region']
            },
          },
          {
            association: 'creator',
            attributes: ['pseudo','firstname','lastname','avatar','reward_count']
          },
        ],
      });
      if (!activity) {
        res.status(204).json("Error : can't find Activity");
      } else {
        formatedaActivity = formatActivity(activity);
        if(!formatedaActivity) {
          res.status(204).json("Error : can't find Activity");
          return;
        }
        res.json(formatedaActivity);
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
      const activities = await Activity.findAndCountAll({
        attributes: { 
          // exclude: ['activity_status_id','activity_place_id','sport_id','creator_id'] 
          exclude: ['activity_place_id','sport_id','creator_id'] 
        },
        include: [
          {
            association: 'sport',
            attributes: ['name','icon']
          },
          {
            association: 'activity_statut',
            attributes: {
              exclude: ['id']
            },
          },
          {
            association: 'activity_place',
            attributes: ['city']
          },
          {
            association: 'creator',
            attributes: ['pseudo']
          },
          {
            association: 'activity_place',
            /*
            attributes: {
              include: [[sequelize.literal(distanceCalculSQL(lat, lng)), 'distance']],
            },
            */
          },
        ],
        where: {
          [Op.and]: [
            sequelize.where(
              sequelize.literal(distanceCalculSQL(lat, lng)), {
                [Op.lte]: activityController.defaultLimitDistance
              },
            ),
            {
              activity_status_id: 3,
            }
          ]
        },
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        //order: [sequelize.literal(`"activity_place.distance"`)],
        order: ['date'],
      });

      if (!activities) {
        res.status(204).json("Error : can't find Activity");
        return;
      }

      //formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      /*
      if(formatedaActivities.length < 1) {
        res.status(204).json("Error : can't find Activity");
        return;
      }
      */
      formatedaActivities = formatActivities(activities.rows);
      res.json({ activities: formatedaActivities, count: activities.count });
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
      const activities = await Activity.findAndCountAll({
        include: [
          'activity_statut',
          'creator',
          'sport',
          {
            association: 'activity_place',
            /*
            attributes: {
              include: [[sequelize.literal(distanceCalculSQL(lat, lng)), 'distance']],
            },
            */
          },
        ],
        where: {
          [Op.and]: [
            sequelize.where(
              sequelize.literal(distanceCalculSQL(lat, lng)), {
                [Op.lte]: activityController.defaultLimitDistance
              },
            ),
            {
              activity_status_id: 3,
            },
            {
              sport_id: {
                [Op.or]: sports
              }
            }
          ]
        },
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        //order: [sequelize.literal(`"activity_place.distance"`)],
        order: ['date'],
      });

      if (!activities) {
        res.status(204).json("Error : can't find Activity");
        return;
      }
      /*
      formatedaActivities = formatActivitiesFilterByDistance(activities, activityController.defaultLimitDistance);
      if(formatedaActivities.length < 1) {
        res.status(204).json("Error : can't find Activity");
        return;
      }
      */
      //formatedaActivities = formatActivities(activities);
      //res.json(formatedaActivities);
      formatedaActivities = formatActivities(activities.rows);
      res.json({ activities: formatedaActivities, count: activities.count });

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }, 

};

module.exports = activityController;
