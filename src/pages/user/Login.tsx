import { Grid, Typography } from "@mui/material";
import CustomPaper from "../../components/common/CustomPaper";

const Login = () => {
  return (
    <CustomPaper>
      <Grid container>
        <Grid item container>
          <Typography variant="h5" color="primary" className="font-weight-bold">
            Sign in
          </Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Login;
