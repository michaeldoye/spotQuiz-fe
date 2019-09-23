import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { LoginComponent } from './Login';
import { LineInputComponent } from '../Forms/LineInput/LineInput';

describe('LoginComponent', () => {
  let wrapper: ShallowWrapper;
  let props: ComponentProps<any>;
  let submitSpy: Function;

  beforeEach(() => {
    submitSpy = jest.fn();
    props = { onSubmit: submitSpy };
    wrapper = shallow(<LoginComponent {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('Username Field', () => {
    let userNameProps: ComponentProps<any>;

    beforeEach(() => {
      userNameProps = {
        label: 'Username/Email',
        name: 'username',
        placeholder: 'username',
        type: 'text',
        value: ''
      };
    });

    it('should have a username field', () => {
      expect(wrapper.find(LineInputComponent).at(0).length).toEqual(1);
    });

    it('should have proper props for username field', () => {
      expect(
        wrapper
          .find(LineInputComponent)
          .at(0)
          .props()
      ).toEqual({
        onChange: expect.any(Function),
        ...userNameProps
      });
    });

    it('should set the username value on change event', () => {
      wrapper
        .find(LineInputComponent)
        .at(1)
        .simulate('change', {
          currentTarget: {
            value: 'password'
          }
        });

      expect(
        wrapper
          .find(LineInputComponent)
          .at(1)
          .prop('value')
      ).toEqual('password');
    });
  });

  describe('Password Field', () => {
    let passwordProps: ComponentProps<any>;

    beforeEach(() => {
      passwordProps = {
        label: 'Password',
        name: 'password',
        placeholder: 'Please enter your password',
        type: 'password',
        value: ''
      };
    });

    it('should have a password field', () => {
      expect(wrapper.find(LineInputComponent).at(1).length).toEqual(1);
    });

    it('should have proper props for password field', () => {
      expect(
        wrapper
          .find(LineInputComponent)
          .at(1)
          .props()
      ).toEqual({
        onChange: expect.any(Function),
        ...passwordProps
      });
    });

    it('should set the password value on change event', () => {
      wrapper
        .find(LineInputComponent)
        .at(0)
        .simulate('change', {
          currentTarget: {
            value: 'username'
          }
        });

      expect(
        wrapper
          .find(LineInputComponent)
          .at(0)
          .prop('value')
      ).toEqual('username');
    });
  });

  describe('Submit button', () => {
    it('should have disabled submit button if no username or password', () => {
      const button = wrapper.find('.login-component__submit-button');

      expect(button.prop('disabled')).toBe(true);
    });

    // TODO: submit action
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
