import React, { FC } from "react";
import styles from './styles.module.scss';
import UserChatList from "./UserChatList";

const ChatList: FC = (props) => {
  return (
    <div className={styles.list}>
      <UserChatList/>
      <UserChatList/>
      <UserChatList/>
      <UserChatList/>
    </div>
  )
};

export default ChatList;