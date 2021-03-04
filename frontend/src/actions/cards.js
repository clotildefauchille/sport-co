export const FETCH_LAST_ACTIVITIES = 'FETCH_LAST_ACTIVITIES';
export const SAVE_LAST_ACTIVITIES = 'SAVE_LAST_ACTIVITIES';

export const fetchLastActivities = () => ({
  type: FETCH_LAST_ACTIVITIES,
});

export const saveLastActivities = (activities) => ({
  type: SAVE_LAST_ACTIVITIES,
  activities,
});
