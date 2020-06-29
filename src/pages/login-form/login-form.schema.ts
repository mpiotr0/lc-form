import { string, boolean, object, Schema } from 'yup';

import { LoginFormFields } from './login-form.consts';

const REQUIRED_FIELD_ERROR = 'Field required';
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

const schemaObject: { [key in LoginFormFields]: Schema<string | boolean | undefined> } = {
  email: string()
    .email('Invalid email')
    .required(REQUIRED_FIELD_ERROR),
  password: string()
    .min(6, 'Invalid password')
    .matches(PASSWORD_REGEX, 'Invalid password')
    .required(REQUIRED_FIELD_ERROR),
  rememberUser: boolean(),
};

export const loginFormSchema = object().shape(schemaObject);
