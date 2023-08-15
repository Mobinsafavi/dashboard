import { useState } from "react";
import MainLayout from "./layout/appLayout";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import store from "./store";
import dashboardTheme from "./constants/theme";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { IntlProvider } from "react-intl";
function App() {
  const { message, locale } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <IntlProvider locale={locale} messages={message}>
      <MainLayout />
    </IntlProvider>
  );
}

export default App;
