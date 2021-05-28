import React, { useState, useEffect }  from 'react';
import logo from './logo.png';
import HomePage from "./pages/HomePage";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="main">
      <img src={logo} alt="" width="100" /><br />
     
      <Switch>
        <Route exact path="/" component={HomePage} />
        
      </Switch>
    </div>
  );
}

export default App;
