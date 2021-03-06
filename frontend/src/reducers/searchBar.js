import {
  CHANGE_INPUT_VALUE_SEARCHBAR,
  SAVE_VALID_LOCALISATION,

  SAVE_AUTOCOMPLETION_LIST,
  CLEAR_LIST_AUTOCOMPLETE_DATA,
} from 'src/actions/searchBar';

const initialState = {
  inputValue: '',
  validLocalisation: {},
  autocompleteList: [],
};

const searchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_SEARCHBAR: {
      return {
        ...state,
        inputValue: action.value,
      }
    }
    case SAVE_VALID_LOCALISATION: {
      return {
        ...state,
        validLocalisation: {
          ...action.data,
        },
      }
    } 

    case SAVE_AUTOCOMPLETION_LIST: {
      return {
        ...state,
        autocompleteList: [
          ...action.data,
        ],
      }
    } 
    case CLEAR_LIST_AUTOCOMPLETE_DATA: {
      return {
        ...state,
        autocompleteList: [],
      }
    } 

    default: 
      return state; 
  }
};

export default searchBar;
