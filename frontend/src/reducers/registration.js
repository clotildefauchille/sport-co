import { SAVE_REGISTRATION_VALUE } from 'src/actions/registration';

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
    default:
      return state;
  }
};

export default registration;
