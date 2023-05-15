/*import CustomPaper from "../components/common/CustomPaper";
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

export default ContactUs;*/

import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../helpers/validations/schemas/ContactUsSchema";
import * as yup from "yup";
interface FormData {
  name: string;
  trips: string;
  airline: string;
}

const MyForm = () => {
  const methods = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(ContactUsSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="name" label="name" />
        <FormInput name="trips" label="trips" />
        <FormInput name="airline" label="airline" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default MyForm;
