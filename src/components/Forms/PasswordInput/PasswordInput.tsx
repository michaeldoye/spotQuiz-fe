import React from 'react';

export interface PasswordInputComponentProps {
  value?: string;
  type?: string;
  onChange?: Function;
  placeholder?: string;
  label: string;
  name: string;
  error: string;
}

export const PasswordInputComponent: React.FC<PasswordInputComponentProps> = ({
  value,
  type,
  label,
  name,
  error,
  placeholder,
  onChange
}) => {
  return (
    <div className="password-input-component">
      <label className="password-input-component__label">
        <span className="password-input-component__label-text">{label}</span>
        <input
          data-test="password"
          className="password-input-component__input"
          name={name}
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          onChange={e => onChange && onChange(e)}
        />
        {error && <small className="line-input-component__error">{error}</small>}
      </label>
    </div>
  );
};
