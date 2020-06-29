import React from 'react';
import { useHistory } from 'react-router-dom';

import { logoutUser } from '../../services';
import { Button } from '../../components/button';

export const LoginSuccess = () => {
  let history = useHistory();
  
  const signout = () => {
    logoutUser();
    history.push('/');
  }

  return (
    <div data-testid="login-success">
      <h2>Login success</h2>
      <Button onClick={signout} data-testid="logout">Logout</Button>
    </div>
  );
};