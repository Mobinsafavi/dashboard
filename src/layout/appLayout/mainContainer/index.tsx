import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainContainer;
