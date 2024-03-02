import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/nav';
import Home from './components/home'; // Assuming 'Home' is the name of your Home component file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Home />
  </React.StrictMode>
);

reportWebVitals();

