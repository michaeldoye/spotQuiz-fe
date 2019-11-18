import React from 'react';
import { PageTitleComponent } from '../../components/PageTitle/PageTitle';
import { useHistory } from 'react-router-dom';
import { ProfileMenuComponent } from '../../components/ProfileMenu/ProfileMenu';
import { ProfileSections } from './Sections/ProfileSections';

export interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = () => {
  const history = useHistory();

  return (
    <div className="profile-page">
      <PageTitleComponent text="profile" history={history} hasBackBtn />
      <div className="row">
        <div className="col-sm-4">
          <div className="profile-page__menu-container">
            <ProfileMenuComponent history={history} />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="profile-page__details-container">
            <ProfileSections />
          </div>
        </div>
      </div>
    </div>
  );
};
