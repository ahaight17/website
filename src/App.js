import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from 'pages/Home';
import EventGenerator from 'pages/EventGenerator';
import LightShow from 'pages/LightShow';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/event-generator">
          <EventGenerator />
        </Route>
        <Route path="/">
          <Home />
          {/* <LightShow /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
