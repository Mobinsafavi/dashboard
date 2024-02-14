import { Box } from "@mui/material";
import React from "react";
import { Children } from "../../../config/types";

const AuthLayoutContainer: React.FC<{ children: Children }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        width: {
          xs: `${(11 / 12) * 100}%`,
          md: `${(10 / 12) * 100}%`,
          lg: `${(9 / 12) * 100}%`,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AuthLayoutContainer;
