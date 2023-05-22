import { Controller, useFormContext } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import CustomInputLabel from "./CustomInputLabel";
import CustomInputBase from "./CustomInputBase";
import { Children } from "../../../config/types";

export type ITextInputProps = TextFieldProps & {
  name: string;
  label?: Children;
  required?: boolean;
};
const TextInput = ({ name, label, required, ...props }: any) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {label && (
        <CustomInputLabel label={label as string} required={required} />
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <CustomInputBase
              {...field}
              {...props}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
            />
          </>
        )}
      />
    </>
  );
};

export default TextInput;
