import Chat from "../components/Chat Room/molecules/Chat";
import Inbox from "../components/Chat Room/molecules/Inbox";
import styles from "../styles/pages/chat_room.module.scss";
import Nav from "./../components/Side Nav/molecules/Nav";

const ChatRoom = () => {
  return (
    <Nav>
      <div className={styles.chat_room}>
        <Inbox/>
        <Chat/>
      </div>
    </Nav>
  );
};

export default ChatRoom;
