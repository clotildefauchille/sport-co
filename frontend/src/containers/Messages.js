import { connect } from 'react-redux';
import Messages from 'src/components/Messages';

import { fetchMessages, sendMessages } from 'src/actions/messages';

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  userId: state.login.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (activityId) => {
    dispatch(fetchMessages(activityId));
  },
  sendMessages: (message) => {
    dispatch(sendMessages(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
