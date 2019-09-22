import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStore } from '../../context';
import { RoutingEnum } from '../routing.enum';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { LoginPage } from '../../Pages/Login';

export const Content = withStore((props: any) => {
  return (
    <Switch>
      <Route
        exact
        path={RoutingEnum.home}
        component={() => <div>hello world</div>}
      />
      <Route path={RoutingEnum.about} component={() => <div>about</div>} />
      <Route path={RoutingEnum.login} component={LoginPage} />
      <PrivateRoute
        path={RoutingEnum.private}
        component={() => <div>private</div>}
      />
    </Switch>
  );
});
