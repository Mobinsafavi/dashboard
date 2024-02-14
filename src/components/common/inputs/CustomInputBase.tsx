import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const CustomInputBase = styled(TextField)(({ multiline, size, error }) => ({
  "& .MuiInputBase-root": {
    height: multiline ? undefined : size === "small" ? 30 : 40,
    backgroundColor: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: 500,
    borderRadius: "0.8rem",
    "&:hover fieldset": {
      borderColor: error ? "red" : "#C4C4C4",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "red" : "rgb(53, 209, 245)",
      boxShadow: error
        ? undefined
        : "rgb(129, 227, 249) 0rem 0rem 0rem 0.125rem",
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
