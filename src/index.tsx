import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import * as serviceWorker from './serviceWorker';
import { AuthUserRoute } from './components/auth-user-route';
import { LoginForm } from './pages/login-form';
import { LoginSuccess } from './pages/login-success';
import styles from './index.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Switch>
          <AuthUserRoute exact path="/">
            <LoginSuccess />
          </AuthUserRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
          <AuthUserRoute path="/login-success">
            <LoginSuccess />
          </AuthUserRoute>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();