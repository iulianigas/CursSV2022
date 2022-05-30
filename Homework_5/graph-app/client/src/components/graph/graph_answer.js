import { useState, useEffect } from "react";
import Message from "./message";

const GraphAnswer = ({ socket }) => {
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
      <div className="graph-answer">
        {messages.map((message, index) => (
          <Message key={`message-${index}`} message={message} />
        ))}
      </div>
    </>
  );
};

export default GraphAnswer;