import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../../routing/PrivateRoute/PrivateRoute';
import { RoutingEnum } from '../../../routing/routing.enum';
import { ProfileFormComponent } from '../../../components/ProfileForm/ProfileForm';
import { ProfileSectionsEnum } from './ProfileSections.enum';

export const ProfileSections = () => {
  return (
    <Switch>
      <PrivateRoute
        path={`${RoutingEnum.profile}/${ProfileSectionsEnum.personal}`}
        component={ProfileFormComponent}
      />
      <PrivateRoute
        path={`${RoutingEnum.profile}/${ProfileSectionsEnum.settings}`}
        component={() => <div>settings</div>}
      />
      <PrivateRoute
        path={`${RoutingEnum.profile}/${ProfileSectionsEnum.modules}`}
        component={() => <div>modules</div>}
      />
      <PrivateRoute
        path={`${RoutingEnum.profile}/${ProfileSectionsEnum.progress}`}
        component={() => <div>progress</div>}
      />
    </Switch>
  );
};
