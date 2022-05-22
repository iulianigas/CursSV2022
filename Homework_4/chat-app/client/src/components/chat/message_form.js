import { useState } from "react";

const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendMessage = () => {
    socket.emit("new-message", `${name}: ${message}`);
    setMessage("");
  }

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  }
  
  return (
    <>
      <input
        className="input-message" 
        value={message} 
        placeholder="Your message is" 
        type="text"
        onChange={handleMessageInputChange}>
      </input>
      <br></br>
      <input 
        className="input-name"
        value={name} 
        placeholder="Enter your name" 
        type="text"
        onChange={handleNameInputChange}>
      </input>
      <br></br>
      <button className="send-button" onClick={sendMessage}>Send</button>
    </>
  );
};

export default MessageForm;