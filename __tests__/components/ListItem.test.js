import React from "react";
import renderer from "react-test-renderer";
import ListItem from "../../src/components/ListItem";

describe("ListItem:", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<ListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
