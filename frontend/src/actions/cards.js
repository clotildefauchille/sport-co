export const FETCH_LAST_ACTIVITIES = 'FETCH_LAST_ACTIVITIES';
export const FETCH_ACTIVITIES_BY_LOCALISATION = 'FETCH_ACTIVITIES_BY_LOCALISATION';
export const SAVE_ACTIVITIES = 'SAVE_ACTIVITIES';

export const fetchLastActivities = () => ({
  type: FETCH_LAST_ACTIVITIES,
});

export const fetchActivitiesByLocalisation = (query) => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION,
  query,
});

export const saveActivities = (activities) => ({
  type: SAVE_ACTIVITIES,
  activities,
});
