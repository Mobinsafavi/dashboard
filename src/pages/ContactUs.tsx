import { FormProvider, useForm } from "react-hook-form";
import FormTextInput from "../components/common/inputs/TextInput/FormTextInput";
import CustomPaper from "../components/common/CustomPaper";
import { Grid, Typography } from "@mui/material";
import CustomButton from "../components/common/CustomButton";

interface IContactUsFormData {
  name: string;
  email: string;
  subject: string;
  feedback: string;
}

const ContactUs = () => {
  const methods = useForm<IContactUsFormData>({
    mode: "all",
    defaultValues: { name: "", email: "", subject: "", feedback: "" },
    // resolver: yupResolver(ContactUsSchema),
  });
  const onSubmit = (data: IContactUsFormData) => console.log(data);

  const gridSizes = { xs: 12, md: 6 };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={7}>
            <CustomPaper my={8} spacing={3} pr={4}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  color="primary"
                  className="font-weight-bold"
                >
                  Contact Us Form
                </Typography>
                <Typography variant="h6" color="secondary">
                  Relational information
                </Typography>
              </Grid>
              <Grid item {...gridSizes}>
                <FormTextInput
                  placeholder="eg. Micheal"
                  name="name"
                  label="Full name"
                />
              </Grid>
              <Grid item {...gridSizes}>
                <FormTextInput
                  placeholder="eg. project@dashboard.com"
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput name="subject" label="Subject" />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  placeholder="eg. Your message"
                  multiline
                  rows={4}
                  name="feedback"
                  label="Feedback"
                />
              </Grid>
              <Grid item>
                <CustomButton bgColor="secondary" type="submit">
                  Submit
                </CustomButton>
              </Grid>
            </CustomPaper>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default ContactUs;
