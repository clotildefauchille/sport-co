import axios from 'axios';
import { FETCH_REGISTRATION_FORM, passwordError } from 'src/actions/registration';

const registration = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGISTRATION_FORM: {
      const formData = store.getState().registration;

      if (formData.password !== formData.confirmPassword) {
        store.dispatch(passwordError());
      }

      console.log('registration store', formData);
      axios
        .post(`${process.env.API_URL}/api/registration`, {
          pseudo: formData.pseudo,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          firstname: formData.firstname,
          lastname: formData.lastname,
          city: formData.city,
          presentation: formData.presentation,
        })
        .then((response) => {
          console.log('response', response.data);
        })
        .catch((error) => {
          console.log('error', error);
          store.dispatch(passwordError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default registration;
