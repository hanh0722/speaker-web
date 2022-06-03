import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { useSocket } from "../../../../../context/SocketContext";
import useCallApi from "../../../../../hook/useCallApi";
import { sendMessage } from "../../../../../service/chat";
import { Button, Image, Input } from "../../../../core";
import styles from './styles.module.scss';

const ChatForm: FC = (props) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { socket } = useSocket();
  console.log(socket?.id);
  const onSendMessageToUser = (props: {message: string, room: string}) => {
    const { message, room } = props;
    return sendMessage(message, room);
  };

  const onHandleSuccess = (data: any) => {
    console.log(data);
  }
  const { onSendRequest, isLoading } = useCallApi<any, any>({
    request: onSendMessageToUser,
    onSuccess: onHandleSuccess
  });

  const onSendMessage = () => {
    const msg = inputRef.current?.value;
    if (!msg) {
      return;
    };
    onSendRequest({
      message: msg,
      room: 'OL5pSU43Dnmcn5YxAAAP'
    })
  }

  const onTextMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const submitChatHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message) {
      return;
    };
  }

  return (
    <form onSubmit={submitChatHandler} className={styles.chat}>
      <div className={`d-flex align-center ${styles.user}`}>
        <Image src="/default-image.png" alt=""/>
        <p>User A</p>
      </div>
      <div className={styles.list}>
        <p>hello</p>
      </div>
      <div className={`d-flex align-end ${styles.footer}`}>
        <Input value={message} onChange={onTextMessage} ref={inputRef} maxRows={5} className={styles.input} label="Message" multiline/>
        <Button type="submit" onClick={onSendMessage} variant="outlined" prefix="normal" color="inherit">
          Send
        </Button>
      </div>
    </form>
  )
};

export default ChatForm;