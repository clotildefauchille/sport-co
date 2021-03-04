import { SAVE_LAST_ACTIVITIES } from 'src/actions/cards';

const initialState = [];

const cards = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LAST_ACTIVITIES:
      return action.activities;
    default:
      return state;
  }
};

export default cards;
