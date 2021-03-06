import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import {
  fetchPlacesAutoCompletion,
  fetchOnePlacesAutoCompletion,
  changeInputValueSearchBar,
  fetchActivitiesByLocalisation,
  clearListAutocompleteData,
} from 'src/actions/searchBar';

const mapStateToProps = (state) => ({
  inputValue: state.searchBar.inputValue,
  listAutocompleteData: state.searchBar.autocompleteList,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    dispatch(changeInputValueSearchBar(value));
  },
  fetchAutocompleteData: () => {
    dispatch(fetchPlacesAutoCompletion());
  },
  fetchOnePlacesAutoCompletion: () => {
    dispatch(fetchOnePlacesAutoCompletion());
  },
  fetchActivityByLocalisation: () => {
    dispatch(fetchActivitiesByLocalisation());
  },
  clearListAutocompleteData: () => {
    dispatch(clearListAutocompleteData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
