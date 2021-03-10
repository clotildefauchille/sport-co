import { SAVE_ACTTIVITY } from 'src/actions/details';

const initialState = {};

const details = (state = initialState, action = {}) => {
  switch (action.type) {

    case SAVE_ACTTIVITY:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

export default details;
