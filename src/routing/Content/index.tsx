import React from 'react';
import { Switch } from 'react-router-dom';
import { withStore } from '../../context';
import { RoutingEnum } from '../routing.enum';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import LoginPage from '../../pages/Login';
import { LoadingRoute } from '../LoadingRoute/LoadingRoute';

export const Content = withStore((props: any) => {
  return (
    <Switch>
      <LoadingRoute
        exact
        path={RoutingEnum.home}
        component={() => <div>hello world</div>}
      />
      <LoadingRoute path={RoutingEnum.about} component={() => <div>about</div>} />
      <LoadingRoute path={RoutingEnum.login} component={LoginPage} />
      <PrivateRoute
        path={RoutingEnum.private}
        component={() => <div>private</div>}
      />
    </Switch>
  );
});
