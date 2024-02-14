//@ts-noCheck
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .trim(),
  email: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />)
    .trim(),
  password: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .min(6, <FormattedMessage id="validation.min-6-password" />)
    .trim(),
});

export default SignupSchema;