import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../displays/Home';

test('Should render correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
