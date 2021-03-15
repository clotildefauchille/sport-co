import { SAVE_MESSAGES, SAVE_NEW_MESSAGES } from 'src/actions/messages';

const initialState = [];

const messages = (state = initialState, action = {}) => {
  switch (action.type) {

    case SAVE_MESSAGES:
      return [...action.data];

    case SAVE_NEW_MESSAGES:
      return [...state, action.message];

    default:
      return state;
  }
};

export default messages;
