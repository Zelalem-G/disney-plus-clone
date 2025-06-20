// src/app/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import your slices here, e.g.:
// import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
