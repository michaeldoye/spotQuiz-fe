import React, { useEffect, Fragment } from 'react';
import { Route, Redirect, BrowserRouterProps, useHistory } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { RoutingEnum } from '../routing.enum';
import { useAuth } from '../../hooks/useAuth';
import { firebaseConfig } from '../../firebase-config';
import nprogress from 'nprogress';
import Loader from '../../components/Loader';
import PageTitleComponent from '../../components/PageTitle';

firebase.initializeApp(firebaseConfig);

interface PrivateRouteProps extends BrowserRouterProps {
  component: React.FC;
  path: string;
  pageTitle?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  pageTitle,
  ...rest
}) => {
  const history = useHistory();
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
    <Fragment>
      {pageTitle && (
        <PageTitleComponent text={pageTitle as string} history={history} />
      )}
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
    </Fragment>
  );
};

export default PrivateRoute;
