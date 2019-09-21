import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <h2>Welcome to React</h2>
        <p>
          Edit the <code>src/App.tsx</code> file and save to reload.
        </p>
        <a
          className="App__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
