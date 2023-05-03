import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { BGColor, Children } from "../../config/types";
import { ButtonTypeMap } from "@mui/material/Button/Button";

interface ICustomButtonProps {
  bgColor?: BGColor;
  children: Children;
}

const CustomButton: React.FC<ICustomButtonProps & ButtonProps> = ({
  bgColor = "primary",
  children,
  ...props
}) => {
  let backgroundColor;
  switch (bgColor) {
    case "primary":
      backgroundColor = "primary-gradiant";
      break;
    case "secondary":
      backgroundColor = "secondary-gradiant";
      break;
    case "success":
      backgroundColor = "success-gradiant";
      break;
    case "error":
      backgroundColor = "error-gradiant";
      break;
    case "warning":
      backgroundColor = "warning-gradiant";
  }

  return (
    <Button {...props} color="info" className={backgroundColor}>
      {children}
    </Button>
  );
};
export default CustomButton;
