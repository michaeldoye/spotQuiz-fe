import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileSections from './Sections';
import ProfileMenuComponent from '../../components/ProfileMenu/ProfileMenu';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const history = useHistory();

  return (
    <div className="profile-page">
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

export default ProfilePage;
