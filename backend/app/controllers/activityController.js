const { Activity, Sport, ActivityStatut, ActivityPlace } = require("../models");

const Sequelize = require("sequelize");
const sequelize = require("../database.js");
const { QueryTypes } = require("sequelize");

const activityController = {
  numCardInPage: 3,

  getLastActivity: async (req, res) => {
    let page = parseInt(req.query.page);
    if (!page) {
      page = 1;
    }
    try {
      const activities = await Activity.findAll({
        where: {
          activity_status_id: 3,
        },
        include: ["activity_statut", "sport", "activity_place"],
        offset: (page - 1) * activityController.numCardInPage,
        limit: activityController.numCardInPage,
        order: [["created_at", "DESC"]],
      });
      if (!activities) {
        res.defaultStatus(404).json("Error : can't find Activity");
      } else {
        res.json(activities);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getPlaceByUserLocalisation: async (req, res) => {
    console.log("-------> getActivityByPlace 000");

    const { lat, lng } = req.query;
    let page = parseInt(req.query.page);

    console.log("----> ", lat, lng);

    // coordonnées Bagnolet
    // const lat = 48.87370931491529;
    // const lng = 2.4195904982846748;
    // coordonnées Montpellier
    // const lat = 43.61125;
    // const lng = 3.8707581;

    if (!page) {
      page = 1;
    }

    try {
      const dist = 1000; // en km

      /*
      const query = `
        SELECT * FROM (
            SELECT *, 
                (
                    (
                        (
                            acos( sin(( ${lat} * pi() / 180))
                            * sin(( "lat" * pi() / 180)) + cos(( ${lat} * pi() /180 ))
                            * cos(( "lat" * pi() / 180)) * cos((( ${lng} - "lng") * pi()/180)))
                        ) * 180/pi()
                    ) * 60 * 1.1515 * 1.609344
                )
            as distance FROM "activity_place"
        ) activity_place
        INNER JOIN activity ON activity.activity_place_id = activity_place.id
        WHERE distance <= ${dist} AND activity.activity_status_id = 3
        ORDER BY distance;
     `;
     */
      /*
    activity.id,
            activity_place.city,
            activity.title,
            activity.date,
            activity.description,
            activity.illustration  
            */

      const query = `
        SELECT
            activity.id,
            activity_place.city,
            activity.title,
            activity.date,
            activity.description,
            activity.illustration,
            distance
        FROM (
            SELECT *, 
                (
                    (
                        (
                            acos( sin(( ${lat} * pi() / 180))
                            * sin(( "lat" * pi() / 180)) + cos(( ${lat} * pi() /180 ))
                            * cos(( "lat" * pi() / 180)) * cos((( ${lng} - "lng") * pi()/180)))
                        ) * 180/pi()
                    ) * 60 * 1.1515 * 1.609344
                )
            as distance FROM "activity_place"
        ) activity_place
        INNER JOIN activity ON activity.activity_place_id = activity_place.id
        WHERE distance <= ${dist} AND activity.activity_status_id = 3
        
        ORDER BY distance
        LIMIT ${activityController.numCardInPage} 
        OFFSET ${(page - 1) * activityController.numCardInPage}
        ;`;

      // test :
      // ORDER BY distance;
      // ORDER BY activity.date;
      // INNER JOIN activity ON activity_place.id = activity.activity_place_id
      // WHERE distance <= ${dist} AND activity.activity_status_id = 3
      // JOIN activity ON activity_place_id = activity.activity_place_id
      // LIMIT ${activityController.numCardInPage};

      const activitiesPlaces = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (!activitiesPlaces) {
        res.defaultStatus(404).json("Error : can't find Activity");
        return;
      }

      res.json(activitiesPlaces);

      /*
      const formatedResult = activitiesPlaces.map((activity) => {
        return {
          id: activity.id,
          address: activity.address,
          distance: activity.distance,
          title: activity.title,
          date: activity.date,
          city: activity.city,
          activity_place_id: activity.activity_place_id,
          activity_status_id: activity.activity_status_id,
        };
      });
      res.json(formatedResult);
      */
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getActivityByDepartment: async (req, res) => {
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
        offset: (page - 1) * activityController.numCardInPage,
        limit: activityController.numCardInPage,
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
};

module.exports = activityController;
