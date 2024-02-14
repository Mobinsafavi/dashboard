import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import languageReducer from "./language/languageSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    language: languageReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
