import { SAVE_LOGIN } from 'src/actions/login';

const initialState = {
  email: '',
  password: '',
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        [action.input]: action.value,
      };
    default:
      return state;
  }
};

export default login;
