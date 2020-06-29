import { LoginFormValues } from '../pages/login-form/login-form.consts';

export const AUTH_USER_EMAIL = 'test@test.pl';
export const AUTH_USER_PASSWORD = 'Password1';
export const AUTH_USER_KEY = 'userAuthenticated';

export const authenticateUser = (userData: LoginFormValues): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = userData.email === AUTH_USER_EMAIL && userData.password === AUTH_USER_PASSWORD;

      if (!isSuccess) {
        return reject('Bad credientials');
      }

      localStorage.setItem(AUTH_USER_KEY, 'true');
      return resolve('ok');
    }, Math.random() * 2000);
  });
}

export const logoutUser = (): void => {
  localStorage.removeItem(AUTH_USER_KEY);
}