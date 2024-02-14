import { Navigate, RouteObject } from "react-router-dom";
import { authRoutes } from "../../routes/authRoutes";

const isAuthenticated = false;

type RoutesType = RouteObject & { isPrivet?: boolean };
const routeRenderer = (routes: RoutesType[]): RoutesType[] => {
  let routesArray = authRoutes;

  routes.map((route) => {
    if (route.isPrivet) {
      if (isAuthenticated) {
        routesArray = routes;
      } else {
        return [
          {
            path: "/",
            element: <Navigate to="/user/login" />,
          },
        ];
      }
    } else {
      routesArray = routes;
    }
  });

  return routesArray;
};

export default routeRenderer;
