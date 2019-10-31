import React from 'react';

export interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <div className="profile-page">
      <div className="row">
        <div className="col col-4">left</div>
        <div className="col col-8">right</div>
      </div>
    </div>
  );
};
