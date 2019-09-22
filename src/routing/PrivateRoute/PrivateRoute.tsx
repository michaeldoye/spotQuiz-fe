import React from 'react';
import { Route, Redirect, BrowserRouterProps } from 'react-router-dom';

import { RoutingEnum } from '../routing.enum';

export interface PrivateRouteProps extends BrowserRouterProps {
  component: React.FC;
  path: string;
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: RoutingEnum.login,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
