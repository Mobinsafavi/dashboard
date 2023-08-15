import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/sass/main.sass";
import { RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/CustomError";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@mui/material";
import dashboardTheme from "./constants/theme";
import {router} from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={dashboardTheme}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);
