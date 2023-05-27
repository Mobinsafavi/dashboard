import { IconButton, MenuItem } from "@mui/material";

import TextInput from "../TextInput/index";
import isObject from "../../../../helpers/common/isObject";
import isString from "../../../../helpers/common/isString";
import isNumber from "../../../../helpers/common/isNumber";
import isBoolean from "../../../../helpers/common/isBoolean";
import { Children, IFormProps } from "../../../../config/types";
import { TextInputFormProps } from "../TextInput/FormTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface IFormSelectProps extends IFormProps {
  name: string;
}

export type SelectInputProps = TextInputFormProps & {
  options: Array<{ value: any; label: Children; disabled?: boolean }>;
  removeDefaultOption?: boolean;
  formSelectProps?: IFormSelectProps;
};

const SelectInput = ({
  label,
  required,
  options,
  removeDefaultOption,
  formSelectProps,
  ...props
}: Omit<SelectInputProps, "name">) => {
  const { name, field, fieldState, setValue } = formSelectProps || {};
  const isValueValid = (value: any) =>
    (isString(value) && value?.length > 0) ||
    isObject(value) ||
    isNumber(value) ||
    isBoolean(value);

  const selectOptions = removeDefaultOption ? options.slice(1) : options;

  return (
    <TextInput
      select
      label={label}
      InputProps={{
        endAdornment: isValueValid(field ? field.value : props.value) ? (
          <IconButton
            className="m-0 p-0"
            size="small"
            onClick={() => {
              if (field && setValue && name) {
                setValue(name, "");
                field.onBlur();
                field.onChange("");
              } else {
                props.value = "";
              }
            }}
            disabled={props ? props?.disabled : undefined}
          >
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
        ) : null,
      }}
      SelectProps={{
        IconComponent: isValueValid(field ? field.value : props.value)
          ? () => null
          : undefined,
      }}
      formInputProps={{ field, fieldState }}
      {...props}
    >
      {selectOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextInput>
  );
};

export default SelectInput;
