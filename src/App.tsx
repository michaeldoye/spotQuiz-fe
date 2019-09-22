import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { PageContainer } from './layout/PageContainer';
import { createStore } from './context';
import { load, SPQ_SESSION_STORAGE } from './helpers/session-storage';
import { events } from './context/events';
import { Content } from './routing/Content';
import { Header } from './layout/Header/Header';

const App: React.FC = () => {
  const { GlobalStore }: any = createStore({
    initialState: {
      token: load(SPQ_SESSION_STORAGE.TOKEN, false)
      // application: load(SPQ_SESSION_STORAGE.APPLICATION)
    },
    events
  });

  return (
    <GlobalStore>
      <Router>
        <Header />
        <PageContainer>
          <Content />
        </PageContainer>
      </Router>
    </GlobalStore>
  );
};

export default App;
