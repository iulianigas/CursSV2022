import { useState, useEffect } from "react";

const ChatBox = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => {
      return [...messages, message];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message) => {
      addMessage(message);  
    });
  }, []);

  return (
    <>
      <div className="chat-box">
        {messages.map((message, index) => (
          <p className="message" key={`message-${index}`}>{message}</p>
        ))}
      </div>
    </>
  );
};

export default ChatBox;