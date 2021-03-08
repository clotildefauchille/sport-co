import { connect } from 'react-redux';
import Card from 'src/components/Cards/Card';
import {showLoginModal} from 'src/actions/cards'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  showLoginModal: () => {
    console.log('showLoginModal');
    dispatch(showLoginModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);