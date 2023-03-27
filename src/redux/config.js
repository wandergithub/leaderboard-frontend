import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import reducer from "./Reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export default store;