const { Activity, Sport, ActivityStatut, ActivityPlace } = require('../models');

const activityController = {

    numCardInPage: 8,

    getLastActivity: async (req, res) => {
        let page = parseInt(req.query.page);
        if(!page) {
            page = 1;
        };
        try {
          const activities = await Activity.findAll({
            where: {
                activity_status_id: 3
            },
            include: ["activity_statut", "sport"],
            offset: (page-1) * activityController.numCardInPage,
            limit: activityController.numCardInPage,
            order: [['created_at', 'DESC']],
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

    getActivityByPlace: async (req, res) => {
        let page = parseInt(req.query.page);
        /*
        let lat = parseInt(req.query.lat);
        let lng = parseInt(req.query.lng);
        */
        // let lat = 48.87370931491529; 
        // let lng = 2.4195904982846748;
        let department = 'Seine-Saint-Denis';

        if(!page) {
            page = 1;
        };

        try {
           const activities = await Activity.findAll({

            include: [
                {
                    model: ActivityStatut,
                    as: "activity_statut",
                    attributes: ['name'],
                    where: {
                        name: 'ongoing'
                    }
                },
                {
                    model : ActivityPlace,
                    as: "activity_place",
                    //attributes: ['city'],
                    where: {department: department}
                }
            ],
            offset: (page-1) * activityController.numCardInPage,
            limit: activityController.numCardInPage,
            order: [['created_at', 'DESC']],
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
    }

}

module.exports = activityController;