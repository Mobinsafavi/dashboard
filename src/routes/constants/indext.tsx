import { RouteProps } from "react-router";
import { Navigate } from "react-router-dom";
import User from "../../pages/user";
import MainLayout from "../../layout/appLayout";
import { RouteObject } from "react-router/dist/lib/context";
import Login from "../../pages/user/Login";
import Signup from "../../pages/user/Signup";
import ContactUs from "../../pages/ContactUs";
export const RouteArray: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/user/login" replace={true} />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
];
