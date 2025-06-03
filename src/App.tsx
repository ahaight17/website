import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { Work } from './pages/Work';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/work" element={ <Work /> }/>  
        <Route path="*" element={ <Error /> } />
      </Routes>
    </Router>
  );
}

export default App;
