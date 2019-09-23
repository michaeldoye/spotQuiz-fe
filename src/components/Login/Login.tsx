import React, { SetStateAction, useState } from 'react';
import { LineInputComponent } from '../Forms/LineInput/LineInput';

interface LoginComponentProps {
  onSubmit?: Function;
}

interface LoginComponentState {
  username?: string;
  password?: string;
}

export const LoginComponent: React.FC<LoginComponentProps> = ({ onSubmit }) => {
  const initialState: LoginComponentState = { username: '', password: '' };
  const [user, setUser] = useState(initialState);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit && onSubmit(user);
  };

  const handleUsernameChange = (event: any) => {
    const userCredentials: SetStateAction<LoginComponentState> = {
      username: event.currentTarget.value,
      password: user.password
    };
    setUser(userCredentials);
  };

  const handlePasswordChange = (event: any) => {
    const userCredentials: SetStateAction<LoginComponentState> = {
      username: user.username,
      password: event.currentTarget.value
    };
    setUser(userCredentials);
  };

  return (
    <div className="login-component">
      <form onSubmit={e => handleSubmit(e)}>
        <LineInputComponent
          label="Username/Email"
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={(e: any) => handleUsernameChange(e)}
        />
        <LineInputComponent
          label="Password"
          name="password"
          type="password"
          value={user.password}
          placeholder="Please enter your password"
          onChange={(e: any) => handlePasswordChange(e)}
        />
        <div className="login-component__button-container">
          <button
            className="login-component__submit-button"
            disabled={!user.username || !user.password}
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
