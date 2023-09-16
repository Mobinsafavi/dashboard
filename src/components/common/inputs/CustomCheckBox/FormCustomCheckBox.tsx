import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import CustomCheckBox, { ICustomCheckBox } from "./index";

type FormCustomCheckBoxProps = ICustomCheckBox & { name: string };
const FormCustomCheckBox: React.FC<FormCustomCheckBoxProps> = ({
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
          <CustomCheckBox
            label={label}
            formCheckBoxProps={{ field, fieldState }}
            {...props}
          />
        );
      }}
    />
  );
};

export default FormCustomCheckBox;