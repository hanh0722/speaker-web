import React, { FC } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { isClient } from "../../../utils/server";

interface WrapperStoreProps {
  store: any;
}

const WrapperStore: FC<WrapperStoreProps> = (props) => {
  const { children, store } = props;
  if (isClient()) {
    return (
      <PersistGate loading={null} persistor={store.__PERSISTOR}>
        {children}
      </PersistGate>
    );
  }
  return <>{children}</>;
};

export default WrapperStore;
