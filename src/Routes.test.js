import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router";
import { snacks, drinks } from "./_testCommon";

  

test("renders without crashing", function () {
  render(
      <MemoryRouter>
          <Routes snacks={snacks} drinks={drinks} />
      </MemoryRouter>,
  );
});

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <Routes snacks={snacks} drinks={drinks} />
      </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});