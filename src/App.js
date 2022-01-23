import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from 'pages/Home';
import Wordle from 'pages/Wordle';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/wordle">
          <Wordle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
