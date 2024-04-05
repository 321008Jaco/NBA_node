import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/home';
import Compare from './pages/compare';
import Timeline from './pages/timeline';
import Footer from './components/footer';
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
