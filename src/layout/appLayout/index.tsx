import { Grid } from "@mui/material";

import MainContainer from "./mainContainer";
import { useAppSelector } from "../../hooks/storeHook";
import Sidebar from "./sidebar";

const MainLayout = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Grid container sx={{ overflow: "hidden", mt: 3 }}>
      <Grid
        item
        xs={12}
        lg={isSidebarOpen ? 2 : 1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        lg={isSidebarOpen ? 10 : 11}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MainContainer />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
