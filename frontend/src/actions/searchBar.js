export const FETCH_PLACES_AUTOCOMPLETION = 'FETCH_PLACES_AUTOCOMPLETION';
export const CHANGE_INPUT_VALUE_SEARCHBAR = 'CHANGE_INPUT_VALUE_SEARCHBAR';
export const SAVE_AUTOCOMPLETION_LIST ='SAVE_AUTOCOMPLETION_LIST';
export const FETCH_ACTIVITIES_BY_LOCALISATION = 'FETCH_ACTIVITIES_BY_LOCALISATION';

export const fetchPlacesAutoCompletion = () => ({
  type: FETCH_PLACES_AUTOCOMPLETION,
});

export const changeInputValueSearchBar = (value) => ({
  type: CHANGE_INPUT_VALUE_SEARCHBAR,
  value,
});

export const saveAutocompletionList = (data) => ({
  type: SAVE_AUTOCOMPLETION_LIST,
  data,
});

export const fetchActivitiesByLocalisation = () => ({
  type: FETCH_ACTIVITIES_BY_LOCALISATION,
}); 