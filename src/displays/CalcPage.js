import React from 'react';
import CalcApp from '../components/Calculator';
import './CalcPage.css';

const Calculate = () => (
  <div className="calc-section">
    <p className="calc-title">Let's do some math!</p>
    <CalcApp />
  </div>
);

export default Calculate;
