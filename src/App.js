/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React, { Component } from 'react';
import CalcApp from './components/Calculator';
import './components/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CalcApp />;
  }
}
