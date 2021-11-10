import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavBar from "./NavBar";

test("renders without crashing", function () {
  render(
      <MemoryRouter>
          <NavBar />
      </MemoryRouter>,
  );
});

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <NavBar />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

