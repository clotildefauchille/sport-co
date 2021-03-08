import { SHOW_LOGIN_MODAL } from 'src/actions/cards';

const initialState = {
  displayed: false,
};

const loginModal = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return { ...state, displayed: true };
    default:
      return state;
  }
};

export default loginModal;
