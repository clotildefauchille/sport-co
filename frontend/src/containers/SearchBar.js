import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import {
  fetchPlacesAutoCompletion,
  changeInputValueSearchBar,
  fetchActivitiesByLocalisation,
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
  fetchActivityByLocalisation: () => {
    dispatch(fetchActivitiesByLocalisation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
