import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

test('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Link to="/home">Home</Link>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
