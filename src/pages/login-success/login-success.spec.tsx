import React from 'react';
import { render } from '@testing-library/react';

import { LoginSuccess } from './login-success';

describe('Given LoginSuccess component', () => {
  describe('when component is mounted', () => {
    it('then it should render component', () => {
      const { queryByTestId } = render(<LoginSuccess />);

      expect(queryByTestId('login-success')).not.toBeFalsy();
    });
  });
});