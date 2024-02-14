import React from "react";
import { Children } from "../../../config/types";
import { Grid, Typography } from "@mui/material";
import CustomPaper from "../../../components/common/CustomPaper";

interface IAuthContentPaperProps {
  title: string;
  children: Children;
}

const AuthContentContainerPaper: React.FC<IAuthContentPaperProps> = ({
  title,
  children,
}) => {
  return (
    <CustomPaper padding={3}>
      <Grid container>
        <Grid item container justifyContent="center" px={3} mb={4}>
          <Typography variant="h5" color="primary" className="font-weight-bold">
            {title}
          </Typography>
        </Grid>
        {children}
      </Grid>
    </CustomPaper>
  );
};

export default AuthContentContainerPaper;
