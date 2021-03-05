import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { saveLogin } from 'src/actions/login';

const mapStateToProps = (state) => ({
  // password: state.login.password,
  // email: state.login.email,
  password: state.login.password,
  email: state.login.email,
});

const mapDispatchToProps = (dispatch) => ({
  OnChangeValue: (event) => {
    dispatch(saveLogin(event.target.value, event.target.type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
