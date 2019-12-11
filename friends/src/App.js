import React from 'react';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Auth Friends App</h1>
      <Login />
    </div>
  );
}

export default App;
