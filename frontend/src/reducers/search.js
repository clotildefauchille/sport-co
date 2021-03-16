import { SAVE_SEARCHED_ACTIVITIES, SAVE_ALL_SEARCHED_ACTIVITIES } from 'src/actions/search';

const initialState = {
  count: 0,
  activities: [],
};

const search = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SEARCHED_ACTIVITIES:
      return {
        ...state,
        count: action.data.count,
        activities: [...action.data.activities],
      };
      case SAVE_ALL_SEARCHED_ACTIVITIES: 
      return {
        ...state,
        count: action.data.count,
        activities: [...state.activities, ...action.data.activities],
      };
    default:
      return state;
  }
};

export default search;
