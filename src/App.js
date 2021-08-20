/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React, { Component } from 'react';
import CalcApp from './components/Calculator';
import './components/style.css';

export default class App extends Component {
  render() {
    return <CalcApp />;
  }
}
