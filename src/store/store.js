import { configureStore } from "@reduxjs/toolkit";
import puppyApi from "./api";

const store = configureStore({
  reducer: {
    [puppyApi.reducerPath]: puppyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyApi.middleware),
});

export default store;
