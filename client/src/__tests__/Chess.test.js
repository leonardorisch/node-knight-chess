import React from 'react';
import Chess from '../Chess';
import ChessSquare from '../ChessSquare';
import "../setupTests";
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const component = renderer.create(<Chess />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('expect active state', () => {
  const table = shallow(<Chess />);
  const square = shallow(<ChessSquare position="A1" x="1" y="1"
  onActiveSquare={() => { table.setState({ active: "A1" })} } />);

  square.simulate('click');
  expect(table.state().active).toEqual("A1");
});

test('expect highlight component', () => {
  const table = mount(<Chess />);
  table.setState({ active: "A1" })
  expect(table.find('.highlight')).toHaveLength(1)
});
