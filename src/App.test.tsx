import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import { PageContainer } from './layout/PageContainer';
import { Content } from './routing/Content';

describe('App Render', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Router>
        <Header />
        <PageContainer>
          <Content />
        </PageContainer>
      </Router>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
