/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CalcApp from './components/Calculator';
import './components/style.css';
import './App.css';
import Nav from './Nav';
import Home from './sub-component/Home';
import CalcPage from './sub-component/Calc';
import Quote from './sub-component/Quote';

const App = () => {
return (
  <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/calculator">
        <CalcPage />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);
}

export default App;
