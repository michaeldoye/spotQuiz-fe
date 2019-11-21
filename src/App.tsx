import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { userContext } from './context/user.context';
import { useAuth } from './hooks/useAuth';
import Content from './routing/Content';

const App: React.FC = () => {
  const { initializing, user } = useAuth();
  const { Provider } = userContext;

  return (
    <Provider value={{ user, initializing }}>
      <Router>
        <Content />
      </Router>
    </Provider>
  );
};

export default App;
