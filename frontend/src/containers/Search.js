import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { fetchActivitiesByLocalisation } from 'src/actions/cards';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (query) => {
    dispatch(fetchActivitiesByLocalisation(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
