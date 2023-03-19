import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Home</a>
        <a href="/about_us">About us</a>
        <a href="/error"></a>
      </header>
    </div>
  );
}

export default App;
