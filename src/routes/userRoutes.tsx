import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import User from "../pages/user";
import { ErrorPage } from "../pages/CustomError";
import React from "react";
import { RouteObject } from "react-router/dist/lib/context";

export const userRoutes: RouteObject[] = [
  {
    path: "/user",
    element: <User />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
        index: true,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
];
