import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Life is/i);
  expect(linkElement).toBeInTheDocument();
});
