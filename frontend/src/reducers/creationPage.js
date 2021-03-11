import {CHANGE_INPUT_CREATE_FORM, CHANGE_INPUT_CREATE_FORM_SELECT} from 'src/actions/creationPage';

const initialState = {
  activityTitle: '',
  date: '',
  time: '',
  duration: '',
  minParticipant: 0,
  description: '',
  adresse: '',
  codePostal: '',
  ville: '',
  sport:'',
};

const creationPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_CREATE_FORM: 
    return { ...state, [action.name]: action.value };
    case CHANGE_INPUT_CREATE_FORM_SELECT : 
    return {...state, sport: action.value}
    default:
      return state;
  }
};

export default creationPage;
