import styles from '../styles/chat_bubble.module.scss';

type ChatBubbleProps = {
  src?: string;
  username?: string;
  message?: string;
  msg_no?: number;
  className: string;
};
const ChatBubble = ({
  src,
  username,
  message,
  msg_no,
  className,
}: ChatBubbleProps) => {
  return (
    <div className={className}>
      <img src={src} alt={src} />
      <div className={styles.msg_div}>
        <h3>{username}</h3>
        <p>{message}</p>
      </div>
      <span className={styles.msg_no}>{msg_no}</span>
      <br />
    </div>
  );
};

export default ChatBubble;
