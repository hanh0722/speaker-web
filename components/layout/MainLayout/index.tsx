import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import usePrevious from "../../../hook/usePrevious";
import { Footer } from "../../common";
import Navigation from "../../common/Navigation";

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
    if ((valueBefore || 0) < scroll && scroll > 50) {
      return false;
    }
    return true;
  }, [valueBefore, scroll]);
  return (
    <>
      <Navigation isActive={isActive} />
        <div className="app-container">{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
