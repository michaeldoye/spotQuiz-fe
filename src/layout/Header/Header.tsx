import React from 'react';
import logo from '../../logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { RoutingEnum } from '../../routing/routing.enum';
import { useSession } from '../../hooks/useSession';
import { DropdownComponent } from '../../components/Dropdown/Dropdown';

export interface HeaderProps {
  title?: string;
  paragraph?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const user = useSession();
  const history = useHistory();

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />
        <ul className="nav header__left">
          <li className="nav-item">
            <Link to={RoutingEnum.home} className={'nav-link text-white'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={RoutingEnum.about} className={'nav-link text-white'}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={RoutingEnum.private} className={'nav-link text-white'}>
              Modules
            </Link>
          </li>
        </ul>
        <ul className="nav header__right">
          <li className="nav-item">
            {user && <DropdownComponent history={history} />}
          </li>
        </ul>
      </div>
    </header>
  );
};
