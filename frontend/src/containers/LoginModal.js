import { connect } from 'react-redux';
import LoginModal from 'src/components/LoginModal';

const mapStateToProps = (state) => ({
  displayed : state.loginModal.displayed,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);