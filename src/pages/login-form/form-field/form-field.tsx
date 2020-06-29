import React from 'react';
import { FormikState, Field } from 'formik';

import { LoginFormFields, LoginFormValues } from '../login-form.consts';
import styles from './form-field.module.scss';

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
    <div className={styles.wrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor={name} data-testid="label" className={styles.label}>{label}</label>
        {hasError && (<span data-testid={ERROR_DATA_TEST_ID} className={styles.error}>{formikProps.errors[name]}</span>)}
      </div>
      <Field name={name} id={name} type={type} placeholder={placeholder} data-testid="field" className={styles.input} />
    </div>
  )
}