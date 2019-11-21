import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PageContainer from './index';

describe('PageContainer Render', () => {
  let wrapper: ShallowWrapper;
  let props: ComponentProps<any>;

  beforeAll(() => {
    props = { title: 'blah', paragraph: 'blah' };
    wrapper = shallow(<PageContainer {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
