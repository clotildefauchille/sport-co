
const { formatDate, formatTime } = require('./formatDate');

const formatActivities = (activities) => {
    const formatedaActivities = [];
    activities.forEach((activity) => {
        formatedaActivities.push({
            id: activity.id,
            city: activity.activity_place.city,
            title: activity.title,
            date: formatDate(activity.date),
            description: activity.description,
            illustration: activity.illustration,
            time: formatTime(activity.time),
            duration: formatTime(activity.duration),
            pseudo: activity.creator.pseudo,
        });
    })
    return formatedaActivities;
};

const formatActivitiesFilterByDistance = (activities, distance) => {
    const formatedaActivities = [];
    activities.forEach((activity) => {
      if (activity.activity_place.dataValues.distance < distance) {
        formatedaActivities.push({
          id: activity.id,
          city: activity.activity_place.city,
          title: activity.title,
          date: formatDate(activity.date),
          description: activity.description,
          illustration: activity.illustration,
          time: formatTime(activity.time),
          duration: formatTime(activity.duration),
          pseudo: activity.creator.pseudo,
          distance: activity.activity_place.dataValues.distance,
        });
      }
    })
    return formatedaActivities;
};

module.exports = { formatActivities, formatActivitiesFilterByDistance };
