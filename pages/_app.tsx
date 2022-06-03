import { ReactNode } from "react";
import App from "next/app";
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
import SocketProvider from "../context/SocketContext";

const persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  const renderComponentClient = () => {
    return (
      <UserWrapper>
        <CartWrapper>
          <WrapperOptions>
            {getLayout(<Component {...pageProps} />)}
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
            <SocketProvider>{renderComponentClient()}</SocketProvider>
          </PersistGate>
        ) : (
          renderComponentClient()
        )}
      </Provider>
    </>
  );
};

// @ts-ignore
// MyApp.getInitialProps = async (context) => {
//   const appProps = await App.getInitialProps(context);
//   try{
//     const response = await getInfoPayment();
//     const clientSecret = response?.data?.client_secret;
//     if (!clientSecret) {
//       return {
//         ...appProps
//       }
//     };
//     return {
//       ...appProps,
//       keySecret: clientSecret
//     }
//   }catch(err) {
//     return {
//       ...appProps
//     }
//   };
// }

export default MyApp;
