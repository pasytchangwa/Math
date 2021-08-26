import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcApp from './Calculator';

describe('should test buttons of calculator', () => {
  let initial;
  let result;
  beforeEach(() => {
    render(<CalcApp />);
    [result] = screen.getAllByText('0');
    initial = '9';
    fireEvent.click(screen.getByText(initial));
  });
  afterEach(() => {
    fireEvent.click(screen.getByText('AC'));
  });
  it('Tests display after input', () => {
    const operator = '+';
    const nextValue = '6';
    fireEvent.click(screen.getByText(operator));
    fireEvent.click(screen.getByText(nextValue));
    expect(result.textContent).toEqual(initial + operator + nextValue);
  });
 it('Tests addition operation', () => {
   fireEvent.click(screen.getByText('+'));
   fireEvent.click(screen.getByText('6'));
   fireEvent.click(screen.getByText('='));
   expect(result.textContent).toEqual(`${9 + 6}`);
 });
 it('Tests substraction operation', () => {
   fireEvent.click(screen.getByText('-'));
   fireEvent.click(screen.getByText('6'));
   fireEvent.click(screen.getByText('='));
   expect(result.textContent).toEqual(`${9 - 6}`);
 });
 it('Tests division operation', () => {
   fireEvent.click(screen.getByText('÷'));
   fireEvent.click(screen.getByText('6'));
   fireEvent.click(screen.getByText('='));
   expect(result.textContent).toEqual(`${9 / 6}`);
 });
 it('Tests multiplication operation', () => {
   fireEvent.click(screen.getByText('x'));
   fireEvent.click(screen.getByText('6'));
   fireEvent.click(screen.getByText('='));
   expect(result.textContent).toEqual(`${9 * 6}`);
 });
});
