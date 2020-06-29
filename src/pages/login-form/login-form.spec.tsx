import React from 'react';
import { render } from '@testing-library/react';

import { LoginForm } from './login-form';

describe('Given LoginForm component', () => {
  describe('when component is mounted', () => {
    it('then it should render empty form elements', () => {
      const { getByTestId } = render(<LoginForm />);

      expect(getByTestId('email').textContent).toEqual('');
      expect(getByTestId('password').textContent).toEqual('');
    });
  });
});