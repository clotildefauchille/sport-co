import { connect } from 'react-redux';
import Filter from 'src/components/Filter';
import { fetchFilterSports } from 'src/actions/filter';

const mapStateToProps = (state) => ({
  sportsList: state.filter.sports,
  //userSearch: state.searchBar.validLocalisation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilterSports: () => {
    dispatch(fetchFilterSports());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
