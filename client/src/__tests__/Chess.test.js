import React from 'react';
import * as axios from "axios";
import Chess from '../Chess';
import ChessSquare from '../ChessSquare';
import "../setupTests";
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
jest.mock("axios");

test('renders without crashing', () => {
  const component = renderer.create(<Chess />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('expect highlight component', () => {
  const table = mount(<Chess />);
  table.setState({ active: "A1" })
  expect(table.find('.highlight')).toHaveLength(1)
});

test('expect states state', () => {
  const table = shallow(<Chess />);
  axios.post.mockImplementation(() => Promise.resolve(
    jest.fn(table.setState({
      active: "A1", firstMovements: ['B3', 'C2'],
      secondMovements:["E1","E3","A1","A3","D4","B4","D2","D4","C1","C5","A1","A5"]
    }))
  ));
  const square = shallow(<ChessSquare position="A1" x="1" y="1"
  onActiveSquare={jest.fn()} />);

  square.simulate('click');
  expect(table.state().active).toEqual("A1");
  expect(table.state().firstMovements).toEqual(["B3", "C2"]);
  expect(table.state().secondMovements).toEqual(
    ["E1","E3","A1","A3","D4","B4","D2","D4","C1","C5","A1","A5"]
  );
});
