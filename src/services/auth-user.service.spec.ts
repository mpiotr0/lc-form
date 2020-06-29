import { LoginFormValues } from '../pages/login-form/login-form.consts';

import {
  AUTH_USER_EMAIL,
  AUTH_USER_PASSWORD,
  authenticateUser,
} from './auth-user.service';

describe('Given authenticateUser service', () => {
  describe('when user provides proper credientials', () => {
    it('then it should return resolved promise', async () => {
      const credientials: LoginFormValues = {
        email: AUTH_USER_EMAIL,
        password: AUTH_USER_PASSWORD,
        rememberUser: true,
      };

      const data = await authenticateUser(credientials);

      expect(data).toEqual('ok');
    });
  });
  describe('when user provides wrong credientials', () => {
    it('then it should return error', async () => {
      const credientials: LoginFormValues = {
        email: 'foo',
        password: 'bar',
        rememberUser: true,
      };

      expect.assertions(1);

      try {
        await authenticateUser(credientials);
      } catch (e) {
        expect(e).toEqual('Bad credientials');
      }
    });
  });
});