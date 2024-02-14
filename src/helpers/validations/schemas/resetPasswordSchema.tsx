//@ts-noCheck
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />)
    .trim(),
});

export default ResetPasswordSchema;
