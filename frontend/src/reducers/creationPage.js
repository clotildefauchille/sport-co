import {CHANGE_INPUT_CREATE_FORM} from 'src/actions/creationPage';

const initialState = {
  activityTitle: '',
  date: '',
  time: '',
  minParticipant: 0,
  description: '',
  adresse: '',
  codePostal: '',
  ville: '',
};

const creationPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_CREATE_FORM: 
    return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default creationPage;
