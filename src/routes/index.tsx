import { createBrowserRouter, Navigate } from "react-router-dom";
import { authRoutes } from "./authRoutes";
import { appRoutes } from "./appRoutes";
import routeRenderer from "../helpers/common/routeRenderer";

const isAuthenticated = false;
const applicationRoutes = routeRenderer(appRoutes);
const authenticationRoutes = routeRenderer(authRoutes);
export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated ? (
      <Navigate to="/app/dashboard" />
    ) : (
      <Navigate to="/user/login" />
    ),
  },
  ...applicationRoutes,
  ...authenticationRoutes,
]);
