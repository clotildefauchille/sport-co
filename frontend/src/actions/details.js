export const FETCH_DATA_ACTTIVITY = 'FETCH_DATA_ACTTIVITY';
export const SAVE_ACTTIVITY = 'SAVE_ACTTIVITY';

export const fetchDataActivity = (id) => ({
  type: FETCH_DATA_ACTTIVITY,
  id,
});

export const saveActivity = (data) => ({
  type: SAVE_ACTTIVITY,
  data,
});
