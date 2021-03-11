import { connect } from 'react-redux';
import Accueil from 'src/components/Accueil';
import { fetchLastActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchLastActivities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
