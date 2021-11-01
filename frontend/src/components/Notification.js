const Notification = ({ message, error }) => {
  const notiStyle = `noti ${error ? "noti-error" : "noti-success"}`;

  if (message === null) return null;
  return <h1 className={notiStyle}>{message}</h1>;
};

export default Notification;
