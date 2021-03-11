import {
  CHANGE_INPUT_CREATE_FORM,
  CHANGE_INPUT_CREATE_FORM_SELECT,
  SAVE_SPORTS
} from 'src/actions/creationPage';

const initialState = {
  title: 'tennis',
  date: '12/03/2021',
  time: '21H00',
  duration: '02H00',
  min_participant: 0,
  description: 'eerrrrr',
  adress: '38 rue rene alazard',
  zip_code: '93170',
  city: 'Bagnolet',
  sport_id: '',
  sportsData: [],
};

const creationPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_CREATE_FORM:
      return { ...state, [action.name]: action.value };
    case CHANGE_INPUT_CREATE_FORM_SELECT:
      return { ...state, sport_id: action.value };
    case SAVE_SPORTS:
      return { ...state, sportsData: action.sportsData };
        default:
          return state;
      }
};

export default creationPage;
