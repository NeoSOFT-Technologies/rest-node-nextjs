import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";

it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});