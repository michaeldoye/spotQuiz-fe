import React, { useEffect, Fragment } from 'react';
import { Route, BrowserRouterProps, useHistory } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import PageTitleComponent from '../../components/PageTitle';

interface PrivateRouteProps extends BrowserRouterProps {
  component: React.FC;
  path: string;
  exact?: any;
  pageTitle?: string;
}

const PublicRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  pageTitle,
  ...rest
}) => {
  const history = useHistory();
  nprogress.start();

  useEffect(() => {
    nprogress.done();
  });

  return (
    <Fragment>
      {pageTitle && (
        <PageTitleComponent text={pageTitle as string} history={history} />
      )}
      <Route {...rest} render={(props: any) => <Component {...props} {...rest} />} />
    </Fragment>
  );
};

export default PublicRoute;
