import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  cards: state.cards,
  userActivitiesIds: state.userActivities.ids,
  userActivitiesCreatorIds: state.userActivities.idsCreator,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
