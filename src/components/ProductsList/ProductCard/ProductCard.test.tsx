import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductCard from "./ProductCard";

const row = {
  id: 12,
  name: "name",
  year: 2012,
  color: "color",
  pantone_value: "pantone_value",
};

test("render searchbar", async () => {
  const { getByText } = render(<ProductCard row={row} />);
  expect(getByText(12)).toBeInTheDocument();
  expect(getByText('name')).toBeInTheDocument();
  expect(getByText(2012)).toBeInTheDocument();
});
