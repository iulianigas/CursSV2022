import { useState, useEffect } from "react";

const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState();

  const sendMessage = () => {
    socket.emit("new-message", `${message}`);
    setMessage("");
  }

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
    setError("");
  }

  useEffect(() => {
    socket.on("graph-input-error", () => {
      setError("Answer can't be blank");
    });
  }, []);
  
  return (
    <>
      <input
        className="input-message" 
        value={message} 
        placeholder="Enter your answer" 
        type="text"
        onChange={handleMessageInputChange}>
      </input>
      <button className="send-button" onClick={sendMessage}>Submit</button>
      {error ? <p className="error">{error}</p> : null }
    </>
  );
};

export default MessageForm;