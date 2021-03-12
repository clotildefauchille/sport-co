import {
  CHANGE_INPUT_CREATE_FORM,
  CHANGE_INPUT_CREATE_FORM_SELECT,
  SAVE_SPORTS,
  ACTIVITY_CREATED,
  ERROR_NOT_FOUND_PLACE,
} from 'src/actions/creationPage';

const initialState = {
  title: '',
  date: '',
  time: '',
  duration: '',
  min_participant: 0,
  description: '',
  adress: '',
  zip_code: '',
  city: '',
  sport_id: '',
  error_message: '',
  isCreated: false,
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
      case ERROR_NOT_FOUND_PLACE:
        return {...state, error_message: action.message};
        case ACTIVITY_CREATED:
          return {...state, isCreated: true}
        default:
          return state;
      }
};

export default creationPage;
