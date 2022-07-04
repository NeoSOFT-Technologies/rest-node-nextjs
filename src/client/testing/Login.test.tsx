import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/index";

import Login from "../../pages/index";
import "../i18n/config";

it("render without crashing Loginpage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
});
it("render the input fields", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const userNameBox = screen.getByTestId("userName-input");
  expect(userNameBox).toBeInTheDocument();
  expect(userNameBox).toHaveAttribute("type", "text");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");

  const registerBtn = screen.getByTestId("signup-button");
  expect(registerBtn).toBeInTheDocument();
  expect(registerBtn).toHaveAttribute("type", "button");


  const loginBtn = screen.getByTestId("signin-button");
  expect(loginBtn ).toBeInTheDocument();
  expect(loginBtn ).toHaveAttribute("type", "submit");
  fireEvent.click(loginBtn);

  

  fireEvent.change(userNameBox, { target: { value: "deepthi123" } });

  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });


  
  fireEvent.click(loginBtn);

});