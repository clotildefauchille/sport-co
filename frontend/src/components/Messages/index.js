import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Messages = ({ messages, fetchMessages, sendMessages, userId, activityId }) => {

  useEffect(() => {
    fetchMessages(activityId);
  }, []);

  const [inputValue, setInputValue] = useState('');

  const handleClickForm = (e) => {
    e.preventDefault();

    sendMessages ({ 
      comment: inputValue,
      activityId: parseInt(activityId),
      userId: parseInt(userId),
    });
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
   <div className="messages">
    {messages.map((message, index) => {
      return (
        <div key={`message-${index}`} className="messages__message">
          {message.comment}<br />
          {message.users.pseudo} {message.created_at}
        </div>
      );
    })}
    <div className="messages__form">
      <form action="" onSubmit={handleClickForm} >
        <input type="text" onChange={handleOnChange} value={inputValue}/>
        <button type="submit">send</button>
      </form>
    </div>
   </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  sendMessages: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  activityId: PropTypes.number.isRequired,
};

export default Messages;