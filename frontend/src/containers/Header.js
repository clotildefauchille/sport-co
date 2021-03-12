import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { disconnect, logOut } from 'src/actions/login';
import { clearUserActivities } from 'src/actions/cards';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  DisconnectOnClick: () => {
    dispatch(disconnect());
    dispatch(logOut());
    dispatch(clearUserActivities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
