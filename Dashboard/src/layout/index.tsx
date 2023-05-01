import { Button, Grid } from "@mui/material";
import { useState } from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  const sidebarHandler = () => {
    setOpenSidebar((prev) => !prev);
    console.log(openSidebar);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <MainContainer />
      </Grid>
      <Button onClick={sidebarHandler}>click me</Button>
    </Grid>
  );
};

export default MainLayout;
