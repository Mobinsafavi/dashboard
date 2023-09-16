import { Grid, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomPaper from "../../components/common/CustomPaper";
import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import CustomButton from "../../components/common/CustomButton";
import AuthDivider from "./components/AuthDivider";
import SignupSchema from "../../helpers/validations/schemas/SignupSchema";
import OtherPlatformAuthentication from "./components/OtherPlatformAuthentication";
import FormCustomCheckBox from "../../components/common/inputs/CustomCheckBox/FormCustomCheckBox";

interface ISignupFormData {
  name: string;
  email: string;
  password: string;
  isAgreedTermsAndConditions: boolean;
}

const Signup = () => {
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

  const submitHandler = (data: ISignupFormData) => console.log(data);

  return (
    <CustomPaper>
      <Grid container p={3}>
        <Grid item container justifyContent="center" px={3}>
          <Typography variant="h5" color="primary" className="font-weight-bold">
            Register with
          </Typography>
        </Grid>
        <OtherPlatformAuthentication my={4} />
        <AuthDivider />
        <Grid item xs={12}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)}>
              <Grid container spacing={2} mt={2}>
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
                        <Typography>I agree the</Typography>
                        <Typography className="font-weight-bold">
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
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Signup;
