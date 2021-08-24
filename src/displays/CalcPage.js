import React from 'react';
import CalcApp from '../components/Calculator';
import './CalcPage.css';

const CalcPage = () => (
  <div className="calc-section">
    <h2 className="calc-title">E=MC2</h2>
    <CalcApp />
  </div>
);

export default CalcPage;
