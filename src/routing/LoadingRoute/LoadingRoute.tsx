import React, { useEffect } from 'react';
import { Route, BrowserRouterProps } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export interface PrivateRouteProps extends BrowserRouterProps {
  component: React.FC;
  path: string;
  exact?: any;
}

export const LoadingRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  nprogress.start();

  useEffect(() => {
    nprogress.done();
  });

  return (
    <Route
      {...rest}
      render={(props: any) => <Component {...props} {...rest} />}
    />
  );
};
