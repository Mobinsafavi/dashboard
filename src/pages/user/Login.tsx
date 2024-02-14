import { Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import LoginSchema from "../../helpers/validations/schemas/loginSchema";
import CustomButton from "../../components/common/CustomButton";
import AuthDivider from "./components/AuthDivider";
import OtherPlatformAuthentication from "./components/OtherPlatformAuthentication";
import FormCustomSwitch from "../../components/common/inputs/CustomSwitch/FormCustomSwitch";
import { urls } from "../../constants/urls";
import AuthContentContainerPaper from "./components/AuthContentContainerPaper";
import UserController from "../../utils/Entities/User/user.controller";

interface ILoginFormData {
  email: string;
  password: string;
  isRemember: boolean;
}

const Login = () => {
  const methods = useForm<ILoginFormData>({
    mode: "all",
    defaultValues: { email: "", password: "", isRemember: false },
    resolver: yupResolver(LoginSchema),
  });

  const submitHandler = async (data: ILoginFormData) => {
    const { email, password } = data;
    try {
      await UserController.login({ email, password });
    } catch (err) {}
  };

  return (
    <AuthContentContainerPaper title="Sign in">
      <OtherPlatformAuthentication />
      <Grid item xs={12}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12}>
                <FormTextInput name="email" placeholder="Email" />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} mb={2}>
                <FormCustomSwitch
                  name="isRemember"
                  label="Remember me"
                  sx={{ marginLeft: "10px" }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} my={3}>
              <CustomButton type="submit" fullWidth>
                SIGN IN
              </CustomButton>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
      <AuthDivider />
      <Grid item xs={12} my={3}>
        <Link to={urls.user.signup}>
          <CustomButton bgColor="secondary" fullWidth>
            SIGN UP
          </CustomButton>
        </Link>
      </Grid>
    </AuthContentContainerPaper>
  );
};

export default Login;
