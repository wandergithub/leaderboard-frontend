import { configureStore } from "@reduxjs/toolkit";
import logger from "react-redux";
import Reducer from "./Reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export default store;