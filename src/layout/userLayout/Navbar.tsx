import { Button, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/common/CustomButton";

const Navbar = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h6" color="white" className="font-weight-bold">
          Project Dashboard
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
        <CustomButton
          sx={{ borderRadius: "150px", paddingX: "30px !important" }}
        >
          ABOUT ME
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default Navbar;
