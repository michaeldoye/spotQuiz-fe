import React from 'react';

import { LoginComponent } from '../../components/Login/Login';

export interface LoginPageProps {
  username?: string;
  password?: string;
}

const handleLoginSubmit = (...args: any) => {
  console.log(...args);
};

const LoginPage: React.FC<LoginPageProps> = () => (
  <div className="login-page">
    <div className="login-page__container">
      <h3 className="login-page__heading">Please Sign In</h3>

      <LoginComponent onSubmit={handleLoginSubmit} />
    </div>
  </div>
);

export default LoginPage;
