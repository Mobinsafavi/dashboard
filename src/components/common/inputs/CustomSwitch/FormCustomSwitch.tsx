import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import CustomSwitch, { CustomSwitchProps } from "./index";

type FormCustomSwitchProps = CustomSwitchProps & { name: string };
const FormCustomSwitch: React.FC<FormCustomSwitchProps> = ({
  name,
  label,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <CustomSwitch
            label={label}
            formSwitchProps={{ field, fieldState }}
            {...props}
          />
        );
      }}
    />
  );
};

export default FormCustomSwitch;
