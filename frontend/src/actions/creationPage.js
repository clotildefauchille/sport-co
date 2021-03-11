export const CHANGE_INPUT_CREATE_FORM = 'CHANGE_INPUT_CREATE_FORM';
export const CHANGE_INPUT_CREATE_FORM_SELECT = 'CHANGE_INPUT_CREATE_FORM_SELECT';
export const SEND_ACTIVITY_INFORMATION = 'SEND_ACTIVITY_INFORMATION';


export const changeInputCreateForm = (value, name) => ({
  type: CHANGE_INPUT_CREATE_FORM,
  value,
  name,
});

export const changeInputCreateFormSelect = (value, name) => ({
  type: CHANGE_INPUT_CREATE_FORM_SELECT,
  value,
  name,
});

export const sendActivityInformation = () => ({
  type: SEND_ACTIVITY_INFORMATION,
});