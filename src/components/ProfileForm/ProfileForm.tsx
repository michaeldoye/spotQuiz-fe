import React, { ReactComponentElement } from 'react';

interface ProfileFormComponentProps {}

export const ProfileFormComponent: React.FC<
  ProfileFormComponentProps
> = (): ReactComponentElement<any> => {
  return <div className="profile-form-component">Form</div>;
};
