export const FETCH_LAST_ACTIVITIES = 'FETCH_LAST_ACTIVITIES';
export const SAVE_ACTIVITIES = 'SAVE_ACTIVITIES';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';

export const fetchLastActivities = () => ({
  type: FETCH_LAST_ACTIVITIES,
});

export const saveActivities = (activities) => ({
  type: SAVE_ACTIVITIES,
  activities,
});

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
});
