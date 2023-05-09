import { Button, Grid, Theme } from "@mui/material";

import MainContainer from "./mainContainer";
import Sidebar from "./Sidebar";
import { useAppSelector, useAppDispatch } from "../hooks/storeHook";
import { sidebarToggleHandler } from "../store/sidebar/sidebarSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Grid container xs={12} spacing={4}>
      <Grid
        item
        className={classes.gridItem}
        sx={{
          width: {
            xs: `${(100 / 12) * 9}% `,
            sm: `${isSidebarOpen ? `${(100 / 12) * 2}%` : `${100 / 12}%`}`,
          },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        className={classes.gridItem}
        sx={{
          width: {
            xs: `100% `,
            sm: `${
              isSidebarOpen ? `${(100 / 12) * 10}%` : `${(100 / 12) * 11}%`
            }`,
          },
        }}
      >
        <MainContainer />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
