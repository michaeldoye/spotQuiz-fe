import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { LineInputComponent } from './LineInput';

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

  afterAll(() => {
    wrapper.unmount();
  });
});
