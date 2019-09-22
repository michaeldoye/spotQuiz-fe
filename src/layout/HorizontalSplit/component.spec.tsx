import React, { ComponentProps } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { HorizontalSplit } from './index';

describe('PageContainer Render', () => {
  let wrapper: ShallowWrapper;
  let props: ComponentProps<any>;

  beforeAll(() => {
    props = { leftSide: <div>blah</div>, rightSide: <div>blah</div> };
    wrapper = shallow(<HorizontalSplit {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
