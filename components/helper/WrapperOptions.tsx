import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import useMedia from "../../hook/useMedia";
import { uiActions } from "../../store/slices/ui";

const WrapperOptions: FC<{}> = (props) => {
  const dispatch = useDispatch();
  const isMobileScreen = useMedia("(max-width: 991px)");
  useEffect(() => {
    dispatch(uiActions.onChangeScreen(isMobileScreen));
  }, [dispatch, isMobileScreen]);

  return <>{props.children}</>;
};

export default WrapperOptions;
