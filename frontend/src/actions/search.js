export const FETCH_ACTIVITIES_BY_LOCALISATION = 'FETCH_ACTIVITIES_BY_LOCALISATION';
export const FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS = 'FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS';
export const SAVE_SEARCHED_ACTIVITIES = 'SAVE_SEARCHED_ACTIVITIES';
export const SAVE_ALL_SEARCHED_ACTIVITIES = 'SAVE_ALL_SEARCHED_ACTIVITIES,';

export const fetchActivitiesByLocalisation = (query) => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION,
  query,
});

export const fetchActivitiesByLocalisationAndSports = (query) => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION_AND_SPORTS,
  query,
});

export const saveSearchedActivities = (activities) => ({
  type: SAVE_SEARCHED_ACTIVITIES,
  activities,
}); 

export const saveAllSearchedActivities = (activities) => ({
  type: SAVE_ALL_SEARCHED_ACTIVITIES,
  activities,
});




