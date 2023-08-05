import { configureStore } from "@reduxjs/toolkit";
import { pcbuilderApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [pcbuilderApi.reducerPath]: pcbuilderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pcbuilderApi.middleware),
});
