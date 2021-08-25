import renderer from 'react-test-renderer';
import React from 'react';
import Quote from '../displays/Quote';

test('Should render correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

