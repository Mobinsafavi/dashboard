import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/CustomError";
import React from "react";
import Temp from "../pages/temp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "temp",
        element: <Temp />,
      },
    ],
  },
]);

export default router;
