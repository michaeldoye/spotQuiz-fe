import React from 'react';
import { Switch } from 'react-router-dom';
import { RoutingEnum } from '../routing.enum';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { LoginPage } from '../../pages/Login/Login';
import { LoadingRoute } from '../LoadingRoute/LoadingRoute';
import { ProfilePage } from '../../pages/Profile/Profile';

export const Content = () => {
  return (
    <Switch>
      <LoadingRoute
        exact
        path={RoutingEnum.home}
        component={() => <div>home</div>}
      />
      <LoadingRoute path={RoutingEnum.about} component={() => <div>about</div>} />
      <LoadingRoute path={RoutingEnum.login} component={LoginPage} />
      <PrivateRoute path={RoutingEnum.profile} component={ProfilePage} />
      <PrivateRoute
        path={RoutingEnum.settings}
        component={() => <div>settings</div>}
      />
      <PrivateRoute
        path={RoutingEnum.private}
        component={() => <div>private</div>}
      />
    </Switch>
  );
};
