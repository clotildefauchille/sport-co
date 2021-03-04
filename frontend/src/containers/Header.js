import { connect } from 'react-redux';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.header.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
