import React, { ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { AUTH_USER_KEY } from '../../services/auth-user.service';

type AuthUserRouteProps = RouteProps & {
  children: ReactNode,
};

export const AuthUserRoute = ({ children, ...routeProps }: AuthUserRouteProps) => {
  const isAuthenticated: boolean = Boolean(localStorage.getItem(AUTH_USER_KEY));

  return (
    (
      <Route
        {...routeProps}
        render={
          ({ location }) => isAuthenticated ?
            children : <Redirect to="/login" />
        }
      />
    )
  )
}