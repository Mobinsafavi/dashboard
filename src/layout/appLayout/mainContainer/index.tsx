import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";

const MainContainer = () => {
  return (
    <Box width="95%">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainContainer;
