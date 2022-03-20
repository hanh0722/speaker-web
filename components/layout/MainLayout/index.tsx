import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import usePrevious from "../../../hook/usePrevious";
import { Container } from "../../core";
import Navigation from "../../Navigation";

const MainLayout: FC<{}> = (props) => {
  const [scroll, setScroll] = useState(0);
  const valueBefore = usePrevious(scroll);
  const onHandleCallback = () => {
    const scrollY = window.scrollY;
    setScroll(scrollY);
  };
  const onHandleScroll = useCallback(() => {
    requestAnimationFrame(onHandleCallback);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);
    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, [onHandleScroll]);

  const isActive = useMemo(() => {
    if (valueBefore < scroll) {
      return false;
    }
    return true;
  }, [valueBefore, scroll]);
  return (
    <>
      <Navigation isActive={isActive} />
      <Container className="app-container">{props.children}</Container>
    </>
  );
};

export default MainLayout;
