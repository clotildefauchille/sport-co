export const FETCH_DATA_ACTTIVITY = 'FETCH_DATA_ACTTIVITY';
export const SAVE_ACTTIVITY = 'SAVE_ACTTIVITY';
export const JOIN_ACTIVITY = 'JOIN_ACTIVITY';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const ERROR_STATUS = 'ERROR_STATUS';

export const fetchDataActivity = (id) => ({
  type: FETCH_DATA_ACTTIVITY,
  id,
});

export const saveActivity = (data) => ({
  type: SAVE_ACTTIVITY,
  data,
});

export const joinActivity = () => ({
  type: JOIN_ACTIVITY,
});

export const updateStatus = () => ({
  type: UPDATE_STATUS,
});

export const errorStatus = () => ({
  type: ERROR_STATUS,
});
