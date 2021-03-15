import axios from 'axios';

import {
  FETCH_MESSAGES,
  SEND_MESSAGES,
  saveMessages,
  saveNewMessage,
} from 'src/actions/messages';

const messages = (store) => (next) => (action) => {
  switch (action.type) {

    case FETCH_MESSAGES:
      axios
        .get(`${process.env.API_URL}/api/activity/${action.activityId}/messages`)
        .then((response) => {
          store.dispatch(saveMessages(response.data));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    case SEND_MESSAGES:
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
          store.dispatch(saveNewMessage(response.data));
          console.log('send ok');
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
