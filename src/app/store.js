// src/app/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import your slices here, e.g.:
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
