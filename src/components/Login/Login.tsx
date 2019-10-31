import React from 'react';

import { LineInputComponent } from '../Forms/LineInput/LineInput';
import { PasswordInputComponent } from '../Forms/PasswordInput/PasswordInput';
import { useForm } from '../../hooks/useForm';
import { validationStateSchema } from './validation/validation.schema';

interface LoginComponentProps {
  onSubmit?: Function;
  buttonText?: string;
}

interface LoginComponentState {
  username?: InputState;
  password?: InputState;
}

interface InputState {
  value: string;
  error: string;
}

const stateSchema: LoginComponentState = {
  username: { value: '', error: '' },
  password: { value: '', error: '' }
};

export const LoginComponent: React.FC<LoginComponentProps> = ({
  onSubmit,
  buttonText
}) => {
  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmit as Function
  );

  return (
    <div className="login-component">
      <form onSubmit={handleOnSubmit}>
        <LineInputComponent
          label="Email"
          name="username"
          type="text"
          placeholder="Your Email"
          value={state.username.value}
          error={state.username.error}
          onChange={handleOnChange}
        />
        <PasswordInputComponent
          label="Password"
          name="password"
          type="password"
          placeholder="Please enter your password"
          value={state.password.value}
          error={state.password.error}
          onChange={handleOnChange}
        />
        <div className="login-component__button-container">
          <button
            className="login-component__submit-button"
            disabled={disable}
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
