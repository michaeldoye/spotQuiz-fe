import React, { useEffect } from 'react';
import { Route, Redirect, BrowserRouterProps } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { RoutingEnum } from '../routing.enum';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../../components/Loader/Loader';
import { firebaseConfig } from '../../firebase-config';
import nprogress from 'nprogress';

firebase.initializeApp(firebaseConfig);

export interface PrivateRouteProps extends BrowserRouterProps {
  component: React.FC;
  path: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  nprogress.start();

  useEffect(() => {
    nprogress.done();
  });

  const { user, initializing } = useAuth();

  if (initializing) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props: any) =>
        user ? (
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
