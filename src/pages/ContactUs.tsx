import CustomPaper from "../components/common/CustomPaper";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { ContactUsSchema } from "../helpers/validations/schemas/ContactUsSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactUs = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ContactUsSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      feedBack: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <CustomPaper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <TextField label="Full Name" {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField label="Email" {...field} />}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field }) => <TextField label="Subject" {...field} />}
        />
        <Controller
          name="feedBack"
          control={control}
          render={({ field }) => <TextField label="Feedback" {...field} />}
        />
        <input type="submit" />
      </form>
    </CustomPaper>
  );
};

export default ContactUs;
