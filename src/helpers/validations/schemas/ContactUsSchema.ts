import * as yup from "yup";

export const ContactUsSchema = yup
  .object({
    name: yup.string().required("name field is required"),
    trips: yup
      .number()
      .typeError("you must specify a number")
      .positive()
      .integer()
      .required("trips field is required"),
    airline: yup
      .number()
      .typeError("you must specify a number")
      .positive()
      .integer()
      .required("airline field is required"),
  })
  .required();
