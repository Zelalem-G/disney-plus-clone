// src/app/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import your slices here, e.g.:
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
