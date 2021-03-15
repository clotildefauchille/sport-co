import { connect } from 'react-redux';
import Accueil from 'src/components/Accueil';
import { fetchLastActivities, fetchUserActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
  user: state.login.user,
  userActivities: state.userActivities.list,
  points: state.login.user.reward_count,
  registredActivities: state.userActivities.ids.length,
  myCreatedActivities: state.userActivities.idsCreator.length,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchLastActivities());
  },
  fetchUserActivities: () => {
    dispatch(fetchUserActivities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
