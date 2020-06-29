export type LoginFormValues = {
  email: string;
  password: string;
  rememberUser: boolean;
}

export type LoginFormFields = keyof LoginFormValues;

export const formInitialValues: LoginFormValues = {
  email: '',
  password: '',
  rememberUser: false,
}