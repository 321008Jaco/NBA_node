import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/nav';
import Compare from './components/comp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Compare />
  </React.StrictMode>
);

reportWebVitals();