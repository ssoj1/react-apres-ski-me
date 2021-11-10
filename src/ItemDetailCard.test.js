import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ItemDetailCard from "./ItemDetailCard";
import { snacks } from "./_testCommon";

test("renders test-snack without crashing", function() {
    jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue("test-snack"),
    }));

    render(
        <MemoryRouter>
            <ItemDetailCard items={snacks} cantFind="/snacks" />
        </MemoryRouter>);
  });

test("matches snacks snapshot", function () {
    jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue("test-snack"),
    }));

  const { asFragment } = render(
      <MemoryRouter>
        <ItemDetailCard items={snacks} cantFind="/snacks" />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
