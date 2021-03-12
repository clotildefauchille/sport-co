import { connect } from 'react-redux';
import MapList from 'src/components/MapList';

const mapStateToProps = (state) => ({
  activities: state.search.activities,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapList);