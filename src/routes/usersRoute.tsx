import { RouteObject } from "react-router-dom";

export const usersRoute: RouteObject[] = [
  {
    path: "users/list",
    element: <div>users list</div>,
  },
  {
    path: "users/view",
    element: <div>users view</div>,
  },
  {
    path: "users/add",
    element: <div>users add</div>,
  },
  {
    path: "users/edit",
    element: <div>users edit</div>,
  },
];
