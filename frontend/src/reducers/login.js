import { SAVE_LOGIN, SAVE_CONNEXION_STATUT, DISCONNECT, LOGIN_ERROR } from 'src/actions/login';

const initialState = {
  // id: "",
  email: '',
  password: '',
  user: {},
  error: false,
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        [action.input]: action.value,
      };
    case SAVE_CONNEXION_STATUT:
      return {
        ...state,
        error: false,
        user: action.data,
      };
    case DISCONNECT:
      return initialState;
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default login;
