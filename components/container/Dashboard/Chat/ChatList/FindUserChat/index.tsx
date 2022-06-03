import React, { ChangeEvent, FC } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store";
import { ChatSearchProps } from "../../../../../../types/components/Chat";
import { User } from "../../../../../../types/redux";
import { isFunction } from "../../../../../../types/type";
import { Button, Image, Input } from "../../../../../core";
import IconEdit from "../../../../../core/Icons/IconEdit";
import styles from "./styles.module.scss";
import { classList } from "../../../../../../utils/string";
import CreateChatForm from "../CreateChatForm";

const FindUserChat: FC<ChatSearchProps> = (props) => {
  const { className, onChangeSearch, ...restProps } = props;
  const user = useSelector<RootState, User | null>((state) => state.user.user);

  const onChangeContact = (event: ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onChangeSearch)) {
      onChangeSearch(event.target.value);
    }
  }

  const onCreateChat = () => {

  };

  return (
    <>
    <CreateChatForm show/>
      <div {...restProps} className={classList(styles.box, className)}>
        <div className="d-flex justify-between align-center">
          <div className={styles.user}>
            <Image src={user?.avatar_url || "/default-image.png"} alt="" />
          </div>
          <Button onClick={onCreateChat} className={styles.btn} variant="text" prefix="normal" color="inherit">
            <IconEdit variant="md"/>
          </Button>
        </div>
        <Input className={styles.input} onChange={onChangeContact} label="Search contacts..."/>
      </div>
    </>
  );
};

FindUserChat.defaultProps = {
  className: '',
  onChangeSearch: (value) => {}
};

FindUserChat.propTypes = {
  className: PropTypes.string,
  onChangeSearch: PropTypes.func,
};

export default FindUserChat;
