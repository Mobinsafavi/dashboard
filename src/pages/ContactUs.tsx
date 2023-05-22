import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../helpers/validations/schemas/ContactUsSchema";
import TextInput from "../components/common/inputs/TextInput";
import CustomPaper from "../components/common/CustomPaper";
import { Button, Grid } from "@mui/material";
import CustomButton from "../components/common/CustomButton";

const MyForm = () => {
  const methods = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(ContactUsSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  const gridSizes = { xs: 12, md: 6 };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={8}>
            <CustomPaper my={8} p={3} spacing={3}>
              <Grid item {...gridSizes}>
                <TextInput name="name" label="Name" />
              </Grid>
              <Grid item {...gridSizes}>
                <TextInput name="trips" label="Trips" />
              </Grid>
              <CustomButton bgColor="secondary" type="submit">
                Submit
              </CustomButton>
            </CustomPaper>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default MyForm;
