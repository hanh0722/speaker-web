import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import store from "../store";
import "../styles/globals.scss";
import { HeadGeneral } from "../components/common";
import WrapperOptions from "../components/helper/WrapperOptions";
import { AppPropsWithLayout } from "../types/layout";
import UserWrapper from "../components/helper/UserWrapper";
import { isClient } from "../utils/server";
import CartWrapper from "../components/helper/CartWrapper";

const persistor = persistStore(store);
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  const renderComponentClient = () => {
    return (
      <UserWrapper>
        <CartWrapper>
          <WrapperOptions>
            {/* <WrapperTransition> */}
            {getLayout(<Component {...pageProps} />)}
            {/* </WrapperTransition> */}
          </WrapperOptions>
        </CartWrapper>
      </UserWrapper>
    );
  };
  return (
    <>
      <HeadGeneral />
      <Provider store={store}>
        {isClient() ? (
          <PersistGate loading={null} persistor={persistor}>
            {renderComponentClient()}
          </PersistGate>
        ) : (
          renderComponentClient()
        )}
      </Provider>
    </>
  );
};

export default MyApp;
