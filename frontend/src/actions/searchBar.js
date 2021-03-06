export const FETCH_PLACES_AUTOCOMPLETION = 'FETCH_PLACES_AUTOCOMPLETION';
export const FETCH_ONE_PLACES_AUTOCOMPLETION = 'FETCH_ONE_PLACES_AUTOCOMPLETION';
export const CHANGE_INPUT_VALUE_SEARCHBAR = 'CHANGE_INPUT_VALUE_SEARCHBAR';
export const SAVE_AUTOCOMPLETION_LIST ='SAVE_AUTOCOMPLETION_LIST';
export const FETCH_ACTIVITIES_BY_LOCALISATION = 'FETCH_ACTIVITIES_BY_LOCALISATION';
export const CLEAR_LIST_AUTOCOMPLETE_DATA = 'CLEAR_LIST_AUTOCOMPLETE_DATA';
export const SAVE_VALID_LOCALISATION = 'SAVE_VALID_LOCALISATION';

export const changeInputValueSearchBar = (value) => ({
  type: CHANGE_INPUT_VALUE_SEARCHBAR,
  value,
});

export const saveValidLocalisation = (data) => ({
  type: SAVE_VALID_LOCALISATION,
  data
}); 


export const fetchPlacesAutoCompletion = () => ({
  type: FETCH_PLACES_AUTOCOMPLETION,
});

export const fetchOnePlacesAutoCompletion = () => ({
  type: FETCH_ONE_PLACES_AUTOCOMPLETION,
}); 

export const saveAutocompletionList = (data) => ({
  type: SAVE_AUTOCOMPLETION_LIST,
  data,
});

export const fetchActivitiesByLocalisation = () => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION,
}); 

export const clearListAutocompleteData = () => ({
  type: CLEAR_LIST_AUTOCOMPLETE_DATA,
}); 




