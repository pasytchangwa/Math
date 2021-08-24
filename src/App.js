/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './displays/Home';
import Calculate from './displays/CalcPage';
import Quote from './displays/Quote';
import './components/style.css';

const App = () => {
return (
  <Router>
    <Switch>
      <div>
        <Nav />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/calculate">
          <Calculate />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </div>
    </Switch>
  </Router>
);
}

export default App;
