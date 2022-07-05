import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import fetch from 'jest-fetch-mock';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
const posts=[{"id":"0","author":"Alejandro Escamilla","width":5616,"height":3744,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5616/3744"}]

describe("App", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("handles errors on dog refresh",  () => {
    render(
      <BrowserRouter>
      <Dashboard posts={posts}/>
     </BrowserRouter>
    );

    expect(screen.getByAltText("Picture of the author")).toBeInTheDocument();

   
    fetch.mockResponseOnce(JSON.stringify({ status: "error" }));

   
  });
  // it("handles initial errors", async () => {
  //   render(
  //     <BrowserRouter>
  //   <Dashboard posts={posts}/>
  //  </BrowserRouter>
  //   );

  //   expect(screen.getByText("Error fetching dog")).toBeInTheDocument();

  //   fetch.mockResponseOnce(
  //     JSON.stringify({ status: "success" })
  //   );

  //   userEvent.click(screen.getByRole("button"));

  //   await screen.findByText("Loading new dog...");

  //   await screen.findByAltText("Picture of the author");
  // });
  it("renders and fetches new dog",  () => {
    render(
      <BrowserRouter>
    <Dashboard posts={posts}/>
   </BrowserRouter>
    );
    expect(screen.getByTestId("author-name")).toBeInTheDocument();

    fetch.mockResponseOnce(
      JSON.stringify({ status: "success"})
    );

    // userEvent.click(screen.getByRole("button"));

    // await screen.findByText("Loading new dog...");
    // await screen.findByAltText("Picture of the author");
  });
});