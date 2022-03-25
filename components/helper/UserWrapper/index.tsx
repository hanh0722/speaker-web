import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { onLoginUser } from "../../../store/slices/user";

const UserWrapper: FC<{}> = (props) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(onLoginUser());
  }, [dispatch]);
  return <>{props.children}</>;
};

export default UserWrapper;
