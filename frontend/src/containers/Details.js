import { connect } from 'react-redux';
import Details from 'src/components/Details';
import { fetchDataActivity, joinActivity } from 'src/actions/details';

const mapStateToProps = (state) => ({
  activity: state.details,
  userActivities: state.userActivities.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataActivity: (id) => {
    dispatch(fetchDataActivity(id));
  },
  onClickJoin: () => {
    dispatch(joinActivity());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
