import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <ErrorBoundary />
    </BrowserRouter>
  );
//   const tryagainBtn = screen.getByTestId("tryagain-btn");
//   expect(tryagainBtn ).toBeInTheDocument();
//   expect(tryagainBtn).toHaveAttribute("type", "button");
//   fireEvent.click(tryagainBtn);
});