const { Activity } = require('../models');

const activityController = {

    getLastActivity: async (req, res) => {
        try {
          const activities = await Activity.findAll({
            include: "sport",
            offset: 0,
            limit: 4,
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

}

module.exports = activityController;