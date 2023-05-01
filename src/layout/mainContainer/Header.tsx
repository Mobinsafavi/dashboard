import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid container>
      <Grid item container xs={6}>
        <Grid item container xs={6}>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default Header;
