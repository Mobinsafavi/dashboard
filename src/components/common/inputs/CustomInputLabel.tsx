import React from "react";
import { Box, Typography } from "@mui/material";

interface IInputLabelProps {
  label: string;
  required?: boolean;
}

const CustomInputLabel: React.FC<IInputLabelProps> = ({ label, required }) => {
  return (
    <Box
      mb={1}
      className="font-weight-bold position-relative"
      width="fit-content"
      sx={{ fontSize: "1.4rem", whiteSpace: "nowrap" }}
    >
      <Typography
        variant="caption"
        color="primary"
        className="font-weight-bold"
      >
        {label}
      </Typography>
      {required ? (
        <Box sx={{ position: "absolute", right: -8, top: -2 }}>*</Box>
      ) : null}
    </Box>
  );
};

export default CustomInputLabel;
