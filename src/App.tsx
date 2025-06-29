import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { WorkOverview } from './pages/work/WorkOverview';
import { ProjectGallery } from './pages/work/ProjectGallery';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/work" element={ <WorkOverview /> }/>
        <Route path="/work/:projectName" element={<ProjectGallery />} /> 
        <Route path="*" element={ <Error /> } />
      </Routes>
    </Router>
  );
}

export default App;
