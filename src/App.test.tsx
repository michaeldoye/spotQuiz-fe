import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import { PageContainer } from './layout/PageContainer';
import { Content } from './routing/Content';
import { createStore } from './context';
import { events } from './context/events';

const { GlobalStore }: any = createStore({
  initialState: {
    token: 'blah'
  },
  events
});

describe('App Render', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <GlobalStore>
        <Router>
          <Header />
          <PageContainer>
            <Content />
          </PageContainer>
        </Router>
      </GlobalStore>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
