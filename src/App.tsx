import { useState } from "react";
import MainLayout from "./layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import store from "./store";
import dashboardTheme from "./constants/theme";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
function App() {

  const { message, locale } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
