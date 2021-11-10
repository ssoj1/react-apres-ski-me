import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";

test("renders without crashing", function() {
  render(<MemoryRouter><App /></MemoryRouter>);
});