import { Divider, Grid, Typography } from "@mui/material";

const AuthDivider = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid item xs={5}>
        <Divider />
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          color="secondary"
          className="font-weight-bold"
        >
          or
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default AuthDivider;
