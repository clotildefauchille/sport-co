import { SAVE_LOGIN, SAVE_CONNEXION_STATUT, DISCONNECT } from 'src/actions/login';

const initialState = {
  email: '',
  password: '',
  user: {},
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
        user: action.data,
      };
    case DISCONNECT:
      return initialState;
    default:
      return state;
  }
};

export default login;
