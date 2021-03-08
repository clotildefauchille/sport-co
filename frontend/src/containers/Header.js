import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { disconnect } from 'src/actions/login';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  DisconnectOnClick: () => {
    dispatch(disconnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
