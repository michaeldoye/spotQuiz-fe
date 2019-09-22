import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Header } from './Header';

describe('Header Render', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
