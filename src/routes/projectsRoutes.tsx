import { RouteObject } from "react-router-dom";

export const projectsRoutes: RouteObject[] = [
  {
    path: "projects/list",
    element: <div>projects list</div>,
  },
  {
    path: "projects/view",
    element: <div>projects view</div>,
  },
  {
    path: "projects/add",
    element: <div>projects add</div>,
  },
  {
    path: "projects/edit",
    element: <div>projects edit</div>,
  },
];
