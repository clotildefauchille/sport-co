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

    console.log('activityId comp', activityId);

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

    <div className="messages__container">
    {messages.map((message, index) => {
      return (
        <div key={`message-${index}`} className="messages__message">
          <div className="messages__content">{message.comment}</div>
          <div><span className="messages__pseudo">{message.users.pseudo}</span> <span className="messages__date">{message.created_at}</span></div>
        </div>
      );
    })}
    </div>

    <form action="" onSubmit={handleClickForm} className="messages__form">
      <input className="messages__input" type="text" onChange={handleOnChange} value={inputValue} placeholder="Ecrire un message"/>
      <button className="messages__button" type="submit" >send</button>
    </form>

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