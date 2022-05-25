import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./Slices/AuthenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthenticationSlice,
  },
});
