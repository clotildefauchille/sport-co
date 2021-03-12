import { SAVE_ACTTIVITY, UPDATE_STATUS, ERROR_STATUS } from 'src/actions/details';

const initialState = {
  classname: 'join',
  message: 'Rejoindre',
};

const details = (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR_STATUS:
      return {
        ...state,
        classname: 'already',
        message: 'Vous participez déjâ',
      };
    case UPDATE_STATUS:
      return {
        ...state,
        classname: 'success',
        message: 'Inscription validée',
        participant_count: state.participant_count + 1,
      };
    case SAVE_ACTTIVITY:
      return {
        ...initialState,
        ...action.data,
      };
    default:
      return state;
  }
};

export default details;
