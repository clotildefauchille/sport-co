import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { fetchActivitiesByLocalisation } from 'src/actions/search';

const mapStateToProps = (state) => ({
  activities: state.search.activities,
  userActivitiesIds: state.userActivities.ids,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivitiesByLocalisation: (query) => {
    dispatch(fetchActivitiesByLocalisation(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
