import { Breadcrumbs, Grid, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CustomBreadCrumb from "../../components/common/CustomBreadCrumb";

const Header = () => {
  return (
    <Grid container sx={{ backgroundColor: "info" }}>
      <Grid item container xs={6}>
        <Grid item container xs={6}>
          <Grid
            item
            xs={9}
            sx={{
              display: "flex ",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CustomBreadCrumb />
            <Typography
              variant="h6"
              className="font-weight-bold"
              color="primary"
            >
              Dashboard
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={3}
            sx={{ justifyContent: " center", alignItems: "center" }}
          >
            <FontAwesomeIcon
              size="2xl"
              color="rgb(52, 71, 103)"
              icon={faBars}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={6} sx={{ justifyContent: "end" }}>
        <Grid item container xs={10}>
          <Grid item container xs={8} sx={{ justifyContent: "end " }}>
            <TextField
              label="With normal TextField"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <FontAwesomeIcon
                    color="rgb(52, 71, 103)"
                    icon={faMagnifyingGlass}
                  />
                ),
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            spacing={2}
          >
            <Grid
              item
              container
              xs={6}
              sx={{ alignItems: "center" }}
              spacing={1}
            >
              <Grid item>
                <FontAwesomeIcon
                  color="rgb(52, 71, 103)"
                  size="xl"
                  icon={faCircleUser}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  className="font-weight-medium"
                  color="secondary"
                >
                  Sign in
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <FontAwesomeIcon
                color="rgb(52, 71, 103)"
                size="xl"
                icon={faGear}
              />
            </Grid>
            <Grid item>
              <FontAwesomeIcon
                icon={faBell}
                size="xl"
                color="rgb(52, 71, 103)"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
