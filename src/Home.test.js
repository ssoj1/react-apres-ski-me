import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";
import { snacks, drinks } from "./_testCommon";

test("renders without crashing", function() {
    render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks} />
        </MemoryRouter>);
  });

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <Home snacks={snacks} drinks={drinks} />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

