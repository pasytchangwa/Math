/* eslint-disable no-unused-expressions */
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import App from './App';
import Home from './displays/Home';

beforeEach(() => render(<App />));

test('Checks if the title is available on home page', () => {
  const { queryAllByTitle } = render(<Home />);
  const title = queryAllByTitle('Welcome');
  expect(title).toBeTruthy();
});

test('does not render the calculator page', () => {
  expect(() => screen.getByText(/Let us do some math!/i)).toThrowError();
});

test('Should do math operations', async () => {
  const calculator = screen.queryByTitle('calculator');
  fireEvent.click(calculator);

  await waitFor(() => {
    screen.getByText('Let us do some math!');
  });

  fireEvent.click(screen.getByText('1'));
  await waitFor(() => {
    screen.getByText('1', { selector: '.input', exact: true });
  });
  fireEvent.click(screen.getByText('+'));

  fireEvent.click(screen.getByText('2'));
  await waitFor(() => {
    screen.getByText('2', { selector: '.input', exact: true });
  });

  fireEvent.click(screen.getByText('='));
  await waitFor(() => {
    screen.getByText('3', { selector: '.input', exact: true });
  });

  expect(screen.getByText(/3/, { selector: '.input', exact: true })).toBeInTheDocument;
});
