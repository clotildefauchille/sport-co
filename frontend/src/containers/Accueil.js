import { connect } from 'react-redux';
import Accueil from 'src/components/Accueil';
import { fetchLastActivities, fetchUserActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
  user: state.login.user,
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
