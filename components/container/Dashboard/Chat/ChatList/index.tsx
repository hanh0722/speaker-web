import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ClassNameProps } from "../../../../../types/string";
import FindUserChat from "./FindUserChat";
import styles from "./styles.module.scss";
import UserChatList from "./UserChatList";
import useCallApi from "../../../../../hook/useCallApi";
import { searchUserByQuery } from "../../../../../service/user";
import {
  BaseSortRequest,
  SearchUserResponse,
} from "../../../../../types/request";
import { User } from "../../../../../types/redux";
import ChatUserLoading from "./ChatUserLoading";
import { generateArray } from "../../../../../utils/array";
import { classList } from "../../../../../utils/string";

const ChatList: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  const [listUser, setListUser] = useState<null | Array<User>>(null);
  const [querySearch, setQuerySearch] = useState<null | string>(null);

  const onSuccessHandler = (data: SearchUserResponse) => {
    const { data: dataUsers } = data;
    setListUser(dataUsers);
  };

  const onHandleSearchUser = ({
    query,
    options,
  }: {
    query: string;
    options?: BaseSortRequest;
  }) => {
    return searchUserByQuery(query, options);
  };

  const { onSendRequest, isLoading } = useCallApi<SearchUserResponse>({
    request: onHandleSearchUser,
    onSuccess: onSuccessHandler,
  });
  const onSearchUser = (username: string) => {
    setQuerySearch(username);
  };

  useEffect(() => {
    let timeout: number;
    if (querySearch !== null) {
      timeout = window.setTimeout(() => {
        onSendRequest({
          query: querySearch,
        });
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querySearch]);

  return (
    <div
      {...restProps}
      className={classList("d-flex flex-column", styles.list, className)}
    >
      <FindUserChat className={styles.search} onChangeSearch={onSearchUser} />
      <div className={styles.chat}>
        {isLoading && generateArray(10).map((item) => (
          <ChatUserLoading key={item} />
        ))}
        <UserChatList />
        <UserChatList />
        <UserChatList />
        <UserChatList />
      </div>
    </div>
  );
};

ChatList.defaultProps = {
  className: "",
};

ChatList.propTypes = {
  className: PropTypes.string,
};

export default ChatList;
