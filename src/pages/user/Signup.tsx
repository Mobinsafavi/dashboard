import { Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import CustomPaper from "../../components/common/CustomPaper";
import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import style from "./Login.module.scss";
import CustomButton from "../../components/common/CustomButton";
import CustomSwitch from "../../components/common/inputs/CustomSwitch";
import AuthDivider from "./components/AuthDivider";
import SignupSchema from "../../helpers/validations/schemas/SignupSchema";
import OtherPlatformAuthentication from "./components/OtherPlatformAuthentication";

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
      <Grid container className={style["auth-box-container"]}>
        <Grid item container className={style["auth-box-container__title"]}>
          <Typography variant="h5" color="primary" className="font-weight-bold">
            Register with
          </Typography>
        </Grid>
        <OtherPlatformAuthentication />
        <AuthDivider />
        <Grid item xs={12} className={style["auth-box-container__form"]}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)}>
              <Grid
                item
                xs={12}
                className={style["auth-box-container__form__input"]}
              >
                <FormTextInput name="name" placeholder="Name" />
              </Grid>
              <Grid
                item
                xs={12}
                className={style["auth-box-container__form__input"]}
              >
                <FormTextInput name="email" placeholder="Email" />
              </Grid>
              <Grid
                item
                xs={12}
                className={style["auth-box-container__form__input"]}
              >
                <FormTextInput name="password" placeholder="Password" />
              </Grid>
              <Grid
                item
                xs={12}
                className={style["auth-box-container__form__input"]}
              >
                <CustomSwitch enableText="Remember me" />
              </Grid>
              <Grid
                item
                xs={12}
                className={style["auth-box-container__form__submit-button"]}
              >
                <CustomButton type="submit" bgColor="secondary" fullWidth>
                  SIGN up
                </CustomButton>
              </Grid>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Signup;
