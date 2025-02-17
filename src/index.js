import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
