import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import store from "../store";
import "../styles/globals.scss";
import { HeadGeneral } from "../components/common";
import WrapperOptions from "../components/helper/WrapperOptions";
import { AppPropsWithLayout } from "../types/layout";

const persistor = persistStore(store);
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <>
      <HeadGeneral />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WrapperOptions>
            {getLayout(<Component {...pageProps} />)}
          </WrapperOptions>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
