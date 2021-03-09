export const SAVE_REGISTRATION_VALUE = 'SAVE_REGISTRATION_VALUE';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const FETCH_REGISTRATION_FORM = 'FETCH_REGISTRATION_FORM';

export const saveRegistrationValue = (value, input) => ({
  type: SAVE_REGISTRATION_VALUE,
  input,
  value,
});

export const passwordError = () => ({
  type: PASSWORD_ERROR,
});

export const fetchRegistrationForm = () => ({
  type: FETCH_REGISTRATION_FORM,
});
