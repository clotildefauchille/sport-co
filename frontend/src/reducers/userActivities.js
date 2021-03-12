import { SAVE_USER_ACTIVITIES, CLEAR_USER_ACTIVITIES } from 'src/actions/cards';

const initialState = {
  list: [],
  ids: [],
  idsCreator: [],
};

const userActivities = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_ACTIVITIES:
      const idsCreator = [];
      const idsRegistered = [];
      action.activities.forEach(activity => {
        if(activity.creator_id === activity.users[0].id) {
          idsCreator.push(activity.id)
        }
        idsRegistered.push(activity.id);
      });
      return {
        ...state,
        list: [...action.activities],
        ids: idsRegistered,
        idsCreator,
      };

    case CLEAR_USER_ACTIVITIES:
      return {
        list: [],
        ids: [],
        idsCreator: [],
      };

    default:
      return state;
  }
};

export default userActivities;

