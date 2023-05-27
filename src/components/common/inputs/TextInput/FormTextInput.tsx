import { Controller, useFormContext } from "react-hook-form";
import TextInput, { TextInputProps } from "./index";

export type TextInputFormProps = TextInputProps & { name: string };
const FormTextInput = ({
  name,
  label,
  required,
  ...props
}: TextInputFormProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            {...props}
            label={label}
            formInputProps={{ field, fieldState }}
          />
        )}
      />
    </>
  );
};

export default FormTextInput;
