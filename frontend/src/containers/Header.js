import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { Disconnect } from 'src/actions/login';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  DisconnectOnClick: () => {
    dispatch(Disconnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
