import { Grid, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import CustomButton from "../../components/common/CustomButton";
import AuthDivider from "./components/AuthDivider";
import SignupSchema from "../../helpers/validations/schemas/signupSchema";
import OtherPlatformAuthentication from "./components/OtherPlatformAuthentication";
import FormCustomCheckBox from "../../components/common/inputs/CustomCheckBox/FormCustomCheckBox";
import { Link } from "react-router-dom";
import { urls } from "../../constants/urls";
import AuthContentContainerPaper from "./components/AuthContentContainerPaper";
import ProductController from "../../utils/Entities/Product/product.controller";
import UserController from "../../utils/Entities/User/user.controller";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { setUserInformation } from "../../store/user/userSlice";

interface ISignupFormData {
  name: string;
  email: string;
  password: string;
  isAgreedTermsAndConditions: boolean;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const methods = useForm<ISignupFormData>({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      isAgreedTermsAndConditions: false,
    },
    resolver: yupResolver(SignupSchema),
  });

  const submitHandler = async (data: ISignupFormData) => {
    try {
      const userInfo = await UserController.signup(data);
      dispatch(setUserInformation(userInfo.response));
    } catch (err) {}
  };

  return (
    <AuthContentContainerPaper title="Register with">
      <OtherPlatformAuthentication />
      <AuthDivider my={3} />
      <Grid item xs={12}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormTextInput name="name" placeholder="Name" />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput name="email" placeholder="Email" />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormCustomCheckBox
                  name="isAgreedTermsAndConditions"
                  label={
                    <Stack direction="row" spacing={1}>
                      <Typography color="primary">I agree the</Typography>
                      <Typography color="primary" className="font-weight-bold">
                        Terms and Conditions
                      </Typography>
                    </Stack>
                  }
                  sx={{ marginLeft: "10px !important" }}
                />
              </Grid>
              <Grid item xs={12} my={3}>
                <CustomButton type="submit" bgColor="secondary" fullWidth>
                  SIGN up
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <Stack spacing={1} direction="row" justifyContent="center" mt={1}>
          <Typography color="primary">Already have an account?</Typography>
          <Link to={urls.user.login} className="text-decoration-none">
            <Typography color="primary" className="font-weight-bold">
              Sign in
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </AuthContentContainerPaper>
  );
};

export default Signup;
