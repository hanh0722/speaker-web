// import {
//   configureStore,
//   combineReducers,
//   getDefaultMiddleware,
//   createReducer,
// } from "@reduxjs/toolkit";
// import { Context, createWrapper } from "next-redux-wrapper";
// import { Dispatch } from "react";
// import {
//   persistReducer,
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistStore,
// } from "redux-persist";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { isClient } from "../utils/server";
// import { uiSlice, userSlice } from "./slices";
// import authSlice from "./slices/auth";
// import cartSlice from "./slices/cart";

// const createNoopStorage = () => {
//   return {
//     getItem(_key: string) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: string, value: string) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: string) {
//       return Promise.resolve();
//     },
//   };
// };

// const reducers = combineReducers({
//   user: userSlice.reducer,
//   ui: uiSlice.reducer,
//   cart: cartSlice.reducer,
//   auth: authSlice.reducer,
// });

// export type RootState = ReturnType<typeof reducers>;
// export type AppDispatch = Dispatch<any>;

// const storage = isClient() ? createWebStorage("local") : createNoopStorage();
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const createConfigStore = (initialState: Context) => {
//   let store: any;
//   if (isClient()) {
//     store = configureStore({
//       reducer: persistedReducer,
//       devTools: true,
//       // @ts-ignore
//       // preloadedState: initialState,
//       middleware: [
//         ...getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
//       ],
//     });
//     store.__PERSISTOR = persistStore(store);
//   } else {
//     store = configureStore({
//       reducer: persistedReducer,
//       devTools: true,
//       // @ts-ignore
//       // preloadedState: initialState,
//       middleware: [
//         ...getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
//       ],
//     });
//   }
//   return store;
// };


// const wrapper = createWrapper(createConfigStore, { debug: false });

// export {
//   wrapper,
//   createConfigStore
// }

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { Dispatch } from "react";
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { isClient } from "../utils/server";
import { uiSlice, userSlice } from "./slices";
import authSlice from "./slices/auth";
import cartSlice from "./slices/cart";

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const reducers = combineReducers({
  user: userSlice.reducer,
  ui: uiSlice.reducer,
  cart: cartSlice.reducer,
  auth: authSlice.reducer
});

const storage = isClient() ? createWebStorage("local") : createNoopStorage();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | Dispatch<any>;

export default store;
