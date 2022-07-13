import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/index";
import Registration from "../../pages/register";
import "../i18n/config";

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
it("render without crashing Registration", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );
});

it("test if input box is present", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );

  const firstNameBox = screen.getByTestId("firstName-input");
  expect(firstNameBox).toBeInTheDocument();
  expect(firstNameBox).toHaveAttribute("type", "text");

  const lastNameBox = screen.getByTestId("lastName-input");
  expect(lastNameBox).toBeInTheDocument();
  expect(lastNameBox).toHaveAttribute("type", "text");

  const userNameBox = screen.getByTestId("userName-input");
  expect(userNameBox).toBeInTheDocument();
  expect(userNameBox).toHaveAttribute("type", "text");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");

  const cnfpasswordBox = screen.getByTestId("Cnfpassword-input");
  expect(cnfpasswordBox).toBeInTheDocument();
  expect(cnfpasswordBox).toHaveAttribute("type", "password");
  
  const submitBtn = screen.getByTestId("submit-input");
  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn ).toHaveAttribute("type", "submit");
  fireEvent.click(submitBtn);

  fireEvent.change(firstNameBox, { target: { value: "deepthi" } });
  fireEvent.change(lastNameBox, { target: { value: "Polsani" } });
  fireEvent.change(userNameBox, { target: { value: "deepthi1" } });
  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });
  fireEvent.change(cnfpasswordBox, { target: { value: "3" } });

  fireEvent.click(submitBtn);


});

it("render without crashing button", () => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn(),
  }));
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByTestId("signin-button");
    expect(loginBtn ).toBeInTheDocument();
    expect(loginBtn ).toHaveAttribute("type", "button");
    fireEvent.click(loginBtn);
  });