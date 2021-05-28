import React, { useState, useEffect }  from 'react';
import logo from './logo.png';
import HomePage from "./pages/HomePage";
import NewRequest from "./pages/NewRequest";
import Details from "./pages/Details";

import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="main">
      <img src={logo} alt="" width="100" /><br />
     
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/newrequest" component={NewRequest}/>
        <Route path="/requests/:id" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
