import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const CustomInputBase = styled(TextField)(({ multiline, size }) => ({
  "& .MuiInputBase-root": {
    height: multiline ? undefined : size === "small" ? 30 : 40,
    backgroundColor: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: 500,
    borderRadius: "0.8rem",
    "&.Mui-focused fieldset": {
      borderColor: "rgb(53, 209, 245)",
      boxShadow: "rgb(129, 227, 249) 0rem 0rem 0rem 0.125rem",
    },
  },
  "& ::placeholder": {
    fontSize: "1.4rem",
  },
  width: "100%",
}));

const InputBase = (props: TextFieldProps) => {
  return (
    <CustomInputBase
      InputProps={
        props.error
          ? {
              endAdornment: (
                <FontAwesomeIcon icon={faCircleExclamation} color="#EA0606" />
              ),
            }
          : undefined
      }
      {...props}
    />
  );
};

export default InputBase;
