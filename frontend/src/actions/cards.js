export const FETCH_LAST_ACTIVITIES = 'FETCH_LAST_ACTIVITIES';
export const FETCH_USER_ACTIVITIES = 'FETCH_USER_ACTIVITIES';
export const SAVE_ACTIVITIES = 'SAVE_ACTIVITIES';
export const SAVE_USER_ACTIVITIES = 'SAVE_USER_ACTIVITIES';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const CLEAR_USER_ACTIVITIES = 'CLEAR_USER_ACTIVITIES';

export const fetchLastActivities = () => ({
  type: FETCH_LAST_ACTIVITIES,
});

export const fetchUserActivities = () => ({
  type: FETCH_USER_ACTIVITIES,
});

export const saveActivities = (activities) => ({
  type: SAVE_ACTIVITIES,
  activities,
});

export const saveUserActivities = (activities) => ({
  type: SAVE_USER_ACTIVITIES,
  activities,
});

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
});

export const clearUserActivities = () => ({
  type: CLEAR_USER_ACTIVITIES,
});



