import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from "firebase/database";

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const messagesRef = ref(db, `messages/${user.name}`);

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loadedMessages = Object.keys(data).map(key => data[key]);
      setMessages(loadedMessages);
    });

    return () => {
      // Cleanup listener
    };
  }, [user.name]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const db = getDatabase();
      const messagesRef = ref(db, `messages/${user.name}`);

      push(messagesRef, {
        content: newMessage,
        sender: user.name,
        timestamp: new Date().getTime(),
      });

      setNewMessage('');
    }
  };

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
