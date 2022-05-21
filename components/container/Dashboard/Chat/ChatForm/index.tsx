import React, { FC, useEffect } from "react";
import { io } from 'socket.io-client';
import { BASE_URL } from "../../../../../utils/config";
import { Button, Image, Input } from "../../../../core";
import styles from './styles.module.scss';

const ChatForm: FC = (props) => {

  useEffect(() => {

  }, []);
  return (
    <div className={styles.chat}>
      <div className={`d-flex align-center ${styles.user}`}>
        <Image src="/default-image.png"/>
        <p>User A</p>
      </div>
      <div className={styles.list}>
        <p>hello</p>
      </div>
      <div className={`d-flex align-end ${styles.footer}`}>
        <Input maxRows={5} className={styles.input} label="Message" multiline/>
        <Button variant="outlined" prefix="normal" color="inherit">
          Send
        </Button>
      </div>
    </div>
  )
};

export default ChatForm;