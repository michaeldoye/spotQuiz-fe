import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PasswordInputComponent from './index';

describe('PasswordInputComponent Render', () => {
  let wrapper: ShallowWrapper;
  let props: ComponentProps<any>;
  let changeSpy: Function;

  beforeAll(() => {
    changeSpy = jest.fn();
    props = { name: 'test', label: 'test', onChange: changeSpy };
    wrapper = shallow(<PasswordInputComponent {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should emit onChange when change event triggered', () => {
    wrapper.find('input').simulate('change');

    expect(changeSpy).toHaveBeenCalled();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
