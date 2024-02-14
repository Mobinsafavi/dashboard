import { FormProvider, useForm } from "react-hook-form";
import FormTextInput from "../../../components/common/inputs/TextInput/FormTextInput";
import CustomPaper from "../../../components/common/CustomPaper";
import { Grid, Typography } from "@mui/material";
import CustomButton from "../../../components/common/CustomButton";
import { FormattedMessage, useIntl } from "react-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactUsSchema from "../../../helpers/validations/schemas/contactUsSchema";

interface IContactUsFormData {
  name: string;
  email: string;
  subject: string;
  feedback: string;
}

const Index = () => {
  const methods = useForm<IContactUsFormData>({
    mode: "all",
    defaultValues: { name: "", email: "", subject: "", feedback: "" },
    resolver: yupResolver(ContactUsSchema),
  });
  const { formatMessage } = useIntl();
  const onSubmit = (data: IContactUsFormData) => console.log(data);

  const gridSizes = { xs: 12, md: 6 };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={7}>
            <CustomPaper mt={10} mb={20} padding={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    color="primary"
                    className="font-weight-bold"
                  >
                    <FormattedMessage id="contact-us-form.form.title" />
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    <FormattedMessage id="contact-us-form.form.description" />
                  </Typography>
                </Grid>
                <Grid item {...gridSizes}>
                  <FormTextInput
                    placeholder={formatMessage({
                      id: "contact-us-form.form.name-field.placeholder",
                    })}
                    name="name"
                    label={formatMessage({
                      id: "contact-us-form.form.name-field.label",
                    })}
                  />
                </Grid>
                <Grid item {...gridSizes}>
                  <FormTextInput
                    placeholder={formatMessage({
                      id: "contact-us-form.form.email-field.placeholder",
                    })}
                    name="email"
                    label={formatMessage({
                      id: "contact-us-form.form.email-field.label",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextInput
                    name="subject"
                    label={formatMessage({
                      id: "contact-us-form.form.subject-field.label",
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextInput
                    placeholder={formatMessage({
                      id: "contact-us-form.form.feedback-field.placeholder",
                    })}
                    multiline
                    rows={4}
                    name="feedback"
                    label={formatMessage({
                      id: "contact-us-form.form.feedback-field.label",
                    })}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <CustomButton bgColor="secondary" type="submit">
                    <FormattedMessage id="contact-us-form.form.submit-btn" />
                  </CustomButton>
                </Grid>
              </Grid>
            </CustomPaper>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Index;
