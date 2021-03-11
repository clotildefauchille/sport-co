export const FETCH_DATA_ACTTIVITY = 'FETCH_DATA_ACTTIVITY';
export const SAVE_ACTTIVITY = 'SAVE_ACTTIVITY';
export const JOIN_ACTIVITY = 'JOIN_ACTIVITY';

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
