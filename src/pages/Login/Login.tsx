import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginComponent } from '../../components/Login/Login';
import { createUserWithEmail, loginWithEmail } from '../../auth/auth';
import { RoutingEnum } from '../../routing/routing.enum';
import { Loader } from '../../components/Loader/Loader';
import { ProfileSectionsEnum } from '../Profile/Sections/ProfileSections.enum';

export interface LoginPageProps {
  username?: string;
  password?: string;
}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginFormSubmit = async (credentials: any) => {
    const { username, password } = credentials;
    const fn = isRegistering ? createUserWithEmail : loginWithEmail;

    try {
      setError('');
      setLoading(true);
      await fn(username.value, password.value);
      history.push(`${RoutingEnum.profile}/${ProfileSectionsEnum.personal}`);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__loader">{loading && <Loader />}</div>

      <div className="login-page__container">
        <h3 className="login-page__heading">
          {isRegistering ? 'Register' : 'Sign In'}
        </h3>

        <LoginComponent
          buttonText={isRegistering ? 'Register' : 'Sign In'}
          onSubmit={handleLoginFormSubmit}
        />

        <div className="login-page__action-toggle">
          <button
            className="btn btn-sm text-muted"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'have an account? Sign In' : 'no account? Register'}
          </button>
        </div>
      </div>

      <div className="login-page__error">{error && <span>{error}</span>}</div>
    </div>
  );
};
