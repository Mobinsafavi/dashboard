import { styled, TextField, TextFieldProps } from "@mui/material";

const CustomInputBase = styled(TextField)(({ multiline, size }) => ({
  "& .MuiInputBase-root": {
    height: multiline ? undefined : size === "small" ? 40 : 50,
    backgroundColor: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: 500,
  },
  "& ::placeholder": {
    fontSize: "1.4rem",
  },
  width: "100%",
}));

const InputBase = (props: TextFieldProps) => {
  return <CustomInputBase {...props} />;
};

export default InputBase;
