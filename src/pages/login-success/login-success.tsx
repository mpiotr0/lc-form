import React from 'react';
import { useHistory } from 'react-router-dom';

import { logoutUser } from '../../services';

export const LoginSuccess = () => {
  let history = useHistory();
  
  const signout = () => {
    logoutUser();
    history.push('/');
  }

  return (
    <div data-testid="login-success">
      Login success
      <button onClick={signout} data-testid="logout">Logout</button>
    </div>
  );
};