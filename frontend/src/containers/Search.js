import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { fetchActivitiesByLocalisation } from 'src/actions/search';
import { fetchUserActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({
  activities: state.search.activities,
  userActivitiesIds: state.userActivities.ids,
  userActivitiesCreatorIds: state.userActivities.idsCreator,
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivitiesByLocalisation: (query) => {
    dispatch(fetchActivitiesByLocalisation(query));
  },
  fetchUserActivities: () => {
    dispatch(fetchUserActivities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
