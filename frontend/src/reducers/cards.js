import { SAVE_ACTIVITIES, SAVE_ALL_ACTIVITIES } from 'src/actions/cards';

const initialState = [];

const cards = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ACTIVITIES:
      return [...action.activities];
      case SAVE_ALL_ACTIVITIES: 
      return [...state, ...action.activities];
    default:
      return state;
  }
};

export default cards;
