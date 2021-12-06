import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from 'pages/Home';
import EventGenerator from 'pages/EventGenerator';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/event-generator">
          <EventGenerator />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
