import { TextFieldProps } from "@mui/material";
import CustomInputLabel from "../CustomInputLabel";
import CustomInputBase from "../CustomInputBase";
import { FieldError } from "react-hook-form";
import { Children, IFormProps } from "../../../../config/types";

export type TextInputProps = Omit<TextFieldProps, "variant"> & {
  label?: Children;
  required?: boolean;
  formInputProps?: IFormProps;
};

const TextInput = ({
  label,
  required,
  formInputProps,
  ...props
}: TextInputProps) => {
  const { field, fieldState } = formInputProps || {};
  return (
    <>
      {label && <CustomInputLabel label={label} required={required} />}
      <CustomInputBase
        {...field}
        {...props}
        error={!!fieldState?.error}
        helperText={fieldState?.error?.message ?? undefined}
      />
    </>
  );
};

export default TextInput;
