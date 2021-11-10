import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddItemForm from "./AddItemForm";

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <AddItemForm />
      </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});