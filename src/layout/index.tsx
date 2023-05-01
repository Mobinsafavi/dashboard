import {
  Box,
  Button,
  Collapse,
  Grid,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import MainContainer from "./mainContainer";
import Sidebar from "./Sidebar";
import { useAppSelector, useAppDispatch } from "../hooks/storeHook";
import { sidebarToggleHandler } from "../store/sidebar/sidebarSlice";
import { makeStyles } from "@mui/styles";
import dashboardTheme from "../constants/theme";

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
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Grid container spacing={4}>
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
            sm: `${isSidebarOpen ? `${(100 / 12) * 10}%` : `${(100 / 12) * 11}%`}`,
          },
        }}
      >
        <MainContainer />
      </Grid>
      <Button onClick={() => dispatch(sidebarToggleHandler())}>temp</Button>
    </Grid>
  );
};

export default MainLayout;
