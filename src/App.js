/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CalcApp from './components/Calculator';
import './components/style.css';
import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Calc from './pages/Calc';
import Quote from './pages/Quote';

const App = () => {
return (
  <Router>
    <div>
     <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calc">Calc</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
     </nav>

      <Switch>
        <Route path="/calc">
          <About />
        </Route>
        <Route path="/quote">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
