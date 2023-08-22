import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";

import store from "./store";
import dashboardTheme from "./constants/theme";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { router } from "./routes";

function App() {
  const { message, locale } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <IntlProvider locale={locale} messages={message}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
