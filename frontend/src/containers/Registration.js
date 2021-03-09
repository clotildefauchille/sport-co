import { connect } from 'react-redux';
import Registration from 'src/components/Registration';
import { saveRegistrationValue, fetchRegistrationForm } from 'src/actions/registration';

const mapStateToProps = (state) => ({
  pseudo: state.registration.pseudo,
  password: state.registration.password,
  confirmPassword: state.registration.confirmPassword,
  email: state.registration.email,
  firstname: state.registration.firstname,
  lastname: state.registration.lastname,
  city: state.registration.city,
  presentation: state.registration.presentation,

  error: state.registration.error,
});

const mapDispatchToProps = (dispatch) => ({
  OnChangeValue: (event) => {
    dispatch(saveRegistrationValue(event.target.value, event.target.name));
  },
  OnSubmitForm: (event) => {
    event.preventDefault();
    dispatch(fetchRegistrationForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
