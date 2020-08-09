import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './components/BasicExample.js';
import ParamsExample from './components/ParamsExample.js';
import Nesting from './components/Nesting.js';
import PreventingTransitionsExample from './components/PreventingTransitionsExample.js';
import Siderbar from './components/Siderbar.js';
import RouterConfig from './components/RouterConfig.js';

function App() {
  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;
