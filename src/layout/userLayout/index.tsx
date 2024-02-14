import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import style from "./index.module.scss";
import headerImage from "../../../public/images/curved6.a3404381623e4be7c97b.jpg";
import Footer from "../components/common/Footer";
import AuthLayoutContainer from "./components/AuthLayoutContainer";
import Navbar from "./Navbar";
const User = () => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        overflowY: "hidden",
        padding: "10px",
      }}
    >
      <Grid item xs={12} className={style["header-container"]}>
        <img
          src={headerImage}
          alt=""
          className={style["header-container__image"]}
        />
        <Grid item container className={style["header-container__body"]}>
          <Grid container justifyContent="center" my={2}>
            <AuthLayoutContainer>
              <Navbar />
            </AuthLayoutContainer>
          </Grid>
          <Grid container className={style["header-container__body__title"]}>
            <Grid item xs={12} md={4}>
              <Typography variant="h1" className="font-weight-bold">
                Welcome!
              </Typography>
              <Typography variant="h6" mt={1}>
                Use these forms to login or create new account in your dashboard
                for free.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={11}
        md={3}
        sx={{
          mt: "-200px",
          zIndex: "5",
          mx: "auto",
          mb: "7vh",
        }}
      >
        <Outlet />
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          mb: " 0.5vh",
        }}
      >
        <AuthLayoutContainer>
          <Footer />
        </AuthLayoutContainer>
      </Grid>
    </Grid>
  );
};

export default User;
