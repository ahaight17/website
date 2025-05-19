import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </Router>
  );
}

export default App;
