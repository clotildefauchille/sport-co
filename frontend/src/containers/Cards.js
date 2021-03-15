import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  activities: state.cards.activities,
  count: state.cards.count,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
