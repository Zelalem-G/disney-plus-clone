// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
// import your slices here, e.g.:
// import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer
  },
});
