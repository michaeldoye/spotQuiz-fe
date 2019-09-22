import React from 'react';

export interface LineInputComponentProps {
  value?: string;
  type?: string;
  onChange?: Function;
  placeholder?: string;
  label: string;
  name: string;
}

export const LineInputComponent: React.FC<LineInputComponentProps> = ({
  value,
  type,
  label,
  name,
  placeholder,
  onChange
}) => {
  return (
    <div className="line-input-component">
      <label className="line-input-component__label">
        <span className="line-input-component__label-text">{label}</span>
        <input
          className="line-input-component__input"
          name={name}
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          onChange={e => onChange && onChange(e)}
        />
      </label>
    </div>
  );
};
