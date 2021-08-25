import React from 'react';
import renderer from 'react-test-renderer';
import CalcApp from '../components/Calculator';

test('It should render the calculation result', () => {
  const tree = renderer.create(<CalcApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

