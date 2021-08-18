import React from 'react';
import './style.css';
import calculate from '../logic/calculator';

export default class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  showSolution = () => {
    const { total, next, operation } = this.state;
    const solution = (total || '') + (next || '') + (operation || '');

    return (solution || '');
  };

  render() {
    return (
      <div className="wrapper">
        <span className="operation-result">{this.showSolution()}</span>
        <section className="main-section">
          <button
            type="button"
            className="left-most cell1"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            AC
          </button>
          <button
            type="button"
            className="left-most cell2"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            +/-
          </button>
          <button
            type="button"
            className="left-most cell3"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            %
          </button>
          <button
            type="button"
            className="right-most cell4"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            /
          </button>
          <button
            type="button"
            className="left-most cell5"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            7
          </button>
          <button
            type="button"
            className="left-most cell6"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            8
          </button>
          <button
            type="button"
            className="left-most cell7"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            9
          </button>
          <button
            type="button"
            className="right-most cell8"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            x
          </button>
          <button
            type="button"
            className="left-most cell9"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            4
          </button>
          <button
            type="button"
            className="left-most cell10"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            5
          </button>
          <button
            type="button"
            className="left-most cell11"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            6
          </button>
          <button
            type="button"
            className="right-most cell12"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            -
          </button>
          <button
            type="button"
            className="left-most cell13"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            1
          </button>
          <button
            type="button"
            className="left-most cell14"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            2
          </button>
          <button
            type="button"
            className="left-most cell15"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            3
          </button>
          <button
            type="button"
            className="right-most cell16"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            +
          </button>
          <button
            type="button"
            className="left-most cell17"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            0
          </button>
          <button
            type="button"
            className="left-most cell18"
            onClick={(ev) => this.handleClick(ev.target.name)}
          >
            .
          </button>
          <button
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
