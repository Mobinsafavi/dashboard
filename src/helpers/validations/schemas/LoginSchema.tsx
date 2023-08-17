//@ts-noCheck
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />),
  password: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .min(6, <FormattedMessage id="validation.min-6-password" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />),
});

export default LoginSchema;
