//@ts-noCheck
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />),
  email: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />),
  subject: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />),
  feedback: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .trim(<FormattedMessage id="validation.invalid-trim" />)
    .min(5, <FormattedMessage id="validation.min-5-char" />),
});

export default ContactUsSchema;
