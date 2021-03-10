import { connect } from 'react-redux';
import CreationPage from 'src/components/CreationPage';
import creationPage from '../reducers/creationPage';
import {
  changeInputCreateForm,
  changeInputCreateFormSelect,
  sendActivityInformation,
} from 'src/actions/creationPage';

const mapStateToProps = (state) => ({
  activityTitle: state.creationPage.activityTitle,
  date: state.creationPage.date,
  duration: state.creationPage.duration,
  time: state.creationPage.time,
  minParticipant: state.creationPage.minParticipant,
  description: state.creationPage.description,
  adresse: state.creationPage.adresse,
  codePostal: state.creationPage.codePostal,
  ville: state.creationPage.ville,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeForm: (value, name) => {
    // console.log('onchange form creation', value, name);
    dispatch(changeInputCreateForm(value, name));
  },
  onChangeFormSelect: (value) => {
    // console.log('onchange form select', value)
    dispatch(changeInputCreateFormSelect(value));
  },
  onSubmit: () => {
    // console.log('je veux submit le createform');
    dispatch(sendActivityInformation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreationPage);
