import React from "react";
import ChessSquare from "../ChessSquare";
import "../setupTests";
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";

test("renders without crashing", () => {
  const component = renderer.create(
    <ChessSquare x={1} y={1} position={"A1"} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("expect dark class", () => {
  const light = shallow(<ChessSquare x={1} y={1} position={"A1"} />);
  const dark = shallow(<ChessSquare x={2} y={1} position={"A2"} />);
  expect(light.hasClass("light")).toBe(true);
  expect(dark.hasClass("dark")).toBe(true);
});
