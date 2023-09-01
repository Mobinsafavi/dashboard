import { Box, Checkbox, FormControlLabel, styled } from "@mui/material";
import { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import React from "react";
import { Children } from "../../../../config/types";

const CustomCheckbox = styled(Checkbox)({
  padding: 0,
  "& .MuiSvgIcon-root": {
    fontSize: 25,
  },
});

interface ICustomCheckBox extends CheckboxProps {
  label: Children;
}
const CustomCheckBox: React.FC<ICustomCheckBox> = ({ label }) => {
  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          color="primary"
          sx={{
            color: "gray",
            stroke: "#ffffff",
            strokeWidth: 1,
            borderRadius: "",
          }}
        />
      }
      label={<Box sx={{ marginLeft: 1 }}>{label}</Box>}
    />
  );
};
export default CustomCheckBox;
