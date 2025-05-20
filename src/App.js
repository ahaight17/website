import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="*" element={ <Error /> } />
      </Routes>
    </Router>
  );
}

export default App;
