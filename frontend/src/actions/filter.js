export const FETCH_FILTER_SPORTS = 'FETCH_FILTER_SPORTS';
export const SAVE_FILTER_SPORT = 'SAVE_FILTER_SPORT';

export const fetchFilterSports = () => ({
  type: FETCH_FILTER_SPORTS,
});

export const saveFilterSports = (data) => ({
  type: SAVE_FILTER_SPORT,
  data,
});