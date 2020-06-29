import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import * as serviceWorker from './serviceWorker';
import { LoginForm } from './pages/login-form';
import { LoginSuccess } from './pages/login-success';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/login-success">
            <LoginSuccess />
          </Route>
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