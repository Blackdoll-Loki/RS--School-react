import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about_us">About us</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about_us" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
