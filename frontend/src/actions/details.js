
export const FETCH_DATA_ACTTIVITY = 'FETCH_DATA_ACTTIVITY';
export const SAVE_ACTTIVITY = 'SAVE_ACTTIVITY';

export const fetchDataActivity = () => ({
    type: FETCH_DATA_ACTTIVITY,
}); 

export const saveActivity = (data) => ({
  type: SAVE_ACTTIVITY,
  data
}); 
