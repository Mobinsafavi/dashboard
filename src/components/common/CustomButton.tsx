import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { BGColor, Children } from "../../config/types";
import { ButtonTypeMap } from "@mui/material/Button/Button";

interface ICustomButtonProps {
  bgColor?: BGColor;
  children: Children;
}

const StyledButton = styled(Button)(({ size, theme }) => ({
  height: size === "medium" || !size ? 40 : undefined,
  fontSize: "1.2rem",
  color: "white",
  padding: 2,
  borderRadius: "0.8rem",
}));

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
    <StyledButton {...props} className={backgroundColor}>
      {children}
    </StyledButton>
  );
};
export default CustomButton;
