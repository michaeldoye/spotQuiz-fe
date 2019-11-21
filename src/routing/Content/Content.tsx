import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { RoutingEnum } from '../routing.enum';
import Header from '../../layout/Header/Header';
import PageContainer from '../../layout/PageContainer';
import ModulesPage from '../../pages/Modules/Modules';
import LoginPage from '../../pages/Login';
import HomePage from '../../pages/Home';
import AboutPage from '../../pages/About';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import ProfilePage from '../../pages/Profile';

const Content: React.FC<{}> = () => {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Switch>
          <PublicRoute
            pageTitle="Home"
            exact
            path={RoutingEnum.home}
            component={HomePage}
          />
          <PublicRoute
            pageTitle="About"
            path={RoutingEnum.about}
            component={AboutPage}
          />
          <PublicRoute path={RoutingEnum.login} component={LoginPage} />
          <PrivateRoute
            pageTitle="Profile"
            path={RoutingEnum.profile}
            component={ProfilePage}
          />
          <PrivateRoute
            pageTitle="Modules"
            path={RoutingEnum.modules}
            component={ModulesPage}
          />
        </Switch>
      </PageContainer>
    </Fragment>
  );
};

export default Content;
