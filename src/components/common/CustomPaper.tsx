import { Grid, GridProps } from "@mui/material";
import { Children } from "../../config/types";
import React from "react";

interface ICustomPaper {
  children: Children;
}
const CustomPaper: React.FC<ICustomPaper & GridProps> = ({
  children,
  ...props
}) => {
  return (
    <Grid
      container
      sx={{
        borderRadius: "1.6rem",
        boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem;",
        backgroundColor: "white",
      }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default CustomPaper;
