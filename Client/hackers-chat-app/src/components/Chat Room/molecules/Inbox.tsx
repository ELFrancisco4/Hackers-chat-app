import ChatBubble from "../atoms/ChatBubble";
import styles from "../styles/inbox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Inbox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chat_header}>
        <h1>Inbox</h1> <FontAwesomeIcon icon={faPlus} />
      </div>
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
      <ChatBubble message={"Hi there "} msg_no={20} username={"Root@Kali"} src={require("../../../Assets/profile-pic (1).jpg")} className={styles.chat_bubble} />
    </div>
  );
};

export default Inbox;
