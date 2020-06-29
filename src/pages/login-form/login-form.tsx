import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik';

import { LoginFormValues, formInitialValues } from './login-form.consts';
import { loginFormSchema } from './login-form.schema';

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
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email Address</label>
            <input name="email" type="email" placeholder="Type email address" />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Type password" />
            <label htmlFor="rememberUser">Remember me</label>
            <input name="rememberUser" type="checkbox" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}