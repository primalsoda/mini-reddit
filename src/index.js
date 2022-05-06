import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './App/store';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import ROUTES from './App/ROUTES';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass afunction
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learnmore: https://bit.ly/CRA-vitals
reportWebVitals();
