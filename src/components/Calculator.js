import React, { useState } from 'react';
import './style.css';
import calculate from '../logic/calculator';

const CalcApp = () => {
  const [state, setState] = useState({});

  const handleClick = (ev) => {
    setState({ ...state, ...calculate(state, ev.target.name) });
  };

  const { total, next, operation } = state;
  const show = (total || '') + (operation || '') + (next || '');

  return (
    <div className="wrapper">
      <span className="operation-result">{show}</span>
      <section className="main-section">
        <button
          name="AC"
          type="button"
          className="left-most cell1"
          onClick={handleClick}
        >
          AC
        </button>
        <button
          name="+/-"
          type="button"
          className="left-most cell2"
          onClick={handleClick}
        >
          +/-
        </button>
        <button
          name="%"
          type="button"
          className="left-most cell3"
          onClick={handleClick}
        >
          %
        </button>
        <button
          name="&#247;"
          type="button"
          className="right-most cell4"
          onClick={handleClick}
        >
          &#247;
        </button>
        <button
          name="7"
          type="button"
          className="left-most cell5"
          onClick={handleClick}
        >
          7
        </button>
        <button
          name="8"
          type="button"
          className="left-most cell6"
          onClick={handleClick}
        >
          8
        </button>
        <button
          name="9"
          type="button"
          className="left-most cell7"
          onClick={handleClick}
        >
          9
        </button>
        <button
          name="x"
          type="button"
          className="right-most cell8"
          onClick={handleClick}
        >
          x
        </button>
        <button
          name="4"
          type="button"
          className="left-most cell9"
          onClick={handleClick}
        >
          4
        </button>
        <button
          name="5"
          type="button"
          className="left-most cell10"
          onClick={handleClick}
        >
          5
        </button>
        <button
          name="6"
          type="button"
          className="left-most cell11"
          onClick={handleClick}
        >
          6
        </button>
        <button
          name="-"
          type="button"
          className="right-most cell12"
          onClick={handleClick}
        >
          -
        </button>
        <button
          name="1"
          type="button"
          className="left-most cell13"
          onClick={handleClick}
        >
          1
        </button>
        <button
          name="2"
          type="button"
          className="left-most cell14"
          onClick={handleClick}
        >
          2
        </button>
        <button
          name="3"
          type="button"
          className="left-most cell15"
          onClick={handleClick}
        >
          3
        </button>
        <button
          name="+"
          type="button"
          className="right-most cell16"
          onClick={handleClick}
        >
          +
        </button>
        <button
          name="0"
          type="button"
          className="left-most cell17"
          onClick={handleClick}
        >
          0
        </button>
        <button
          name="."
          type="button"
          className="left-most cell18"
          onClick={handleClick}
        >
          .
        </button>
        <button
          name="="
          type="button"
          className="right-most cell19"
          onClick={handleClick}
        >
          =
        </button>
      </section>
    </div>
  );
}

export default CalcApp;
