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
      {...props}
      sx={{
        borderRadius: "1.6rem",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: "white",
      }}
    >
      {children}
    </Grid>
  );
};

export default CustomPaper;
