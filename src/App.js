import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Body />
      <Dashboard />
    </div>
  );
}

export default App;
