import { RouteObject } from "react-router-dom";
import MainLayout from "../layout/appLayout";
import Index from "../pages/app/contact-us";
import { tasksRoutes } from "./tasksRoutes";
import { projectsRoutes } from "./projectsRoutes";
import { usersRoute } from "./usersRoute";
import { boolean } from "yup";

type appRoutes = RouteObject & { isPrivet?: boolean };
export const appRoutes: appRoutes[] = [
  {
    path: "/app",
    element: <MainLayout />,
    isPrivet: true,
    children: [
      ...tasksRoutes,
      ...projectsRoutes,
      ...usersRoute,
      {
        path: "dashboard",
        element: <h1>dashboard</h1>,
      },
      {
        path: "kanban",
        element: <h1>kanban</h1>,
      },
      {
        path: "dod-setup",
        element: <h1>dod setup</h1>,
      },
      {
        path: "contact-us",
        element: <Index />,
      },
    ],
  },
];
