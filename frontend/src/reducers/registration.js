import { SAVE_REGISTRATION_VALUE, PASSWORD_ERROR } from 'src/actions/registration';

const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  city: '',
  presentation: '',
  error: false,
};

const registration = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REGISTRATION_VALUE:
      return {
        ...state,
        [action.input]: action.value,
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        confirmPassword: '',
      };
    default:
      return state;
  }
};

export default registration;
