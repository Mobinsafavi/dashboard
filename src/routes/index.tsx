import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/CustomError";
import React from "react";
import ContactUs from "../pages/ContactUs";
import {userRoutes} from "./userRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
    ...userRoutes,
]);