import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { fireEvent } from '@testing-library/dom';

import { LoginComponent } from './Login';
import { LineInputComponent } from '../Forms/LineInput/LineInput';
import { PasswordInputComponent } from '../Forms/PasswordInput/PasswordInput';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

describe('LoginComponent', () => {
  let wrapper: ShallowWrapper;

  describe('Username Field', () => {
    let userNameProps: ComponentProps<any>;
    let usernameField: ShallowWrapper<any>;
    let container: any;

    beforeEach(() => {
      userNameProps = {
        label: 'Email',
        name: 'username',
        placeholder: 'Your Email',
        type: 'text',
        value: '',
        error: ''
      };
      // usernameField = wrapper.find(LineInputComponent);
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      userNameProps = null;
      // usernameField.unmount();
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    it('should have a username field', () => {
      act(() => {
        render(<LineInputComponent {...userNameProps} />, container);
      });

      const usernameInput: any = document.querySelector('[data-test=username]');
      expect(usernameInput).toBeTruthy();
    });

    // TODO: fix test
    it('should have correct props for username field', () => {
      act(() => {
        render(<LineInputComponent {...userNameProps} />, container);
      });

      const usernameInput: any = document.querySelector('[data-test=username]');
      expect(usernameInput.value).toEqual('');
      expect(usernameInput.name).toEqual('username');
    });

    it('should set the username value on change event', () => {
      const changeSpy = jest.fn();

      act(() => {
        render(
          <LineInputComponent {...userNameProps} onChange={changeSpy} />,
          container
        );
      });

      const usernameInput: any = document.querySelector('[data-test=username]');
      expect(usernameInput.value).toBe('');

      act(() => {
        fireEvent.change(usernameInput, { target: { value: 'Test Username' } });
      });

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(usernameInput.value).toBe('Test Username');
    });
  });

  describe('Password Field', () => {
    let passwordProps: ComponentProps<any>;
    let passwordField: ShallowWrapper<any>;
    let container: any;

    beforeEach(() => {
      passwordProps = {
        label: 'Password',
        name: 'password',
        placeholder: 'Please enter your password',
        type: 'password',
        value: '',
        error: ''
      };
      passwordField = wrapper.find(PasswordInputComponent);
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    it('should have a password field', () => {
      expect(passwordField.length).toEqual(1);
    });

    it('should have correct props for password field', () => {
      expect(passwordField.props()).toEqual({
        onChange: expect.any(Function),
        ...passwordProps
      });
    });

    it('should set the password value on change event', () => {
      const changeSpy = jest.fn();
      act(() => {
        render(
          <PasswordInputComponent {...passwordProps} onChange={changeSpy} />,
          container
        );
      });

      const passInput: any = document.querySelector('[data-test=password]');
      expect(passInput.value).toBe('');
      expect(changeSpy).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.change(passInput, { target: { value: 'Test Value' } });
      });

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(passInput.value).toBe('Test Value');
    });

    // TODO: test validation

    afterEach(() => {
      passwordProps = null;
      passwordField.unmount();
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
  });

  describe('Submit button', () => {
    it('should have disabled submit button if no username or password', () => {
      const button = wrapper.find('.login-component__submit-button');

      expect(button.prop('disabled')).toBe(true);
    });
  });

  afterEach(() => {
    // wrapper.unmount();
  });
});
