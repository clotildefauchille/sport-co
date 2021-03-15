import { connect } from 'react-redux';
import Accueil from 'src/components/Accueil';
import { fetchLastActivities } from 'src/actions/cards';
import {paginationReset} from 'src/actions/moreResults';

const mapStateToProps = (state) => ({
  pageValue: state.moreResults.page,
  count: state.cards.count,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchLastActivities());
  },
  paginationReset: ()=> {
    dispatch(paginationReset())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
