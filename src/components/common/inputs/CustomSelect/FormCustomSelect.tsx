import { Controller, useFormContext } from "react-hook-form";
import CustomSelect, { SelectInputProps } from "./index";

const SelectInput = ({
  name,
  label,
  required,
  options,
  removeDefaultOption,
  ...props
}: SelectInputProps) => {
  const { control, setValue } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <CustomSelect
            {...props}
            options={options}
            label={label}
            required={required}
            removeDefaultOption={removeDefaultOption}
            formSelectProps={{ name, field, fieldState, setValue }}
          />
        )}
      />
    </>
  );
};

export default SelectInput;
