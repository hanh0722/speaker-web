import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { onLoginUser } from "../../../store/slices/user";
import { UserState } from "../../../types/redux";

const UserWrapper: FC<{}> = (props) => {
  const {user, isLoggedIn, timeout} = useSelector<RootState>(state => state.user) as UserState;
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(onLoginUser());
  }, [dispatch]);
  useEffect(() => {
    if ((!user || !isLoggedIn) && timeout) {
      clearTimeout(timeout);
    }
  }, [user, isLoggedIn, timeout]);
  return <>{props.children}</>;
};

export default UserWrapper;
