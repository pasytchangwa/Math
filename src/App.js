/* eslint-disable max-classes-per-file, react/prefer-stateless-function */
import React from 'react';
import CalcApp from './components/Calculator';
import './components/style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return <CalcApp />;
  }
}
