import React, { ReactComponentElement } from 'react';

interface ProfileFormComponentProps {}

const ProfileFormComponent: React.FC<
  ProfileFormComponentProps
> = (): ReactComponentElement<any> => {
  return <div className="profile-form-component">Form</div>;
};

export default ProfileFormComponent;
