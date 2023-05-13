import * as Yup from "yup";
export const ContactUsSchema = Yup.object().shape({
  fullName: Yup.number().required(),
  email: Yup.string().required(),
  subject: Yup.string().required(),
  feedBack: Yup.string().required(),
});
