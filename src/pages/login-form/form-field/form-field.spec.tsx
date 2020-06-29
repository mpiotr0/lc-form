import React from 'react';
import { Formik } from 'formik';
import { render, RenderResult } from '@testing-library/react';

import { FormField, FormFieldProps, AvailableFieldTypes, ERROR_DATA_TEST_ID } from './form-field';

const fieldType: AvailableFieldTypes = 'email';

const getFormFieldComponent = (props?: Partial<FormFieldProps>): RenderResult => {
  const componentProps: FormFieldProps = {
    label: 'foo',
    type: fieldType,
    name: 'email',
    isSubmitting: false,
    isValidating: false,
    submitCount: 0,
    errors: {},
    touched: {},
    values: {
      email: '',
      password: '',
      rememberUser: false,
    },
    ...props,
  };

  return render(
    <Formik initialValues={{}} onSubmit={jest.fn()}>
      <FormField {...componentProps} />
    </Formik>
  );
}

describe('Given FormField component', () => {
  describe('when component is rendered', () => {
    it('then it should not display error message if field does not contains any and field was not touched', () => {
      const { queryByTestId } = getFormFieldComponent();

      expect(queryByTestId(ERROR_DATA_TEST_ID)).toBeFalsy();
    });

    it('then it should not display error message if field contains error but was not touched', () => {
      const { queryByTestId } = getFormFieldComponent({ errors: { [fieldType]: 'foo error' } });

      expect(queryByTestId(ERROR_DATA_TEST_ID)).toBeFalsy();
    });

    it('then it should not display error message if field does not contains error but was touched', () => {
      const { queryByTestId } = getFormFieldComponent({ touched: { [fieldType]: true } });

      expect(queryByTestId(ERROR_DATA_TEST_ID)).toBeFalsy();
    });
    
    it('then it should display error message', () => {
      const { queryByTestId } = getFormFieldComponent(
        {
          errors: {
            [fieldType]: 'foo error'
          },
          touched: {
            [fieldType]: true,
          },
        },
      );

      expect(queryByTestId(ERROR_DATA_TEST_ID)).not.toBeFalsy();
    });
  });
});