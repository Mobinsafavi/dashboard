import User from "../layout/userLayout";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import { Navigate, RouteObject } from "react-router-dom";
import ResetPassword from "../pages/user/ResetPassword";

export const authRoutes: RouteObject[] = [
  {
    path: "/user",
    element: <User />,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];
