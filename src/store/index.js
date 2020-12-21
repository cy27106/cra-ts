import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const preloadedState = {};

const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: [createLogger(), ...getDefaultMiddleware()]
});

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
}

export default store;
