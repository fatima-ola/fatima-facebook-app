import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Route path='/' component={Body} exact />
        <Route path='/dashboard' component={Dashboard} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
