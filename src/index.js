import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import App from './App';
import {AppProvider} from './context';


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <Router>
    <App />
    </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

