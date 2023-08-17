import { Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomPaper from "../../components/common/CustomPaper";
import FormTextInput from "../../components/common/inputs/TextInput/FormTextInput";
import LoginSchema from "../../helpers/validations/schemas/LoginSchema";
import style from "./Login.module.scss";
import CustomButton from "../../components/common/CustomButton";
import CustomSwitch from "../../components/common/inputs/CustomSwitch";

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

  const submitHandler = (data: ILoginFormData) => console.log(data);

  return (
    <CustomPaper>
      <Grid container className={style["auth-box-container"]}>
        <Grid item container className={style["auth-box-container__title"]}>
          <Typography variant="h5" color="primary" className="font-weight-bold">
            Sign in
          </Typography>
        </Grid>
        <Grid item xs={12} className={style["auth-box-container__form"]}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)}>
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
                <CustomButton fullWidth>SIGN IN</CustomButton>
              </Grid>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Login;
