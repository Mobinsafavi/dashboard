import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import style from "./index.module.scss";
import headerImage from "../../../public/images/curved6.a3404381623e4be7c97b.jpg";
const User = () => {
  return (
    <Grid container>
      <Grid item xs={12} className={style["header-container"]}>
        <img
          src={headerImage}
          alt=""
          className={style["header-container__image"]}
        />
        <Grid item container className={style["header-container__body"]}>
          <Grid container className={style["header-container__body__navbar"]}>
            <div>Hello word</div>
          </Grid>
          <Grid container className={style["header-container__body__title"]}>
            <Grid item xs={4}>
              <Typography variant="h1" className="font-weight-bold">
                Welcome!
              </Typography>
              <Typography variant="h6">
                Use these awesome forms to login or create new account in your
                project for free.
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={3}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default User;
