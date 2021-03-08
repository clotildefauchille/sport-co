import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { saveLogin, fetchLogin } from 'src/actions/login';

const mapStateToProps = (state) => ({
  password: state.login.password,
  email: state.login.email,
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  OnChangeValue: (event) => {
    dispatch(saveLogin(event.target.value, event.target.type));
  },
  OnClickLoginForm: () => {
    dispatch(fetchLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
