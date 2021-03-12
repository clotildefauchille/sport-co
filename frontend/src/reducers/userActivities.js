import { SAVE_USER_ACTIVITIES } from 'src/actions/cards';

const initialState = {
  list: [],
  ids: [],
};

const userActivities = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_ACTIVITIES:
      console.log()
      return {
        ...state,
        list: [...action.activities],
        ids: [...action.activities.map(activity => activity.id)],
      };
    default:
      return state;
  }
};

export default userActivities;

