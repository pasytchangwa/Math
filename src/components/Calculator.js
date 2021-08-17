import React from 'react';
import './style.css';

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
      <div className='wrapper'>
        <span className='operation-result'>{res}</span>
        <section className='main-section'>
          <button type='button' className='left-most'>
            AC
          </button>
          <button type='button' className='left-most'>
            +/-
          </button>
          <button type='button' className='left-most'>
            %
          </button>
          <button type='button' className='right-most'>
            /
          </button>
          <button type='button' className='left-most'>
            7
          </button>
          <button type='button' className='left-most'>
            8
          </button>
          <button type='button' className='left-most'>
            9
          </button>
          <button type='button' className='right-most'>
            x
          </button>
          <button type='button' className='left-most'>
            4
          </button>
          <button type='button' className='left-most'>
            5
          </button>
          <button type='button' className='left-most'>
            6
          </button>
          <button type='button' className='right-most'>
            -
          </button>
          <button type='button' className='left-most'>
            1
          </button>
          <button type='button' className='left-most'>
            2
          </button>
          <button type='button' className='left-most'>
            3
          </button>
          <button type='button' className='right-most'>
            +
          </button>
          <button type='button' className='left-most wider'>
            0
          </button>
          <button type='button' className='left-most'>
            .
          </button>
          <button type='button' className='right-most'>
            =
          </button>
        </section>
      </div>
    );
  }
}
