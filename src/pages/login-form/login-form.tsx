import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, FormikState, FormikHelpers } from 'formik';

import { authenticateUser } from '../../services';
import { LoginFormValues, formInitialValues } from './login-form.consts';
import { loginFormSchema } from './login-form.schema';
import { FormField } from './form-field';

export const LoginForm = () => {
  let history = useHistory();
  const [hasAuthError, setHasAuthError] = useState<boolean>(false); 

  const handleSubmit = async (values: LoginFormValues, helpers: FormikHelpers<LoginFormValues>): Promise<void> => {
    helpers.setSubmitting(true);
    setHasAuthError(false);

    authenticateUser(values)
      .then(() => {
        helpers.setSubmitting(false);
        history.push('/login-success');
      })
      .catch(() => {
        helpers.setSubmitting(false);
        setHasAuthError(true);
      });
  }

  return (
    <>
      <h1>Please sign in</h1>
      {hasAuthError && (
        <div>Provided email and/or password are not valid</div>
      )}
      <Formik
        initialValues={formInitialValues}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
      >
        {(formikValues: FormikState<LoginFormValues>) => (
          <Form>
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
            <button
              type="submit"
              disabled={formikValues.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}