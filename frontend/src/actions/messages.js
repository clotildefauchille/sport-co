
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const SEND_MESSAGES = 'SEND_MESSAGES';
export const SAVE_NEW_MESSAGES = 'SAVE_NEW_MESSAGES';

export const fetchMessages = (activityId) => ({
    type: FETCH_MESSAGES,
    activityId,
}); 

export const saveMessages = (data) => ({
  type: SAVE_MESSAGES,
  data,
});

export const sendMessages = (message) => ({
  type: SEND_MESSAGES,
  message,
});

export const saveNewMessage = (message) => ({
  type: SAVE_NEW_MESSAGES,
  message,
});

