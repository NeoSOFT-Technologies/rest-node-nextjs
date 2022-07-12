import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import store from "../../store/index";
import { Provider } from "react-redux";
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
it("render without crashing Loader", () => {
  render(
    <BrowserRouter>
       <Provider store={store}>
      <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("render without crashing Loader", () => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn(),
  }));
  render(
    <BrowserRouter>
      <Provider store={store}>
      <Header />
      </Provider>
    </BrowserRouter>
  );
  const navDashboard = screen.getByTestId("navbar-dashboard");
  expect(navDashboard ).toBeInTheDocument();
  fireEvent.click(navDashboard);

  const navSettings = screen.getByTestId("navbar-settings");
  expect(navSettings ).toBeInTheDocument();
  fireEvent.click(navSettings);

  const navLogout = screen.getByTestId("navbar-logout");
  expect(navLogout).toBeInTheDocument();
  fireEvent.click(navLogout);
});