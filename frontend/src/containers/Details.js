import { connect } from 'react-redux';
import Details from 'src/components/Details';
import { fetchDataActivity } from 'src/actions/details';

const mapStateToProps = (state) => ({
    contenuFake: state.details.contenuFake,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataActivity: () => {
    dispatch(fetchDataActivity());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);