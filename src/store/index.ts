import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import languageReducer from "./language/languageSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    language: languageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
