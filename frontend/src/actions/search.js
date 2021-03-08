export const FETCH_ACTIVITIES_BY_LOCALISATION = 'FETCH_ACTIVITIES_BY_LOCALISATION';
export const SAVE_SEARCHED_ACTIVITIES = 'SAVE_SEARCHED_ACTIVITIES';

export const fetchActivitiesByLocalisation = (query) => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION,
  query,
});

export const saveSearchedActivities = (activities) => ({
  type: SAVE_SEARCHED_ACTIVITIES,
  activities,
}); 