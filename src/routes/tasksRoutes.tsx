import { RouteObject } from "react-router-dom";

export const tasksRoutes: RouteObject[] = [
  {
    path: "tasks/list",
    element: <div>tasks list</div>,
  },
  {
    path: "tasks/view",
    element: <div>tasks view</div>,
  },
  {
    path: "tasks/add",
    element: <div>tasks add</div>,
  },
  {
    path: "tasks/edit",
    element: <div>tasks edit</div>,
  },
];
