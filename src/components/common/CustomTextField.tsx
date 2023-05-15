import { Controller, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

const FormInput = ({ name, ...rest }: TextFieldProps & { name: string }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur } }) => (
        <>
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
          />
        </>
      )}
    />
  );
};

export default FormInput;
