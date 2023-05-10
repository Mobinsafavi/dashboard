import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/CustomError";
import React from "react";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
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
]);

export default router;
