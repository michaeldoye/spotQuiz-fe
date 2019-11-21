import React, { ReactComponentElement } from 'react';
import { MenuItem } from '../../models/menu.model';
import { profileMenu } from '../../constants/ProfileMenuItems';
import IconComponent from '../Icon/Icon';

interface ProfileMenuComponentProps {
  history: any;
}

const ProfileMenuComponent: React.FC<ProfileMenuComponentProps> = ({
  history
}): ReactComponentElement<any> => {
  const { pathname } = history.location;

  return (
    <div className="profile-menu-component">
      <div className="profile-menu-component__list">
        {profileMenu.map((item: MenuItem, idx: number) => (
          <button
            data-testid={`menu-item-${idx}`}
            key={`${item.label}__${idx}`}
            type="button"
            className={`profile-menu-component__list-item ${
              item.link === pathname ? 'active' : ''
            }`}
            disabled={item.disabled || item.link === pathname}
            onClick={() => history.push(item.link)}
          >
            {item.label}
            <span className="profile-menu-component__icon">
              <IconComponent icon={item.icon} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileMenuComponent;
