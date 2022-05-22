import { useEffect, useState } from "react";

const Notification = ({ socket }) => {
  const [notification, setNotification] = useState(true);

  useEffect(() => {
    socket.on("send-notification", () => {
      setNotification(false);

      setTimeout(() => {
        setNotification(true);
      }, 5000);
    });
  }, []);

  if (!notification)
    return <div className="notification">s-a trimis un mesaj!</div>;
};

export default Notification;