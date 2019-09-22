import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { RoutingEnum } from '../../routing/routing.enum';

export interface HeaderProps {
  title?: string;
  paragraph?: string;
}

export const Header: React.FC<HeaderProps> = () => (
  <header className="header">
    <div className="header__container">
      <img src={logo} className="header__logo" alt="logo" />
      <ul className="nav">
        <li className="nav-item">
          <Link to={RoutingEnum.home} className={'nav-link text-white'}>
            home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={RoutingEnum.about} className={'nav-link text-white'}>
            about
          </Link>
        </li>
        <li className="nav-item">
          <Link to={RoutingEnum.private} className={'nav-link text-white'}>
            protected
          </Link>
        </li>
      </ul>
    </div>
  </header>
);
