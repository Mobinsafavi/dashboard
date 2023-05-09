import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/sass/main.sass";
import { RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/CustomError";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
