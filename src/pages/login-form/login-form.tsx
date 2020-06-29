import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, FormikState } from 'formik';

import { LoginFormValues, formInitialValues } from './login-form.consts';
import { loginFormSchema } from './login-form.schema';
import { FormField } from './form-field';

export const LoginForm = () => {
  let history = useHistory();

  const handleSubmit = (value: LoginFormValues): void => {
    history.push('/');
  }

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
      >
        {(formikValues: FormikState<LoginFormValues>) => (
          <Form>
            {console.log('err', formikValues.values)}
            <FormField
              name="email"
              type="email"
              label="Email address"
              placeholder="Type email address"
              {...formikValues}
            />
            <FormField
              name="password"
              type="password"
              label="Password"
              placeholder="Type password"
              {...formikValues}
            />
            <FormField
              name="rememberUser"
              type="checkbox"
              label="Remember me"
              {...formikValues}
            />
            <button type="submit" disabled={formikValues.isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}