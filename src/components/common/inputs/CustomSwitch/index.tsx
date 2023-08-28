import { Stack, styled, Switch, SwitchProps, Typography } from "@mui/material";
import React from "react";
import { Children, IFormProps, PaletteColor } from "../../../../config/types";

const SwitchComponent = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary
            : theme.palette.secondary,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#32d14d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export type CustomSwitchComponentTypes = SwitchProps & {
  labelColor?: PaletteColor;
  enableText: string;
  disableText?: string;
  formInputProps?: IFormProps;
};

const CustomSwitch: React.FC<CustomSwitchComponentTypes> = ({
  enableText,
  disableText,
  labelColor = "primary",
  formInputProps,
  ...props
}) => {
  const { field } = formInputProps || {};

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {disableText ? (
        <Typography color={labelColor}>{disableText}</Typography>
      ) : null}
      <SwitchComponent {...field} {...props} />
      <Typography color={labelColor}>{enableText}</Typography>
    </Stack>
  );
};

export default CustomSwitch;
