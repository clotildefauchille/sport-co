import { connect } from 'react-redux';
import CreationPage from 'src/components/CreationPage';
import creationPage from '../reducers/creationPage';
import {
  changeInputCreateForm,
  changeInputCreateFormSelect,
  sendActivityInformation,
  fetchSports,
} from 'src/actions/creationPage';

const mapStateToProps = (state) => ({
  title: state.creationPage.title,
  date: state.creationPage.date,
  duration: state.creationPage.duration,
  time: state.creationPage.time,
  min_participant: state.creationPage.min_participant,
  description: state.creationPage.description,
  adress: state.creationPage.adress,
  zip_code: state.creationPage.zip_code,
  city: state.creationPage.city,
  sports: state.creationPage.sportsData,
  errorMessage: state.creationPage.error_message,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeForm: (value, name) => {
    // console.log('onchange form creation', value, name);
    dispatch(changeInputCreateForm(value, name));
  },
  onChangeFormSelect: (sportId) => {
    // console.log('onchange form select', value)
    dispatch(changeInputCreateFormSelect(sportId));
  },
  onSubmit: () => {
    // console.log('je veux submit le createform');
    dispatch(sendActivityInformation());
  },
  fetchSports: () => {
dispatch(fetchSports())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreationPage);
