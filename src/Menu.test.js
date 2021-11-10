import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Menu from "./Menu";
import { snacks, drinks } from "./_testCommon";

test("renders snacks without crashing", function() {
  render(
    <MemoryRouter>
        <Menu items={snacks} type="Snacks" />
    </MemoryRouter>);
});

test("renders drinks without crashing", function() {
    render(
        <MemoryRouter>
            <Menu items={drinks} type="Drinks" />
        </MemoryRouter>);
  });

test("matches snapshot with with snacks", function() {
  const { asFragment } = render(
    <MemoryRouter>
        <Menu items={snacks} type="Snacks" />
    </MemoryRouter>);
    
  expect(asFragment()).toMatchSnapshot();
});