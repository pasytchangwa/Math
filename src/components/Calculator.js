import React, { Component } from 'react';
import './style.css';
import calculate from '../logic/calculator';

export default class CalcApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  showSolution = () => {
    const { total, next, operation } = this.state;
    const show = (total || '') + (operation || '') + (next || '');

    return (show || '0');
  };

  render() {
    return (
      <div className="wrapper">
        <span className="operation-result">{this.showSolution()}</span>
        <section className="main-section">
          <button
            name="AC"
            type="button"
            className="left-most cell1"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            AC
          </button>
          <button
            name="+/-"
            type="button"
            className="left-most cell2"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            +/-
          </button>
          <button
            name="%"
            type="button"
            className="left-most cell3"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            %
          </button>
          <button
            name="/"
            type="button"
            className="right-most cell4"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            /
          </button>
          <button
            name="7"
            type="button"
            className="left-most cell5"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            7
          </button>
          <button
            name="8"
            type="button"
            className="left-most cell6"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            8
          </button>
          <button
            name="9"
            type="button"
            className="left-most cell7"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            9
          </button>
          <button
            name="x"
            type="button"
            className="right-most cell8"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            x
          </button>
          <button
            name="4"
            type="button"
            className="left-most cell9"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            4
          </button>
          <button
            name="5"
            type="button"
            className="left-most cell10"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            5
          </button>
          <button
            name="6"
            type="button"
            className="left-most cell11"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            6
          </button>
          <button
            name="-"
            type="button"
            className="right-most cell12"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            -
          </button>
          <button
            name="1"
            type="button"
            className="left-most cell13"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            1
          </button>
          <button
            name="2"
            type="button"
            className="left-most cell14"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            2
          </button>
          <button
            name="3"
            type="button"
            className="left-most cell15"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            3
          </button>
          <button
            name="+"
            type="button"
            className="right-most cell16"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            +
          </button>
          <button
            name="0"
            type="button"
            className="left-most cell17"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            0
          </button>
          <button
            name="."
            type="button"
            className="left-most cell18"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            .
          </button>
          <button
            name="="
            type="button"
            className="right-most cell19"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            =
          </button>
        </section>
      </div>
    );
  }
}
