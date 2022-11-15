import { cleanup, render } from "@testing-library/react";
import React from "react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
  cleanup();
});
