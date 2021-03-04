import { connect } from 'react-redux';
import Accueil from 'src/components/Accueil';
import { fetchLastActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    console.log('gg');
    dispatch(fetchLastActivities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
