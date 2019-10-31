import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageContainer } from './layout/PageContainer';
import { Content } from './routing/Content';
import { Header } from './layout/Header/Header';
import { userContext } from './context/user.context';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { initializing, user } = useAuth();

  return (
    <userContext.Provider value={{ user, initializing }}>
      <Router>
        <Header />
        <PageContainer>
          <Content />
        </PageContainer>
      </Router>
    </userContext.Provider>
  );
};

export default App;
