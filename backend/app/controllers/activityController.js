const { Activity, Sport, ActivityStatut, ActivityPlace } = require("../models");

const { formatDate, formatTime } = require("../selectors/formatDate");

const dayjs = require("dayjs");
require("dayjs/locale/fr");
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

const Sequelize = require("sequelize");
const sequelize = require("../database.js");
const { QueryTypes } = require("sequelize");

const activityController = {
  defaultNumCardInPage: 8,
  defaultLimitDistance: 10, // en km

  getLastActivity: async (req, res) => {
    console.log("----------> getLastActivity");
    let page = parseInt(req.query.page);
    if (!page) {
      page = 1;
    }
    try {
      const activities = await Activity.findAll({
        // raw: true,
        where: {
          activity_status_id: 3,
        },
        include: ["activity_statut", "sport", "activity_place"],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [["created_at", "DESC"]],
      });

      /*
      piste à test pour formatage dans sequelize
      attributes: [
          'id',
          [sequelize.fn('strftime', sequelize.col('date'), '%Y-%m-%d'), 'date']
        ],
      */

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
      } else {
        activities.forEach((activity) => {
          // recupération des data avec activity.dataValues
          
          const formatedaActivity = activity.dataValues;
          formatedaActivity.time = formatTime(formatedaActivity.time);
          formatedaActivity.duration = formatTime(formatedaActivity.duration);
          formatedaActivity.date = formatDate(formatedaActivity.date);
          

          /*
          // ajout raw: true,
          activity.time = formatTime(activity.time);
          activity.duration = formatTime(activity.duration);
          activity.date = formatDate(activity.date);
          */
          
          return activity;
        });
        res.json(activities);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getActivitiesByUserLocalisation: async (req, res) => {
    console.log("----------> getActivitiesByUserLocalisation");
    const { lat, lng } = req.query;
    let page = parseInt(req.query.page);

    // coordonnées Bagnolet
    // const lat = 48.87370931491529;
    // const lng = 2.4195904982846748;
    // coordonnées Montpellier
    // const lat = 43.61125;
    // const lng = 3.8707581;

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

      const query = `
        SELECT
            lat, 
            lng,
            distance,
            city,
            activity.id,
            activity.title,
            activity.date,
            activity.description,
            activity.illustration,
            activity.time,
            activity.duration,     
            "user".pseudo
        FROM (
            SELECT id, lat, lng, city, (
                SQRT(
                    POW (
                        (("lng" * pi() / 180) - ( ${lng} * pi() / 180))
                        * COS((( "lat" * pi() / 180) + ( ${lat} * pi() / 180)) / 2), 2
                    ) 
                    + POW (
                        ("lat" * pi() / 180) - ( ${lat} * pi() / 180), 2
                    )
                ) * 6371
            ) AS distance
            FROM activity_place
        ) AS activity_place
        INNER JOIN activity ON activity.activity_place_id = activity_place.id
        INNER JOIN "user" ON "user".id = activity.creator_id
        WHERE distance <= ${
          activityController.defaultLimitDistance
        } AND activity.activity_status_id = 3
        ORDER BY distance
        LIMIT ${activityController.defaultNumCardInPage} 
        OFFSET ${(page - 1) * activityController.defaultNumCardInPage}
        ;`;
      const activities = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
        return;
      }
      activities.forEach((activity) => {
        // /!\ avec query SQL pas de activity.dataValues
        activity.time = formatTime(activity.time);
        activity.duration = formatTime(activity.duration);
        activity.date = formatDate(activity.date);
        return activity;
      });
      res.json(activities);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getActivitesByUserLocalisationAndSport: async (req, res) => {
    console.log("----------> getActivitesByUserLocalisationAndSport");
    const { lat, lng } = req.query;
    let page = parseInt(req.query.page);
    const { sportId } = req.params;

    if (!lat || !lng) {
      res.status(404).json("Error : can't find Activity without Localisation");
      return;
    }

    console.log("sportId  ------> ", sportId);
    if (!sportId) {
      res
        .status(404)
        .json("Error : can't filter Activity by sport without sport");
      return;
    }

    if (!page) {
      page = 1;
    }

    try {
      const query = `
        SELECT
            lat, 
            lng,
            distance,
            city,
            activity.id,
            activity.title,
            activity.date,
            activity.description,
            activity.illustration,
            activity.time,
            activity.duration,     
            "user".pseudo,
            sport.name AS sport
        FROM (
            SELECT id, lat, lng, city, (
                SQRT(
                    POW (
                        (("lng" * pi() / 180) - ( ${lng} * pi() / 180))
                        * COS((( "lat" * pi() / 180) + ( ${lat} * pi() / 180)) / 2), 2
                    ) 
                    + POW (
                        ("lat" * pi() / 180) - ( ${lat} * pi() / 180), 2
                    )
                ) * 6371
            ) AS distance
            FROM activity_place
        ) AS activity_place
        INNER JOIN activity ON activity.activity_place_id = activity_place.id
        INNER JOIN "user" ON "user".id = activity.creator_id
        FULL JOIN sport ON sport.id=activity.sport_id
        WHERE distance <= ${
          activityController.defaultLimitDistance
        } AND activity.activity_status_id = 3 AND activity.sport_id=${sportId}
        ORDER BY distance
        LIMIT ${activityController.defaultNumCardInPage} 
        OFFSET ${(page - 1) * activityController.defaultNumCardInPage}
        ;`;
      const activities = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (!activities) {
        res.status(404).json("Error : can't find Activity");
        return;
      }
      activities.forEach((activity) => {
        // /!\ avec query SQL pas de activity.dataValues
        activity.time = formatTime(activity.time);
        activity.duration = formatTime(activity.duration);
        activity.date = formatDate(activity.date);
        return activity;
      });
      res.json(activities);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  /*
  getActivityByDepartment: async (req, res) => {
    console.log("----------> getActivityByDepartment");
    let page = parseInt(req.query.page);
    let department = req.params.department;

    if (!page) {
      page = 1;
    }

    if (!department) {
      res.status(404).json("Error : empty departement param");
      return;
    }

    try {
      const activities = await Activity.findAll({
        include: [
          {
            model: ActivityStatut,
            as: "activity_statut",
            attributes: ["name"],
            where: {
              name: "ongoing",
            },
          },
          {
            model: ActivityPlace,
            as: "activity_place",
            attributes: ["city"],

            // doc operators comparisons :
            // https://sequelize.org/v4/manual/tutorial/querying.html
            where: {
              department: {
                [Sequelize.Op.iLike]: `%${department}%`,
              },
            },
          },
        ],
        offset: (page - 1) * activityController.defaultNumCardInPage,
        limit: activityController.defaultNumCardInPage,
        order: [["date"]],
      });
      if (!activities) {
        res.status(404).json("Error : can't find Activity");
      } else {
        res.json(activities);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
  */

};

module.exports = activityController;

// dayjs().format();
