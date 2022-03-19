import { useCallback, useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import store from "../store";
import Navigation from "../components/Navigation";
import usePrevious from "../hook/usePrevious";
import "../styles/globals.scss";
import { HeadGeneral } from "../components/common";
import WrapperOptions from "../components/helper/WrapperOptions";

const persistor = persistStore(store);
function MyApp({ Component, pageProps }: AppProps) {
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
      <HeadGeneral />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WrapperOptions>
            <Navigation isActive={isActive} />
            <Component {...pageProps} />
          </WrapperOptions>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
