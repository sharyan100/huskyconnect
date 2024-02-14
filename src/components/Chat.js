// Chat.js
import React, { useState, useEffect } from 'react';

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [conversations, setConversations] = useState({});

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObject = {
        content: newMessage,
        sender: 'Alexa',
        timestamp: new Date().getTime(),
      };
      const updatedConversations = {
        ...conversations,
        [user.name]: [...(conversations[user.name] || []), newMessageObject],
      };
      setConversations(updatedConversations);
      setNewMessage('');
    }
  };

  useEffect(() => {
    setMessages(conversations[user.name] || []);
  }, [conversations, user]);

  const messageElements = messages.map((message, index) => (
    <div key={index} className={`message ${message.sender === user.name ? 'self' : 'other'}`}>
      <div className="message-header">
        <span className="message-sender">{message.sender}</span>
        {' '}
        <span className="message-timestamp">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <div className="message-content">{message.content}</div>
    </div>
  ));

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className='chat-area'>
      <h2>Chat with {user.name}</h2>
      <div className='message-list'>{messageElements}</div>
      <div className='input-box'>
        <input
          type='text'
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder={`Send a message to ${user.name}...`}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
