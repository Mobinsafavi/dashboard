import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import User from "../pages/user";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import MainLayout from "../layout/appLayout";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/user/login" replace={true} />} />
      <Route path="/user" element={<User />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/app" element={<MainLayout />}>
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Route>
  )
);
