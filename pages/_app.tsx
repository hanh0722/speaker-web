import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "../store";
import persistStore from "redux-persist/lib/persistStore";
import Navigation from "../components/Navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import usePrevious from "../hook/usePrevious";

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
    <div style={{ height: "5000vh" }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation isActive={isActive}/>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
