import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import GraphAnswer from "./graph_answer";
import MessageForm from "./message_form";

const Graph = () => {
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
    <div className="graph">
      <h1>Are you a developer?</h1>
      <MessageForm socket={connectedSocket} />
      <GraphAnswer socket={connectedSocket} />
    </div>
    </>
  );
};

export default Graph;