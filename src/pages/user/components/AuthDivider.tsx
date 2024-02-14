import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { GridProps } from "@mui/material/Grid/Grid";

const AuthDivider: React.FC<GridProps> = ({ ...props }) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      {...props}
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
