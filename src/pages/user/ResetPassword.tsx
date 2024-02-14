import AuthContentContainerPaper from "./components/AuthContentContainerPaper";
import { Grid, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import CustomButton from "../../components/common/CustomButton";
import ResetPasswordSchema from "../../helpers/validations/schemas/resetPasswordSchema";

interface IREserPasswordFormData {
  email: string;
}

const ResetPassword = () => {
  const methods = useForm<IREserPasswordFormData>({
    mode: "all",
    defaultValues: { email: "" },
    resolver: yupResolver(ResetPasswordSchema),
  });

  const submitHandler = (data: IREserPasswordFormData) => console.log(data);

  return (
    <AuthContentContainerPaper title="Reset password">
      <Grid xs={12} mb={5}>
        <Stack direction="row" justifyContent="center">
          <Typography color="secondary" variant="h6">
            You will receive an e-mail in maximum 60 seconds
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FormProvider {...methods}>
          <form>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <FormTextInput name="email" placeholder="Email" />
              </Grid>
              <Grid item xs={12}>
                <CustomButton type="submit" bgColor="secondary" fullWidth>
                  SEND
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </AuthContentContainerPaper>
  );
};

export default ResetPassword;
