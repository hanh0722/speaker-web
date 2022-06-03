import React, { FC } from "react";
import PropTypes from "prop-types";
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import ChatForm from "./ChatForm";
import styles from "./styles.module.scss";
import ChatList from "./ChatList";

const Chat: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList("d-flex", styles.chat, className)}>
      <ChatList />
      <ChatForm />
    </div>
  );
};

Chat.defaultProps = {
  className: "",
};

Chat.propTypes = {
  className: PropTypes.string,
};

export default Chat;
