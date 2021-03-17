import { connect } from 'react-redux';
import Search from 'src/components/Search';

import { fetchUserActivities } from 'src/actions/cards';
import {
  fetchActivitiesByLocalisation, 
  fetchActivitiesByLocalisationAndSports
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  activities: state.search.activities,
  pageValue: state.moreResults.page,
  count: state.search.count,
  userActivitiesIds: state.userActivities.ids,
  userActivitiesCreatorIds: state.userActivities.idsCreator,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivitiesByLocalisation: (query) => {
    dispatch(fetchActivitiesByLocalisation(query));
  },
  fetchUserActivities: () => {
    dispatch(fetchUserActivities());
  },
  fetchActivitiesByLocalisationAndSports: (query) => {
    dispatch(fetchActivitiesByLocalisationAndSports(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
