export const SAVE_REGISTRATION_VALUE = 'SAVE_REGISTRATION_VALUE';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';

export const saveRegistrationValue = (value, input) => ({
  type: SAVE_REGISTRATION_VALUE,
  input,
  value,
});

export const passwordError = () => ({
  type: PASSWORD_ERROR,
});
