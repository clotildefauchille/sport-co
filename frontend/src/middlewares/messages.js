import axios from 'axios';

import {
  SEND_MESSAGE,
  saveNewMessage,
} from 'src/actions/details';

const messages = (store) => (next) => (action) => {
  switch (action.type) {

    case SEND_MESSAGE:
        // console.log('action.message.activityId -----> ', action.message.activityId );

      axios
        .post(`${process.env.API_URL}/api/activity/${action.message.activityId}/messages`,
        {
          comment: action.message.comment,
          activityId: action.message.activityId,
          userId: action.message.userId,
        }
        //, { withCredentials: true }
        )
        .then((response) => {

          // console.log('NEW MESSAGES ------------------> ', response.data)

          store.dispatch(saveNewMessage(response.data));
          // console.log('send ok');
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    default:
      next(action);
  }
};

export default messages;
