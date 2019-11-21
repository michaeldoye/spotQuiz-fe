import React from 'react';
import logo from '../../logo.svg';
import { NavLink, useHistory } from 'react-router-dom';
import { RoutingEnum } from '../../routing/routing.enum';
import { useSession } from '../../hooks/useSession';
import DropdownComponent from '../../components/Dropdown';

interface HeaderProps {
  title?: string;
  paragraph?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const user = useSession();
  const history = useHistory();

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />
        <ul className="nav header__left">
          <li className="nav-item">
            <NavLink
              exact
              to={RoutingEnum.home}
              activeClassName="header__nav-active"
              className="header__nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={RoutingEnum.about}
              activeClassName="header__nav-active"
              className="header__nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={RoutingEnum.modules}
              activeClassName="header__nav-active"
              className="header__nav-link"
            >
              Modules
            </NavLink>
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

export default Header;
