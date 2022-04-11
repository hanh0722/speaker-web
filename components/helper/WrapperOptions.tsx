import React, { FC, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import useMedia from "../../hook/useMedia";
import { uiActions } from "../../store/slices/ui";
import { DEFAULT_SETTINGS } from "../../constants/toast";
import 'react-toastify/dist/ReactToastify.css';

const WrapperOptions: FC<{}> = (props) => {
  const dispatch = useDispatch();
  const isMobileScreen = useMedia("(max-width: 991px)");
  useEffect(() => {
    dispatch(uiActions.onChangeScreen(isMobileScreen));
  }, [dispatch, isMobileScreen]);

  return (
    <>
      <ToastContainer {...DEFAULT_SETTINGS}/>
      {props.children}
    </>
  );
};

export default WrapperOptions;
