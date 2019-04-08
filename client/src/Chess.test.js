import React from 'react';
import Chess from './Chess';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const component = renderer.create(<Chess />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
