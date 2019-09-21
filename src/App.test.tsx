import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

describe('App Render', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders welcome message', () => {
    const welcome = <h2>Welcome to React</h2>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
