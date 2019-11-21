import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import LineInputComponent from './index';

describe('LineInputComponent Render', () => {
  let wrapper: ShallowWrapper;
  let props: ComponentProps<any>;
  let changeSpy: Function;

  beforeAll(() => {
    changeSpy = jest.fn();
    props = { name: 'test', label: 'test', onChange: changeSpy };
    wrapper = shallow(<LineInputComponent {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should emit onChange when change event fired', () => {
    wrapper.find('input').simulate('change');

    expect(changeSpy).toHaveBeenCalled();
  });

  // TODO: test that value is updated

  afterAll(() => {
    wrapper.unmount();
  });
});
