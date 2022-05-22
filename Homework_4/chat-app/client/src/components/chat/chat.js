import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatBox from "./chat_box";
import MessageForm from "./message_form";
import Notification from "./notification";

const Chat = () => {
  const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();  

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
  }, []);

  if(!connectedSocket) {
    return <p>Waiting for connection..</p>
  }

  return (
    <>
    <h1>Chat app</h1>
    <div className="d-flex">
      <div className="chat">
        <ChatBox socket={connectedSocket} />
        <MessageForm socket={connectedSocket} />
      </div>
      <Notification socket={connectedSocket} />
    </div>
    </>
  );
};

export default Chat;