import React from 'react';
import { FormikState, Field } from 'formik';

import { LoginFormFields, LoginFormValues } from '../login-form.consts';

export type AvailableFieldTypes = 'email' | 'password' | 'checkbox';

export type FormFieldProps = FormikState<LoginFormValues> & {
  name: LoginFormFields;
  type: AvailableFieldTypes;
  label: string;
  placeholder?: string;
}

export const ERROR_DATA_TEST_ID = 'error';

export const FormField = ({ name, type, label, placeholder, ...formikProps }: FormFieldProps) => {
  const hasError = formikProps.errors[name] && formikProps.touched[name];
  
  return (
    <>
      <label htmlFor={name} data-testid="label">{label}</label>
      {hasError && (<span data-testid={ERROR_DATA_TEST_ID}>{formikProps.errors[name]}</span>)}
      <Field name={name} id={name} type={type} placeholder={placeholder} data-testid="field"/>
    </>
  )
}