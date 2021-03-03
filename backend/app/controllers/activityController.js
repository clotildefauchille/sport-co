const { Activity } = require('../models');

const activityController = {

    getLastActivity: async (req, res) => {
        let page = parseInt(req.query.page);
        if(!page) {
            page = 1;
        };
        const numCardInPage = 4;
        try {
          const activities = await Activity.findAll({
            where: {
                activity_status_id: 3
            },
            include: ["activity_statut", "sport"],
            offset: (page-1) * numCardInPage,
            limit: numCardInPage,
            //order: [['created_at', 'DESC']],
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

}

module.exports = activityController;