import React, { useState } from "react";
import './App.css'


function ChatApp() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setMessages([...messages, { user, message }]);
    setMessage("");
  };

  return (
    <div>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User: 
          <input
            type="text"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
        </label>
        <label>
          Message: 
          <input
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((m, index) => (
          <div key={index}>
            <b>{m.user}:</b> {m.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatApp;
