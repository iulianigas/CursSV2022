import { useEffect, useState } from "react";

const Notification = ({ socket }) => {
  const [notification, setNotification] = useState(true);

  useEffect(() => {
    socket.on("send-notification", (n) => {
      setNotification(n);

      setTimeout(() => {
        setNotification();
      }, 5000);
    });
  }, []);

  if (!notification) return null;

  return <div className="notification">{notification}</div>;
};

export default Notification;