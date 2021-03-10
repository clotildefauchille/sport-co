import {
  SAVE_REGISTRATION_VALUE,
  PASSWORD_ERROR,
  EMAIL_ERROR,
  PSEUDO_ERROR,
} from 'src/actions/registration';

const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  city: '',
  postalCode: '',
  address: '',
  presentation: '',
  passwordError: false,
  emailError: false,
  pseudoError: false,
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
        passwordError: true,
        confirmPassword: '',
      };
    case EMAIL_ERROR:
      return {
        ...state,
        emailError: true,
        email: '',
      };
    case PSEUDO_ERROR:
      return {
        ...state,
        pseudoError: true,
        pseudo: '',
      };
    default:
      return state;
  }
};

export default registration;