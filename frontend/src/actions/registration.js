export const SAVE_REGISTRATION_VALUE = 'SAVE_REGISTRATION_VALUE';

export const saveRegistrationValue = (value, input) => ({
  type: SAVE_REGISTRATION_VALUE,
  input,
  value,
});
