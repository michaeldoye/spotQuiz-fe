import React, { ReactComponentElement } from 'react';
import { useSession } from '../../hooks/useSession';
import { signOut } from '../../auth/auth';
import { useClickOutside } from '../../hooks/useClickOutside';
import { RoutingEnum } from '../../routing/routing.enum';

interface DropdownComponentProps {
  history: any;
}

export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  history
}): ReactComponentElement<any> => {
  const { ref, isComponentVisible, setIsComponentVisible } = useClickOutside(false);
  const user: any = useSession();

  const handleMenuItemClick = (route: RoutingEnum): void => {
    history.push(route);
    setIsComponentVisible(false);
  };

  return (
    <div className="dropdown-component" ref={ref}>
      <button
        className="btn dropdown-toggle text-white"
        data-testid="dropdown-toggle"
        type="button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <span>{user && user.email}</span>
      </button>
      {isComponentVisible && (
        <div className="dropdown-component__menu" data-testid="dropdown-menu">
          <div className="dropdown-component__header">
            <img
              className="dropdown-component__header-avatar"
              src={`https://api.adorable.io/avatars/32/${user && user.email}`}
              width="32"
              alt="avatar"
            />
            <h6 className="dropdown-component__heading">{user && user.email}</h6>
          </div>

          <div className="dropdown-divider">.</div>

          <button
            className="dropdown-item"
            onClick={() => handleMenuItemClick(RoutingEnum.profile)}
          >
            Profile
          </button>
          <button
            className="dropdown-item"
            onClick={() => handleMenuItemClick(RoutingEnum.settings)}
          >
            Settings
          </button>
          <button
            data-testid="logout"
            className="dropdown-item"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
