import React from 'react';

import { LoginComponent } from '../../components/Login/Login';

export interface LoginPageProps {
  username?: string;
  password?: string;
}

const handleLoginSubmit = (...args: any) => {
  console.log(...args);
};

export const LoginPage: React.FC<LoginPageProps> = () => (
  <div className="login">
    <div className="login__container">
      <LoginComponent onSubmit={handleLoginSubmit} />
    </div>
  </div>
);
