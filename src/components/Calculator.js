import React from 'react';
import './style.css';
import calculate from '../logic/calculator';

export default class CalcApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      res: 0,
    };
  }

  render() {
    const { res } = this.state;
    return (
      <div className="wrapper">
        <span className="operation-result">{res}</span>
        <section className="main-section">
          <button type="button" className="left-most cell1">
            AC
          </button>
          <button type="button" className="left-most cell2">
            +/-
          </button>
          <button type="button" className="left-most cell3">
            %
          </button>
          <button type="button" className="right-most cell4">
            /
          </button>
          <button type="button" className="left-most cell5">
            7
          </button>
          <button type="button" className="left-most cell6">
            8
          </button>
          <button type="button" className="left-most cell7">
            9
          </button>
          <button type="button" className="right-most cell8">
            x
          </button>
          <button type="button" className="left-most cell9">
            4
          </button>
          <button type="button" className="left-most cell10">
            5
          </button>
          <button type="button" className="left-most cell11">
            6
          </button>
          <button type="button" className="right-most cell12">
            -
          </button>
          <button type="button" className="left-most cell13">
            1
          </button>
          <button type="button" className="left-most cell14">
            2
          </button>
          <button type="button" className="left-most cell15">
            3
          </button>
          <button type="button" className="right-most cell16">
            +
          </button>
          <button type="button" className="left-most cell17">
            0
          </button>
          <button type="button" className="left-most cell18">
            .
          </button>
          <button type="button" className="right-most cell19">
            =
          </button>
        </section>
      </div>
    );
  }
}
