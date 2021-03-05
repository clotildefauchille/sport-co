import {
  CHANGE_INPUT_VALUE_SEARCHBAR,
  SAVE_AUTOCOMPLETION_LIST,
} from 'src/actions/searchBar';

const initialState = {
  inputValue: '',
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
    case SAVE_AUTOCOMPLETION_LIST: {
      return {
        ...state,
        autocompleteList: [
          ...action.data,
        ],
      }
    } 
    default: 
      return state; 
  }
};

export default searchBar;
